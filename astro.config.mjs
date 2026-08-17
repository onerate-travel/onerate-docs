// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

/**
 * The OneRate end-user documentation site.
 *
 * Two things here are deliberate and will look wrong to someone who skims:
 *
 * 1. **`site` is set even though nothing here is server-rendered.** Starlight builds the sitemap,
 *    the canonical `<link>` and the per-page `hreflang` alternates from it. Left unset, every
 *    alternate would be a relative path and the locales would not be linked for search engines —
 *    which for a site whose entire point is being findable in seven languages is the one thing that
 *    must not silently break.
 *
 * 2. **EVERY locale carries a URL prefix — `/en/`, `/tr/`, `/bg/` …, none at the root.** Starlight
 *    offers a `root` locale that would serve English from `/`. It is rejected because the audiences
 *    are not symmetric in the way that layout implies: the first reader was a Turkish agency, the
 *    project's writing convention is English-first (CLAUDE.md, "Language conventions"), and a root
 *    locale bakes that tension into the URL shape — `/nedir` next to `/tr/nedir` — where it can
 *    never be renegotiated without breaking every link anyone saved. Prefixed and symmetric, any
 *    language can become the default later by changing one line. See ROADMAP.md D4. Seven languages
 *    in, that choice is what made adding five of them a config edit rather than a URL migration.
 *
 *    The cost of that choice is that NOTHING is built at the root: Starlight emits `/en/`, `/tr/`
 *    and the rest but no `dist/index.html`, so `docs.onerate.travel` is a hard 404 unless something
 *    sends it onward. Nothing here does — the redirect lives in `public/_redirects`, which
 *    Cloudflare reads natively, and is asserted by `test/links.test.js` and `make smoke`. It
 *    shipped broken once; do not assume Starlight handles it.
 */
export default defineConfig({
  site: 'https://docs.onerate.travel',
  integrations: [
    starlight({
      title: 'OneRate',
      // Shown under the title in the sidebar header, per locale.
      tagline: 'B2B hotel distribution, cheapest-first.',
      favicon: '/favicon.svg',
      customCss: ['./src/styles/onerate.css'],
      defaultLocale: 'en',
      /**
       * The seven languages the product ships in, matching the portal's own `LOCALES`
       * (onerate-travel/onerate-app, packages/core/src/locales.ts). Every label is an ENDONYM — a Polish
       * reader scans the language menu for "Polski", and would not recognise "Polish" on a page
       * otherwise in Bulgarian.
       *
       * Starlight ships its own UI strings for six of these. It has none for Bulgarian, so the
       * chrome around a `bg` page — "On this page", "Search", Previous/Next — would silently render
       * in English. `src/content.config.ts` carries that one translation; see the note there.
       */
      locales: {
        en: { label: 'English', lang: 'en' },
        tr: { label: 'Türkçe', lang: 'tr' },
        bg: { label: 'Български', lang: 'bg' },
        hu: { label: 'Magyar', lang: 'hu' },
        it: { label: 'Italiano', lang: 'it' },
        pl: { label: 'Polski', lang: 'pl' },
        ro: { label: 'Română', lang: 'ro' },
      },
      // The portal is the thing every reader is actually trying to use; the promo page is where
      // they came from. Neither is a "social" link, but this is the only slot Starlight gives the
      // header, and burying the portal in a page body would be worse.
      social: [
        { icon: 'external', label: 'Portal', href: 'https://app.onerate.travel' },
        { icon: 'external', label: 'onerate.travel', href: 'https://onerate.travel' },
      ],
      // Slugs deliberately omit the language segment: Starlight resolves each to the reader's
      // locale, which is what makes one sidebar definition serve both languages. A slug written
      // as `en/...` would pin every reader to English.
      sidebar: [
        {
          label: 'Start here',
          translations: { tr: 'Buradan başlayın', bg: 'Започнете оттук', hu: 'Kezdés', it: 'Per iniziare', pl: 'Zacznij tutaj', ro: 'Începe aici' },
          items: [
            { slug: 'what-is-onerate' },
            { slug: 'start/signing-in' },
            { slug: 'start/the-portal' },
            { slug: 'start/roles' },
          ],
        },
        {
          label: 'Searching',
          translations: { tr: 'Arama', bg: 'Търсене', hu: 'Keresés', it: 'Ricerca', pl: 'Wyszukiwanie', ro: 'Căutare' },
          items: [{ slug: 'search/running-a-search' }, { slug: 'search/reading-results' }],
        },
        {
          label: 'Booking',
          translations: { tr: 'Rezervasyon', bg: 'Резервиране', hu: 'Foglalás', it: 'Prenotazione', pl: 'Rezerwacja', ro: 'Rezervare' },
          items: [
            { slug: 'booking/booking-a-stay' },
            { slug: 'booking/your-bookings' },
            { slug: 'booking/cancelling' },
            { slug: 'booking/statuses' },
          ],
        },
        {
          label: 'Running your agency',
          translations: { tr: 'Acentenizi yönetmek', bg: 'Управление на агенцията', hu: 'Az irodád működtetése', it: 'Gestire la tua agenzia', pl: 'Prowadzenie agencji', ro: 'Administrarea agenției' },
          items: [
            { slug: 'manage/suppliers' },
            { slug: 'manage/pricing' },
            { slug: 'manage/preferences' },
            { slug: 'manage/customers' },
            { slug: 'manage/team' },
            { slug: 'manage/settings' },
            { slug: 'manage/integrations' },
            { slug: 'manage/reports' },
          ],
        },
        {
          label: 'Your account',
          translations: { tr: 'Hesabınız', bg: 'Вашият акаунт', hu: 'A fiókod', it: 'Il tuo account', pl: 'Twoje konto', ro: 'Contul tău' },
          items: [{ slug: 'account/security' }],
        },
        {
          label: 'Reference',
          translations: { tr: 'Başvuru', bg: 'Справочник', hu: 'Referencia', it: 'Riferimenti', pl: 'Materiały', ro: 'Referință' },
          items: [{ slug: 'reference/glossary' }, { slug: 'reference/troubleshooting' }],
        },
      ],
    }),
  ],
});
