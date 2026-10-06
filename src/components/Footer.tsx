import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#140F0D] text-[#E8DCD1] pt-20 pb-10 border-t border-[#B88A58]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-16">
          {/* Brand Col */}
          <div>
            <a href="#inicio" className="inline-block tracking-[0.24em] text-white no-underline mb-4">
              <span className="font-display text-2xl font-semibold tracking-[0.24em] block">
                LUMIÈRE
              </span>
              <span className="text-[9px] font-semibold tracking-[0.3em] text-[#E3CDBC] uppercase block mt-1">
                Haute Beauté & Esthétique
              </span>
            </a>
            <p className="text-xs text-[#A69B91] leading-relaxed max-w-xs mt-3">
              A união sublime entre dermatologia médica avançada, ciência dos cosmecêuticos e o
              acolhimento do bem-estar holístico nos Jardins.
            </p>
          </div>

          {/* Nav Col */}
          <div>
            <h4 className="font-display text-lg font-semibold text-white mb-4">Navegação</h4>
            <ul className="flex flex-col gap-2.5 text-xs text-[#A69B91]">
              <li>
                <a href="#inicio" className="hover:text-[#E3CDBC] transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#categorias" className="hover:text-[#E3CDBC] transition-colors">
                  Categorias Exclusivas
                </a>
              </li>
              <li>
                <a href="#quiz" className="hover:text-[#E3CDBC] transition-colors">
                  Diagnóstico 3D
                </a>
              </li>
              <li>
                <a href="#tratamentos" className="hover:text-[#E3CDBC] transition-colors">
                  Procedimentos & Tecnologia
                </a>
              </li>
              <li>
                <a href="#combo" className="hover:text-[#E3CDBC] transition-colors">
                  Monte seu Day Spa
                </a>
              </li>
            </ul>
          </div>

          {/* Hours Col */}
          <div>
            <h4 className="font-display text-lg font-semibold text-white mb-4">Horários & Local</h4>
            <ul className="flex flex-col gap-2 text-xs text-[#A69B91]">
              <li>Segunda a Sexta: 08:30 às 20:30</li>
              <li>Sábados: 09:00 às 18:00</li>
              <li className="mt-2 text-[#E8DCD1]">Alameda dos Jardins, 1420 — Jardins, SP</li>
              <li>Serviço de manobrista valet cortesia</li>
            </ul>
          </div>

          {/* Contact Col */}
          <div>
            <h4 className="font-display text-lg font-semibold text-white mb-4">Contato Direto</h4>
            <ul className="flex flex-col gap-2 text-xs text-[#A69B91]">
              <li>(11) 3042-8800</li>
              <li>
                <a
                  href="https://wa.me/5511987654321?text=Ol%C3%A1%20Lumi%C3%A8re!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#E3CDBC] transition-colors"
                >
                  (11) 98765-4321 (WhatsApp VIP)
                </a>
              </li>
              <li>contato@lumiereestetica.com.br</li>
              <li className="pt-2 text-[11px] text-[#7D736A]">
                Resp. Técnica: Dra. Camilla Rossi · CRM/SP 148.920
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#7D736A]">
          <span>
            © {new Date().getFullYear()} Lumière Haute Beauté & Esthétique. Todos os direitos reservados.
          </span>
          <div className="flex items-center gap-4">
            <span>Privacidade</span>
            <span>·</span>
            <span>Termos de Atendimento</span>
            <span>·</span>
            <span>Biossegurança RDC Anvisa</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
