# vercel-deploy

Next.js (App Router) com:

- Relógio digital com contagem regressiva (dias, horas, minutos e segundos) até o fim do semestre.
- Linha do tempo com foto e descrição dos trabalhos de cada semestre.

## Rodar local

```bash
npm install
npm run dev
```

Abra http://localhost:3000.

## Personalizar

- **Data do fim do semestre:** variável `NEXT_PUBLIC_FIM_SEMESTRE` (ex.: `2026-12-18T23:59:59-04:00`). Copie `.env.example` para `.env.local`. Na Vercel, cadastre em Settings > Environment Variables.
- **Trabalhos e semestres:** `data/semestres.js`.
- **Fotos:** coloque os arquivos em `public/fotos/` e atualize o campo `foto`.

## Publicar

```bash
git init && git add . && git commit -m "primeiro commit"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/vercel-deploy.git
git push -u origin main
```

Depois, em vercel.com/new, importe o repositório `vercel-deploy` e clique em Deploy.
