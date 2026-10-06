import React from 'react';
import { Star, CheckCircle } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  const reviews = [
    {
      name: 'Jéssica Medeiros',
      role: 'Advogada · Jardins, SP',
      treatment: 'Hydrafacial Glow',
      rating: 5,
      avatar: '/src/assets/images/treatment_hydrafacial_luxury_1791237728473.jpg',
      quote:
        'Fui acolhida desde a primeira avaliação e saí entendendo exatamente o que seria feito. O resultado do Hydrafacial ficou extremamente natural e minha pele nunca teve tanto viço e viço duradouro.',
    },
    {
      name: 'Emily Resende',
      role: 'Arquiteta · Vila Nova Conceição',
      treatment: 'Laser Lavieen BB Glow',
      rating: 5,
      avatar: '/src/assets/images/lumiere_hero_model_1791237718279.jpg',
      quote:
        'O ambiente da clínica transmite uma tranquilidade ímpar, mas o que mais me impressionou foi o cuidado aos mínimos detalhes e o acompanhamento carinhoso no pós-procedimento. Minhas manchas sumiram com delicadeza.',
    },
    {
      name: 'Sarah Lemos',
      role: 'Diretora Criativa · Pinheiros',
      treatment: 'Lash Lift & Brow Lamination',
      rating: 5,
      avatar: '/src/assets/images/treatment_eyelash_lift_1791237754216.jpg',
      quote:
        'Eu não sabia qual tratamento escolher para as minhas sobrancelhas e cílios. O Lash Lift ficou discreto, elegante e duradouro. Indico de olhos fechados para quem valoriza sutileza sem exageros.',
    },
  ];

  return (
    <section id="avaliacoes" className="py-24 bg-[#EFE6DD]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-[#8A6136] mb-3 block">
            Experiências Reais
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#1E1713] mb-4">
            Quem se cuida, <em className="italic font-normal text-[#B88A58]">compartilha.</em>
          </h2>
          <p className="text-sm sm:text-base text-[#61564D] leading-relaxed">
            Relatos espontâneos de clientes que confiaram na Lumière para cuidar de sua pele e
            autoestima com sofisticação e responsabilidade.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-8 border border-[#E8DCD1] shadow-sm hover:shadow-[0_12px_36px_rgba(30,23,19,0.06)] transition-all flex flex-col justify-between"
            >
              <div>
                {/* Stars */}
                <div className="flex items-center gap-1 text-[#B88A58] mb-4">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#B88A58]" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-sm text-[#61564D] italic leading-relaxed mb-6">
                  "{rev.quote}"
                </blockquote>
              </div>

              {/* Patient Info */}
              <div className="pt-4 border-t border-[#EFE6DD] flex items-center gap-3">
                <img
                  src={rev.avatar}
                  alt={rev.name}
                  referrerPolicy="no-referrer"
                  className="w-11 h-11 rounded-full object-cover border border-[#B88A58]/30"
                />
                <div>
                  <div className="flex items-center gap-1">
                    <strong className="text-xs font-bold text-[#1E1713]">{rev.name}</strong>
                    <CheckCircle className="w-3.5 h-3.5 text-[#287B5B]" />
                  </div>
                  <span className="block text-[11px] text-[#95897F]">{rev.role}</span>
                  <span className="block text-[10px] font-semibold text-[#8A6136] mt-0.5">
                    {rev.treatment}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
