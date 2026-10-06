import React from 'react';
import { TREATMENTS_DATA, TreatmentItem } from '../data/treatments';
import { ArrowRight, Clock, Plus, Info } from 'lucide-react';

interface CatalogSectionProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
  onOpenClinicalModal: (treatment: TreatmentItem) => void;
  onAddToCart: (treatment: TreatmentItem) => void;
  onBookTreatment: (treatmentName: string) => void;
}

export const CatalogSection: React.FC<CatalogSectionProps> = ({
  activeCategory,
  onCategoryChange,
  onOpenClinicalModal,
  onAddToCart,
  onBookTreatment,
}) => {
  const categories = [
    { id: 'all', label: 'Todos os Procedimentos' },
    { id: 'face', label: 'Pele & Face' },
    { id: 'beauty tools', label: 'Beauty Tools & Olhar' },
    { id: 'laser', label: 'Laser de Precisão' },
    { id: 'body', label: 'Corporal & Spa' },
  ];

  const filteredTreatments =
    activeCategory === 'all'
      ? TREATMENTS_DATA
      : TREATMENTS_DATA.filter((t) => t.category.toLowerCase() === activeCategory.toLowerCase());

  return (
    <section id="tratamentos" className="py-24 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#8A6136] mb-3 block">
            Catálogo Exclusivo
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#1E1713] mb-4">
            Procedimentos pensados para <em className="italic font-normal text-[#B88A58]">você.</em>
          </h2>
          <p className="text-sm sm:text-base text-[#61564D] leading-relaxed">
            Conheça nossos protocolos mais consagrados. Cada sessão é personalizada após a análise da
            sua derme com a equipe biomédica.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-14">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => onCategoryChange(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider transition-all cursor-pointer ${
                activeCategory.toLowerCase() === cat.id.toLowerCase()
                  ? 'bg-[#B88A58] text-white shadow-[0_4px_16px_rgba(184,138,88,0.3)]'
                  : 'bg-white text-[#61564D] border border-[#E8DCD1] hover:border-[#B88A58] hover:text-[#1E1713]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Treatment Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTreatments.map((treatment) => (
            <article
              key={treatment.id}
              className="group bg-white rounded-3xl border border-[#E8DCD1] overflow-hidden shadow-sm hover:shadow-[0_16px_40px_rgba(30,23,19,0.09)] transition-all duration-300 flex flex-col hover:-translate-y-1.5"
            >
              {/* Thumbnail Container */}
              <div className="relative aspect-[16/10] overflow-hidden bg-[#FAF7F2]">
                <img
                  src={treatment.image}
                  alt={treatment.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Category & Tag */}
                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <span className="bg-[#1E1713]/80 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                    {treatment.tag}
                  </span>
                </div>

                <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm text-[#1E1713] text-xs font-semibold px-2.5 py-1 rounded-lg flex items-center gap-1 shadow-sm">
                  <Clock className="w-3 h-3 text-[#B88A58]" />
                  <span>{treatment.duration}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex flex-col flex-1">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-display text-2xl font-semibold text-[#1E1713] group-hover:text-[#B88A58] transition-colors leading-tight">
                    {treatment.name}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-[#61564D] leading-relaxed mb-6 flex-1">
                  {treatment.description}
                </p>

                {/* Price and Actions */}
                <div className="pt-4 border-t border-[#EFE6DD] flex items-center justify-between gap-3">
                  <div>
                    <span className="block text-[11px] text-[#95897F] uppercase tracking-wider font-semibold">
                      Investimento
                    </span>
                    <span className="font-display text-xl sm:text-2xl font-bold text-[#8A6136]">
                      {treatment.priceFormatted}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => onOpenClinicalModal(treatment)}
                      title="Ver Ficha Clínica Detalhada"
                      className="p-2.5 rounded-full border border-[#E8DCD1] hover:border-[#B88A58] text-[#61564D] hover:text-[#1E1713] transition-colors cursor-pointer"
                    >
                      <Info className="w-4 h-4" />
                    </button>

                    <button
                      type="button"
                      onClick={() => onAddToCart(treatment)}
                      title="Adicionar ao pacote Spa Day"
                      className="px-4 py-2.5 rounded-full bg-[#FAF7F2] hover:bg-[#B88A58] text-[#8A6136] hover:text-white border border-[#B88A58]/30 transition-all text-xs font-bold tracking-wide flex items-center gap-1 cursor-pointer"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>Adicionar</span>
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
