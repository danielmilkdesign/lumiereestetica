import React, { useState } from 'react';
import { TREATMENTS_DATA } from '../data/treatments';
import { Calendar, Phone, CheckCircle2, MessageSquare, MapPin } from 'lucide-react';

interface BookingSectionProps {
  selectedTreatmentName: string;
  onBookingSubmitted?: () => void;
}

export const BookingSection: React.FC<BookingSectionProps> = ({
  selectedTreatmentName,
  onBookingSubmitted,
}) => {
  const [treatment, setTreatment] = useState(
    selectedTreatmentName || 'Ainda não sei — gostaria de uma avaliação facial completa'
  );
  const [preferredDate, setPreferredDate] = useState(() => {
    const today = new Date().toISOString().split('T')[0];
    return today;
  });
  const [preferredTime, setPreferredTime] = useState('10:30 (Manhã)');
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [clientNotes, setClientNotes] = useState('');

  // Update treatment if parent prop changes
  React.useEffect(() => {
    if (selectedTreatmentName) {
      setTreatment(selectedTreatmentName);
    }
  }, [selectedTreatmentName]);

  // Mask Brazilian phone number
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let v = e.target.value.replace(/\D/g, '');
    if (v.length > 11) v = v.substring(0, 11);
    if (v.length > 6) {
      v = `(${v.substring(0, 2)}) ${v.substring(2, 7)}-${v.substring(7)}`;
    } else if (v.length > 2) {
      v = `(${v.substring(0, 2)}) ${v.substring(2)}`;
    }
    setClientPhone(v);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    let dateFormatted = preferredDate;
    if (preferredDate) {
      const parts = preferredDate.split('-');
      if (parts.length === 3) {
        dateFormatted = `${parts[2]}/${parts[1]}/${parts[0]}`;
      }
    }

    const messageLines = [
      'Olá, Lumière Haute Beauté! Gostaria de solicitar o agendamento de uma avaliação:',
      '',
      `✨ *Procedimento:* ${treatment}`,
      `📅 *Data desejada:* ${dateFormatted}`,
      `⏰ *Horário preferencial:* ${preferredTime}`,
      `👤 *Nome do Paciente:* ${clientName}`,
      `📱 *WhatsApp:* ${clientPhone}`,
      clientNotes ? `📝 *Observações:* ${clientNotes}` : '',
      '',
      'Aguardando a confirmação da agenda da clínica!',
    ]
      .filter(Boolean)
      .join('\n');

    const waUrl = `https://wa.me/5511987654321?text=${encodeURIComponent(messageLines)}`;
    window.open(waUrl, '_blank');
    onBookingSubmitted?.();
  };

  return (
    <section id="agendamento" className="py-24 bg-gradient-to-b from-[#FAF7F2] to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-[#E8DCD1] shadow-[0_24px_64px_rgba(30,23,19,0.09)] overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          {/* Aside Information (5 cols) */}
          <div className="lg:col-span-5 bg-[#1E1713] text-white p-8 sm:p-12 flex flex-col justify-between relative overflow-hidden">
            {/* Subtle glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#B88A58]/15 rounded-full blur-3xl pointer-events-none" />

            <div>
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#E3CDBC] mb-3 block">
                Atendimento Personalizado
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-medium text-white mb-4 leading-tight">
                Solicite sua <em className="italic font-normal text-[#E3CDBC]">avaliação.</em>
              </h2>
              <p className="text-xs sm:text-sm text-[#C0B7AE] leading-relaxed mb-8">
                Preencha os dados e enviaremos sua solicitação diretamente para nossa concierge no
                WhatsApp. Confirmamos a disponibilidade em poucos minutos.
              </p>

              <ul className="flex flex-col gap-3.5 mb-8">
                <li className="flex items-center gap-3 text-xs text-[#E8DCD1]">
                  <CheckCircle2 className="w-4 h-4 text-[#E3CDBC] shrink-0" />
                  <span>Sem compromisso e sem pressão comercial</span>
                </li>
                <li className="flex items-center gap-3 text-xs text-[#E8DCD1]">
                  <CheckCircle2 className="w-4 h-4 text-[#E3CDBC] shrink-0" />
                  <span>Indicação personalizada baseada na sua derme</span>
                </li>
                <li className="flex items-center gap-3 text-xs text-[#E8DCD1]">
                  <CheckCircle2 className="w-4 h-4 text-[#E3CDBC] shrink-0" />
                  <span>Lounge privativo com taça de espumante cortesia</span>
                </li>
              </ul>
            </div>

            <div className="pt-6 border-t border-white/10 text-xs text-[#A69B91] space-y-1.5">
              <div className="flex items-center gap-2 text-white font-medium">
                <Phone className="w-3.5 h-3.5 text-[#E3CDBC]" />
                <span>(11) 3042-8800 · (11) 98765-4321</span>
              </div>
              <div className="flex items-center gap-2 text-[#A69B91]">
                <MapPin className="w-3.5 h-3.5 text-[#E3CDBC]" />
                <span>Alameda dos Jardins, 1420 — Jardins, SP</span>
              </div>
            </div>
          </div>

          {/* Form Container (7 cols) */}
          <div className="lg:col-span-7 p-8 sm:p-12">
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              {/* Treatment Selection */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#1E1713] mb-2">
                  Procedimento de Interesse
                </label>
                <select
                  value={treatment}
                  onChange={(e) => setTreatment(e.target.value)}
                  className="w-full bg-[#FAF7F2] border border-[#E8DCD1] rounded-xl px-4 py-3 text-xs sm:text-sm text-[#1E1713] focus:outline-none focus:border-[#B88A58] focus:bg-white transition-all cursor-pointer"
                >
                  <option value="Ainda não sei — gostaria de uma avaliação facial completa">
                    Ainda não sei — gostaria de uma avaliação facial completa
                  </option>
                  {TREATMENTS_DATA.map((t) => (
                    <option key={t.id} value={`${t.name} (${t.priceFormatted})`}>
                      {t.name} ({t.priceFormatted})
                    </option>
                  ))}
                  <option value="Combo Personalizado Spa Day">
                    Combo Personalizado Spa Day (Multi-procedimentos)
                  </option>
                </select>
              </div>

              {/* Date & Time Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#1E1713] mb-2">
                    Data Preferencial
                  </label>
                  <input
                    type="date"
                    required
                    min={new Date().toISOString().split('T')[0]}
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    className="w-full bg-[#FAF7F2] border border-[#E8DCD1] rounded-xl px-4 py-3 text-xs sm:text-sm text-[#1E1713] focus:outline-none focus:border-[#B88A58] focus:bg-white transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#1E1713] mb-2">
                    Horário Preferencial
                  </label>
                  <select
                    value={preferredTime}
                    onChange={(e) => setPreferredTime(e.target.value)}
                    className="w-full bg-[#FAF7F2] border border-[#E8DCD1] rounded-xl px-4 py-3 text-xs sm:text-sm text-[#1E1713] focus:outline-none focus:border-[#B88A58] focus:bg-white transition-all cursor-pointer"
                  >
                    <option value="09:00 (Manhã)">09:00 (Manhã)</option>
                    <option value="10:30 (Manhã)">10:30 (Manhã)</option>
                    <option value="11:30 (Manhã)">11:30 (Manhã)</option>
                    <option value="14:00 (Tarde)">14:00 (Tarde)</option>
                    <option value="15:30 (Tarde)">15:30 (Tarde)</option>
                    <option value="17:00 (Fim de Tarde)">17:00 (Fim de Tarde)</option>
                    <option value="18:30 (Noite)">18:30 (Noite)</option>
                  </select>
                </div>
              </div>

              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#1E1713] mb-2">
                    Seu Nome Completo
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Como prefere ser chamada?"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    className="w-full bg-[#FAF7F2] border border-[#E8DCD1] rounded-xl px-4 py-3 text-xs sm:text-sm text-[#1E1713] focus:outline-none focus:border-[#B88A58] focus:bg-white transition-all placeholder:text-[#95897F]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#1E1713] mb-2">
                    WhatsApp com DDD
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(11) 98765-4321"
                    value={clientPhone}
                    onChange={handlePhoneChange}
                    className="w-full bg-[#FAF7F2] border border-[#E8DCD1] rounded-xl px-4 py-3 text-xs sm:text-sm text-[#1E1713] focus:outline-none focus:border-[#B88A58] focus:bg-white transition-all placeholder:text-[#95897F]"
                  />
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#1E1713] mb-2">
                  Observações ou Sensibilidades (Opcional)
                </label>
                <textarea
                  rows={3}
                  placeholder="Ex: tenho pele com tendência a rosácea, tenho casamento nesta sexta..."
                  value={clientNotes}
                  onChange={(e) => setClientNotes(e.target.value)}
                  className="w-full bg-[#FAF7F2] border border-[#E8DCD1] rounded-xl px-4 py-3 text-xs sm:text-sm text-[#1E1713] focus:outline-none focus:border-[#B88A58] focus:bg-white transition-all placeholder:text-[#95897F]"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-4 rounded-full text-xs font-bold tracking-wider uppercase bg-[#B88A58] hover:bg-[#8A6136] text-white transition-all shadow-[0_8px_24px_rgba(184,138,88,0.35)] hover:shadow-[0_12px_32px_rgba(138,97,54,0.45)] flex items-center justify-center gap-2 cursor-pointer mt-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Confirmar & Enviar no WhatsApp da Clínica</span>
              </button>

              <p className="text-[11px] text-[#95897F] text-center">
                Ao clicar, você será direcionada ao WhatsApp oficial da Lumière com seus dados
                organizados para confirmação imediata.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
