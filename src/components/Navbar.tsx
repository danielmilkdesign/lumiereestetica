import React, { useState } from 'react';
import { ShoppingBag, Menu, X, Calendar } from 'lucide-react';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onBookClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ cartCount, onOpenCart, onBookClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#E8DCD1]/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        {/* Zone 1: Single text element wordmark (Frontend Design Constitution Top Bar Contract) */}
        <a href="#inicio" className="group flex flex-col tracking-[0.22em] text-[#1E1713] no-underline">
          <span className="font-display text-2xl sm:text-3xl font-semibold tracking-[0.24em] group-hover:text-[#B88A58] transition-colors">
            LUMIÈRE
          </span>
          <span className="text-[9px] font-semibold tracking-[0.3em] text-[#8A6136] uppercase">
            Haute Beauté & Esthétique
          </span>
        </a>

        {/* Zone 2: 4-6 clean text navigation links */}
        <nav className="hidden lg:flex items-center gap-7 text-xs font-semibold tracking-wider uppercase text-[#61564D]">
          <a href="#inicio" className="hover:text-[#B88A58] transition-colors py-1">Início</a>
          <a href="#categorias" className="hover:text-[#B88A58] transition-colors py-1">Categorias</a>
          <a href="#quiz" className="hover:text-[#B88A58] transition-colors py-1 flex items-center gap-1.5 text-[#B88A58]">
            <span className="text-[10px]">✦</span> Diagnóstico 3D
          </a>
          <a href="#tratamentos" className="hover:text-[#B88A58] transition-colors py-1">Procedimentos</a>
          <a href="#antes-depois" className="hover:text-[#B88A58] transition-colors py-1">Antes & Depois</a>
          <a href="#combo" className="hover:text-[#B88A58] transition-colors py-1">Monte seu Pacote</a>
          <a href="#avaliacoes" className="hover:text-[#B88A58] transition-colors py-1">Avaliações</a>
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-3">
          {/* Shopping Bag / Spa Cart Button */}
          <button
            type="button"
            onClick={onOpenCart}
            aria-label="Ver sacola de procedimentos"
            className="relative p-2.5 rounded-full hover:bg-[#EFE6DD] text-[#1E1713] transition-colors cursor-pointer"
          >
            <ShoppingBag className="w-5 h-5 text-[#1E1713]" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#B88A58] text-white text-[11px] font-bold flex items-center justify-center shadow-md animate-pulse">
                {cartCount}
              </span>
            )}
          </button>

          {/* Primary Action Button */}
          <button
            type="button"
            onClick={onBookClick}
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#B88A58] hover:bg-[#8A6136] text-white transition-all shadow-[0_4px_16px_rgba(184,138,88,0.25)] hover:shadow-[0_6px_22px_rgba(138,97,54,0.35)] cursor-pointer"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Agendar Avaliação</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Abrir menu"
            className="lg:hidden p-2 rounded-lg text-[#1E1713] hover:bg-[#EFE6DD] transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF7F2] border-b border-[#E8DCD1] px-6 py-5 shadow-xl animate-in slide-in-from-top duration-300">
          <nav className="flex flex-col gap-4 text-sm font-medium text-[#1E1713]">
            <a
              href="#inicio"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 border-b border-[#E8DCD1]/50"
            >
              Início
            </a>
            <a
              href="#categorias"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 border-b border-[#E8DCD1]/50 text-[#B88A58] font-semibold"
            >
              Categorias (Vídeos Exclusivos)
            </a>
            <a
              href="#quiz"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 border-b border-[#E8DCD1]/50 text-[#8A6136] font-semibold flex items-center justify-between"
            >
              <span>✦ Diagnóstico Dérmico 3D</span>
              <span className="text-xs text-[#8A6136]">30s</span>
            </a>
            <a
              href="#tratamentos"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 border-b border-[#E8DCD1]/50"
            >
              Procedimentos & Tecnologia
            </a>
            <a
              href="#antes-depois"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 border-b border-[#E8DCD1]/50"
            >
              Resultados Antes & Depois
            </a>
            <a
              href="#combo"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 border-b border-[#E8DCD1]/50 flex items-center justify-between"
            >
              <span>Monte seu Day Spa</span>
              <span className="text-xs bg-[#B88A58]/15 text-[#8A6136] px-2 py-0.5 rounded-full font-bold">
                -10% VIP
              </span>
            </a>
            <a
              href="#avaliacoes"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 border-b border-[#E8DCD1]/50"
            >
              Avaliações Verificadas
            </a>
            <a
              href="#duvidas"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 border-b border-[#E8DCD1]/50"
            >
              Dúvidas Frequentes
            </a>

            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onBookClick();
              }}
              className="w-full mt-2 py-3 rounded-full bg-[#B88A58] text-white text-xs font-bold tracking-wider uppercase flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              Agendar Avaliação Agora
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};
