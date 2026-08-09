import { defineCollection } from 'astro:content';
import { docsLoader, i18nLoader } from '@astrojs/starlight/loaders';
import { docsSchema, i18nSchema } from '@astrojs/starlight/schema';

// The `i18n` collection exists for ONE language.
//
// Starlight ships its own UI strings ("On this page", "Search", the previous/next labels, the aside
// titles) for six of the seven locales this site serves — check `@astrojs/starlight/translations`
// before adding anything here. It has none for BULGARIAN, and its behaviour when a locale has no
// translation is to fall back to the default locale: a `bg` page would render Bulgarian prose inside
// English chrome, and the build would stay green. That is precisely the half-translated failure this
// repo's CLAUDE.md names one level up, at page granularity.
//
// So `src/content/i18n/bg.json` is a full translation, and it is the only file in here on purpose.
// Adding `tr.json` or `it.json` to override strings upstream already has correct would create a
// place for a translation to go stale silently — which is why the collection did not exist before.
export const collections = {
  docs: defineCollection({ loader: docsLoader(), schema: docsSchema() }),
  i18n: defineCollection({ loader: i18nLoader(), schema: i18nSchema() }),
};
