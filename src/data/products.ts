// Do not add a cart. Do not add checkout. The inquire-on-WhatsApp pattern
// is the deliberate funnel for v1. A future agent must not "fix" this.
//
// ----------------------------------------------------------------------
// Shopify swap path:
// When migrating to Shopify Storefront API, replace this file's exported
// `products` array with the result of the query below. Fields map as:
//   handle             -> product.handle
//   title              -> product.title
//   descriptionShort   -> product.metafield(namespace:"florelle", key:"short_desc").value
//   descriptionLong    -> product.descriptionHtml (body_html)
//   material           -> product.metafield(namespace:"florelle", key:"material").value
//   productType        -> product.productType
//   tags               -> product.tags
//   vendor             -> product.vendor
//   images[]           -> product.images.nodes[] { url, altText, width, height }
//   variants[]         -> product.variants.nodes[] { id, title, availableForSale, price { amount currencyCode } }
//
// query GetProducts($first: Int = 25) {
//   products(first: $first, sortKey: MANUAL) {
//     nodes {
//       id
//       handle
//       title
//       descriptionHtml
//       productType
//       tags
//       vendor
//       shortDesc: metafield(namespace: "florelle", key: "short_desc") { value }
//       material:  metafield(namespace: "florelle", key: "material") { value }
//       images(first: 6) { nodes { url altText width height } }
//       variants(first: 25) {
//         nodes {
//           id
//           title
//           availableForSale
//           price { amount currencyCode }
//         }
//       }
//     }
//   }
// }
// ----------------------------------------------------------------------

export type Money = { amount: string; currencyCode: 'INR' };

export type ProductImage = {
  url: string;
  altText: string;
  width: number;
  height: number;
};

export type ProductVariant = {
  id: string;
  title: string;
  availableForSale: boolean;
  price?: Money;
};

export type Product = {
  id: string;
  handle: string;
  title: string;
  material: 'Silk' | 'Aloe' | 'Satin' | 'Cotton';
  descriptionShort: string;
  descriptionLong: string;
  productType: 'T-Shirt' | 'Scarf';
  tags: string[];
  vendor: 'Florelle';
  images: ProductImage[];
  variants: ProductVariant[];
  inquireMessage: string;
};

import { productInquireMessage } from '../lib/whatsapp';

const scarfVariant = (handle: string): ProductVariant => ({
  id: `${handle}-onesize`,
  title: '70 × 200 cm',
  availableForSale: true,
});

const teeVariants = (handle: string): ProductVariant[] =>
  (['S', 'M', 'L', 'XL'] as const).map((size) => ({
    id: `${handle}-${size}`,
    title: size,
    availableForSale: true,
  }));

export const products: Product[] = [
  {
    id: 'patang',
    handle: 'patang',
    title: 'Patang',
    material: 'Silk',
    descriptionShort: 'Hand-pressed rose leaves on mulberry silk, 70 × 200 cm.',
    descriptionLong:
      '[draft] Patang is a long mulberry silk scarf, hand-pressed with rose leaves from the studio garden. The print falls along the length, deepest where the leaves lay longest. Each one finishes slightly differently.',
    productType: 'Scarf',
    tags: ['silk', 'scarf', 'rose'],
    vendor: 'Florelle',
    images: [
      {
        url: '/images/scarf-rose.png',
        altText:
          'Patang scarf, rose-leaf print on cream mulberry silk, draped over a branch.',
        width: 1200,
        height: 1500,
      },
    ],
    variants: [scarfVariant('patang')],
    inquireMessage: productInquireMessage('Patang silk scarf'),
  },
  {
    id: 'madhuri',
    handle: 'madhuri',
    title: 'Madhuri',
    material: 'Silk',
    descriptionShort: 'Leaves and marigold florets on mulberry silk, 70 × 200 cm.',
    descriptionLong:
      '[draft] Madhuri carries pressed leaves and small marigold florets across cream mulberry silk. The saffron picks up gently in warm light.',
    productType: 'Scarf',
    tags: ['silk', 'scarf', 'marigold'],
    vendor: 'Florelle',
    images: [
      {
        url: '/images/scarf-saffron.png',
        altText:
          'Madhuri scarf, pressed leaves and saffron flower marks on cream silk.',
        width: 1200,
        height: 1500,
      },
    ],
    variants: [scarfVariant('madhuri')],
    inquireMessage: productInquireMessage('Madhuri silk scarf'),
  },
  {
    id: 'sandhya',
    handle: 'sandhya',
    title: 'Sandhya',
    material: 'Silk',
    descriptionShort: 'Eucalyptus and cosmos on mulberry silk, 70 × 200 cm.',
    descriptionLong:
      '[draft] Sandhya pairs eucalyptus leaf and cosmos petal, pressed and steamed into mulberry silk over an afternoon.',
    productType: 'Scarf',
    tags: ['silk', 'scarf', 'eucalyptus', 'cosmos'],
    vendor: 'Florelle',
    images: [
      {
        url: '/images/scarf-3.png',
        altText: 'Sandhya scarf, eucalyptus and cosmos pressed on cream silk.',
        width: 1200,
        height: 1500,
      },
    ],
    variants: [scarfVariant('sandhya')],
    inquireMessage: productInquireMessage('Sandhya silk scarf'),
  },
  {
    id: 'neem',
    handle: 'neem',
    title: 'Neem',
    material: 'Silk',
    descriptionShort: 'Neem leaves on mulberry silk, 70 × 200 cm.',
    descriptionLong:
      '[draft] Neem is the steadiest of the run: long, fine neem leaves laid down the length of mulberry silk.',
    productType: 'Scarf',
    tags: ['silk', 'scarf', 'neem'],
    vendor: 'Florelle',
    images: [
      {
        url: '/images/scarf-4.png',
        altText: 'Neem scarf, pressed neem leaves on mulberry silk.',
        width: 1200,
        height: 1500,
      },
    ],
    variants: [scarfVariant('neem')],
    inquireMessage: productInquireMessage('Neem silk scarf'),
  },
  {
    id: 'ushas',
    handle: 'ushas',
    title: 'Ushas',
    material: 'Aloe',
    descriptionShort: 'Single-pigment dye bath on aloe fibre, 60 × 180 cm.',
    descriptionLong:
      '[draft] Ushas is dyed in a single pigment bath on aloe fibre, soft and dawn-coloured, with a faint botanical pattern that surfaces in the weave.',
    productType: 'Scarf',
    tags: ['aloe', 'scarf'],
    vendor: 'Florelle',
    images: [
      {
        url: '/images/scarf-5.png',
        altText:
          'Ushas scarf, pale dawn-coloured aloe-fibre scarf with botanical print.',
        width: 1200,
        height: 1500,
      },
    ],
    variants: [
      {
        id: 'ushas-onesize',
        title: '60 × 180 cm',
        availableForSale: true,
      },
    ],
    inquireMessage: productInquireMessage('Ushas aloe scarf'),
  },
  {
    id: 'bhumi',
    handle: 'bhumi',
    title: 'Bhumi',
    material: 'Satin',
    descriptionShort: 'Pressed bougainvillea on satin, 70 × 200 cm.',
    descriptionLong:
      '[draft] Bhumi is bougainvillea pressed on warm satin, with a deeper drape than the silk pieces.',
    productType: 'Scarf',
    tags: ['satin', 'scarf', 'bougainvillea'],
    vendor: 'Florelle',
    images: [
      {
        url: '/images/scarf-6.png',
        altText: 'Bhumi scarf, bougainvillea pressed on warm satin.',
        width: 1200,
        height: 1500,
      },
    ],
    variants: [scarfVariant('bhumi')],
    inquireMessage: productInquireMessage('Bhumi satin scarf'),
  },
  {
    id: 'marigold',
    handle: 'marigold',
    title: 'Marigold',
    material: 'Cotton',
    descriptionShort: 'Marigold and turmeric pigment on raw cotton, sizes S to XL.',
    descriptionLong:
      '[draft] Marigold is warm ochre and ember pigment rising up from the hem of a raw cotton tee. Pre-washed, soft from the first wear.',
    productType: 'T-Shirt',
    tags: ['cotton', 'tee', 'marigold', 'turmeric'],
    vendor: 'Florelle',
    images: [
      {
        url: '/images/tee-ember.png',
        altText:
          'Marigold tee, warm ochre and ember pigment rising up from the hem of a cream cotton tee.',
        width: 1200,
        height: 1500,
      },
    ],
    variants: teeVariants('marigold'),
    inquireMessage: productInquireMessage('Marigold tee'),
  },
  {
    id: 'khadira',
    handle: 'khadira',
    title: 'Khadira',
    material: 'Cotton',
    descriptionShort: 'Tamarind and khadir wash on washed cotton, sizes S to XL.',
    descriptionLong:
      '[draft] Khadira is a tamarind and khadir wash on washed cotton, leaving a dark botanical silhouette on a softened ground.',
    productType: 'T-Shirt',
    tags: ['cotton', 'tee', 'tamarind', 'khadir'],
    vendor: 'Florelle',
    images: [
      {
        url: '/images/tee-thicket.png',
        altText:
          'Khadira tee, tamarind-dyed cotton tee with a dark botanical silhouette.',
        width: 1200,
        height: 1500,
      },
    ],
    variants: teeVariants('khadira'),
    inquireMessage: productInquireMessage('Khadira tee'),
  },
  {
    id: 'neel',
    handle: 'neel',
    title: 'Neel',
    material: 'Cotton',
    descriptionShort: 'Indigo-leaf wash on raw cotton, sizes S to XL.',
    descriptionLong:
      '[draft] Neel is an indigo-leaf pressed pattern on cream cotton. Slow-set in the studio, finished by hand.',
    productType: 'T-Shirt',
    tags: ['cotton', 'tee', 'indigo'],
    vendor: 'Florelle',
    images: [
      {
        url: '/images/tee-indigo.png',
        altText: 'Neel tee, indigo-leaf pressed pattern on cream cotton.',
        width: 1200,
        height: 1500,
      },
    ],
    variants: teeVariants('neel'),
    inquireMessage: productInquireMessage('Neel tee'),
  },
];
