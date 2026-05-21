import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface ClinicalReportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ClinicalReportModal({ isOpen, onClose }: ClinicalReportModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-4 md:p-8">
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md cursor-pointer"
          />
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="relative w-full max-w-[1240px] max-h-[95vh] overflow-y-auto bg-transparent rounded-sm shadow-2xl flex flex-col"
          >
            {/* Scoped CSS based on the provided HTML */}
            <style>{`
              .report-doc * { box-sizing: border-box; margin: 0; padding: 0; }
              .report-doc { font-family: "Inter", -apple-system, "Helvetica Neue", sans-serif; background: #fdfcf8; color: #0a0e1a; font-size: 13.5px; line-height: 1.5; text-align: left; }
              .report-doc .top-bar { background: #0a0e1a; color: #f5f1e8; padding: 13px 60px; display: flex; justify-content: space-between; align-items: center; font-size: 9.5px; letter-spacing: 2.5px; text-transform: uppercase; font-weight: 500; }
              .report-doc .top-bar .badge { color: #c79b3a; font-weight: 600; letter-spacing: 2.8px; }
              .report-doc .top-bar .badge::before { content: "■"; margin-right: 6px; color: #7f1d1d; font-size: 10px; }
              
              .report-doc header { display: flex; justify-content: space-between; align-items: flex-end; padding: 44px 60px 28px; border-bottom: 1px solid #0a0e1a; position: relative; }
              .report-doc header::after { content: ""; position: absolute; bottom: -5px; left: 60px; right: 60px; border-bottom: 1px solid #0a0e1a; }
              .report-doc .brand-row { display: flex; align-items: center; gap: 20px; }
              .report-doc .brand-mark { width: 64px; height: 64px; background: #0a0e1a; color: #c79b3a; display: flex; align-items: center; justify-content: center; font-family: "Newsreader", Georgia, serif; font-size: 40px; font-weight: 600; letter-spacing: -2px; position: relative; }
              .report-doc .brand-mark::after { content: ""; position: absolute; inset: 4px; border: 1px solid rgba(199, 155, 58, 0.3); pointer-events: none; }
              .report-doc .brand-text .name { font-family: "Newsreader", Georgia, serif; font-size: 34px; font-weight: 600; color: #0a0e1a; letter-spacing: -0.8px; line-height: 1; }
              .report-doc .brand-text .sub { font-size: 10px; letter-spacing: 3px; color: #475569; text-transform: uppercase; margin-top: 10px; font-weight: 500; }
              .report-doc .doc-meta { text-align: right; font-size: 11px; line-height: 2; }
              .report-doc .doc-meta .label { color: #94a3b8; letter-spacing: 1.8px; text-transform: uppercase; font-size: 9px; font-weight: 500; }
              .report-doc .doc-meta .value { color: #0a0e1a; font-weight: 600; font-size: 12px; letter-spacing: 0.2px; font-variant-numeric: tabular-nums; }

              .report-doc .doc-title-sec { padding: 36px 60px 28px; background: linear-gradient(180deg, #f5f1e8 0%, #faf6ec 100%); border-bottom: 1px solid #cbd5e1; position: relative; }
              .report-doc .doc-title-sec::before { content: ""; position: absolute; top: 0; left: 0; width: 4px; height: 100%; background: #7f1d1d; }
              .report-doc .doc-title-sec .kicker { font-size: 10px; letter-spacing: 3px; text-transform: uppercase; color: #7f1d1d; font-weight: 600; margin-bottom: 10px; }
              .report-doc .doc-title-sec h1 { font-family: "Newsreader", Georgia, serif; font-size: 30px; font-weight: 600; color: #0a0e1a; letter-spacing: -0.8px; line-height: 1.18; margin: 0; }
              .report-doc .doc-title-sec .ref { font-size: 11.5px; color: #64748b; margin-top: 10px; font-family: "Newsreader", Georgia, serif; font-style: italic; font-weight: 400; }

              .report-doc .patient { display: grid; grid-template-columns: repeat(6, 1fr); border-bottom: 1px solid #cbd5e1; background: #ffffff; }
              .report-doc .patient .field { padding: 20px 24px; border-right: 1px solid #e2e8f0; }
              .report-doc .patient .field:last-child { border-right: 0; }
              .report-doc .patient .field .label { font-size: 9px; letter-spacing: 1.8px; text-transform: uppercase; color: #94a3b8; margin-bottom: 8px; font-weight: 500; }
              .report-doc .patient .field .value { font-size: 14px; color: #0a0e1a; font-weight: 600; letter-spacing: -0.1px; }
              .report-doc .patient .field .sub { font-size: 11px; color: #64748b; margin-top: 3px; font-weight: 400; }

              .report-doc .section-title { padding: 32px 60px 16px; display: flex; align-items: baseline; gap: 16px; background: #fdfcf8; }
              .report-doc .section-title .num { font-family: "Newsreader", Georgia, serif; font-size: 20px; color: #7f1d1d; font-weight: 600; font-style: italic; letter-spacing: -0.5px; }
              .report-doc .section-title .title { font-size: 11px; letter-spacing: 2.8px; text-transform: uppercase; color: #0a0e1a; font-weight: 600; }
              .report-doc .section-title .rule { flex: 1; height: 1px; background: linear-gradient(90deg, #0a0e1a 0%, transparent 100%); margin-left: 14px; opacity: 0.35; }

              .report-doc .images { display: grid; grid-template-columns: 1fr 1fr; padding: 0 60px 16px; gap: 28px; }
              .report-doc .image-card .img-wrap { background: #0a0e1a; position: relative; overflow: hidden; box-shadow: 0 1px 0 #0a0e1a, 0 8px 16px rgba(10, 14, 26, 0.12); border-radius: 4px; }
              .report-doc .image-card img { width: 100%; height: 380px; object-fit: contain; background: #0a0e1a; display: block; }
              .report-doc .image-card .img-label { position: absolute; top: 0; left: 0; background: #0a0e1a; color: #f5f1e8; padding: 7px 14px; font-size: 9px; letter-spacing: 2.2px; text-transform: uppercase; font-weight: 600; border-bottom-right-radius: 4px; z-index: 10;}
              .report-doc .image-card .img-label::before { content: ""; display: inline-block; width: 6px; height: 6px; background: #64748b; margin-right: 8px; vertical-align: middle; }
              .report-doc .image-card.alert .img-label { background: #7f1d1d; color: #fdf2f2; }
              .report-doc .image-card.alert .img-label::before { background: #fcd34d; }
              .report-doc .image-card .img-caption { padding: 14px 0 0 14px; font-family: "Newsreader", Georgia, serif; font-size: 13px; line-height: 1.6; color: #334155; font-style: italic; border-left: 2px solid #94a3b8; font-weight: 400; margin-top: 12px; }
              .report-doc .image-card.alert .img-caption { border-left-color: #7f1d1d; }
              .report-doc .image-card .img-caption strong { color: #0a0e1a; font-weight: 600; font-style: normal; }

              .report-doc .summary { display: grid; grid-template-columns: repeat(3, 1fr); border-top: 1px solid #cbd5e1; border-bottom: 1px solid #cbd5e1; margin-top: 24px; background: #ffffff; }
              .report-doc .summary .cell { padding: 26px 28px; border-right: 1px solid #e2e8f0; position: relative; }
              .report-doc .summary .cell:last-child { border-right: 0; }
              .report-doc .summary .cell .label { font-size: 9px; letter-spacing: 2px; text-transform: uppercase; color: #94a3b8; font-weight: 500; margin-bottom: 10px; }
              .report-doc .summary .cell .value { font-family: "Newsreader", Georgia, serif; font-size: 24px; color: #0a0e1a; font-weight: 600; letter-spacing: -0.8px; line-height: 1.1; }
              .report-doc .summary .cell .sub { font-size: 11.5px; color: #64748b; margin-top: 6px; font-weight: 400; }
              .report-doc .summary .cell.urgent { background: linear-gradient(180deg, #fef9f9 0%, #ffffff 100%); }
              .report-doc .summary .cell.urgent::before { content: ""; position: absolute; top: 0; left: 0; width: 100%; height: 2px; background: #7f1d1d; }
              .report-doc .summary .cell.urgent .value { color: #7f1d1d; }
              .report-doc .summary .cell.urgent .sub { color: #7f1d1d; opacity: 0.85; }

              .report-doc .findings { padding: 28px 60px 12px; background: #fdfcf8; }
              .report-doc .findings p { font-family: "Newsreader", Georgia, serif; font-size: 16px; line-height: 1.7; color: #0a0e1a; margin-bottom: 16px; text-align: justify; font-weight: 400; }
              .report-doc .findings p:first-of-type::first-letter { font-size: 42px; float: left; line-height: 0.9; padding: 4px 8px 0 0; color: #7f1d1d; font-weight: 600; }
              .report-doc .findings .term { border-bottom: 1.5px solid #7f1d1d; padding-bottom: 1px; font-weight: 600; color: #0a0e1a; }

              .report-doc .markers { margin: 20px 60px; padding: 24px 28px; background: #f5f1e8; border-left: 3px solid #0a0e1a; position: relative; }
              .report-doc .markers::before { content: "✦"; position: absolute; top: 22px; right: 28px; color: #c79b3a; font-size: 14px; }
              .report-doc .markers h3 { font-size: 10px; letter-spacing: 2.5px; text-transform: uppercase; color: #0a0e1a; font-weight: 600; margin-bottom: 16px; margin-top: 0;}
              .report-doc .markers-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 6px 36px; }
              .report-doc .marker-item { display: grid; grid-template-columns: 36px 1fr auto; gap: 12px; align-items: baseline; padding: 7px 0; border-bottom: 1px dotted #cbd5e1; font-size: 13px; }
              .report-doc .marker-item:last-child, .report-doc .marker-item:nth-last-child(2) { border-bottom: 0; }
              .report-doc .marker-item .code { font-family: "Newsreader", Georgia, serif; color: #94a3b8; font-size: 12px; font-weight: 600; font-variant-numeric: tabular-nums; }
              .report-doc .marker-item .name { color: #0a0e1a; font-weight: 400; }
              .report-doc .marker-item .badge { font-size: 9.5px; letter-spacing: 1.2px; text-transform: uppercase; color: #64748b; font-weight: 600; font-variant-numeric: tabular-nums; }
              .report-doc .marker-item.fail .badge { color: #7f1d1d; }
              .report-doc .marker-item.fail .name { color: #334155; }
              .report-doc .marker-item.fail .code { color: #7f1d1d; }

              .report-doc .recommendation { margin: 24px 60px 36px; border: 1px solid #7f1d1d; background: #fdfcf8; }
              .report-doc .recommendation .rec-head { background: #7f1d1d; color: #fdf2f2; padding: 10px 24px; display: flex; justify-content: space-between; align-items: center; font-size: 10px; letter-spacing: 2.5px; text-transform: uppercase; font-weight: 600; }
              .report-doc .recommendation .rec-head .badge-urg { background: rgba(252, 211, 77, 0.15); color: #fcd34d; padding: 3px 10px; border: 1px solid rgba(252, 211, 77, 0.5); font-size: 9.5px; }
              .report-doc .recommendation .rec-body { padding: 24px 28px; background: #fef9f9; }
              .report-doc .recommendation .rec-body p { font-family: "Newsreader", Georgia, serif; font-size: 15px; line-height: 1.7; color: #0a0e1a; font-weight: 400; margin: 0; }
              .report-doc .recommendation .rec-body strong { font-weight: 600; color: #7f1d1d; }

              .report-doc footer { background: #0a0e1a; color: #f5f1e8; padding: 28px 60px; display: grid; grid-template-columns: 2fr 1fr; gap: 32px; font-size: 10.5px; position: relative; border-bottom-left-radius: 4px; border-bottom-right-radius: 4px; }
              .report-doc footer::before { content: ""; position: absolute; top: 0; left: 60px; right: 60px; height: 1px; background: linear-gradient(90deg, transparent, #c79b3a, transparent); }
              .report-doc footer .disclaimer { line-height: 1.7; color: #94a3b8; font-weight: 400; }
              .report-doc footer .disclaimer .title { color: #c79b3a; letter-spacing: 2.2px; text-transform: uppercase; font-size: 9px; font-weight: 600; margin-bottom: 6px; }
              .report-doc footer .audit { text-align: right; line-height: 1.85; color: #94a3b8; font-variant-numeric: tabular-nums; font-size: 10.5px; }
              .report-doc footer .audit .label { color: #475569; font-size: 9px; letter-spacing: 1.6px; text-transform: uppercase; margin-right: 6px; }
              .report-doc footer .audit .value { color: #f5f1e8; font-weight: 500; }
              
              /* Reponsive tweaks for the modal */
              @media (max-width: 768px) {
                .report-doc .top-bar { padding: 12px 20px; flex-direction: column; gap: 10px; text-align: center; }
                .report-doc header, .report-doc .doc-title-sec, .report-doc .section-title, .report-doc .images, .report-doc .findings, .report-doc .markers, .report-doc .recommendation, .report-doc footer { padding-left: 20px; padding-right: 20px; }
                .report-doc header::after, .report-doc footer::before { left: 20px; right: 20px; }
                .report-doc .patient { grid-template-columns: 1fr 1fr; }
                .report-doc .patient .field { padding: 16px 20px; border-bottom: 1px solid #e2e8f0; }
                .report-doc .images { grid-template-columns: 1fr; }
                .report-doc .image-card img { height: auto; aspect-ratio: 1; }
                .report-doc .summary { grid-template-columns: 1fr; text-align: center; }
                .report-doc .markers-grid { grid-template-columns: 1fr; }
                .report-doc footer { grid-template-columns: 1fr; text-align: center; }
                .report-doc footer .audit { text-align: center; }
                .report-doc .markers { margin-left: 20px; margin-right: 20px; }
                .report-doc .recommendation { margin-left: 20px; margin-right: 20px; }
              }
            `}</style>
            
            {/* Close button layered on top of doc */}
            <button
               onClick={onClose}
               className="absolute top-4 right-4 ml-auto w-10 h-10 bg-white shadow-xl border border-black/10 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors z-50 text-black cursor-pointer md:hidden"
             >
               <span className="material-symbols-outlined text-[20px]">close</span>
            </button>
            <button
               onClick={onClose}
               className="sticky top-4 right-4 ml-auto -mb-12 w-10 h-10 bg-white/10 backdrop-blur-md shadow-xl border border-white/20 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-colors z-50 text-white cursor-pointer hidden md:flex"
               style={{ transform: 'translateX(60px)' }}
             >
               <span className="material-symbols-outlined text-[20px]">close</span>
            </button>

            <div className="report-doc w-full">
               <div className="top-bar">
                 <span>Veredictos · Plataforma de Triagem Retiniana Assistida</span>
                 <span className="badge">CONFIDENCIAL · USO MÉDICO RESTRITO</span>
                 <span>v1.0 · argus-v1-c12</span>
               </div>

               <header>
                 <div className="brand-row">
                   <div className="brand-mark">V</div>
                   <div className="brand-text">
                     <div className="name">Veredictos</div>
                     <div className="sub">Laudo de triagem retiniana</div>
                   </div>
                 </div>
                 <div className="doc-meta">
                   <div><span className="label">Laudo nº</span> &nbsp; <span className="value">VRD-2026-05-11-00427</span></div>
                   <div><span className="label">Emissão</span> &nbsp; <span className="value">11/05/2026 · 14:32:18 BRT</span></div>
                   <div><span className="label">Tempo de análise</span> &nbsp; <span className="value">2,4 s</span></div>
                 </div>
               </header>

               <div className="doc-title-sec">
                 <div className="kicker">Suspeita diagnóstica primária</div>
                 <h1>Retinopatia diabética não-proliferativa severa com edema macular clinicamente significativo</h1>
                 <div className="ref">Diagnóstico assistido conforme classificação ETDRS · estadiamento sujeito a confirmação especializada</div>
               </div>

               <div className="patient">
                 <div className="field"><div className="label">Paciente</div><div className="value">M.S.O.</div><div className="sub">ID anonimizada</div></div>
                 <div className="field"><div className="label">Idade</div><div className="value">58 anos</div><div className="sub">Sexo feminino</div></div>
                 <div className="field"><div className="label">Modalidade</div><div className="value">Retinografia colorida</div><div className="sub">Não-midriática · 45°</div></div>
                 <div className="field"><div className="label">Olho avaliado</div><div className="value">Olho direito (OD)</div><div className="sub">256 × 256 px</div></div>
                 <div className="field"><div className="label">Solicitante</div><div className="value">UBS Tatuapé</div><div className="sub">Encaminhamento eletivo</div></div>
                 <div className="field"><div className="label">Comorbidades</div><div className="value">DM tipo 2</div><div className="sub">15 anos · HbA1c 9,2 %</div></div>
               </div>

               <div className="section-title">
                 <span className="num">I.</span>
                 <span className="title">Aquisição e referência anatômica</span>
                 <span className="rule"></span>
               </div>

               <div className="images">
                 <div className="image-card">
                   <div className="img-wrap">
                     <span className="img-label">A · Referência saudável</span>
                     <img src="https://i.imgur.com/joWJoH8.png" alt="Olho saudável" />
                   </div>
                   <div className="img-caption">
                     <strong>Padrão anatômico esperado.</strong> Disco óptico bem delimitado, vasculatura de calibre preservado, mácula sem alterações pigmentares aparentes. Reflexo foveal íntegro.
                   </div>
                 </div>
                 <div className="image-card alert">
                   <div className="img-wrap">
                     <span className="img-label">B · Olho do paciente</span>
                     <img src="https://i.imgur.com/bULorzS.png" alt="Olho do paciente" />
                   </div>
                   <div className="img-caption">
                     <strong>Múltiplos achados patológicos.</strong> Microaneurismas dispersos, exsudatos duros confluentes e hemorragias intrarretinianas. Edema macular clinicamente significativo (CSME) presente.
                   </div>
                 </div>
               </div>

               <div className="summary">
                 <div className="cell urgent">
                   <div className="label">Suspeita principal</div>
                   <div className="value">Retinopatia diabética</div>
                   <div className="sub">Não-proliferativa severa · grau 3 ETDRS</div>
                 </div>
                 <div className="cell">
                   <div className="label">Confiança do modelo</div>
                   <div className="value">94,3 %</div>
                   <div className="sub">56 de 61 invariantes anatômicos satisfeitos</div>
                 </div>
                 <div className="cell urgent">
                   <div className="label">Prioridade clínica</div>
                   <div className="value">URGENTE</div>
                   <div className="sub">Encaminhamento em até 7 dias úteis</div>
                 </div>
               </div>

               <div className="section-title">
                 <span className="num">II.</span>
                 <span className="title">Achados clínicos</span>
                 <span className="rule"></span>
               </div>

               <div className="findings">
                 <p>
                   A análise da imagem do paciente identifica <span className="term">múltiplos microaneurismas dispersos</span> nas arcadas vasculares temporais superior e inferior, com agrupamento característico nas regiões perifoveais. Observam-se <span className="term">exsudatos duros confluentes</span> próximos ao polo posterior, sugestivos de extravasamento crônico de lipoproteínas a partir de capilares comprometidos.
                 </p>
                 <p>
                   As <span className="term">hemorragias em chama de vela</span> identificadas no quadrante temporal superior, somadas à tortuosidade vascular acentuada e ao desbalanço calibre arteríolo-venular, configuram padrão clássico de retinopatia diabética não-proliferativa em estágio severo, com risco elevado de progressão para forma proliferativa nos próximos 12 meses caso não haja intervenção terapêutica oportuna.
                 </p>
                 <p>
                   Detecta-se <span className="term">aparente espessamento perifoveal</span> compatível com edema macular clinicamente significativo (CSME, critérios ETDRS). A integridade da fóvea apresenta-se parcialmente comprometida, com perda do reflexo foveal típico. Não foram identificados sinais inequívocos de neovascularização ativa no presente exame; contudo, o quadro evolutivo demanda monitoramento próximo e exames complementares.
                 </p>
               </div>

               <div className="markers">
                 <h3>Marcadores anatômicos com desvio significativo</h3>
                 <div className="markers-grid">
                   <div className="marker-item fail"><span className="code">I-15</span><span className="name">Densidade vascular intrarretiniana</span><span className="badge">DESVIO 2,3 σ</span></div>
                   <div className="marker-item fail"><span className="code">I-22</span><span className="name">Integridade do leito macular</span><span className="badge">DESVIO 1,9 σ</span></div>
                   <div className="marker-item fail"><span className="code">I-31</span><span className="name">Distribuição de exsudatos duros</span><span className="badge">DESVIO 3,1 σ</span></div>
                   <div className="marker-item fail"><span className="code">I-37</span><span className="name">Simetria ISNT do disco óptico</span><span className="badge">DESVIO 1,6 σ</span></div>
                   <div className="marker-item fail"><span className="code">I-44</span><span className="name">Uniformidade de iluminação periférica</span><span className="badge">DESVIO 1,4 σ</span></div>
                   <div className="marker-item"><span className="code">I-09</span><span className="name">Centralização da fóvea</span><span className="badge">NORMAL</span></div>
                 </div>
               </div>

               <div className="recommendation">
                 <div className="rec-head">
                   <span>III · Conduta recomendada</span>
                   <span className="badge-urg">PRIORIDADE URGENTE</span>
                 </div>
                 <div className="rec-body">
                   <p>
                     <strong>Encaminhamento urgente</strong> para avaliação especializada com retinólogo. Indicada angiografia fluoresceínica (FFA) e tomografia de coerência óptica macular (OCT) para confirmação do edema, estadiamento preciso e avaliação de viabilidade de fotocoagulação focal. Recomenda-se revisão imediata do controle glicêmico (HbA1c, glicemia em jejum) como parte da conduta integral.
                   </p>
                 </div>
               </div>

               <footer>
                 <div className="disclaimer">
                   <div className="title">Declaração de uso</div>
                   Este laudo é produto de análise automatizada pelo sistema Veredictos AI (modelo ARGUS-RAFT v1.0). Não substitui a avaliação clínica presencial por médico oftalmologista habilitado. Toda conduta terapêutica deve ser validada por profissional regulamentado, considerando o quadro clínico completo do paciente. Documento gerado para fins de triagem e suporte à decisão clínica.
                 </div>
                 <div className="audit">
                   <div><span className="label">Modelo</span><span className="value">argus-v1-c12 · 5d1bbc9</span></div>
                   <div><span className="label">Eval ID</span><span className="value">6486459704</span></div>
                   <div><span className="label">Revisor humano</span><span className="value">pendente</span></div>
                   <div><span className="label">CRM validador</span><span className="value">12.345 / SP</span></div>
                 </div>
               </footer>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
