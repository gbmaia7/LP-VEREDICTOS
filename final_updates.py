import re

with open('src/App.tsx', 'r') as f:
    content = f.read()

# 1. Update CTA Section
old_cta_wrapper = '<div className="max-w-6xl mx-auto w-full relative z-10 flex flex-col items-start text-left">'
new_cta_wrapper = '<div className="max-w-4xl mx-auto w-full relative z-10 flex flex-col items-center text-center">'
content = content.replace(old_cta_wrapper, new_cta_wrapper)

old_cta_title = """<h2 className="text-[40px] md:text-[64px] lg:text-[76px] leading-[1.05] font-extrabold text-white mb-8 tracking-tight max-w-4xl">
            A próxima<br/>
            referência<br/>
            em saúde pública<br/>
            <span className="text-[#00E2C1]">está começando aqui.</span>
          </h2>"""
new_cta_title = """<h2 className="text-[40px] md:text-[56px] lg:text-[64px] leading-[1.1] font-extrabold text-white mb-8 tracking-tight max-w-4xl">
            Cuidar mais cedo custa menos.<br className="hidden md:block" /> E pode preservar <span className="text-[#00E2C1]">mais visão.</span>
          </h2>"""
content = content.replace(old_cta_title, new_cta_title)

old_cta_sub = """<p className="text-[18px] md:text-[24px] text-white/80 leading-relaxed max-w-2xl mb-12">
            Sua rede pode <span className="text-[#00E2C1]">fazer parte da construção</span><br className="hidden md:block" />
            dessa <span className="text-[#00E2C1]">nova referência</span> em inovação<br className="hidden md:block" />
            aplicada à saúde pública.
          </p>"""
new_cta_sub = """<p className="text-[18px] md:text-[22px] text-white/80 leading-relaxed max-w-3xl mx-auto mb-12">
            A Veredictos Vision ajuda redes de saúde a priorizar quem mais precisa, antecipar o cuidado e reduzir o impacto clínico e econômico da espera.
          </p>"""
content = content.replace(old_cta_sub, new_cta_sub)

# 2. Update Footer
old_footer = """<footer className="w-full py-8 md:py-10 border-t border-white/5 bg-black mt-auto relative z-10 flex items-center">
        <div className="max-w-container-max mx-auto w-full flex flex-col md:flex-row justify-between items-center md:items-start gap-6 md:gap-4 px-margin-mobile md:px-margin-desktop">
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-2">
            <div className="flex items-center gap-1.5 mb-1">
              <span className="font-headline-md text-[14px] md:text-[16px] font-extrabold text-white uppercase tracking-tight">Veredictos Vision</span>
            </div>
            <span className="text-[14px] text-white/50 font-light tracking-wide">
              © 2026 Tecnologia para priorização clínica em saúde pública.
            </span>
            <a href="mailto:contato@veredictos.com" className="text-[14px] text-white/70 hover:text-[#00E2C1] transition-colors tracking-wide mt-1">
              contato@veredictos.com
            </a>
            <a href="https://linkedin.com/company/veredictos-vision" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[14px] text-white/70 hover:text-[#00E2C1] transition-colors tracking-wide mt-2">
              <Linkedin size={16} />
              veredictos-vision
            </a>
          </div>
        </div>
      </footer>"""
new_footer = """<footer className="w-full py-12 border-t border-white/5 bg-black mt-auto relative z-10 flex items-center">
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
      </footer>"""
content = content.replace(old_footer, new_footer)

with open('src/App.tsx', 'w') as f:
    f.write(content)

print("Done")
