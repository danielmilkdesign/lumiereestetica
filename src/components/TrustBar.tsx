import React from 'react';
import { CheckCircle2, Sparkles, Award, Shield } from 'lucide-react';

export const TrustBar: React.FC = () => {
  const pillars = [
    {
      icon: CheckCircle2,
      title: 'Protocolos Personalizados',
      desc: 'Decisões baseadas em avaliação dérmica 3D computadorizada',
    },
    {
      icon: Sparkles,
      title: 'Experiência Acolhedora',
      desc: 'Espaço privativo com lounge VIP e ritual de acolhimento',
    },
    {
      icon: Award,
      title: 'Equipe Certificada',
      desc: 'Especialistas em rejuvenescimento sutil e bioestímulo',
    },
    {
      icon: Shield,
      title: 'Biossegurança Total',
      desc: 'Ambiente estéril certificado Anvisa e acompanhamento contínuo',
    },
  ];

  return (
    <section className="bg-[#1E1713] text-white py-8 border-y border-[#352B24]" aria-label="Diferenciais da Lumière">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#B88A58]/20 border border-[#B88A58]/40 text-[#E3CDBC] flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-white">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#A69B91] leading-snug mt-0.5">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
