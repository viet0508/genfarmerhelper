// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import mermaid from 'astro-mermaid';

// https://astro.build/config
export default defineConfig({
  // TODO: set this to your final domain before deploying (e.g. https://docs.genfarmer.com)
  site: 'https://genfarmer-support.pages.dev',

  // Root lands on the Vietnamese edition; the language switcher covers the rest.
  redirects: { '/': '/vi/' },

  integrations: [
    // Renders ```mermaid code blocks as real diagrams. Must come before starlight.
    mermaid({ theme: 'default', autoTheme: true }),
    starlight({
      title: {
        en: 'GenFarmer Support',
        vi: 'GenFarmer Hỗ trợ',
        es: 'GenFarmer Soporte',
        ja: 'GenFarmer サポート',
      },
      logo: {
        src: './src/assets/genfarmer-lockup.png',
        alt: 'GenFarmer',
        replacesTitle: true,
      },
      favicon: '/favicon.svg',
      customCss: ['./src/styles/custom.css'],
      head: [
        { tag: 'link', attrs: { rel: 'preconnect', href: 'https://fonts.googleapis.com' } },
        { tag: 'link', attrs: { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true } },
        {
          tag: 'link',
          attrs: {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@300;400;500;600;700;800&family=IBM+Plex+Mono:wght@400;500;600;700&display=swap',
          },
        },
      ],
      components: {
        PageFrame: './src/components/PageFrame.astro',
        Sidebar: './src/components/Sidebar.astro',
      },
      defaultLocale: 'en',
      locales: {
        en: { label: 'English', lang: 'en' },
        vi: { label: 'Tiếng Việt', lang: 'vi' },
        es: { label: 'Español', lang: 'es' },
        ja: { label: '日本語', lang: 'ja' },
      },
      // Language switcher (top-right) is automatic from the locales above.
      sidebar: [
        { slug: 'bat-dau' },
        { slug: 'a1-bon-lop-he-thong' },
        {
          label: 'A2 · One-week roadmap',
          translations: {
            vi: 'A2 · Lộ trình một tuần',
            es: 'A2 · Ruta de una semana',
            ja: 'A2・1週間ロードマップ',
          },
          items: [
            { slug: 'a2-lo-trinh-mot-tuan' },
            { slug: 'a2-lo-trinh-mot-tuan/a3-ngay-0-chuan-bi' },
            { slug: 'a2-lo-trinh-mot-tuan/a4-ngay-1-phan-cung' },
            { slug: 'a2-lo-trinh-mot-tuan/a5-ngay-2-danh-tinh' },
            { slug: 'a2-lo-trinh-mot-tuan/a6-ngay-3-tu-dong' },
            { slug: 'a2-lo-trinh-mot-tuan/a7-ngay-4-5-nen-tang' },
          ],
        },
        { slug: 'nuoi-tai-khoan' },
        { slug: 'tra-cuu-theo-trieu-chung' },
        { slug: 'thuat-ngu' },
        { slug: 'lien-he-ho-tro' },
      ],
    }),
  ],
});
