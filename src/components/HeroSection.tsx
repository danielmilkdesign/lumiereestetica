import React from 'react';
import { ArrowUpRight, Sparkles, Star, ShieldCheck, HeartHandshake } from 'lucide-react';

interface HeroSectionProps {
  onBookClick: () => void;
  onQuizClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onBookClick, onQuizClick }) => {
  return (
    <section id="inicio" className="relative w-full min-h-[calc(100vh-80px)] flex items-center bg-[#FAF7F2] overflow-hidden">
      {/* Background Visual Layer */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <img
          src="/src/assets/images/lumiere_hero_model_1791237718279.jpg"
          alt="Lumière Haute Beauté - Pele radiante e natural"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-[58%_28%] md:object-center transform scale-100 transition-transform duration-1000 ease-out hover:scale-[1.02]"
        />

        {/* Cinematic Gradient Mask for Seamless Text Legibility & Mobile Model Visibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#FAF7F2]/90 via-[#FAF7F2]/55 to-[#FAF7F2]/95 sm:bg-gradient-to-r sm:from-[#FAF7F2] sm:via-[#FAF7F2]/80 sm:to-transparent z-10 pointer-events-none" />
      </div>

      {/* Floating Glassmorphism Badges (Desktop) */}
      <div className="hidden xl:flex items-center gap-3 absolute top-28 right-12 z-20 bg-white/85 backdrop-blur-md px-5 py-3.5 rounded-2xl border border-[#B88A58]/25 shadow-[0_12px_36px_rgba(30,23,19,0.08)]">
        <div className="w-10 h-10 rounded-full bg-[#FAF7F2] flex items-center justify-center text-[#B88A58] border border-[#B88A58]/20">
          <Sparkles className="w-5 h-5 text-[#B88A58]" />
        </div>
        <div>
          <span className="block text-xs font-bold text-[#1E1713] tracking-wide">Protocolo Exclusivo Jardins</span>
          <span className="block text-[11px] text-[#95897F]">Bioestimulação dérmica guiada</span>
        </div>
      </div>

      <div className="hidden xl:flex items-center gap-3 absolute bottom-24 right-20 z-20 bg-white/85 backdrop-blur-md px-5 py-3.5 rounded-2xl border border-[#B88A58]/25 shadow-[0_12px_36px_rgba(30,23,19,0.08)]">
        <div className="w-10 h-10 rounded-full bg-[#FAF7F2] flex items-center justify-center text-[#287B5B] border border-[#287B5B]/20">
          <ShieldCheck className="w-5 h-5 text-[#287B5B]" />
        </div>
        <div>
          <span className="block text-xs font-bold text-[#1E1713] tracking-wide">98.4% Satisfação Clínica</span>
          <span className="block text-[11px] text-[#95897F]">Naturalidade e zero artificialidade</span>
        </div>
      </div>

      {/* Foreground Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 w-full">
        <div className="max-w-2xl">
          {/* Eyebrow / Kicker */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-[#B88A58]/30 mb-6 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#287B5B] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#287B5B]"></span>
            </span>
            <span className="text-[11px] font-bold tracking-widest uppercase text-[#8A6136]">
              Clínica de Estética Avançada & Boutique
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-[#1E1713] leading-[1.08] mb-6 [text-wrap:balance]">
            Resultados naturais e <em className="italic font-normal text-[#B88A58]">cuidado personalizado.</em>
          </h1>

          {/* Editorial Paragraph */}
          <p className="text-base sm:text-lg text-[#61564D] leading-relaxed mb-8 max-w-xl">
            Protocolos dermatológicos e procedimentos integrados desenhados sob medida para você.
            Unimos tecnologia estética médica, bioestimulação celular e sensibilidade artística para
            valorizar seus traços com total elegância e naturalidade.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 mb-10">
            <button
              type="button"
              onClick={onBookClick}
              className="px-7 py-3.5 rounded-full text-xs font-bold tracking-wider uppercase bg-[#B88A58] hover:bg-[#8A6136] text-white transition-all shadow-[0_8px_24px_rgba(184,138,88,0.3)] hover:shadow-[0_12px_32px_rgba(138,97,54,0.4)] flex items-center gap-2 cursor-pointer"
            >
              <span>Agendar Minha Avaliação</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={onQuizClick}
              className="px-6 py-3.5 rounded-full text-xs font-bold tracking-wider uppercase bg-[#1E1713] hover:bg-black text-[#F4EFEB] hover:text-white transition-all border border-[#B88A58]/35 shadow-[0_8px_22px_rgba(30,23,19,0.15)] flex items-center gap-2 cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#E3CDBC]" />
              <span>✦ Descobrir Protocolo Ideal (30s)</span>
            </button>
          </div>

          {/* Social Proof Bar */}
          <div className="pt-6 border-t border-[#E8DCD1] flex items-center gap-4">
            <div className="flex -space-x-2.5 overflow-hidden">
              <img
                className="inline-block h-10 w-10 rounded-full ring-2 ring-[#FAF7F2] object-cover"
                src="/src/assets/images/treatment_hydrafacial_luxury_1791237728473.jpg"
                alt="Paciente Lumière"
              />
              <img
                className="inline-block h-10 w-10 rounded-full ring-2 ring-[#FAF7F2] object-cover"
                src="/src/assets/images/treatment_eyelash_lift_1791237754216.jpg"
                alt="Paciente Lumière"
              />
              <img
                className="inline-block h-10 w-10 rounded-full ring-2 ring-[#FAF7F2] object-cover"
                src="/src/assets/images/lumiere_hero_model_1791237718279.jpg"
                alt="Paciente Lumière"
              />
            </div>
            <div>
              <div className="flex items-center gap-1 text-[#B88A58] text-xs">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#B88A58]" />
                ))}
                <span className="font-bold text-[#1E1713] ml-1 text-xs">4.9/5 no Google</span>
                <span className="text-[#95897F] text-xs">(+380 Avaliações)</span>
              </div>
              <p className="text-xs text-[#95897F] mt-0.5">
                Referência em estética natural & dermatologia de precisão nos Jardins
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
