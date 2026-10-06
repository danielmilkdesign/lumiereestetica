import React from 'react';
import { TreatmentItem } from '../data/treatments';
import { X, Trash2, Clock, Sparkles, Send, ShoppingBag } from 'lucide-react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: TreatmentItem[];
  onRemoveItem: (id: string) => void;
  onClear: () => void;
  onSendWhatsApp: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onRemoveItem,
  onClear,
  onSendWhatsApp,
}) => {
  if (!isOpen) return null;

  const subtotal = items.reduce((acc, curr) => acc + curr.price, 0);
  const totalMinutes = items.reduce((acc, curr) => acc + curr.durationMinutes, 0);
  const hasDiscount = items.length >= 2;
  const discountAmount = hasDiscount ? Math.round(subtotal * 0.1) : 0;
  const finalTotal = subtotal - discountAmount;

  return (
    <div
      role="dialog"
      aria-modal="true"
      onClick={onClose}
      className="fixed inset-0 z-50 bg-[#140F0D]/60 backdrop-blur-sm flex justify-end animate-in fade-in duration-200"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white w-full max-w-md h-full shadow-2xl flex flex-col justify-between animate-in slide-in-from-right duration-300"
      >
        {/* Drawer Header */}
        <div className="p-6 border-b border-[#E8DCD1] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <ShoppingBag className="w-5 h-5 text-[#B88A58]" />
            <h3 className="font-display text-2xl font-semibold text-[#1E1713]">
              Sacola de Procedimentos
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Fechar sacola"
            className="w-8 h-8 rounded-full bg-[#FAF7F2] hover:bg-[#EFE6DD] flex items-center justify-center text-[#1E1713] transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Drawer Items List */}
        <div className="flex-1 p-6 overflow-y-auto flex flex-col gap-4">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center text-[#95897F] p-8">
              <ShoppingBag className="w-12 h-12 text-[#E8DCD1] mb-3" />
              <strong className="block text-base font-semibold text-[#1E1713] mb-1">
                Sua sacola está vazia
              </strong>
              <p className="text-xs text-[#61564D] max-w-xs">
                Navegue pelas categorias e procedimentos para adicionar tratamentos ao seu pacote VIP.
              </p>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={item.id}
                className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E8DCD1] flex items-center justify-between gap-3"
              >
                <div>
                  <strong className="block text-sm font-semibold text-[#1E1713]">
                    {item.name}
                  </strong>
                  <div className="flex items-center gap-2 text-xs text-[#8A6136] mt-0.5">
                    <span>{item.priceFormatted}</span>
                    <span>·</span>
                    <span className="flex items-center gap-0.5 text-[#95897F]">
                      <Clock className="w-3 h-3" />
                      {item.duration}
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => onRemoveItem(item.id)}
                  aria-label={`Remover ${item.name}`}
                  className="p-2 text-[#95897F] hover:text-red-600 transition-colors cursor-pointer"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Drawer Footer */}
        {items.length > 0 && (
          <div className="p-6 bg-[#FAF7F2] border-t border-[#E8DCD1] flex flex-col gap-4">
            {/* VIP Discount Announcement */}
            {hasDiscount ? (
              <div className="bg-[#287B5B]/15 border border-[#287B5B]/30 text-[#287B5B] px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center justify-between">
                <span className="flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  10% Desconto Cortesia VIP
                </span>
                <span>-R$ {discountAmount}</span>
              </div>
            ) : (
              <div className="text-[11px] text-[#8A6136] bg-[#B88A58]/10 p-2.5 rounded-xl text-center">
                Adicione mais 1 procedimento para desbloquear <strong>10% de desconto VIP</strong>!
              </div>
            )}

            {/* Calculations */}
            <div className="space-y-1.5 text-xs text-[#61564D]">
              <div className="flex justify-between">
                <span>Duração total estimada:</span>
                <span className="font-semibold text-[#1E1713]">{totalMinutes} minutos</span>
              </div>
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span>R$ {subtotal}</span>
              </div>
              <div className="flex justify-between pt-2 border-t border-[#E8DCD1] text-base font-bold text-[#1E1713]">
                <span>Total:</span>
                <span className="font-display text-2xl text-[#8A6136]">R$ {finalTotal}</span>
              </div>
            </div>

            {/* Checkout via WhatsApp */}
            <button
              type="button"
              onClick={onSendWhatsApp}
              className="w-full py-4 rounded-full bg-[#B88A58] hover:bg-[#8A6136] text-white text-xs font-bold tracking-wider uppercase flex items-center justify-center gap-2 shadow-lg transition-all cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>Concluir Agendamento no WhatsApp</span>
            </button>

            <button
              type="button"
              onClick={onClear}
              className="text-[11px] text-[#95897F] hover:text-[#1E1713] text-center transition-colors cursor-pointer"
            >
              Limpar sacola
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
