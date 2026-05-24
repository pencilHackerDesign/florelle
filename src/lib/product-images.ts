// Resolve a product image URL ("/images/<file>.png") to its imported
// ImageMetadata so Astro's Image component can optimize it.
import type { ImageMetadata } from 'astro';

const modules = import.meta.glob<{ default: ImageMetadata }>(
  '../assets/images/*.png',
  { eager: true },
);

const map = new Map<string, ImageMetadata>();
for (const [path, mod] of Object.entries(modules)) {
  const filename = path.split('/').pop()!;
  map.set(filename, mod.default);
}

export function resolveImage(publicUrl: string): ImageMetadata {
  const filename = publicUrl.split('/').pop()!;
  const found = map.get(filename);
  if (!found) {
    throw new Error(`Product image not found in src/assets/images: ${filename}`);
  }
  return found;
}
