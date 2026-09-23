import React from 'react';
import logoImage from '../../assets/logo.jpg';

export const Header: React.FC = () => {
  return (
    <header className="h-20 bg-white/80 border-b border-slate-200 flex items-center justify-between px-12 shrink-0 z-10">
      <div className="flex items-center">
        <div className="p-1.5 rounded-lg">
          <img src={logoImage} alt="Logo CadastrAi" className="w-16 h-16 object-cover rounded-md" />
        </div>
        <div>
          <h1 className="font-bold text-slate-800 text-lg leading-tight">CadastrAi</h1>
          <p className="text-xs text-slate-500 font-medium">Sem regras. Cadastre o que precisar!</p>
        </div>
      </div>
      <div className="flex items-center">
        <span className="text-sm font-medium text-slate-700 hidden sm:block">Atividade - MongoDB na prática</span>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-slate-100 border border-slate-200 rounded-full flex items-center justify-center text-sm font-semibold text-slate-600">
            FM
          </div>
          <span className="text-sm font-medium text-slate-700 hidden sm:block">Profº Fernando Massanori</span>
        </div>
      </div>
    </header>
  );
};
