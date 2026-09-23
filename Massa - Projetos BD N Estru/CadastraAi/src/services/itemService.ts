import { api } from './api';
import type { Item, ItemField } from '../types';

// Helper to convert Flat JSON from backend -> React Item state
const mapToFrontend = (data: any): Item => {
  const { id, title, createdAt, ...dynamicFields } = data;
  
  const fields: ItemField[] = Object.entries(dynamicFields).map(([key, value]) => ({
    id: crypto.randomUUID(),
    key,
    value: String(value)
  }));

  return { id, title, createdAt, fields };
};

// Helper to convert React Item state -> Flat JSON for backend
const mapToBackend = (item: Omit<Item, 'id' | 'createdAt'> | Item): any => {
  const flatData: any = {
    title: item.title,
  };
  
  if ('createdAt' in item) {
    flatData.createdAt = item.createdAt;
  }

  // Inject all dynamic fields as root properties
  item.fields.forEach(field => {
    if (field.key.trim()) {
      flatData[field.key.trim()] = field.value;
    }
  });

  return flatData;
};

export const itemService = {
  // Fetch all items
  getItems: async (): Promise<Item[]> => {
    const response = await api.get('items/');
    return response.data.map(mapToFrontend);
  },

  // Create a new item
  createItem: async (newItem: Omit<Item, 'id' | 'createdAt'>): Promise<Item> => {
    const payload = mapToBackend(newItem);
    const response = await api.post('items/', payload);
    return mapToFrontend(response.data);
  },

  // Update an existing item
  updateItem: async (id: string, updatedItem: Item): Promise<Item> => {
    const payload = mapToBackend(updatedItem);
    const response = await api.put(`items/${id}/`, payload);
    return mapToFrontend(response.data);
  },

  // Delete an item
  deleteItem: async (id: string): Promise<void> => {
    await api.delete(`items/${id}/`);
  }
};
