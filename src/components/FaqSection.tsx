import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Preciso saber exatamente qual procedimento realizar antes da visita?',
      a: 'Não. A consulta avaliativa computadorizada existe justamente para investigar detalhadamente sua queixa, avaliar elasticidade, hidratação e histórico dermatológico, sugerindo o caminho ideal sem imposições ou excessos.',
    },
    {
      q: 'Como funciona a confirmação da agenda?',
      a: 'Após o envio dos dados aqui no site, nossa concierge entra em contato imediato via WhatsApp para confirmar o profissional especialista disponível e repassar as orientações leves de preparo da pele.',
    },
    {
      q: 'Os procedimentos têm tempo de recuperação (downtime)?',
      a: 'A imensa maioria de nossos tratamentos faciais (como Hydrafacial, Lash Lift e Massagem Escultural) possui zero downtime, permitindo retorno imediato às atividades e compromissos sociais com a pele reluzente.',
    },
    {
      q: 'Quais são as condições de pagamento e facilidades?',
      a: 'Aceitamos todos os principais cartões de crédito em até 10x sem juros, além de Pix com condição especial de 5% de desconto para liquidação à vista.',
    },
    {
      q: 'Onde a clínica está localizada e há estacionamento?',
      a: 'Estamos situados na nobre Alameda dos Jardins, 1420, em São Paulo. Contamos com serviço de manobrista (valet) cortesia na porta para total comodidade e discrição das nossas clientes.',
    },
  ];

  return (
    <section id="duvidas" className="py-24 bg-[#FAF7F2]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-[#8A6136] mb-3 block">
            Antes de Agendar
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#1E1713] mb-4">
            Dúvidas <em className="italic font-normal text-[#B88A58]">frequentes.</em>
          </h2>
          <p className="text-sm text-[#61564D] leading-relaxed">
            Tire suas dúvidas e sinta-se plenamente segura antes de conversar com nossa equipe.
          </p>
        </div>

        {/* Accordion */}
        <div className="flex flex-col gap-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`bg-white rounded-2xl border transition-all overflow-hidden ${
                  isOpen ? 'border-[#B88A58] shadow-sm' : 'border-[#E8DCD1]'
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="text-sm sm:text-base font-semibold text-[#1E1713]">
                    {faq.q}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                      isOpen ? 'bg-[#B88A58] text-white' : 'bg-[#FAF7F2] text-[#8A6136]'
                    }`}
                  >
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-[#61564D] leading-relaxed border-t border-[#EFE6DD]/60 animate-in fade-in duration-200">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
