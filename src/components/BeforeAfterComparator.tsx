import React, { useState, useRef, useCallback } from 'react';
import { BEFORE_AFTER_CASES } from '../data/treatments';
import { Sparkles, ArrowRight } from 'lucide-react';

interface BeforeAfterComparatorProps {
  onBookClick: () => void;
}

export const BeforeAfterComparator: React.FC<BeforeAfterComparatorProps> = ({ onBookClick }) => {
  const [activeCaseIndex, setActiveCaseIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50); // percentage 0 - 100
  const containerRef = useRef<HTMLDivElement | null>(null);

  const currentCase = BEFORE_AFTER_CASES[activeCaseIndex];

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 2) percentage = 2;
    if (percentage > 98) percentage = 98;
    setSliderPosition(percentage);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  };

  return (
    <section id="antes-depois" className="py-24 bg-[#EFE6DD]/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#8A6136] mb-3 block">
            Resultados Comprovados
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#1E1713] mb-4">
            A transformação na textura e <em className="italic font-normal text-[#B88A58]">luminosidade.</em>
          </h2>
          <p className="text-sm sm:text-base text-[#61564D] leading-relaxed">
            Arraste o divisor central para inspecionar de perto o refinamento da pele após os protocolos
            realizados na Lumière.
          </p>
        </div>

        {/* Case Selector Pills */}
        <div className="flex items-center justify-center flex-wrap gap-2.5 mb-10">
          {BEFORE_AFTER_CASES.map((item, idx) => (
            <button
              key={item.id}
              type="button"
              onClick={() => {
                setActiveCaseIndex(idx);
                setSliderPosition(50);
              }}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                activeCaseIndex === idx
                  ? 'bg-[#1E1713] text-white shadow-md'
                  : 'bg-white text-[#61564D] border border-[#E8DCD1] hover:border-[#B88A58]'
              }`}
            >
              <span>{item.title}</span>
              <span className="ml-1.5 opacity-70 text-[10px]">({item.badge})</span>
            </button>
          ))}
        </div>

        {/* Interactive Comparator Container */}
        <div className="bg-white rounded-3xl p-4 sm:p-8 border border-[#E8DCD1] shadow-[0_20px_50px_rgba(30,23,19,0.08)]">
          <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            className="relative w-full h-[380px] sm:h-[480px] lg:h-[540px] rounded-2xl overflow-hidden select-none cursor-ew-resize bg-neutral-900"
          >
            {/* After Layer (Full width background) */}
            <div className="absolute inset-0 w-full h-full">
              <img
                src={currentCase.afterImg}
                alt={`${currentCase.title} - Depois`}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover pointer-events-none"
              />
              <span className="absolute top-4 right-4 bg-[#1E1713]/80 backdrop-blur-md text-white text-[11px] font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full z-10 shadow-sm">
                Depois (Pele Renovada)
              </span>
            </div>

            {/* Before Layer (Clipped by sliderPosition) */}
            <div
              className="absolute inset-y-0 left-0 overflow-hidden z-20"
              style={{ width: `${sliderPosition}%` }}
            >
              <div className="relative w-full h-full" style={{ width: containerRef.current?.clientWidth || '100%' }}>
                <img
                  src={currentCase.beforeImg}
                  alt={`${currentCase.title} - Antes`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover pointer-events-none"
                  style={{ width: containerRef.current?.clientWidth || '100%', maxWidth: 'none' }}
                />
              </div>
              <span className="absolute top-4 left-4 bg-[#1E1713]/80 backdrop-blur-md text-white text-[11px] font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full z-30 shadow-sm">
                Antes
              </span>
            </div>

            {/* Divider Handle Line */}
            <div
              className="absolute top-0 bottom-0 z-30 w-0.5 bg-white pointer-events-none shadow-[0_0_10px_rgba(0,0,0,0.5)]"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white text-[#1E1713] font-bold text-xs flex items-center justify-center shadow-xl border border-neutral-200">
                <span>↔</span>
              </div>
            </div>
          </div>

          {/* Card Footer Details */}
          <div className="mt-6 pt-4 border-t border-[#EFE6DD] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <strong className="block text-base font-semibold text-[#1E1713] font-display">
                {currentCase.title} — {currentCase.patient}
              </strong>
              <p className="text-xs sm:text-sm text-[#61564D] mt-1 max-w-xl">
                {currentCase.description}
              </p>
            </div>

            <button
              type="button"
              onClick={onBookClick}
              className="px-6 py-3 rounded-full text-xs font-bold tracking-wider uppercase bg-[#B88A58] hover:bg-[#8A6136] text-white transition-all shadow-md flex items-center gap-2 self-start sm:self-center shrink-0 cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Quero Este Resultado</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
