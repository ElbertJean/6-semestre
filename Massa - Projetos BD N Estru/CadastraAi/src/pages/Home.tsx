import React, { useState, useEffect } from 'react';
import { Header } from '../components/layout/Header';
import { ItemsListView } from '../features/items/ItemsListView';
import { itemService } from '../services/itemService';
import type { Item } from '../types';
import topoPattern from '../assets/topo-pattern.png';

export function Home() {
  const [items, setItems] = useState<Item[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch initial items
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const data = await itemService.getItems();
        setItems(data);
      } catch (err) {
        console.error('Error fetching items:', err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchItems();
  }, []);

  const handleAddItem = async (newItem: Omit<Item, 'id' | 'createdAt'>) => {
    try {
      const createdItem = await itemService.createItem(newItem);
      setItems([createdItem, ...items]);
    } catch (err) {
      console.error('Error adding item:', err);
    }
  };

  const handleEditItem = async (updatedItem: Item) => {
    try {
      const itemFromServer = await itemService.updateItem(updatedItem.id, updatedItem);
      setItems(items.map(item => item.id === itemFromServer.id ? itemFromServer : item));
    } catch (err) {
      console.error('Error updating item:', err);
    }
  };

  const handleDeleteItem = async (id: string) => {
    try {
      await itemService.deleteItem(id);
      setItems(items.filter(item => item.id !== id));
    } catch (err) {
      console.error('Error deleting item:', err);
    }
  };

  return (
    <div className="h-screen flex flex-col bg-slate-50 font-sans selection:bg-blue-200 selection:text-blue-900 relative">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.15]"
        style={{
          backgroundImage: `url(${topoPattern})`,
          backgroundRepeat: 'repeat',
          backgroundPosition: 'center top'
        }}
      />

      <div className="relative z-10 flex flex-col h-full">
        <Header />
        <main className="flex-1 overflow-y-auto p-6 lg:p-8">
          <div className="max-w-7xl mx-auto w-full h-full">
            <ItemsListView
              items={items}
              onAddItem={handleAddItem}
              onEditItem={handleEditItem}
              onDeleteItem={handleDeleteItem}
            />
          </div>
        </main>
      </div>
    </div>
  );
}
