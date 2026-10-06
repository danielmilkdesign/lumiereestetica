import React from 'react';
import { TREATMENTS_DATA, TreatmentItem } from '../data/treatments';
import { Check, Clock, Sparkles, Send } from 'lucide-react';

interface SpaDayCalculatorProps {
  selectedItems: TreatmentItem[];
  onToggleItem: (item: TreatmentItem) => void;
  onSendWhatsApp: () => void;
}

export const SpaDayCalculator: React.FC<SpaDayCalculatorProps> = ({
  selectedItems,
  onToggleItem,
  onSendWhatsApp,
}) => {
  const isSelected = (id: string) => selectedItems.some((i) => i.id === id);

  const subtotal = selectedItems.reduce((acc, curr) => acc + curr.price, 0);
  const totalMinutes = selectedItems.reduce((acc, curr) => acc + curr.durationMinutes, 0);
  const hasDiscount = selectedItems.length >= 2;
  const discountAmount = hasDiscount ? Math.round(subtotal * 0.1) : 0;
  const finalTotal = subtotal - discountAmount;

  return (
    <section id="combo" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-[#8A6136] mb-3 block">
            Personalização Completa
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#1E1713] mb-4">
            Monte seu protocolo ou <em className="italic font-normal text-[#B88A58]">Day Spa.</em>
          </h2>
          <p className="text-sm sm:text-base text-[#61564D] leading-relaxed">
            Selecione dois ou mais procedimentos para criar um pacote sob medida e ganhe automaticamente{' '}
            <strong className="text-[#8A6136] font-semibold">10% de cortesia VIP</strong> no valor total.
          </p>
        </div>

        {/* Builder Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Treatment Checkable List (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-3.5">
            {TREATMENTS_DATA.map((treatment) => {
              const active = isSelected(treatment.id);
              return (
                <div
                  key={treatment.id}
                  onClick={() => onToggleItem(treatment)}
                  className={`p-4 sm:p-5 rounded-2xl border transition-all cursor-pointer flex items-center justify-between gap-4 ${
                    active
                      ? 'border-[#B88A58] bg-[#FAF7F2] shadow-sm ring-1 ring-[#B88A58]'
                      : 'border-[#E8DCD1] bg-[#FCFAF7] hover:bg-white hover:border-[#B88A58]/50'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-6 h-6 rounded-md border flex items-center justify-center transition-colors ${
                        active
                          ? 'bg-[#B88A58] border-[#B88A58] text-white'
                          : 'border-[#A69B91] bg-white text-transparent'
                      }`}
                    >
                      <Check className="w-4 h-4 stroke-[3]" />
                    </div>

                    <div>
                      <strong className="block text-sm sm:text-base font-semibold text-[#1E1713]">
                        {treatment.name}
                      </strong>
                      <span className="block text-xs text-[#95897F] mt-0.5 line-clamp-1">
                        {treatment.description}
                      </span>
                    </div>
                  </div>

                  <div className="text-right shrink-0">
                    <span className="block text-sm sm:text-base font-bold font-display text-[#8A6136]">
                      {treatment.priceFormatted}
                    </span>
                    <span className="block text-[11px] text-[#95897F]">
                      {treatment.duration}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Receipt / Summary Card (5 cols) */}
          <div className="lg:col-span-5 bg-[#1E1713] text-white rounded-3xl p-6 sm:p-8 shadow-[0_20px_50px_rgba(30,23,19,0.18)] sticky top-28">
            <div className="border-b border-white/10 pb-5 mb-5">
              <h3 className="font-display text-2xl font-semibold text-white mb-1">
                Resumo do seu Pacote
              </h3>
              <p className="text-xs text-[#A69B91] flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#E3CDBC]" />
                <span>
                  Tempo estimado: {totalMinutes > 0 ? `${totalMinutes} min de experiência` : 'Selecione seus cuidados'}
                </span>
              </p>
            </div>

            {/* Selected Items List */}
            <div className="min-h-[100px] flex flex-col gap-2.5 mb-6">
              {selectedItems.length === 0 ? (
                <div className="text-xs text-[#A69B91] py-4 text-center italic">
                  Nenhum procedimento selecionado ainda. Clique nos tratamentos ao lado para montar seu Day Spa.
                </div>
              ) : (
                selectedItems.map((item) => (
                  <div key={item.id} className="flex justify-between items-center text-xs text-[#E8DCD1]">
                    <span>{item.name}</span>
                    <strong className="font-semibold text-white">{item.priceFormatted}</strong>
                  </div>
                ))
              )}
            </div>

            {/* VIP Discount Perk Badge */}
            {hasDiscount && (
              <div className="inline-flex items-center gap-2 bg-[#287B5B]/25 border border-[#287B5B]/50 text-[#6EE7B7] px-3.5 py-1.5 rounded-full text-xs font-semibold mb-6">
                <Sparkles className="w-3.5 h-3.5" />
                <span>10% Cortesia VIP Aplicada (-R$ {discountAmount})</span>
              </div>
            )}

            {/* Total Box */}
            <div className="border-t border-white/10 pt-5 flex items-baseline justify-between mb-6">
              <span className="text-xs uppercase tracking-wider text-[#A69B91]">
                Investimento Total
              </span>
              <div className="text-right">
                {hasDiscount && (
                  <span className="text-xs text-[#A69B91] line-through mr-2">
                    R$ {subtotal}
                  </span>
                )}
                <span className="font-display text-2xl sm:text-3xl font-bold text-white">
                  R$ {finalTotal}
                </span>
              </div>
            </div>

            {/* CTA Button */}
            <button
              type="button"
              disabled={selectedItems.length === 0}
              onClick={onSendWhatsApp}
              className={`w-full py-3.5 rounded-full text-xs font-bold tracking-wider uppercase flex items-center justify-center gap-2 cursor-pointer transition-all ${
                selectedItems.length > 0
                  ? 'bg-[#B88A58] hover:bg-[#8A6136] text-white shadow-[0_4px_20px_rgba(184,138,88,0.4)]'
                  : 'bg-white/10 text-white/40 cursor-not-allowed'
              }`}
            >
              <Send className="w-4 h-4" />
              <span>Solicitar Este Combo no WhatsApp</span>
            </button>
            <span className="block text-[11px] text-[#A69B91] text-center mt-3">
              Sem cobrança antecipada. Disponibilidade checada em tempo real.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
