import { defineCollection } from 'astro:content';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

// No `i18n` collection. Starlight ships its own Turkish UI strings ("On this page", "Search",
// the previous/next labels), so the collection would only exist to hold overrides of translations
// that are already correct — and an empty override file is a place for one to silently go stale.
// Add it the day a UI string here actually needs a different Turkish word than upstream's.
export const collections = {
  docs: defineCollection({ loader: docsLoader(), schema: docsSchema() }),
};
