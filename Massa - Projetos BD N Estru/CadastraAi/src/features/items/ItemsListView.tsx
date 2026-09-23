import React, { useState } from 'react';
import { Plus, Database, FileJson, Calendar, Eye, X, Pencil, Trash2, Copy, CheckCircle2, Code } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Item } from '../../types';
import { RegistrationModal } from './RegistrationModal';

interface ItemsListViewProps {
  items: Item[];
  onAddItem: (item: Omit<Item, 'id' | 'createdAt'>) => void;
  onEditItem: (item: Item) => void;
  onDeleteItem: (id: string) => void;
}

export const ItemsListView: React.FC<ItemsListViewProps> = ({ items, onAddItem, onEditItem, onDeleteItem }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDbModalOpen, setIsDbModalOpen] = useState(false);
  const [viewItem, setViewItem] = useState<Item | null>(null);
  const [editItem, setEditItem] = useState<Item | null>(null);
  const [itemToDelete, setItemToDelete] = useState<string | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [copiedAll, setCopiedAll] = useState(false);
  const [copiedDb, setCopiedDb] = useState(false);

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleCopyAll = () => {
    if (!viewItem) return;
    const dataToCopy = {
      id: viewItem.id,
      title: viewItem.title,
      createdAt: viewItem.createdAt,
      ...viewItem.fields.reduce((acc, field) => ({ ...acc, [field.key]: field.value }), {})
    };
    navigator.clipboard.writeText(JSON.stringify(dataToCopy, null, 2));
    setCopiedAll(true);
    setTimeout(() => setCopiedAll(false), 2000);
  };

  const handleCopyDb = () => {
    const dbData = items.map(item => {
      const flatItem: any = {
        id: item.id,
        title: item.title,
        createdAt: item.createdAt,
      };
      item.fields.forEach(f => {
        if (f.key) flatItem[f.key] = f.value;
      });
      return flatItem;
    });
    
    const finalData = { items: dbData };
    
    navigator.clipboard.writeText(JSON.stringify(finalData, null, 2));
    setCopiedDb(true);
    setTimeout(() => setCopiedDb(false), 2000);
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-800 tracking-tight">Catálogo de Itens</h1>
          <p className="text-sm text-slate-500 mt-1 font-medium">
            Gerencie documentos sem esquema fixo, cadastre o que precise e como queira.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsDbModalOpen(true)}
            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-slate-800 hover:bg-slate-900 text-white text-sm font-semibold rounded-lg shadow-sm transition-colors cursor-pointer"
          >
            <Code className="w-4 h-4 text-emerald-400" />
            Visualizar Banco
          </button>
          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg shadow-sm transition-colors cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            Cadastrar Item
          </button>
        </div>
      </div>

      {/* Table Card */}
      <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                <th className="w-[40%] px-6 py-4">Título do Documento</th>
                <th className="w-[20%] px-6 py-4">Campos Dinâmicos</th>
                <th className="w-[30%] px-6 py-4">Data de Criação</th>
                <th className="w-[10%] px-6 py-4 text-center">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {items.length === 0 ? (
                <tr>
                  <td colSpan={4} className="px-6 py-12 text-center text-slate-500">
                    <Database className="w-8 h-8 mx-auto text-slate-300 mb-3" />
                    <p className="text-sm">Nenhum item cadastrado ainda.</p>
                    <p className="text-xs text-slate-400 mt-1">Clique em "Cadastrar Item" para começar.</p>
                  </td>
                </tr>
              ) : (
                items.map(item => (
                  <tr
                    key={item.id}
                    className="hover:bg-slate-50/50 transition-colors group cursor-pointer"
                    onClick={() => setViewItem(item)}
                  >
                    <td className="px-6 py-4 align-middle">
                      <div className="flex min-w-0 items-center gap-3">
                        <div className="shrink-0 bg-emerald-50 text-emerald-600 p-2 rounded-lg border border-emerald-100">
                          <FileJson className="w-4 h-4" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-sm font-semibold text-slate-800 group-hover:text-blue-600 transition-colors">
                            {item.title}
                          </p>
                          <p className="text-xs text-slate-500 mt-0.5 font-mono">
                            ID: {item.id.slice(0, 8)}...
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 align-middle">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-medium border border-slate-200">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                        {item.fields.length} {item.fields.length === 1 ? 'campo' : 'campos'}
                      </span>
                    </td>
                    <td className="px-6 py-4 align-middle">
                      <div className="flex items-center gap-1.5 text-sm text-slate-600">
                        <Calendar className="w-4 h-4 text-slate-400" />
                        {new Date(item.createdAt).toLocaleDateString('pt-BR', {
                          day: '2-digit',
                          month: 'long',
                          year: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit'
                        })}
                      </div>
                    </td>
                    <td className="px-6 py-4 align-middle text-center">
                      <div className="flex items-center justify-center">
                        <button
                          className="p-1.5 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors cursor-pointer"
                          title="Visualizar"
                          onClick={(e) => {
                            e.stopPropagation();
                            setViewItem(item);
                          }}
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      <RegistrationModal
        isOpen={isModalOpen || !!editItem}
        initialData={editItem}
        onClose={() => {
          setIsModalOpen(false);
          setEditItem(null);
        }}
        onSave={(itemData) => {
          if (editItem) {
            onEditItem({ ...editItem, ...itemData });
          } else {
            onAddItem(itemData);
          }
        }}
      />

      {/* Simple View Modal */}
      <AnimatePresence>
        {viewItem && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-0">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm" 
              onClick={() => setViewItem(null)} 
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
            >
              <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50 shrink-0">
              <h2 className="text-xl font-bold text-slate-800 tracking-tight">{viewItem.title}</h2>
              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => {
                    setEditItem(viewItem);
                    setViewItem(null);
                  }}
                  className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-colors cursor-pointer"
                  title="Editar"
                >
                  <Pencil className="w-4 h-4" />
                </button>
                <button
                  onClick={() => {
                    setItemToDelete(viewItem.id);
                  }}
                  className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-full transition-colors cursor-pointer"
                  title="Excluir"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
                <div className="w-px h-5 bg-slate-300 mx-1"></div>
                <button
                  onClick={() => setViewItem(null)}
                  className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-200 rounded-full transition-colors cursor-pointer"
                  title="Fechar"
                >
                  <X className="w-5 h-5 text-slate-500" />
                </button>
              </div>
            </div>
            <div className="flex-1 overflow-y-auto p-6 bg-slate-50">
              <div className="space-y-4">
                {/* Meta data card */}
                <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm">
                  <h3 className="text-sm font-semibold text-slate-800 mb-4 border-b border-slate-100 pb-2">Informações do Documento</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-xs text-slate-500 mb-1">ID do Documento</p>
                      <p className="w-full text-sm font-mono text-slate-700 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100">{viewItem.id}</p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 mb-1">Data de Criação</p>
                      <p className="w-full text-sm text-slate-700 inline-flex items-center gap-2 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100">
                        <Calendar className="w-4 h-4 text-slate-400" />
                        {new Date(viewItem.createdAt).toLocaleString('pt-BR')}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Dynamic Fields card */}
                <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm">
                  <div className="flex items-center justify-between mb-4 border-b border-slate-100 pb-2">
                    <div className="flex items-center gap-2">
                      <Database className="w-4 h-4 text-blue-500" />
                      <h3 className="text-sm font-semibold text-slate-800">Campos Dinâmicos</h3>
                    </div>
                    <button
                      onClick={handleCopyAll}
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500 hover:text-blue-600 transition-colors cursor-pointer bg-slate-100 hover:bg-blue-50 px-2.5 py-1.5 rounded-md"
                    >
                      {copiedAll ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                      {copiedAll ? 'Copiado!' : 'Copiar Tudo'}
                    </button>
                  </div>

                  {viewItem.fields.length > 0 ? (
                    <div className="space-y-3">
                      {viewItem.fields.map((field) => (
                        <div key={field.id} className="flex flex-col sm:flex-row sm:items-center py-2 border-b border-slate-50 last:border-0 last:pb-0 group relative">
                          <span className="w-full sm:w-1/3 text-sm font-medium text-slate-600 mb-1 sm:mb-0">{field.key || '(Sem chave)'}</span>
                          <div className="w-full sm:w-2/3 flex items-center justify-between bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100 relative">
                            <span className="text-sm text-slate-800 break-all pr-8 font-medium leading-relaxed">{field.value || '(Sem valor)'}</span>
                            <button
                              onClick={() => handleCopy(field.value, field.id)}
                              className="absolute right-2 opacity-0 group-hover:opacity-100 transition-opacity p-1.5 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-md cursor-pointer flex-shrink-0"
                              title="Copiar valor"
                            >
                              {copiedId === field.id ? <CheckCircle2 className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center py-4 text-slate-500">
                      <FileJson className="w-8 h-8 text-slate-300 mb-2" />
                      <p className="text-sm italic">Nenhum campo dinâmico cadastrado.</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>

      {/* Delete Confirmation Modal */}
      <AnimatePresence>
        {itemToDelete && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-0">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm" 
              onClick={() => setItemToDelete(null)} 
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="relative w-full max-w-sm bg-white rounded-2xl shadow-2xl overflow-hidden"
            >
              <div className="p-6 text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trash2 className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Excluir Item?</h3>
              <p className="text-sm text-slate-500 mb-8">
                Tem certeza que deseja excluir este item? Esta ação não poderá ser desfeita.
              </p>
              <div className="flex gap-3 justify-center">
                <button
                  onClick={() => setItemToDelete(null)}
                  className="flex-1 px-4 py-2.5 bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 font-semibold rounded-xl transition-colors cursor-pointer"
                >
                  Cancelar
                </button>
                <button
                  onClick={() => {
                    onDeleteItem(itemToDelete);
                    setItemToDelete(null);
                    if (viewItem?.id === itemToDelete) {
                      setViewItem(null);
                    }
                  }}
                  className="flex-1 px-4 py-2.5 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-xl shadow-sm transition-colors cursor-pointer"
                >
                  Sim, Excluir
                </button>
              </div>
            </div>
          </motion.div>
        </div>
        )}
      </AnimatePresence>

      {/* Database JSON View Drawer */}
      <AnimatePresence>
        {isDbModalOpen && (
          <div className="fixed inset-0 z-[300] flex justify-end">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm" 
              onClick={() => setIsDbModalOpen(false)} 
            />
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="relative w-full max-w-2xl bg-slate-900 h-full shadow-2xl flex flex-col border-l border-slate-700"
            >
              <div className="px-6 py-4 border-b border-slate-800 flex items-center justify-between shrink-0 bg-slate-900/50">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-emerald-500/10 rounded-lg">
                    <Database className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-slate-100 tracking-tight">Collection: items</h2>
                    <p className="text-xs text-slate-400 font-mono">{items.length} document(s) in local state</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleCopyDb}
                    className="p-2 text-slate-400 hover:text-emerald-400 hover:bg-slate-800 rounded-full transition-colors cursor-pointer flex items-center gap-2"
                    title="Copiar JSON"
                  >
                    {copiedDb ? (
                      <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                    ) : (
                      <Copy className="w-5 h-5" />
                    )}
                  </button>
                  <button
                    onClick={() => setIsDbModalOpen(false)}
                    className="p-2 text-slate-400 hover:text-slate-200 hover:bg-slate-800 rounded-full transition-colors cursor-pointer"
                    title="Fechar"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>
              <div className="flex-1 overflow-y-auto p-6 bg-[#0d1117]">
                <pre className="text-sm font-mono text-emerald-300">
                  <code>
                    {JSON.stringify(
                      {
                        items: items.map(item => {
                          const flatItem: any = {
                            id: item.id,
                            title: item.title,
                            createdAt: item.createdAt,
                          };
                          item.fields.forEach(f => {
                            if (f.key) flatItem[f.key] = f.value;
                          });
                          return flatItem;
                        })
                      }, 
                      null, 2
                    )}
                  </code>
                </pre>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
