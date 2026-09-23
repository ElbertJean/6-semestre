import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X, Plus, Trash2, Save } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Item, ItemField } from '../../types';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (item: Omit<Item, 'id' | 'createdAt'>) => void;
  initialData?: Item | null;
}

export const RegistrationModal: React.FC<RegistrationModalProps> = ({ isOpen, onClose, onSave, initialData }) => {
  const [title, setTitle] = useState('');
  const [fields, setFields] = useState<ItemField[]>([]);

  useEffect(() => {
    if (isOpen) {
      if (initialData) {
        setTitle(initialData.title);
        setFields(initialData.fields.length > 0 ? initialData.fields : [{ id: crypto.randomUUID(), key: '', value: '' }]);
      } else {
        setTitle('');
        setFields([{ id: crypto.randomUUID(), key: '', value: '' }]);
      }
    }
  }, [isOpen, initialData]);

  const handleAddField = () => {
    setFields([...fields, { id: crypto.randomUUID(), key: '', value: '' }]);
  };

  const handleRemoveField = (id: string) => {
    setFields(fields.filter(f => f.id !== id));
  };

  const handleFieldChange = (id: string, field: 'key' | 'value', value: string) => {
    setFields(fields.map(f => f.id === id ? { ...f, [field]: value } : f));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) {
      alert('O título é obrigatório!');
      return;
    }
    
    // Filter out completely empty fields (both key and value empty)
    const validFields = fields.filter(f => f.key.trim() !== '' || f.value.trim() !== '');

    onSave({
      title: title.trim(),
      fields: validFields
    });
    onClose();
  };

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-0">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm" 
            onClick={onClose} 
          />
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
          >
        
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50 shrink-0">
          <h2 className="text-xl font-bold text-slate-800 tracking-tight">
            {initialData ? 'Editar Item' : 'Cadastrar Novo Item'}
          </h2>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-200 rounded-full transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          <form id="registration-form" onSubmit={handleSubmit} className="space-y-6">
            
            <div className="space-y-2">
              <label htmlFor="title" className="block text-sm font-semibold text-slate-700">
                Título do Item
              </label>
              <input
                id="title"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Ex: Usuário, Produto, Configuração..."
                className="w-full px-4 py-2.5 bg-white border border-slate-300 rounded-lg text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder:text-slate-400"
              />
            </div>

            <div className="space-y-4 pt-2">
              <div className="flex items-center justify-between">
                <label className="block text-sm font-semibold text-slate-700">
                  Campos (Chave / Valor)
                </label>
                <span className="text-xs text-slate-500 font-medium px-2 py-1 bg-slate-100 rounded-md">
                  NoSQL Schema
                </span>
              </div>
              
              <div className="space-y-3">
                {fields.map((field, index) => (
                  <div key={field.id} className="flex items-start gap-3 group">
                    <div className="flex-1 space-y-1">
                      <input
                        type="text"
                        value={field.key}
                        onChange={(e) => handleFieldChange(field.id, 'key', e.target.value)}
                        placeholder="Chave (Ex: nome)"
                        className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-mono placeholder:font-sans"
                      />
                    </div>
                    <div className="flex-1 space-y-1">
                      <input
                        type="text"
                        value={field.value}
                        onChange={(e) => handleFieldChange(field.id, 'value', e.target.value)}
                        placeholder="Valor (Ex: João Silva)"
                        className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                      />
                    </div>
                    <button
                      type="button"
                      onClick={() => handleRemoveField(field.id)}
                      disabled={fields.length === 1 && field.key === '' && field.value === ''}
                      className="p-2.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed shrink-0"
                      title="Remover campo"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>

              <button
                type="button"
                onClick={handleAddField}
                className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-slate-50 hover:bg-slate-100 border border-dashed border-slate-300 hover:border-slate-400 text-slate-600 hover:text-slate-800 text-sm font-semibold rounded-lg transition-colors w-full mt-2 cursor-pointer"
              >
                <Plus className="w-4 h-4" />
                Adicionar Campo
              </button>
            </div>

          </form>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-slate-100 bg-slate-50 shrink-0 flex justify-end gap-3">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2.5 bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 text-sm font-semibold rounded-lg transition-colors cursor-pointer"
          >
            Cancelar
          </button>
          <button
            type="submit"
            form="registration-form"
            className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg shadow-sm transition-colors cursor-pointer"
          >
            <Save className="w-4 h-4" />
            Salvar
          </button>
        </div>

      </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
};
