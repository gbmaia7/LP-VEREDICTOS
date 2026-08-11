import re

with open('src/App.tsx', 'r') as f:
    content = f.read()

# 1. Update Team Section text
old_team_text = '<span className="text-[10px] md:text-[11px] font-bold text-white/50 tracking-[0.2em] uppercase">Construído por quem vive o problema de perto.</span>'
new_team_text = '<span className="text-[14px] md:text-[18px] font-bold text-white/50 tracking-[0.2em] uppercase text-center">Construído por quem vive o problema de perto.</span>'
content = content.replace(old_team_text, new_team_text)

# 2. Update CTA Section button alignment
old_cta_wrapper = '<div className="flex flex-col md:flex-row items-start md:items-center gap-6">'
new_cta_wrapper = '<div className="w-full flex justify-center mt-6">'
content = content.replace(old_cta_wrapper, new_cta_wrapper)

with open('src/App.tsx', 'w') as f:
    f.write(content)
