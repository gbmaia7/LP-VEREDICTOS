import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { ClinicalReportModal } from './components/ClinicalReportModal';
import { Linkedin } from 'lucide-react';

export default function App() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [sliderValue, setSliderValue] = useState(50);
  const [isReportModalOpen, setIsReportModalOpen] = useState(false);
  
  // 3D effect variables for the interactive card
  const cardRef = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [4, -4]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-4, 4]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div className="bg-background text-on-background overflow-x-hidden min-h-screen flex flex-col">
      {/* Top Navigation Bar */}
      <header className="fixed w-full top-0 left-0 z-50 bg-[#080808]/80 backdrop-blur-md border-b border-[#00E2C1]/10 h-16 md:h-20">
        <nav className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop h-full max-w-container-max mx-auto">
          <div className="flex items-center gap-1">
            <span className="text-xl md:text-2xl font-extrabold tracking-tight text-white uppercase">Veredictos Vision</span>
          </div>
          <div className="hidden md:flex items-center">
            <span className="text-[11px] md:text-[12px] uppercase tracking-[0.1em] md:tracking-[0.2em] font-medium text-white/70">Uma nova camada de inteligência oftalmológica para o SUS</span>
          </div>
        </nav>
      </header>

      {/* Main Hero Section */}
      <main className="flex-1 flex items-center justify-center pt-[120px] md:pt-[160px] px-margin-mobile md:px-margin-desktop pb-16 md:pb-24">
        <div className="max-w-container-max w-full mx-auto grid grid-cols-1 lg:grid-cols-[4fr_6fr] gap-10 md:gap-gutter items-center">
          {/* Left Column: Content */}
          <div className="flex flex-col items-start z-10 relative max-w-lg mx-auto lg:mx-0">
            <div className="flex items-center gap-3 mb-4 md:mb-6">
              <span className="text-[10px] font-bold text-[#00E2C1] tracking-[0.3em] uppercase">
                TEMPO É VISÃO
              </span>
              <div className="h-[1px] w-8 md:w-12 bg-[#00E2C1]/30"></div>
            </div>
            <h1 className="text-[38px] leading-[1.1] md:text-[56px] md:leading-[1] font-extrabold text-white mb-5 md:mb-6 tracking-tight max-w-[620px]">
              Inteligência artificial para <span className="text-[#00E2C1]">priorização de fila e prevenção de cegueira</span> no SUS
            </h1>
            <p className="text-[14px] md:text-[16px] text-white/40 leading-relaxed mb-6 max-w-[500px]">
              Tecnologia integrada ao SUS que analisa retinografias para detectar glaucoma e retinopatias. Acelera o atendimento dos pacientes mais graves e otimiza o custo público com tratamentos preventivos.
            </p>
            <div className="flex flex-col gap-3 mb-8 md:mb-10">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#00E2C1] text-lg">check_circle</span>
                <span className="text-white/80 text-[13px] md:text-[14px]">Mais visões salvas a tempo</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#00E2C1] text-lg">check_circle</span>
                <span className="text-white/80 text-[13px] md:text-[14px]">Mais economia ao evitar tratamentos tardios</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#00E2C1] text-lg">check_circle</span>
                <span className="text-white/80 text-[13px] md:text-[14px]">Mais eficiência para a saúde pública</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6 w-full sm:w-auto">
              <a 
                href="https://wa.me/5521995435384?text=Ol%C3%A1%2C%20equipe%20Veredictos.%20Tenho%20interesse%20em%20agendar%20uma%20demonstra%C3%A7%C3%A3o%20da%20Veredictos%20Vision%20para%20entender%20como%20a%20plataforma%20pode%20ajudar%20meu%20munic%C3%ADpio%20a%20priorizar%20casos%20oftalmol%C3%B3gicos%20de%20maior%20risco%20e%20reduzir%20filas%20na%20rede%20p%C3%BAblica."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto justify-center group flex items-center gap-3 bg-[#00E2C1] text-black px-6 py-3.5 md:px-8 md:py-4 text-[11px] md:text-[12px] font-bold uppercase tracking-widest hover:brightness-110 transition-all cursor-pointer"
              >
                Agendar Demonstração
                <span className="text-lg transition-transform group-hover:translate-x-1">→</span>
              </a>
              <a 
                href="https://wa.me/5521995435384?text=Ol%C3%A1%2C%20equipe%20Veredictos.%20Tenho%20interesse%20em%20agendar%20uma%20demonstra%C3%A7%C3%A3o%20da%20Veredictos%20Vision%20para%20entender%20como%20a%20plataforma%20pode%20ajudar%20meu%20munic%C3%ADpio%20a%20priorizar%20casos%20oftalmol%C3%B3gicos%20de%20maior%20risco%20e%20reduzir%20filas%20na%20rede%20p%C3%BAblica."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto text-center text-[11px] md:text-[12px] uppercase tracking-widest font-bold text-white/60 sm:border-b sm:border-[#00E2C1]/30 sm:pb-1 hover:text-[#00E2C1] sm:hover:border-[#00E2C1] transition-all cursor-pointer py-3 sm:py-0 border-b border-transparent"
              >
                Falar com Especialista
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Card */}
          <div className="flex flex-col items-center lg:items-end mt-4 md:mt-12 lg:mt-0 relative" style={{ perspective: 1000 }}>
            <div className="flex items-center gap-2 mb-3 md:mb-4 px-2 z-10 w-full max-w-[800px]">
              <span className="text-[#00E2C1] text-[10px] md:text-xs">▶</span>
              <span className="text-white/60 text-[10px] md:text-[11px] uppercase tracking-[0.15em] font-semibold">Assista ao vídeo e entenda o impacto</span>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#00E2C1]/10 blur-[60px] md:blur-[100px] rounded-full pointer-events-none z-0"></div>
            <motion.div 
              ref={cardRef}
              style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="relative z-10 w-full max-w-[800px] bg-[#141414] border border-white/10 rounded-2xl p-3 md:p-4 shadow-2xl"
            >
              <div className="aspect-video rounded-xl bg-[#0a0a0a] overflow-hidden relative border border-white/5 group">
                {!isVideoPlaying ? (
                  <div 
                    className="w-full h-full relative cursor-pointer flex items-center justify-center"
                    onClick={() => setIsVideoPlaying(true)}
                  >
                    <img 
                      src="https://img.youtube.com/vi/iEkE88DNFSI/maxresdefault.jpg?v=2" 
                      alt="Thumbnail Veredictos" 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/10 transition-colors">
                      <div className="w-16 h-16 rounded-full bg-[#00E2C1]/80 border border-[#00E2C1] flex items-center justify-center backdrop-blur-sm shadow-[0_0_30px_rgba(0,226,193,0.5)] transition-transform group-hover:scale-110">
                        <span className="material-symbols-outlined text-black text-4xl translate-x-0.5">play_arrow</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <iframe 
                    className="w-full h-full relative z-10"
                    src="https://www.youtube.com/embed/iEkE88DNFSI?autoplay=1&controls=1&modestbranding=1&rel=0"
                    title="Veredictos Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      {/* Section 2: The Problem */}
      <section className="relative mt-8 md:mt-16 pt-24 pb-20 md:pt-40 md:pb-32 px-margin-mobile md:px-margin-desktop border-t border-white/5 bg-[#080808]">
        {/* Glow effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-full bg-[#00E2C1]/5 blur-[120px] rounded-full pointer-events-none z-0"></div>
        
        <div className="max-w-container-max mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            {/* Left Content */}
            <div className="flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-[10px] font-bold text-[#00E2C1] tracking-[0.3em] uppercase">O Problema da Triagem</span>
                <div className="h-[1px] w-8 md:w-12 bg-[#00E2C1]/30"></div>
              </div>
              
              <h2 className="text-[32px] md:text-[42px] leading-[1.1] font-extrabold text-white mb-8 tracking-tight">
                O sistema trata todos de forma igual.<br className="hidden md:block"/>
                <span className="text-[#00E2C1]"> A biologia, não.</span>
              </h2>

              <div className="flex flex-col gap-4 text-[14px] md:text-[16px] text-white/50 leading-relaxed max-w-[500px]">
                <p>A fila oftalmológica do SUS é baseada em ordem de chegada, não em risco clínico.</p>
                <p>Enquanto alguns pacientes podem esperar, outros perdem tempo crítico de tratamento.</p>
                <p className="text-white/70">Retinopatia Diabética, Glaucoma e Retinopatia Hipertensiva avançam silenciosamente durante esse intervalo.</p>
                <p>Quando o encaminhamento demora, a perda visual pode deixar de ser evitável.</p>
              </div>
            </div>

            {/* Right Cards */}
            <div className="flex flex-col gap-4 md:gap-6">
              {/* Card 1 */}
              <div className="bg-[#141414] border border-white/10 rounded-2xl p-6 relative group overflow-hidden transition-all hover:border-white/20">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-white/10 group-hover:bg-[#00E2C1] transition-colors duration-500"></div>
                <div className="flex flex-col gap-1 md:gap-2 pl-4">
                  <span className="text-xl md:text-3xl font-extrabold text-white">Até 3 meses</span>
                  <span className="text-[13px] md:text-[14px] text-white/50 leading-relaxed">Janela ideal para intervenção antes de dano visual irreversível</span>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-[#141414] border border-white/10 rounded-2xl p-6 relative group overflow-hidden transition-all hover:border-white/20">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-white/10 group-hover:bg-[#00E2C1] transition-colors duration-500"></div>
                <div className="flex flex-col gap-1 md:gap-2 pl-4">
                  <span className="text-xl md:text-3xl font-extrabold text-[#00E2C1]/80 group-hover:text-[#00E2C1] transition-colors">6 a 12 meses</span>
                  <span className="text-[13px] md:text-[14px] text-white/50 leading-relaxed">Tempo médio de espera por consulta oftalmológica no SUS</span>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-[#141414] border border-[#00E2C1]/20 rounded-2xl p-6 relative group overflow-hidden shadow-[0_0_30px_rgba(0,226,193,0.05)]">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#00E2C1]"></div>
                <div className="flex flex-col gap-1 md:gap-2 pl-4">
                  <span className="text-xl md:text-3xl font-extrabold text-white">Após 3 meses</span>
                  <span className="text-[13px] md:text-[14px] text-[#00E2C1]/80 leading-relaxed font-medium">Aumento significativo do risco de perda visual irreversível</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Closing phrase */}
          <div className="mt-16 md:mt-24 text-center max-w-4xl mx-auto border-t border-white/10 pt-12 md:pt-16">
            <p className="text-[16px] md:text-[24px] font-light text-white/70 leading-relaxed italic">
              "Quando o tempo de espera supera a <span className="text-[#00E2C1] font-semibold not-italic">janela ideal de intervenção</span>, a perda visual pode deixar de ser evitável."
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: ROI da Prevenção */}
      <section className="relative py-24 md:py-40 px-margin-mobile md:px-margin-desktop border-t border-white/5 bg-[#050505] overflow-hidden">
        {/* Glow effect */}
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#00E2C1]/5 blur-[120px] rounded-full pointer-events-none z-0 -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#00E2C1]/5 blur-[120px] rounded-full pointer-events-none z-0 -translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="max-w-4xl mx-auto relative z-10 flex flex-col">
          <div className="flex items-center gap-3 mb-6 self-start md:self-center">
            <div className="h-[1px] w-8 md:w-12 bg-[#00E2C1]/30 hidden md:block"></div>
            <span className="text-[10px] font-bold text-[#00E2C1] tracking-[0.3em] uppercase">ROI da Prevenção</span>
            <div className="h-[1px] w-8 md:w-12 bg-[#00E2C1]/30"></div>
          </div>
          
          <h2 className="text-[40px] md:text-[64px] leading-[1.1] font-extrabold text-white mb-8 tracking-tight text-left md:text-center">
            Quanto custa <br />
            <span className="text-[#00E2C1]">esperar?</span>
          </h2>

          <div className="text-[16px] md:text-[20px] text-white/70 leading-relaxed max-w-[680px] mb-12 text-left md:text-center md:mx-auto">
            <p>Intervir precocemente não protege apenas a visão. <br className="hidden md:block"/> Também pode reduzir drasticamente o custo assistencial.</p>
          </div>
          
          <div className="text-left md:text-center mb-10 w-full md:mx-auto max-w-[700px]">
             <h4 className="text-[14px] md:text-[18px] font-bold text-white mb-2 uppercase tracking-wide">Tratar antes <span className="text-[#00E2C1]">custa menos.</span></h4>
             <p className="text-[12px] md:text-[14px] text-white/50">O impacto varia conforme patologia, estágio e conduta clínica.</p>
          </div>

          <div className="flex flex-col gap-8 w-full max-w-[700px] mx-auto mb-16">
            
            {/* Row 1 */}
            <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-white/10 pb-6 gap-6 md:gap-0">
              <h3 className="text-[18px] md:text-[22px] font-bold text-white w-full md:w-1/3 leading-tight tracking-wide uppercase">Retinopatia <br/> Hipertensiva</h3>
              <div className="flex justify-between md:justify-start w-full md:w-2/3 gap-8 md:gap-16">
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-[#00E2C1] tracking-widest uppercase mb-1">Precoce</span>
                  <span className="text-[18px] md:text-[24px] font-bold text-[#00E2C1]">R$ 100 a R$ 250</span>
                  <div className="h-[2px] w-full bg-[#00E2C1] mt-2"></div>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-white/40 tracking-widest uppercase mb-1">Tardio</span>
                  <span className="text-[18px] md:text-[24px] font-bold text-white">R$ 1.500 a R$ 9.000</span>
                  <div className="h-[2px] w-full bg-white/30 mt-2"></div>
                </div>
              </div>
            </div>

            {/* Row 2 */}
            <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-white/10 pb-6 gap-6 md:gap-0">
              <h3 className="text-[18px] md:text-[22px] font-bold text-white w-full md:w-1/3 leading-tight tracking-wide uppercase">Glaucoma</h3>
              <div className="flex justify-between md:justify-start w-full md:w-2/3 gap-8 md:gap-16">
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-[#00E2C1] tracking-widest uppercase mb-1">Precoce</span>
                  <span className="text-[18px] md:text-[24px] font-bold text-[#00E2C1]">R$ 200 a R$ 450</span>
                  <div className="h-[2px] w-full bg-[#00E2C1] mt-2"></div>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-white/40 tracking-widest uppercase mb-1">Tardio</span>
                  <span className="text-[18px] md:text-[24px] font-bold text-white">R$ 2.800 a R$ 5.200</span>
                  <div className="h-[2px] w-full bg-white/30 mt-2"></div>
                </div>
              </div>
            </div>

            {/* Row 3 */}
            <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-white/10 pb-6 gap-6 md:gap-0">
              <h3 className="text-[18px] md:text-[22px] font-bold text-white w-full md:w-1/3 leading-tight tracking-wide uppercase">Retinopatia <br/> Diabética</h3>
              <div className="flex justify-between md:justify-start w-full md:w-2/3 gap-8 md:gap-16">
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-[#00E2C1] tracking-widest uppercase mb-1">Precoce</span>
                  <span className="text-[18px] md:text-[24px] font-bold text-[#00E2C1]">R$ 350 a R$ 900</span>
                  <div className="h-[2px] w-full bg-[#00E2C1] mt-2"></div>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-white/40 tracking-widest uppercase mb-1">Tardio</span>
                  <span className="text-[18px] md:text-[24px] font-bold text-white">R$ 3.800 a R$ 7.500</span>
                  <div className="h-[2px] w-full bg-white/30 mt-2"></div>
                </div>
              </div>
            </div>

          </div>

          {/* Footer Info */}
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end w-full max-w-[700px] mx-auto gap-8">
            <div className="flex flex-col items-center md:items-start gap-4 max-w-[450px] text-center md:text-left">
              <div className="flex flex-col gap-1">
                <span className="text-[12px] font-bold text-white uppercase tracking-wider">Fonte e Metodologia</span>
                <p className="text-[11px] md:text-[12px] text-white/60 leading-relaxed">
                  Análise de Custos e Efetividade no Tratamento de Patologias Oculares no Sistema Único de Saúde: Um Estudo Comparativo entre Intervenção Precoce e Manejo em Estágios Avançados
                </p>
              </div>
              <a 
                href="https://docs.google.com/document/u/0/d/1UFoUwBax2POJaG-xh5p6JwXXHvAJuWTtMnWxi4Asu-A/mobilebasic" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-[#00E2C1] hover:text-white transition-colors group mt-2"
              >
                <div className="w-10 h-10 rounded-full border border-[#00E2C1]/30 flex items-center justify-center group-hover:border-white/30 transition-colors">
                  <span className="material-symbols-outlined text-[18px]">description</span>
                </div>
                <span className="text-[11px] font-bold uppercase tracking-widest">Consultar Estudo Completo →</span>
              </a>
            </div>
            
            <div className="w-32 h-32 md:w-40 md:h-40 bg-white p-3 rounded-xl flex-shrink-0 self-center md:self-end mt-4 md:mt-0 shadow-[0_0_30px_rgba(255,255,255,0.1)]">
              <img src="https://i.imgur.com/BBkqrSS.png" alt="QR Code Estudo" className="w-full h-full object-contain" />
            </div>
          </div>
          
        </div>
      </section>

      {/* Section 6: How it Works */}
      <section className="relative py-24 md:py-40 px-margin-mobile md:px-margin-desktop border-t border-white/5 bg-[#080808]">
        {/* Glow effect */}
        <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[#00E2C1]/5 blur-[150px] rounded-full pointer-events-none z-0"></div>
        
        <div className="max-w-container-max mx-auto relative z-10">
          <div className="flex flex-col items-center text-center mb-16 md:mb-24">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-[1px] w-8 md:w-12 bg-[#00E2C1]/30"></div>
              <span className="text-[10px] font-bold text-[#00E2C1] tracking-[0.3em] uppercase">Como Funciona</span>
              <div className="h-[1px] w-8 md:w-12 bg-[#00E2C1]/30"></div>
            </div>
            
            <h2 className="text-[32px] md:text-[48px] leading-[1.1] font-extrabold text-white mb-6 tracking-tight max-w-[800px]">
              Uma nova camada de inteligência para a <span className="text-[#00E2C1]">triagem oftalmológica</span>
            </h2>
            
            <p className="text-[16px] md:text-[20px] text-white/50 leading-relaxed">
              Quatro etapas. Da captura do exame à priorização clínica.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
            {/* Step 1 */}
            <div className="bg-[#141414] border border-white/10 rounded-3xl p-8 md:p-10 relative group hover:border-[#00E2C1]/30 transition-colors duration-500">
              <div className="absolute top-0 right-0 p-8 text-[64px] font-black text-white/5 group-hover:text-[#00E2C1]/10 transition-colors duration-500 leading-none select-none">01</div>
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-[#00E2C1]/10 group-hover:border-[#00E2C1]/30 transition-colors duration-500">
                <span className="material-symbols-outlined text-white/70 group-hover:text-[#00E2C1] transition-colors duration-500">camera</span>
              </div>
              <h3 className="text-[20px] md:text-[24px] font-bold text-white mb-4">Captura</h3>
              <p className="text-[15px] md:text-[16px] text-white/50 leading-relaxed">
                A Veredictos se integra ao retinógrafo já existente no hospital, sem substituir equipamentos.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-[#141414] border border-white/10 rounded-3xl p-8 md:p-10 relative group hover:border-[#00E2C1]/30 transition-colors duration-500">
              <div className="absolute top-0 right-0 p-8 text-[64px] font-black text-white/5 group-hover:text-[#00E2C1]/10 transition-colors duration-500 leading-none select-none">02</div>
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-[#00E2C1]/10 group-hover:border-[#00E2C1]/30 transition-colors duration-500">
                <span className="material-symbols-outlined text-white/70 group-hover:text-[#00E2C1] transition-colors duration-500">memory</span>
              </div>
              <h3 className="text-[20px] md:text-[24px] font-bold text-white mb-4">Processamento</h3>
              <p className="text-[15px] md:text-[16px] text-white/50 leading-relaxed">
                A plataforma cruza a retinografia com dados clínicos relevantes do paciente para ampliar a precisão da priorização.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-[#141414] border border-white/10 rounded-3xl p-8 md:p-10 relative group hover:border-[#00E2C1]/30 transition-colors duration-500">
              <div className="absolute top-0 right-0 p-8 text-[64px] font-black text-white/5 group-hover:text-[#00E2C1]/10 transition-colors duration-500 leading-none select-none">03</div>
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-[#00E2C1]/10 group-hover:border-[#00E2C1]/30 transition-colors duration-500">
                <span className="material-symbols-outlined text-white/70 group-hover:text-[#00E2C1] transition-colors duration-500">analytics</span>
              </div>
              <h3 className="text-[20px] md:text-[24px] font-bold text-white mb-4">Análise</h3>
              <p className="text-[15px] md:text-[16px] text-white/50 leading-relaxed mb-4">
                A IA analisa a retinografia e os dados clínicos em segundos para identificar sinais compatíveis com doenças oftalmológicas prioritárias.
              </p>
              <div className="bg-black/30 border border-white/5 rounded-xl p-4">
                <p className="text-[13px] uppercase tracking-widest text-[#00E2C1] font-bold mb-3">A plataforma gera:</p>
                <ul className="flex flex-col gap-2">
                  <li className="flex items-start gap-2 text-[14px] text-white/70">
                    <span className="material-symbols-outlined text-[#00E2C1] text-[16px] mt-0.5">check</span>
                    Um relatório clínico estruturado;
                  </li>
                  <li className="flex items-start gap-2 text-[14px] text-white/70">
                    <span className="material-symbols-outlined text-[#00E2C1] text-[16px] mt-0.5">check</span>
                    Uma fila organizada por risco clínico.
                  </li>
                </ul>
              </div>
            </div>

            {/* Step 4 */}
            <div className="bg-[#141414] border border-[#00E2C1]/20 rounded-3xl p-8 md:p-10 relative group shadow-[0_0_30px_rgba(0,226,193,0.05)] hover:shadow-[0_0_50px_rgba(0,226,193,0.1)] transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00E2C1]/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-0 right-0 p-8 text-[64px] font-black text-[#00E2C1]/10 leading-none select-none">04</div>
              <div className="relative z-10 w-12 h-12 rounded-xl bg-[#00E2C1]/10 border border-[#00E2C1]/30 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-[#00E2C1]">priority</span>
              </div>
              <h3 className="relative z-10 text-[20px] md:text-[24px] font-bold text-white mb-4">Decisão</h3>
              <p className="relative z-10 text-[15px] md:text-[16px] text-white/70 leading-relaxed mb-4">
                O médico regulador recebe a fila organizada por prioridade clínica.
              </p>
              <p className="relative z-10 text-[15px] md:text-[16px] text-[#00E2C1]/90 font-medium leading-relaxed">
                O oftalmologista mantém total autonomia sobre diagnóstico e conduta.
              </p>
            </div>
          </div>

          {/* Final Quote */}
          <div className="mt-20 md:mt-32 max-w-4xl mx-auto flex flex-col items-center text-center">
            <span className="material-symbols-outlined text-[#00E2C1]/40 text-4xl mb-6">format_quote</span>
            <p className="text-[20px] md:text-[28px] font-light text-white/80 leading-relaxed italic mb-8">
              "A tecnologia não substitui o especialista. <br className="hidden md:block"/>
              <span className="text-[#00E2C1] font-medium not-italic">Ela garante que o especialista veja primeiro quem mais precisa.</span>"
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full border-2 border-[#00E2C1]/30 overflow-hidden bg-[#141414]">
                 <img src="https://i.imgur.com/d6MKvG0.png" alt="Dr. João Batista" className="w-full h-full object-cover grayscale opacity-80" />
              </div>
              <div className="flex flex-col items-start text-left">
                <span className="text-[14px] font-bold text-white">Dr. João Batista</span>
                <span className="text-[12px] text-white/50 uppercase tracking-widest">CMO e Oftalmologista</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Clinical Report & AI Analysis */}
      <section className="relative py-24 md:py-40 px-margin-mobile md:px-margin-desktop border-t border-white/5 bg-[#0a0a0a] overflow-hidden">
        {/* Glow effect */}
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#00E2C1]/5 blur-[150px] rounded-full pointer-events-none z-0 translate-y-1/2 translate-x-1/3"></div>
        
        <div className="max-w-container-max mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-20 items-center">
            
            {/* Left Column: Report */}
            <div className="flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-[10px] font-bold text-[#00E2C1] tracking-[0.3em] uppercase">Documentação Clínica</span>
                <div className="h-[1px] w-8 md:w-12 bg-[#00E2C1]/30"></div>
              </div>
              
              <h2 className="text-[32px] md:text-[42px] leading-[1.1] font-extrabold text-white mb-4 tracking-tight">
                Transformamos imagens em <br className="hidden lg:block"/>
                <span className="text-[#00E2C1]">decisão clínica estruturada.</span>
              </h2>
              
              <p className="text-[16px] md:text-[18px] text-white/80 font-medium mb-6 max-w-[500px]">
                Um relatório estruturado para apoiar triagem, priorização e decisão clínica.
              </p>
              
              <p className="text-[15px] md:text-[16px] text-white/50 leading-relaxed mb-10 max-w-[500px]">
                A Veredictos transforma a retinografia em um relatório clínico organizado, padronizado e auditável, tudo para auxiliar a decisão clínica do médico.
              </p>

              <div className="mb-12 bg-black/40 border border-white/5 rounded-2xl p-6 md:p-8 backdrop-blur-sm">
                <h4 className="text-[12px] uppercase tracking-widest text-white/40 font-bold mb-6">O relatório inclui:</h4>
                <ul className="flex flex-col gap-4">
                  {[
                    "Suspeita diagnóstica com classificação ETDRS;",
                    "Identificação de achados clínicos relevantes;",
                    "Priorização clínica do caso;",
                    "Recomendação de encaminhamento;",
                    "Rastreabilidade completa da análise."
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-[#00E2C1] text-[20px]">task_alt</span>
                      <span className="text-[14px] md:text-[15px] text-white/80 leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Miniature Report Card */}
              <div 
                className="bg-[#fdfcf8] rounded-xl p-5 md:p-6 shadow-2xl relative overflow-hidden transform -rotate-2 hover:rotate-0 transition-all duration-500 max-w-[450px] border-l-4 border-[#7f1d1d] group cursor-pointer"
                onClick={() => setIsReportModalOpen(true)}
              >
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 backdrop-blur-[2px]">
                    <span className="bg-[#00E2C1] text-black px-5 py-2.5 rounded-sm font-bold uppercase tracking-widest text-[11px] flex items-center gap-2 shadow-xl hover:bg-white transition-colors">
                      <span className="material-symbols-outlined text-[16px]">visibility</span>
                      Ver Laudo Completo
                    </span>
                  </div>
                 <div className="flex justify-between items-center border-b border-[#0a0e1a]/20 pb-3 mb-4">
                   <div className="flex items-center gap-2">
                     <div className="w-6 h-6 bg-[#0a0e1a] text-[#c79b3a] flex items-center justify-center font-serif font-bold text-xs">V</div>
                     <span className="font-serif font-bold text-[#0a0e1a] text-[13px]">Veredictos</span>
                   </div>
                   <span className="text-[9px] text-[#7f1d1d] font-bold tracking-widest uppercase px-2 py-1 bg-[#7f1d1d]/10 rounded border border-[#7f1d1d]/20">Urgente</span>
                 </div>
                 
                 <div className="mb-4">
                   <span className="text-[9px] text-[#7f1d1d] uppercase tracking-widest font-bold block mb-1">Suspeita diagnóstica primária</span>
                   <h4 className="font-serif text-[#0a0e1a] font-bold text-[15px] leading-tight">
                     Retinopatia diabética não-proliferativa severa com edema macular
                   </h4>
                 </div>

                 <div className="grid grid-cols-2 gap-4 border-t border-b border-[#0a0e1a]/10 py-3 mb-4">
                   <div>
                     <span className="block text-[8px] text-[#94a3b8] uppercase tracking-widest mb-1">Paciente</span>
                     <span className="block text-[11px] font-bold text-[#0a0e1a]">M.S.O. (58 anos)</span>
                   </div>
                   <div>
                     <span className="block text-[8px] text-[#94a3b8] uppercase tracking-widest mb-1">Confiança da IA</span>
                     <span className="block text-[11px] font-bold text-[#0a0e1a]">94,3 %</span>
                   </div>
                 </div>

                 <div className="bg-[#7f1d1d] text-[#fdf2f2] p-3 rounded flex items-center justify-between">
                     <span className="text-[9px] uppercase tracking-widest font-bold">Conduta Recomendada</span>
                     <span className="text-[11px] font-bold ml-2 text-right">Encaminhamento em até 7 dias</span>
                 </div>
              </div>
            </div>

            {/* Right Column: Interactive Slider */}
            <div className="flex flex-col h-full justify-center">
               <div className="mb-8">
                 <h3 className="text-[24px] md:text-[32px] font-extrabold text-white leading-tight mb-4 tracking-tight">
                   O olho humano vê uma retina.<br/>
                   <span className="text-[#00E2C1]">A IA identifica padrões invisíveis em escala.</span>
                 </h3>
                 <p className="text-[15px] md:text-[16px] text-white/50 leading-relaxed max-w-[480px]">
                   À esquerda, uma retinografia convencional. À direita, a mesma imagem analisada pela Veredictos.
                 </p>
               </div>

               {/* Comparison Slider Component */}
               <div className="relative w-full aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden group border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.5)] cursor-ew-resize select-none bg-[#050505]">
                 
                 {/* Analyzed Image (Right side revealed) */}
                 <img 
                   src="https://i.imgur.com/bULorzS.png" 
                   alt="Retina analisada por IA" 
                   className="absolute inset-0 w-full h-full object-contain pointer-events-none select-none p-2 sm:p-4 md:p-6" 
                 />
                 
                 {/* Original Image (Left side) */}
                 <img 
                   src="https://i.imgur.com/joWJoH8.png" 
                   alt="Retina original" 
                   className="absolute inset-0 w-full h-full object-contain pointer-events-none select-none p-2 sm:p-4 md:p-6" 
                   style={{ clipPath: `inset(0 ${100 - sliderValue}% 0 0)` }}
                 />
                 
                 {/* Slider Track and Handle */}
                 <div className="absolute inset-0 z-20">
                   {/* Range input for accessible and mobile-friendly interaction */}
                   <input 
                     type="range" 
                     min="0" 
                     max="100" 
                     value={sliderValue} 
                     onChange={(e) => setSliderValue(Number(e.target.value))}
                     className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30 touch-pan-y" 
                   />
                   
                   {/* Visible Handle Line */}
                   <div 
                     className="absolute top-0 bottom-0 w-[2px] bg-white/70 shadow-[0_0_15px_rgba(0,0,0,1)] flex items-center justify-center pointer-events-none"
                     style={{ left: `${sliderValue}%`, transform: 'translateX(-50%)' }}
                   >
                     {/* Grabber Button */}
                     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(0,0,0,0.5)] border border-black/10 group-hover:scale-110 transition-transform">
                       <span className="material-symbols-outlined text-black rotate-90 text-[20px]">unfold_more</span>
                     </div>
                   </div>
                 </div>
                 
                 {/* Labels */}
                 <div className="absolute top-4 left-4 z-10 pointer-events-none font-mono text-[10px] md:text-[12px] bg-black/60 backdrop-blur text-white px-3 py-1 rounded border border-white/10 uppercase tracking-widest">
                   Convencional
                 </div>
                 <div className="absolute top-4 right-4 z-10 pointer-events-none font-mono text-[10px] md:text-[12px] bg-[#00E2C1]/20 backdrop-blur text-[#00E2C1] px-3 py-1 rounded border border-[#00E2C1]/30 uppercase tracking-widest">
                   Análise IA
                 </div>
               </div>

               {/* Hint text */}
               <div className="mt-4 flex justify-center gap-2 text-white/30 text-[12px] items-center">
                 <span className="material-symbols-outlined text-[16px]">swipe</span>
                 Arraste para comparar
               </div>
            </div>
            
          </div>
          
          {/* Closing Phrase */}
          <div className="mt-24 md:mt-32 max-w-4xl mx-auto border-t border-white/10 pt-12 md:pt-16 text-center">
            <p className="text-[18px] md:text-[24px] font-light text-white/80 leading-relaxed italic">
              "A tecnologia não substitui a interpretação clínica. <br className="hidden md:block"/>
              <span className="text-[#00E2C1] font-medium not-italic">Ela amplia a capacidade do sistema de identificar quem precisa de cuidado primeiro.</span>"
            </p>
          </div>
        </div>
      </section>

      {/* Section 6: Fila Baseada no Risco */}
      <section className="relative py-24 md:py-40 px-margin-mobile md:px-margin-desktop border-t border-white/5 bg-[#080808] overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#00E2C1]/10 to-transparent"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-black/50 blur-[100px] rounded-full pointer-events-none z-0"></div>
        
        <div className="max-w-container-max mx-auto relative z-10">
          <div className="flex flex-col items-center text-center mb-16 md:mb-24">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-[1px] w-8 md:w-12 bg-[#00E2C1]/30"></div>
              <span className="text-[10px] font-bold text-[#00E2C1] tracking-[0.3em] uppercase">Gestão da Fila</span>
              <div className="h-[1px] w-8 md:w-12 bg-[#00E2C1]/30"></div>
            </div>
            
            <h2 className="text-[32px] md:text-[48px] leading-[1.1] font-extrabold text-white mb-6 tracking-tight max-w-[800px]">
              A fila deixa de ser cronológica.<br className="hidden md:block"/>
              <span className="text-[#00E2C1]">Passa a ser baseada no risco.</span>
            </h2>
            
            <p className="text-[16px] md:text-[20px] text-white/50 leading-relaxed max-w-[700px]">
              Priorização clínica estruturada para reduzir atraso nos casos críticos.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 mb-16 md:mb-24">
            
            {/* Card: Urgent */}
            <div className="bg-[#141414] border border-[#f87171]/20 rounded-xl md:rounded-2xl p-4 md:p-6 flex flex-col relative overflow-hidden group hover:border-[#f87171]/40 transition-colors shadow-[0_0_30px_rgba(248,113,113,0.03)] hover:shadow-[0_0_40px_rgba(248,113,113,0.08)]">
              <div className="absolute top-0 right-0 w-16 h-16 md:w-24 md:h-24 bg-[#f87171]/10 blur-[30px] md:blur-[40px] rounded-full"></div>
              <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-6">
                <span className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-[#f87171] shadow-[0_0_10px_rgba(248,113,113,0.8)] animate-pulse"></span>
                <span className="text-[#f87171] font-bold tracking-widest uppercase text-[9px] md:text-[11px]">Urgente</span>
              </div>
              <p className="text-[11px] md:text-[14px] text-white/80 font-medium mb-1 md:mb-2 min-h-[34px] md:min-h-[42px] leading-snug">
                Risco elevado de progressão da doença
              </p>
              <p className="text-[10px] md:text-[13px] text-white/50 mb-3 pb-3 md:mb-8 md:pb-6 border-b border-white/5">
                Encaminhamento <br className="hidden md:block"/>em até <strong className="text-white">7-15 dias</strong>.
              </p>
              
              <div className="mt-auto bg-black/40 border border-white/5 rounded-lg md:rounded-xl p-3 md:p-4">
                <span className="text-[8px] md:text-[10px] text-white/40 uppercase tracking-widest block mb-1 md:mb-2 font-bold line-clamp-1">Diagnóstico</span>
                <p className="text-[11px] md:text-[13px] text-white font-medium mb-1 line-clamp-2 md:line-clamp-none leading-tight">Retinopatia diabética proliferativa</p>
                <div className="flex justify-between items-center mt-2 md:mt-3">
                   <span className="text-[9px] md:text-[11px] text-[#f87171] font-bold">Risco</span>
                   <span className="text-[10px] md:text-[12px] font-mono text-[#f87171] font-bold bg-[#f87171]/10 px-1.5 md:px-2 py-0.5 rounded">89%</span>
                </div>
              </div>
            </div>

            {/* Card: Proritary */}
            <div className="bg-[#141414] border border-[#fb923c]/20 rounded-xl md:rounded-2xl p-4 md:p-6 flex flex-col relative overflow-hidden group hover:border-[#fb923c]/40 transition-colors shadow-[0_0_30px_rgba(251,146,60,0.03)] hover:shadow-[0_0_40px_rgba(251,146,60,0.08)]">
              <div className="absolute top-0 right-0 w-16 h-16 md:w-24 md:h-24 bg-[#fb923c]/10 blur-[30px] md:blur-[40px] rounded-full"></div>
              <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-6">
                <span className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-[#fb923c] shadow-[0_0_10px_rgba(251,146,60,0.6)]"></span>
                <span className="text-[#fb923c] font-bold tracking-widest uppercase text-[9px] md:text-[11px]">Prioritário</span>
              </div>
              <p className="text-[11px] md:text-[14px] text-white/80 font-medium mb-1 md:mb-2 min-h-[34px] md:min-h-[42px] leading-snug">
                Alterações relevantes com necessidade especializada
              </p>
              <p className="text-[10px] md:text-[13px] text-white/50 mb-3 pb-3 md:mb-8 md:pb-6 border-b border-white/5">
                Encaminhamento <br className="hidden md:block"/>em até <strong className="text-white">30-60 dias</strong>.
              </p>
              
              <div className="mt-auto bg-black/40 border border-white/5 rounded-lg md:rounded-xl p-3 md:p-4">
                <span className="text-[8px] md:text-[10px] text-white/40 uppercase tracking-widest block mb-1 md:mb-2 font-bold line-clamp-1">Diagnóstico</span>
                <p className="text-[11px] md:text-[13px] text-white font-medium mb-1 line-clamp-2 md:line-clamp-none leading-tight">Glaucoma</p>
                <div className="flex justify-between items-center mt-2 md:mt-3">
                   <span className="text-[9px] md:text-[11px] text-[#fb923c] font-bold">Risco</span>
                   <span className="text-[10px] md:text-[12px] font-mono text-[#fb923c] font-bold bg-[#fb923c]/10 px-1.5 md:px-2 py-0.5 rounded">62%</span>
                </div>
              </div>
            </div>

            {/* Card: Moderate */}
            <div className="bg-[#141414] border border-[#fbbf24]/20 rounded-xl md:rounded-2xl p-4 md:p-6 flex flex-col relative overflow-hidden group hover:border-[#fbbf24]/40 transition-colors shadow-[0_0_30px_rgba(251,191,36,0.03)] hover:shadow-[0_0_40px_rgba(251,191,36,0.08)]">
              <div className="absolute top-0 right-0 w-16 h-16 md:w-24 md:h-24 bg-[#fbbf24]/10 blur-[30px] md:blur-[40px] rounded-full"></div>
              <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-6">
                <span className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-[#fbbf24] shadow-[0_0_10px_rgba(251,191,36,0.6)]"></span>
                <span className="text-[#fbbf24] font-bold tracking-widest uppercase text-[9px] md:text-[11px]">Moderado</span>
              </div>
              <p className="text-[11px] md:text-[14px] text-white/80 font-medium mb-1 md:mb-2 min-h-[34px] md:min-h-[42px] leading-snug">
                Sinais iniciais. Acompanhamento programado.
              </p>
              <p className="text-[10px] md:text-[13px] text-white/50 mb-3 pb-3 md:mb-8 md:pb-6 border-b border-white/5">
                Encaminhamento <br className="hidden md:block"/>em até <strong className="text-white">60-90 dias</strong>.
              </p>
              
              <div className="mt-auto bg-black/40 border border-white/5 rounded-lg md:rounded-xl p-3 md:p-4">
                <span className="text-[8px] md:text-[10px] text-white/40 uppercase tracking-widest block mb-1 md:mb-2 font-bold line-clamp-1">Diagnóstico</span>
                <p className="text-[11px] md:text-[13px] text-white font-medium mb-1 line-clamp-2 md:line-clamp-none leading-tight">Retinopatia diabética NP</p>
                <div className="flex justify-between items-center mt-2 md:mt-3">
                   <span className="text-[9px] md:text-[11px] text-[#fbbf24] font-bold">Risco</span>
                   <span className="text-[10px] md:text-[12px] font-mono text-[#fbbf24] font-bold bg-[#fbbf24]/10 px-1.5 md:px-2 py-0.5 rounded">34%</span>
                </div>
              </div>
            </div>

            {/* Card: Routine */}
            <div className="bg-[#141414] border border-[#10b981]/20 rounded-xl md:rounded-2xl p-4 md:p-6 flex flex-col relative overflow-hidden group hover:border-[#10b981]/40 transition-colors shadow-[0_0_30px_rgba(16,185,129,0.03)] hover:shadow-[0_0_40px_rgba(16,185,129,0.08)]">
              <div className="absolute top-0 right-0 w-16 h-16 md:w-24 md:h-24 bg-[#10b981]/10 blur-[30px] md:blur-[40px] rounded-full"></div>
              <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-6">
                <span className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-[#10b981] shadow-[0_0_10px_rgba(16,185,129,0.5)]"></span>
                <span className="text-[#10b981] font-bold tracking-widest uppercase text-[9px] md:text-[11px]">Rotina</span>
              </div>
              <p className="text-[11px] md:text-[14px] text-white/80 font-medium mb-1 md:mb-2 min-h-[34px] md:min-h-[42px] leading-snug">
                Ausência de alterações significativas identificadas
              </p>
              <p className="text-[10px] md:text-[13px] text-white/50 mb-3 pb-3 md:mb-8 md:pb-6 border-b border-white/5">
                Encaminhamento <br className="hidden md:block"/>em até <strong className="text-white">90-120 dias</strong>.
              </p>
              
              <div className="mt-auto bg-black/40 border border-white/5 rounded-lg md:rounded-xl p-3 md:p-4">
                <span className="text-[10px] text-white/40 uppercase tracking-widest block mb-2 font-bold">Diagnóstico Assistido</span>
                <p className="text-[13px] text-white font-medium mb-1">Sem alterações</p>
                <div className="flex justify-between items-center mt-3">
                   <span className="text-[11px] text-[#10b981] font-bold">Risco estimado</span>
                   <span className="text-[12px] font-mono text-[#10b981] font-bold bg-[#10b981]/10 px-2 py-0.5 rounded">12%</span>
                </div>
              </div>
            </div>
            
          </div>

          {/* Primary Care Block */}
          <div className="relative w-full rounded-[30px] border border-white/10 bg-gradient-to-br from-[#141414] to-black p-8 md:p-14 overflow-hidden mb-16">
             <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#00E2C1]/5 to-transparent pointer-events-none"></div>
             
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 relative z-10">
               <div>
                 <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6">
                    <span className="material-symbols-outlined text-[16px] text-[#00E2C1]">medical_services</span>
                    <span className="text-[11px] uppercase tracking-widest font-bold text-white/70">Apoio à Atenção Primária</span>
                 </div>
                 
                 <h3 className="text-[26px] md:text-[34px] font-extrabold text-white mb-6 leading-tight tracking-tight">
                   Enquanto o paciente aguarda na fila, <span className="text-[#00E2C1]">ele não fica sem cuidado.</span>
                 </h3>
                 
                 <p className="text-[15px] md:text-[16px] text-white/50 leading-relaxed max-w-[500px]">
                   Para cada paciente priorizado, a plataforma gera orientações de apoio para a atenção primária. 
                   O objetivo é reduzir a progressão da doença enquanto o encaminhamento especializado acontece.
                 </p>
               </div>
               
               <div className="flex flex-col justify-center">
                 <ul className="space-y-4">
                   <li className="flex gap-4 p-4 rounded-xl bg-black/40 border border-white/5 group hover:border-white/10 transition-colors">
                     <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center shrink-0 border border-white/5 group-hover:bg-[#00E2C1]/10 group-hover:border-[#00E2C1]/30 transition-colors">
                        <span className="material-symbols-outlined text-[18px] text-white/70 group-hover:text-[#00E2C1]">blood_pressure</span>
                     </div>
                     <div>
                       <p className="text-[14px] text-white/80 font-medium mb-1">Controle glicêmico e revisão terapêutica</p>
                       <p className="text-[13px] text-white/40">Recomendado para pacientes com retinopatia diabética</p>
                     </div>
                   </li>
                   
                   <li className="flex gap-4 p-4 rounded-xl bg-black/40 border border-white/5 group hover:border-white/10 transition-colors">
                     <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center shrink-0 border border-white/5 group-hover:bg-[#00E2C1]/10 group-hover:border-[#00E2C1]/30 transition-colors">
                        <span className="material-symbols-outlined text-[18px] text-white/70 group-hover:text-[#00E2C1]">monitor_heart</span>
                     </div>
                     <div>
                       <p className="text-[14px] text-white/80 font-medium mb-1">Controle pressórico direcionado</p>
                       <p className="text-[13px] text-white/40">Recomendado para pacientes com retinopatia hipertensiva</p>
                     </div>
                   </li>

                   <li className="flex gap-4 p-4 rounded-xl bg-black/40 border border-white/5 group hover:border-white/10 transition-colors">
                     <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center shrink-0 border border-white/5 group-hover:bg-[#00E2C1]/10 group-hover:border-[#00E2C1]/30 transition-colors">
                        <span className="material-symbols-outlined text-[18px] text-white/70 group-hover:text-[#00E2C1]">visibility</span>
                     </div>
                     <div>
                       <p className="text-[14px] text-white/80 font-medium mb-1">Monitoramento de PIO e fatores de risco</p>
                       <p className="text-[13px] text-white/40">Recomendado em casos suspeitos de glaucoma</p>
                     </div>
                   </li>
                 </ul>
               </div>
             </div>
          </div>

          <div className="text-center">
            <h4 className="text-[20px] md:text-[28px] font-bold text-white mb-2">
              A doença não espera a consulta. <span className="text-[#00E2C1]">O cuidado também não precisa esperar.</span>
            </h4>
            <p className="text-[14px] md:text-[16px] text-white/50 uppercase tracking-widest font-bold">
              Cada decisão fica registrada, rastreável e fundamentada em critério clínico.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: Realidade do SUS */}
      <section className="relative py-24 md:py-40 px-margin-mobile md:px-margin-desktop border-t border-white/5 bg-[#050505] overflow-hidden">
        <div className="max-w-container-max mx-auto relative z-10 flex flex-col items-center">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-[1px] w-8 md:w-12 bg-[#00E2C1]/30 hidden md:block"></div>
            <span className="text-[10px] font-bold text-[#00E2C1] tracking-[0.3em] uppercase text-center">Construída dentro da realidade do SUS</span>
            <div className="h-[1px] w-8 md:w-12 bg-[#00E2C1]/30 hidden md:block"></div>
          </div>
          
          <h2 className="text-[32px] md:text-[56px] leading-[1.1] font-extrabold text-white mb-8 tracking-tight text-center max-w-[800px]">
            Não adaptamos o SUS ao produto.<br />
            <span className="text-[#00E2C1]">Construímos o produto para a realidade do SUS.</span>
          </h2>

          <div className="text-[16px] md:text-[20px] text-white/70 leading-relaxed max-w-[800px] mb-16 text-center mx-auto flex flex-col gap-6">
            <p>A Veredictos Vision está sendo idealizada em conjunto com equipes de TI, gestão e clínica do Centro Carioca do Olho, em parceria com a Secretaria de Saúde e a Secretaria de Tecnologia da cidade do Rio de Janeiro.</p>
            <p><span className="text-[#00E2C1] font-bold">Produto, protocolo</span> e <span className="text-[#00E2C1] font-bold">implantação</span> sendo desenhados com quem opera, decide e sustenta a realidade da saúde pública.</p>
          </div>

          {/* Desktop Diagram */}
          <div className="relative w-full max-w-[900px] h-[600px] hidden md:block mx-auto mb-16">
            {/* SVG Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
              <line x1="25%" y1="25%" x2="50%" y2="50%" stroke="#00E2C1" strokeWidth="2" strokeOpacity="0.3" strokeDasharray="4 4" />
              <line x1="75%" y1="25%" x2="50%" y2="50%" stroke="#00E2C1" strokeWidth="2" strokeOpacity="0.3" strokeDasharray="4 4" />
              <line x1="25%" y1="75%" x2="50%" y2="50%" stroke="#00E2C1" strokeWidth="2" strokeOpacity="0.3" strokeDasharray="4 4" />
              <line x1="75%" y1="75%" x2="50%" y2="50%" stroke="#00E2C1" strokeWidth="2" strokeOpacity="0.3" strokeDasharray="4 4" />
              
              {/* Connecting dots */}
              <circle cx="25%" cy="25%" r="4" fill="#00E2C1" />
              <circle cx="75%" cy="25%" r="4" fill="#00E2C1" />
              <circle cx="25%" cy="75%" r="4" fill="#00E2C1" />
              <circle cx="75%" cy="75%" r="4" fill="#00E2C1" />
              <circle cx="50%" cy="50%" r="4" fill="#00E2C1" />
            </svg>
            
            {/* Center Node */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-[240px] h-[240px] rounded-full bg-black border-2 border-[#00E2C1] flex flex-col items-center justify-center p-6 text-center shadow-[0_0_50px_rgba(0,226,193,0.15)]">
              <h3 className="text-[20px] font-bold text-white mb-2 uppercase tracking-wide">Centro Carioca<br/>do Olho</h3>
              <p className="text-[12px] text-white/50 leading-snug">Ambiente real de construção e validação</p>
            </div>

            {/* Top Left */}
            <div className="absolute top-[25%] left-[25%] -translate-x-1/2 -translate-y-1/2 z-10 w-[200px] h-[200px] rounded-full bg-black border border-[#00E2C1]/40 flex flex-col items-center justify-center p-5 text-center hover:border-[#00E2C1] transition-colors shadow-[0_0_30px_rgba(0,226,193,0.05)] cursor-default group">
              <span className="material-symbols-outlined text-[#00E2C1] mb-2 text-[28px] group-hover:scale-110 transition-transform">monitor_heart</span>
              <h3 className="text-[16px] font-bold text-white mb-2 uppercase tracking-wide">Clínica</h3>
              <p className="text-[10px] text-white/50 leading-snug">Protocolos, validação médica e necessidades assistenciais</p>
            </div>
            
            {/* Top Right */}
            <div className="absolute top-[25%] left-[75%] -translate-x-1/2 -translate-y-1/2 z-10 w-[200px] h-[200px] rounded-full bg-black border border-[#00E2C1]/40 flex flex-col items-center justify-center p-5 text-center hover:border-[#00E2C1] transition-colors shadow-[0_0_30px_rgba(0,226,193,0.05)] cursor-default group">
              <span className="material-symbols-outlined text-[#00E2C1] mb-2 text-[28px] group-hover:scale-110 transition-transform">assignment</span>
              <h3 className="text-[16px] font-bold text-white mb-2 uppercase tracking-wide">Gestão</h3>
              <p className="text-[10px] text-white/50 leading-snug">Fluxos, regulação, operação e capacidade da rede</p>
            </div>

            {/* Bottom Left */}
            <div className="absolute top-[75%] left-[25%] -translate-x-1/2 -translate-y-1/2 z-10 w-[200px] h-[200px] rounded-full bg-black border border-[#00E2C1]/40 flex flex-col items-center justify-center p-5 text-center hover:border-[#00E2C1] transition-colors shadow-[0_0_30px_rgba(0,226,193,0.05)] cursor-default group">
              <span className="material-symbols-outlined text-[#00E2C1] mb-2 text-[28px] group-hover:scale-110 transition-transform">computer</span>
              <h3 className="text-[16px] font-bold text-white mb-2 uppercase tracking-wide">TI</h3>
              <p className="text-[10px] text-white/50 leading-snug">Integração, infraestrutura e implantação</p>
            </div>

            {/* Bottom Right */}
            <div className="absolute top-[75%] left-[75%] -translate-x-1/2 -translate-y-1/2 z-10 w-[200px] h-[200px] rounded-full bg-black border border-[#00E2C1]/40 flex flex-col items-center justify-center p-5 text-center hover:border-[#00E2C1] transition-colors shadow-[0_0_30px_rgba(0,226,193,0.05)] cursor-default group">
              <span className="material-symbols-outlined text-[#00E2C1] mb-2 text-[28px] group-hover:scale-110 transition-transform">account_balance</span>
              <h3 className="text-[16px] font-bold text-white mb-2 uppercase tracking-wide">Secretarias</h3>
              <p className="text-[10px] text-white/50 leading-snug">Saúde e tecnologia alinhadas à implementação pública</p>
            </div>
          </div>

          {/* Mobile Diagram */}
          <div className="w-full flex flex-col items-center gap-6 md:hidden mb-16">
            <div className="w-[220px] h-[220px] rounded-full bg-black border-2 border-[#00E2C1] flex flex-col items-center justify-center p-6 text-center shadow-[0_0_50px_rgba(0,226,193,0.15)] relative z-10">
              <h3 className="text-[18px] font-bold text-white mb-2 uppercase tracking-wide">Centro Carioca<br/>do Olho</h3>
              <p className="text-[11px] text-white/50 leading-snug">Ambiente real de construção e validação</p>
            </div>
            
            <div className="grid grid-cols-2 gap-4 w-full">
              <div className="rounded-2xl bg-[#080808] border border-[#00E2C1]/20 flex flex-col items-center justify-center p-4 text-center">
                <span className="material-symbols-outlined text-[#00E2C1] mb-2 text-[24px]">monitor_heart</span>
                <h3 className="text-[12px] font-bold text-white mb-1 uppercase tracking-wide">Clínica</h3>
                <p className="text-[9px] text-white/50 leading-snug">Protocolos, validação e necessidades assistenciais</p>
              </div>
              
              <div className="rounded-2xl bg-[#080808] border border-[#00E2C1]/20 flex flex-col items-center justify-center p-4 text-center">
                <span className="material-symbols-outlined text-[#00E2C1] mb-2 text-[24px]">assignment</span>
                <h3 className="text-[12px] font-bold text-white mb-1 uppercase tracking-wide">Gestão</h3>
                <p className="text-[9px] text-white/50 leading-snug">Fluxos, regulação, operação e capacidade da rede</p>
              </div>

              <div className="rounded-2xl bg-[#080808] border border-[#00E2C1]/20 flex flex-col items-center justify-center p-4 text-center">
                <span className="material-symbols-outlined text-[#00E2C1] mb-2 text-[24px]">computer</span>
                <h3 className="text-[12px] font-bold text-white mb-1 uppercase tracking-wide">TI</h3>
                <p className="text-[9px] text-white/50 leading-snug">Integração, infraestrutura e implantação</p>
              </div>

              <div className="rounded-2xl bg-[#080808] border border-[#00E2C1]/20 flex flex-col items-center justify-center p-4 text-center">
                <span className="material-symbols-outlined text-[#00E2C1] mb-2 text-[24px]">account_balance</span>
                <h3 className="text-[12px] font-bold text-white mb-1 uppercase tracking-wide">Secretarias</h3>
                <p className="text-[9px] text-white/50 leading-snug">Saúde e tecnologia alinhadas à implementação pública</p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 border-t border-white/10 pt-8 mt-4 w-full md:w-auto justify-center">
            <div className="h-[1px] w-12 bg-white/20 hidden md:block"></div>
            <p className="text-[14px] md:text-[18px] text-white/70 text-center">Construção conjunta em <strong className="text-[#00E2C1] font-bold">ambiente real do SUS.</strong></p>
            <div className="h-[1px] w-12 bg-white/20 hidden md:block"></div>
          </div>
        </div>
      </section>

      {/* Section 5: Reconhecimento Global */}
      <section className="relative py-24 md:py-40 px-margin-mobile md:px-margin-desktop border-t border-white/5 bg-[#030303] overflow-hidden">
        {/* Glow & Background */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1200px] h-full bg-[url('https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg')] bg-center bg-no-repeat bg-contain opacity-[0.03] pointer-events-none z-0"></div>
        <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#00E2C1]/5 blur-[150px] rounded-full pointer-events-none z-0"></div>
        
        <div className="max-w-[900px] mx-auto relative z-10 flex flex-col items-center text-center">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-[1px] w-8 md:w-12 bg-white/20 hidden md:block"></div>
            <span className="text-[10px] font-bold text-[#00E2C1] tracking-[0.3em] uppercase">Reconhecimento Global</span>
            <div className="h-[1px] w-8 md:w-12 bg-white/20 hidden md:block"></div>
          </div>
          
          <h2 className="text-[32px] md:text-[56px] leading-[1.1] font-extrabold text-white mb-16 tracking-tight max-w-[800px]">
            Uma tecnologia brasileira reconhecida globalmente<br />
            <span className="text-[#00E2C1]">em inteligência artificial.</span>
          </h2>

          {/* Highlight 1st Place */}
          <div className="flex flex-col items-center mb-16 relative">
            <div className="text-[150px] md:text-[220px] font-black text-[#00E2C1] leading-none tracking-tighter drop-shadow-[0_0_40px_rgba(0,226,193,0.3)]">
              1º
            </div>
            <h3 className="text-[32px] md:text-[48px] font-extrabold text-white tracking-tight uppercase mt-[-20px] mb-2">Lugar Mundial</h3>
            <p className="text-[18px] md:text-[24px] font-bold text-white/90 mb-2">CrewAI Challenge 2025</p>
            <p className="text-[14px] md:text-[16px] text-white/50 mb-8">Competição global com participantes de mais de 40 países.</p>
            
            <div className="border border-[#00E2C1]/30 text-[#00E2C1] font-bold text-[18px] md:text-[24px] px-8 py-3 rounded-full flex items-center gap-2">
              <span className="opacity-50">[</span> +40 PAÍSES <span className="opacity-50">]</span>
            </div>
          </div>

          {/* Grid of 4 recognitions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10 rounded-[32px] overflow-hidden w-full mb-16">
            {/* 1. Globo */}
            <div className="bg-[#050505] p-8 md:p-12 flex flex-col items-center text-center">
              <div className="h-16 md:h-20 flex items-center justify-center mb-4">
                 <img src="https://i.imgur.com/EDBqYiT.png" alt="Grupo Globo" className="max-h-full w-auto object-contain opacity-80" />
              </div>
              <span className="text-[11px] font-bold text-[#00E2C1] uppercase tracking-[0.2em] mb-4">Destaque Nacional</span>
              <p className="text-[13px] md:text-[14px] text-white/60 leading-relaxed mb-6">A solução foi destacada em reportagem nacional sobre inovação e saúde pública.</p>
              
              <div className="w-full aspect-video rounded-xl overflow-hidden border border-white/10 shadow-2xl relative bg-black group/video">
                <iframe 
                  className="absolute inset-0 w-full h-full" 
                  src="https://www.youtube.com/embed/q1-cLnz5XrE?si=spDkcqE2IbjI2WfB&autoplay=1"
                  srcDoc={`<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto;object-fit:cover}span{height:1.5em;text-align:center;font:72px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black;transition:transform 0.2s}a:hover span{transform:scale(1.1)}</style><a href="https://www.youtube.com/embed/q1-cLnz5XrE?autoplay=1"><img src="https://img.youtube.com/vi/q1-cLnz5XrE/maxresdefault.jpg" alt="Video The Post"><span>▶</span></a>`}
                  title="YouTube video player" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen>
                </iframe>
              </div>
            </div>

            {/* 2. Google for Startups */}
            <div className="bg-[#050505] p-8 md:p-12 flex flex-col items-center text-center">
              <h4 className="text-[20px] md:text-[24px] font-bold text-white mb-4">Google <span className="font-light text-white/70">for Startups</span></h4>
              <span className="text-[11px] font-bold text-[#00E2C1] uppercase tracking-[0.2em] mb-4">Selecionada</span>
              <p className="text-[13px] md:text-[14px] text-white/60 leading-relaxed mb-6">Selecionada para o Google for Startups Bootcamp.</p>
              <span className="text-[11px] font-bold text-[#00E2C1] uppercase tracking-[0.1em] mt-auto border-b border-[#00E2C1]/30 pb-1">Bootcamp São Paulo 2025.</span>
            </div>

            {/* 3. Vibee Unimed */}
            <div className="bg-[#050505] p-8 md:p-12 flex flex-col items-center text-center">
              <h4 className="text-[18px] md:text-[22px] font-black text-white uppercase tracking-[0.3em] mb-4">V I B E E <span className="font-light tracking-normal border-l border-white/20 pl-3 ml-3">unimed</span></h4>
              <div className="text-[32px] md:text-[40px] font-black text-[#00E2C1] leading-none mb-4 tracking-tighter">13 DE 286</div>
              <p className="text-[13px] md:text-[14px] text-white/60 leading-relaxed">Uma das 13 healthtechs brasileiras selecionadas entre 286 inscritas para o Batch 09 de Aceleração.</p>
            </div>

            {/* 4. Nvidia Inception */}
            <div className="bg-[#050505] p-8 md:p-12 flex flex-col items-center text-center">
              <h4 className="text-[20px] md:text-[24px] font-bold text-white mb-4 flex items-center gap-3">
                <span className="text-[#76b900] text-[28px] leading-none tracking-tight">NVIDIA</span> 
                <span className="font-light text-[14px] border-l border-white/20 pl-3 uppercase tracking-widest">Inception</span>
              </h4>
              <span className="text-[11px] font-bold text-[#00E2C1] uppercase tracking-[0.2em] mb-4">Selecionada</span>
              <p className="text-[13px] md:text-[14px] text-white/60 leading-relaxed">Selecionada para o programa global voltado a startups de inteligência artificial.</p>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <p className="text-[16px] md:text-[20px] text-white font-medium mb-1">Criada para um problema brasileiro.</p>
            <p className="text-[16px] md:text-[20px] text-[#00E2C1] font-bold">Reconhecida em uma competição global de IA.</p>
          </div>
        </div>
      </section>

      {/* SEÇÃO 09 - EQUIPE (DO SUS PARA O MUNDO) */}
      <section className="w-full relative z-10 bg-black pt-20 pb-32 md:pt-32 md:pb-40 px-margin-mobile md:px-margin-desktop overflow-hidden border-t border-white/5">
        <div className="max-w-container-max mx-auto w-full relative flex flex-col items-center">
          
          <div className="flex flex-col mb-10 text-center items-center mx-auto w-full max-w-4xl">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-[1px] w-8 md:w-16 bg-white/10"></div>
              <span className="text-[11px] font-bold text-[#00E2C1] tracking-[0.3em] uppercase">Do SUS para o mundo</span>
              <div className="h-[1px] w-8 md:w-16 bg-white/10"></div>
            </div>
            
            <h2 className="text-[32px] md:text-[56px] leading-[1.1] font-extrabold text-white tracking-tight mb-8">
              Construir no Brasil tecnologias capazes de transformar nossa própria saúde pública — e torná-las <span className="text-[#00E2C1]">referência mundial.</span>
            </h2>

            <p className="text-[16px] md:text-[20px] text-white/70 leading-relaxed max-w-2xl">
              Nossa missão é ajudar a posicionar o Brasil como <span className="text-[#00E2C1] font-medium">centro global de inovação tecnológica aplicada à saúde.</span>
            </p>
          </div>

          {/* Map Image Placeholder */}
          <div className="w-full max-w-5xl mx-auto h-[300px] md:h-[450px] relative mb-16 flex items-center justify-center opacity-80 pointer-events-none">
             <div className="absolute inset-0 flex items-center justify-center">
                {/* Simulated World Map with Connections from Brazil */}
                <svg viewBox="0 0 1000 500" className="w-full h-full object-contain">
                   <image href="https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg" width="1000" height="500" preserveAspectRatio="xMidYMid slice" style={{ filter: "invert(1) opacity(0.3)" }} />
                   
                   {/* Connections from Rio */}
                   <g stroke="#00E2C1" strokeWidth="1.5" fill="none" opacity="0.6">
                      <path d="M 330 350 Q 250 200 150 180" />
                      <path d="M 330 350 Q 300 200 250 120" />
                      <path d="M 330 350 Q 400 150 480 140" />
                      <path d="M 330 350 Q 450 200 550 180" />
                      <path d="M 330 350 Q 550 250 700 220" />
                      <path d="M 330 350 Q 600 300 850 350" />
                   </g>

                   {/* Nodes */}
                   <g fill="#00E2C1">
                      <circle cx="330" cy="350" r="4" fill="#00E2C1" className="animate-pulse" />
                      <text x="350" y="355" fill="#00E2C1" fontSize="10" fontWeight="bold" letterSpacing="1">RIO DE JANEIRO</text>
                      
                      <circle cx="150" cy="180" r="2.5" />
                      <circle cx="250" cy="120" r="2.5" />
                      <circle cx="480" cy="140" r="2.5" />
                      <circle cx="550" cy="180" r="2.5" />
                      <circle cx="700" cy="220" r="2.5" />
                      <circle cx="850" cy="350" r="2.5" />
                   </g>
                </svg>
             </div>
          </div>

          <div className="w-full max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-4 mb-16">
              <div className="h-[1px] flex-1 bg-white/10 max-w-[150px]"></div>
              <span className="text-[14px] md:text-[18px] font-bold text-white/50 tracking-[0.2em] uppercase text-center">Construído por quem vive o problema de perto.</span>
              <div className="h-[1px] flex-1 bg-white/10 max-w-[150px]"></div>
            </div>

            <div className="flex flex-col gap-12 w-full">
              
              {/* Gabriel Maia */}
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 w-full pb-12 border-b border-white/5">
                <div className="w-32 h-32 md:w-40 md:h-40 shrink-0 rounded-full border border-white/10 bg-[#050505] shadow-[0_0_30px_rgba(255,255,255,0.02)] overflow-hidden flex items-center justify-center">
                  <img src="https://i.imgur.com/2XdxxLy.png" alt="Gabriel Maia" className="w-full h-full object-cover opacity-90" />
                </div>
                <div className="flex flex-col items-center md:items-start text-center md:text-left flex-1">
                  <h3 className="text-[20px] md:text-[24px] font-bold text-white mb-1 uppercase tracking-widest flex items-center justify-center md:justify-start gap-3">
                    Gabriel Maia
                    <a href="https://www.linkedin.com/in/gabrielmaiavarella/" target="_blank" rel="noopener noreferrer" className="text-[#00E2C1] hover:text-white transition-colors" aria-label="LinkedIn do Gabriel Maia">
                      <Linkedin size={20} strokeWidth={2} />
                    </a>
                  </h3>
                  <div className="flex flex-col md:flex-row items-center md:items-start gap-1 md:gap-2 mb-6">
                    <span className="text-[12px] md:text-[13px] text-[#00E2C1] font-bold tracking-[0.2em]">CEO</span>
                    <span className="hidden md:block text-white/30">|</span>
                    <span className="text-[12px] md:text-[13px] text-white/50 font-medium">Product Manager</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-[32px] text-[#00E2C1] font-serif leading-none mt-[-5px]">“</span>
                    <p className="text-[15px] md:text-[17px] text-white/70 italic font-light leading-relaxed max-w-2xl">
                      Meu avô era diabético, desenvolveu glaucoma, perdeu a visão e faleceu. A Veredictos nasceu para que menos famílias brasileiras precisem atravessar uma história como a nossa.
                    </p>
                    <span className="text-[32px] text-[#00E2C1] font-serif leading-none self-end mb-[-15px]">”</span>
                  </div>
                </div>
              </div>

              {/* Pedro Afonso */}
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 w-full pb-12 border-b border-white/5">
                <div className="w-32 h-32 md:w-40 md:h-40 shrink-0 rounded-full border border-white/10 bg-[#050505] shadow-[0_0_30px_rgba(255,255,255,0.02)] overflow-hidden flex items-center justify-center">
                  <img src="https://i.imgur.com/4nbTsVs.png" alt="Pedro Afonso" className="w-full h-full object-cover opacity-90" />
                </div>
                <div className="flex flex-col items-center md:items-start text-center md:text-left flex-1">
                  <h3 className="text-[20px] md:text-[24px] font-bold text-white mb-1 uppercase tracking-widest flex items-center justify-center md:justify-start gap-3">
                    Pedro Afonso
                    <a href="https://www.linkedin.com/in/pedro-afonso-b136b9326/" target="_blank" rel="noopener noreferrer" className="text-[#00E2C1] hover:text-white transition-colors" aria-label="LinkedIn do Pedro Afonso">
                      <Linkedin size={20} strokeWidth={2} />
                    </a>
                  </h3>
                  <div className="flex flex-col md:flex-row items-center md:items-start gap-1 md:gap-2 mb-6">
                    <span className="text-[12px] md:text-[13px] text-[#00E2C1] font-bold tracking-[0.2em]">CTO</span>
                    <span className="hidden md:block text-white/30">|</span>
                    <span className="text-[12px] md:text-[13px] text-white/50 font-medium">AI Engineer</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-[32px] text-[#00E2C1] font-serif leading-none mt-[-5px]">“</span>
                    <p className="text-[15px] md:text-[17px] text-white/70 italic font-light leading-relaxed max-w-2xl">
                      O Brasil já tem dados, médicos e equipamentos. O que faltava era inteligência para conectar tudo isso. É essa infraestrutura que estamos construindo.
                    </p>
                    <span className="text-[32px] text-[#00E2C1] font-serif leading-none self-end mb-[-15px]">”</span>
                  </div>
                </div>
              </div>

              {/* Dr. João Batista */}
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 w-full pb-12">
                <div className="w-32 h-32 md:w-40 md:h-40 shrink-0 rounded-full border border-white/10 bg-[#050505] shadow-[0_0_30px_rgba(255,255,255,0.02)] overflow-hidden flex items-center justify-center">
                  <img src="https://i.imgur.com/d6MKvG0.png" alt="Dr. João Batista" className="w-full h-full object-cover opacity-90" />
                </div>
                <div className="flex flex-col items-center md:items-start text-center md:text-left flex-1">
                  <h3 className="text-[20px] md:text-[24px] font-bold text-white mb-1 uppercase tracking-widest">Dr. João Batista</h3>
                  <div className="flex flex-col md:flex-row items-center md:items-start gap-1 md:gap-2 mb-6">
                    <span className="text-[12px] md:text-[13px] text-[#00E2C1] font-bold tracking-[0.2em]">CMO</span>
                    <span className="hidden md:block text-white/30">|</span>
                    <span className="text-[12px] md:text-[13px] text-white/50 font-medium">Médico oftalmologista</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-[32px] text-[#00E2C1] font-serif leading-none mt-[-5px]">“</span>
                    <p className="text-[15px] md:text-[17px] text-white/70 italic font-light leading-relaxed max-w-2xl">
                      Vejo pacientes chegarem todos os dias quando parte do dano já é irreversível. Hoje, ajudo a construir uma solução para fazer essa informação chegar antes.
                    </p>
                    <span className="text-[32px] text-[#00E2C1] font-serif leading-none self-end mb-[-15px]">”</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center text-center mt-12">
              <div className="flex items-center justify-center gap-4 mb-6 w-full">
                <div className="h-[1px] w-4 bg-white/10 rounded-full"></div>
                <div className="h-[1px] flex-1 bg-white/5"></div>
                <div className="h-[1px] w-4 bg-white/10 rounded-full"></div>
              </div>
              <p className="text-[16px] md:text-[20px] text-white/80 font-medium mb-1">Tecnologia criada para um problema brasileiro.</p>
              <p className="text-[16px] md:text-[20px] text-[#00E2C1] font-bold">Reconhecida em uma competição global de IA.</p>
            </div>

          </div>
        </div>
      </section>

      {/* SEÇÃO 10 - CTA FINAL */}
      <section className="w-full relative z-10 bg-black pt-24 pb-32 md:pt-32 md:pb-40 px-margin-mobile md:px-margin-desktop overflow-hidden border-t border-white/5">
        
        {/* Background Network Pattern Placeholder */}
        <div className="absolute right-0 bottom-0 w-[500px] md:w-[800px] h-[500px] md:h-[800px] opacity-30 pointer-events-none translate-x-1/4 translate-y-1/4">
          <svg viewBox="0 0 100 100" className="w-full h-full text-[#00E2C1]" fill="none" stroke="currentColor" strokeWidth="0.2">
            <path d="M50 100 Q 50 80 40 70 T 20 50 M50 100 Q 50 80 60 70 T 80 50 M50 100 Q 50 70 50 40 M40 70 T 30 60 M60 70 T 70 60 M50 60 T 40 50 M50 60 T 60 50" />
            <circle cx="20" cy="50" r="0.5" fill="currentColor" />
            <circle cx="80" cy="50" r="0.5" fill="currentColor" />
            <circle cx="50" cy="40" r="0.5" fill="currentColor" />
            <circle cx="30" cy="60" r="0.5" fill="currentColor" />
            <circle cx="70" cy="60" r="0.5" fill="currentColor" />
            <circle cx="40" cy="50" r="0.5" fill="currentColor" />
            <circle cx="60" cy="50" r="0.5" fill="currentColor" />
            <circle cx="40" cy="70" r="0.5" fill="currentColor" />
            <circle cx="60" cy="70" r="0.5" fill="currentColor" />
            <circle cx="50" cy="100" r="1" fill="currentColor" />
          </svg>
        </div>

        <div className="max-w-4xl mx-auto w-full relative z-10 flex flex-col items-center text-center">
          
          <h2 className="text-[40px] md:text-[56px] lg:text-[64px] leading-[1.1] font-extrabold text-white mb-8 tracking-tight max-w-4xl">
            Cuidar mais cedo custa menos.<br className="hidden md:block" /> E pode preservar <span className="text-[#00E2C1]">mais visão.</span>
          </h2>
          
          <p className="text-[18px] md:text-[22px] text-white/80 leading-relaxed max-w-3xl mx-auto mb-12">
            A Veredictos Vision ajuda redes de saúde a priorizar quem mais precisa, antecipar o cuidado e reduzir o impacto clínico e econômico da espera.
          </p>
          
          <div className="w-full flex justify-center mt-6">
            
            <a 
              href="https://wa.me/5521995435384?text=Ol%C3%A1%2C%20equipe%20Veredictos.%20Tenho%20interesse%20em%20agendar%20uma%20demonstra%C3%A7%C3%A3o%20da%20Veredictos%20Vision%20para%20entender%20como%20a%20plataforma%20pode%20ajudar%20meu%20munic%C3%ADpio%20a%20priorizar%20casos%20oftalmol%C3%B3gicos%20de%20maior%20risco%20e%20reduzir%20filas%20na%20rede%20p%C3%BAblica."
              target="_blank"
              rel="noopener noreferrer"
              className="h-14 md:h-16 px-10 md:px-12 bg-[#00E2C1] hover:bg-[#00c4a7] text-black font-bold text-[16px] md:text-[18px] tracking-wide rounded-full transition-all flex items-center justify-center shadow-[0_0_30px_rgba(0,226,193,0.2)] hover:shadow-[0_0_50px_rgba(0,226,193,0.4)] transform hover:-translate-y-1"
            >
              Entrar em contato
            </a>
          </div>
          
        </div>
      </section>

      <ClinicalReportModal 
        isOpen={isReportModalOpen} 
        onClose={() => setIsReportModalOpen(false)} 
      />

      {/* Footer */}
      <footer className="w-full py-12 border-t border-white/5 bg-black mt-auto relative z-10 flex items-center">
        <div className="max-w-container-max mx-auto w-full flex flex-col justify-center items-center gap-6 px-margin-mobile md:px-margin-desktop">
          <div className="flex flex-col items-center text-center gap-2">
            <div className="flex items-center justify-center gap-1.5 mb-2">
              <span className="font-headline-md text-[16px] md:text-[18px] font-extrabold text-white uppercase tracking-tight">Veredictos Vision</span>
            </div>
            <span className="text-[14px] text-white/50 font-light tracking-wide mb-2">
              © 2026 Tecnologia para priorização clínica em saúde pública.
            </span>
            <a href="mailto:contato@veredictos.com" className="text-[15px] text-white/70 hover:text-[#00E2C1] transition-colors tracking-wide mb-1">
              contato@veredictos.com
            </a>
            <a href="https://linkedin.com/company/veredictos-vision" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 text-[15px] text-[#00E2C1] hover:text-white transition-colors tracking-wide">
              <Linkedin size={18} />
              veredictos-vision
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
