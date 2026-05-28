import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Static export — деплой через rsync на nginx, без Node на сервере.
  // Минимум attack surface, максимум скорость.
  output: 'export',

  // images.unoptimized обязательно при output:'export' (нет Image Optimization API без Node).
  // Оптимизацию делаем на этапе сборки через sharp в pipeline.
  images: {
    unoptimized: true,
  },

  // Trailing slash для совместимости с nginx try_files (предсказуемые пути /about/ → /about/index.html).
  trailingSlash: true,

  // i18n routing не используется напрямую (см. next-intl middleware) —
  // префиксы [/en, /uk, /ru, /id] через app/[locale]/...

  // Security: headers здесь работают только в dev (next dev). В prod заголовки выдаёт nginx (см. infra/nginx).
  // Оставляем для local dev consistency.
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
    ];
  },

  // React strict mode для отлова side-effects заранее.
  reactStrictMode: true,

  // Logging — для отладки i18n routing.
  logging: {
    fetches: { fullUrl: true },
  },
};

export default nextConfig;
