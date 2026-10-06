import React from 'react';
import { TreatmentItem } from '../data/treatments';
import { X, Clock, Check, Sparkles, ShieldCheck } from 'lucide-react';

interface ClinicalModalProps {
  treatment: TreatmentItem | null;
  onClose: () => void;
  onBookTreatment: (treatmentName: string) => void;
  onAddToCart: (treatment: TreatmentItem) => void;
}

export const ClinicalModal: React.FC<ClinicalModalProps> = ({
  treatment,
  onClose,
  onBookTreatment,
  onAddToCart,
}) => {
  if (!treatment) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      onClick={onClose}
      className="fixed inset-0 z-50 bg-[#140F0D]/75 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative border border-[#E8DCD1] animate-in zoom-in-95 duration-300"
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Fechar ficha clínica"
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-[#FAF7F2] text-[#1E1713] hover:bg-[#EFE6DD] flex items-center justify-center transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Tag */}
        <span className="inline-block bg-[#1E1713]/85 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
          {treatment.tag} · Ficha Clínica
        </span>

        {/* Title */}
        <h3 className="font-display text-2xl sm:text-3xl font-semibold text-[#1E1713] mb-2 leading-tight">
          {treatment.name}
        </h3>

        {/* Meta */}
        <div className="flex items-center gap-3 text-xs font-semibold text-[#8A6136] mb-6">
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            {treatment.duration}
          </span>
          <span>·</span>
          <span>{treatment.priceFormatted}</span>
          <span>·</span>
          <span className="flex items-center gap-1 text-[#287B5B]">
            <ShieldCheck className="w-3.5 h-3.5" />
            Aprovado Anvisa
          </span>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-4 text-xs sm:text-sm text-[#61564D] leading-relaxed mb-6 max-h-[50vh] overflow-y-auto pr-1">
          <div>
            <strong className="block text-xs font-bold uppercase tracking-wider text-[#1E1713] mb-1">
              Como funciona o procedimento:
            </strong>
            <p>{treatment.clinicalDetails.howItWorks}</p>
          </div>

          <div>
            <strong className="block text-xs font-bold uppercase tracking-wider text-[#1E1713] mb-1">
              Indicações principais:
            </strong>
            <p>{treatment.clinicalDetails.indications}</p>
          </div>

          <div>
            <strong className="block text-xs font-bold uppercase tracking-wider text-[#1E1713] mb-1">
              Tempo de recuperação (Downtime):
            </strong>
            <p className="text-[#8A6136] font-medium">{treatment.clinicalDetails.downtime}</p>
          </div>

          <div>
            <strong className="block text-xs font-bold uppercase tracking-wider text-[#1E1713] mb-1">
              Benefícios observados:
            </strong>
            <ul className="space-y-1.5 mt-1">
              {treatment.clinicalDetails.benefits.map((benefit, i) => (
                <li key={i} className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#287B5B] shrink-0" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-4 border-t border-[#EFE6DD] flex items-center gap-3">
          <button
            type="button"
            onClick={() => {
              onClose();
              onBookTreatment(treatment.name);
            }}
            className="flex-1 py-3.5 rounded-full bg-[#B88A58] hover:bg-[#8A6136] text-white text-xs font-bold tracking-wider uppercase flex items-center justify-center gap-2 shadow-md cursor-pointer transition-all"
          >
            <Sparkles className="w-4 h-4" />
            <span>Agendar Este Procedimento</span>
          </button>

          <button
            type="button"
            onClick={() => {
              onAddToCart(treatment);
              onClose();
            }}
            className="px-5 py-3.5 rounded-full border border-[#E8DCD1] hover:border-[#B88A58] text-[#1E1713] text-xs font-bold tracking-wider uppercase cursor-pointer transition-colors"
          >
            + Adicionar
          </button>
        </div>
      </div>
    </div>
  );
};
