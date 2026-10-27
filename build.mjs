import { execSync } from 'child_process';
import fs from 'fs';

console.log('[build.mjs] Iniciando build do projeto...');

// 1. Executa vite build
execSync('npx vite build', { stdio: 'inherit' });

// 2. Verifica a pasta dist
if (!fs.existsSync('dist')) {
  console.error('[build.mjs] ERRO: dist não existe após vite build!');
  process.exit(1);
}

// 3. Duplica para a pasta build (caso a Vercel esteja configurada para build)
try {
  fs.cpSync('dist', 'build', { recursive: true });
} catch (e) {
  console.warn('[build.mjs] Aviso ao copiar para build:', e.message);
}

// 4. Gera a estrutura oficial Vercel Build Output API v3 (.vercel/output)
try {
  fs.mkdirSync('.vercel/output/static', { recursive: true });
  fs.cpSync('dist', '.vercel/output/static', { recursive: true });

  const vercelConfig = {
    version: 3,
    routes: [
      { handle: 'filesystem' },
      { src: '/(.*)', dest: '/index.html' }
    ]
  };
  fs.writeFileSync('.vercel/output/config.json', JSON.stringify(vercelConfig, null, 2));
} catch (e) {
  console.warn('[build.mjs] Aviso ao gerar .vercel/output:', e.message);
}

console.log('[build.mjs] Build finalizado com sucesso em dist/, build/ e .vercel/output/!');
