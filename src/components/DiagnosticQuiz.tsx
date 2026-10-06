import React, { useState } from 'react';
import { Sparkles, ArrowRight, ArrowLeft, Clock, Check } from 'lucide-react';

interface DiagnosticQuizProps {
  onSelectTreatmentForBooking: (treatmentName: string) => void;
}

export const DiagnosticQuiz: React.FC<DiagnosticQuizProps> = ({ onSelectTreatmentForBooking }) => {
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3>(1);
  const [selectedGoal, setSelectedGoal] = useState<string | null>(null);
  const [selectedDowntime, setSelectedDowntime] = useState<string | null>(null);

  const goalOptions = [
    {
      id: 'glow',
      icon: '✨',
      title: 'Viço, Poros & Hidratação Imediata',
      desc: 'Pele cansada, desidratada, com textura irregular ou sem brilho natural.',
    },
    {
      id: 'antiaging',
      icon: '🌿',
      title: 'Linhas de Expressão & Firmeza',
      desc: 'Suavizar marcas, rugas finas e recuperar a firmeza e o colágeno dérmico.',
    },
    {
      id: 'eyes',
      icon: '👁',
      title: 'Olhar Marcante & Prático',
      desc: 'Cílios naturalmente curvados e sobrancelhas desenhadas sem necessidade de maquiagem.',
    },
    {
      id: 'melasma',
      icon: '☁️',
      title: 'Clareamento de Manchas & Tom Uniforme',
      desc: 'Atenuar manchas solares, melasma e recuperar o tom homogêneo da derme.',
    },
  ];

  const downtimeOptions = [
    {
      id: 'zero',
      icon: '🚀',
      title: 'Zero Downtime (Sair pronta para o dia)',
      desc: 'Procedimentos não-invasivos. Sem descamação, crostas ou vermelhidão perceptível.',
    },
    {
      id: 'mild',
      icon: '🛋',
      title: 'Downtime Suave (1 a 2 dias)',
      desc: 'Pequeno rubor ou renovação suave em troca de efeito regenerativo profundo.',
    },
  ];

  const getRecommendation = () => {
    if (selectedGoal === 'glow') {
      return {
        title: 'Hydrafacial Glow & Infusão de Colágeno',
        duration: '60 minutos',
        price: 'R$ 450',
        image: '/src/assets/images/treatment_hydrafacial_luxury_1791237728473.jpg',
        desc: 'Ideal para revitalização imediata! Limpeza dérmica indolor combinada com infusão de ácido hialurônico ultrapuro e antioxidantes. Você sai pronta para qualquer compromisso com a pele impecavelmente iluminada.',
        treatmentName: 'Hydrafacial Glow & Infusão',
      };
    }
    if (selectedGoal === 'antiaging') {
      return {
        title: 'Facial Ouro 24k Lifting & Crioterapia',
        duration: '75 minutos',
        price: 'R$ 420',
        image: '/src/assets/images/treatment_hydrafacial_luxury_1791237728473.jpg',
        desc: 'Protocolo sensorial antienvelhecimento com drenagem linfática facial, esferas criogênicas tensoras e máscara pura de ouro com ação antioxidante profunda.',
        treatmentName: 'Facial Ouro 24k & Crioterapia',
      };
    }
    if (selectedGoal === 'eyes') {
      return {
        title: 'Lash Lift & Brow Lamination com Queratina',
        duration: '45 minutos',
        price: 'R$ 220',
        image: '/src/assets/images/treatment_eyelash_lift_1791237754216.jpg',
        desc: 'Curvatura e tonalização natural dos cílios combinada com nutrição profunda dos fios. Realce marcante sem necessidade de rímel ou extensões sintéticas.',
        treatmentName: 'Lash Lift & Brow Lamination',
      };
    }
    return {
      title: 'Laser Lavieen BB Glow & Bioestímulo',
      duration: '40 minutos',
      price: 'R$ 650',
      image: '/src/assets/images/treatment_lavieen_laser_1791237744802.jpg',
      desc: 'Laser de túlio em comprimento de onda de precisão para fechamento permanente de poros, dispersão de pigmentos escuros e efeito pele de porcelana.',
      treatmentName: 'Laser Lavieen BB Glow',
    };
  };

  const rec = getRecommendation();

  return (
    <section id="quiz" className="py-24 bg-gradient-to-b from-white to-[#FAF7F2]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#8A6136] mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#B88A58]" />
            Diagnóstico Personalizado
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#1E1713] mb-4">
            Descubra seu protocolo ideal em <em className="italic font-normal text-[#B88A58]">30 segundos.</em>
          </h2>
          <p className="text-sm sm:text-base text-[#61564D] leading-relaxed">
            Responda a duas perguntas rápidas para que nosso sistema indique o cuidado perfeito
            para as necessidades imediatas da sua pele.
          </p>
        </div>

        {/* Quiz Container Card */}
        <div className="bg-white rounded-3xl border border-[#E8DCD1] p-6 sm:p-10 shadow-[0_16px_48px_rgba(30,23,19,0.06)] relative overflow-hidden">
          {/* Top Gold Accent Bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#B88A58] via-[#E3CDBC] to-[#8A6136]" />

          {/* Progress Header */}
          <div className="flex items-center justify-between pb-6 mb-8 border-b border-[#EFE6DD]">
            <span className="text-xs font-bold uppercase tracking-wider text-[#8A6136]">
              {currentStep === 1 && 'Etapa 1 de 2: Objetivo'}
              {currentStep === 2 && 'Etapa 2 de 2: Recuperação'}
              {currentStep === 3 && 'Diagnóstico Concluído'}
            </span>
            <div className="flex-1 max-w-[200px] h-1.5 bg-[#EFE6DD] rounded-full mx-4 overflow-hidden">
              <div
                className="h-full bg-[#B88A58] rounded-full transition-all duration-500"
                style={{
                  width: currentStep === 1 ? '50%' : currentStep === 2 ? '100%' : '100%',
                }}
              />
            </div>
            <span className="text-xs text-[#95897F] font-medium">100% Personalizado</span>
          </div>

          {/* Step 1: Objective */}
          {currentStep === 1 && (
            <div className="animate-in fade-in duration-300">
              <h3 className="font-display text-2xl sm:text-3xl font-semibold text-[#1E1713] mb-2">
                Qual é o seu objetivo principal hoje?
              </h3>
              <p className="text-sm text-[#95897F] mb-6">
                Selecione o que mais incomoda ou o resultado que você mais deseja alcançar:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {goalOptions.map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setSelectedGoal(opt.id)}
                    className={`p-5 rounded-2xl border text-left transition-all flex items-start gap-4 cursor-pointer ${
                      selectedGoal === opt.id
                        ? 'border-[#B88A58] bg-[#FAF7F2] shadow-[0_4px_16px_rgba(184,138,88,0.15)] ring-1 ring-[#B88A58]'
                        : 'border-[#E8DCD1] bg-[#FCFAF7] hover:bg-white hover:border-[#B88A58]/50'
                    }`}
                  >
                    <span className="text-2xl shrink-0 mt-0.5">{opt.icon}</span>
                    <div>
                      <strong className="block text-sm font-semibold text-[#1E1713] mb-1">
                        {opt.title}
                      </strong>
                      <span className="block text-xs text-[#61564D] leading-relaxed">
                        {opt.desc}
                      </span>
                    </div>
                  </button>
                ))}
              </div>

              <div className="flex justify-end pt-4 border-t border-[#EFE6DD]">
                <button
                  type="button"
                  disabled={!selectedGoal}
                  onClick={() => setCurrentStep(2)}
                  className={`px-6 py-3 rounded-full text-xs font-bold tracking-wider uppercase flex items-center gap-2 cursor-pointer transition-all ${
                    selectedGoal
                      ? 'bg-[#B88A58] hover:bg-[#8A6136] text-white shadow-md'
                      : 'bg-[#EFE6DD] text-[#95897F] cursor-not-allowed'
                  }`}
                >
                  <span>Continuar</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Downtime */}
          {currentStep === 2 && (
            <div className="animate-in fade-in duration-300">
              <h3 className="font-display text-2xl sm:text-3xl font-semibold text-[#1E1713] mb-2">
                Qual a sua tolerância de recuperação (downtime)?
              </h3>
              <p className="text-sm text-[#95897F] mb-6">
                Isso define a intensidade e a tecnologia aplicada no seu cuidado dérmico:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {downtimeOptions.map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setSelectedDowntime(opt.id)}
                    className={`p-5 rounded-2xl border text-left transition-all flex items-start gap-4 cursor-pointer ${
                      selectedDowntime === opt.id
                        ? 'border-[#B88A58] bg-[#FAF7F2] shadow-[0_4px_16px_rgba(184,138,88,0.15)] ring-1 ring-[#B88A58]'
                        : 'border-[#E8DCD1] bg-[#FCFAF7] hover:bg-white hover:border-[#B88A58]/50'
                    }`}
                  >
                    <span className="text-2xl shrink-0 mt-0.5">{opt.icon}</span>
                    <div>
                      <strong className="block text-sm font-semibold text-[#1E1713] mb-1">
                        {opt.title}
                      </strong>
                      <span className="block text-xs text-[#61564D] leading-relaxed">
                        {opt.desc}
                      </span>
                    </div>
                  </button>
                ))}
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-[#EFE6DD]">
                <button
                  type="button"
                  onClick={() => setCurrentStep(1)}
                  className="px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase border border-[#E8DCD1] hover:border-[#B88A58] text-[#1E1713] flex items-center gap-1.5 cursor-pointer"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Voltar</span>
                </button>

                <button
                  type="button"
                  disabled={!selectedDowntime}
                  onClick={() => setCurrentStep(3)}
                  className={`px-6 py-3 rounded-full text-xs font-bold tracking-wider uppercase flex items-center gap-2 cursor-pointer transition-all ${
                    selectedDowntime
                      ? 'bg-[#B88A58] hover:bg-[#8A6136] text-white shadow-md'
                      : 'bg-[#EFE6DD] text-[#95897F] cursor-not-allowed'
                  }`}
                >
                  <span>Ver Diagnóstico Final</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Result */}
          {currentStep === 3 && (
            <div className="animate-in fade-in duration-300">
              <div className="bg-[#FAF7F2] border border-[#B88A58]/30 rounded-2xl p-6 sm:p-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                {/* Image */}
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-md">
                  <img
                    src={rec.image}
                    alt={rec.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-3 left-3 bg-[#1E1713]/85 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full backdrop-blur-sm">
                    ✦ Protocolo Indicado
                  </span>
                </div>

                {/* Details */}
                <div>
                  <h3 className="font-display text-2xl sm:text-3xl font-semibold text-[#1E1713] mb-2 leading-tight">
                    {rec.title}
                  </h3>

                  <div className="flex items-center gap-3 text-xs font-semibold text-[#8A6136] mb-4">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {rec.duration}
                    </span>
                    <span>·</span>
                    <span>Investimento: a partir de {rec.price}</span>
                  </div>

                  <p className="text-sm text-[#61564D] leading-relaxed mb-6">
                    {rec.desc}
                  </p>

                  <div className="flex flex-wrap items-center gap-3">
                    <button
                      type="button"
                      onClick={() => onSelectTreatmentForBooking(rec.treatmentName)}
                      className="px-6 py-3 rounded-full text-xs font-bold tracking-wider uppercase bg-[#B88A58] hover:bg-[#8A6136] text-white transition-all shadow-[0_4px_16px_rgba(184,138,88,0.3)] flex items-center gap-2 cursor-pointer"
                    >
                      <Check className="w-4 h-4" />
                      <span>Agendar Este Protocolo</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        setCurrentStep(1);
                        setSelectedGoal(null);
                        setSelectedDowntime(null);
                      }}
                      className="px-4 py-2.5 rounded-full text-xs font-medium text-[#95897F] hover:text-[#1E1713] transition-colors cursor-pointer"
                    >
                      Refazer Teste
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
