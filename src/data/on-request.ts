// Same Shopify-shaped pattern as products.ts, minus images and variants.
// These render as a typeset list; they are commission items, not stocked SKUs.

export type OnRequestItem = {
  id: string;
  handle: string;
  title: string;
  descriptionShort: string;
  descriptionLong: string;
  productType: 'Commission';
  tags: string[];
  vendor: 'Florelle';
  hint: string;
};

export const onRequest: OnRequestItem[] = [
  {
    id: 'pillow-covers',
    handle: 'pillow-covers',
    title: 'Pillow covers',
    descriptionShort: 'Made to size, in pairs or singles.',
    descriptionLong:
      '[draft] Pillow covers cut and printed to your size, in cotton or linen.',
    productType: 'Commission',
    tags: ['home'],
    vendor: 'Florelle',
    hint: 'made to size',
  },
  {
    id: 'cushion-covers',
    handle: 'cushion-covers',
    title: 'Cushion covers',
    descriptionShort: 'In pairs or sets, sized to your cushion insert.',
    descriptionLong:
      '[draft] Cushion covers printed in pairs or matched sets. Hidden zip, soft finish.',
    productType: 'Commission',
    tags: ['home'],
    vendor: 'Florelle',
    hint: 'in pairs or sets',
  },
  {
    id: 'tote-bags',
    handle: 'tote-bags',
    title: 'Tote bags',
    descriptionShort: 'Heavy canvas, leaf-printed.',
    descriptionLong:
      '[draft] A market tote in heavy canvas, printed with foraged leaves.',
    productType: 'Commission',
    tags: ['accessory'],
    vendor: 'Florelle',
    hint: 'heavy canvas',
  },
  {
    id: 'scrunchies',
    handle: 'scrunchies',
    title: 'Scrunchies',
    descriptionShort: 'Made from silk offcuts. Nothing wasted.',
    descriptionLong:
      '[draft] Soft silk scrunchies sewn from offcuts of the scarves.',
    productType: 'Commission',
    tags: ['accessory'],
    vendor: 'Florelle',
    hint: 'silk offcuts',
  },
  {
    id: 'diaries',
    handle: 'hand-bound-diaries',
    title: 'Hand-bound diaries',
    descriptionShort: 'Printed covers, hand-bound spine.',
    descriptionLong:
      '[draft] Hand-bound diaries with printed cloth covers and a stitched spine.',
    productType: 'Commission',
    tags: ['paper'],
    vendor: 'Florelle',
    hint: 'printed covers',
  },
  {
    id: 'wedding-souvenirs',
    handle: 'wedding-souvenirs',
    title: 'Wedding souvenirs',
    descriptionShort: 'Named and gifted, in small batches.',
    descriptionLong:
      '[draft] Wedding souvenirs in small batches, named for each guest.',
    productType: 'Commission',
    tags: ['wedding'],
    vendor: 'Florelle',
    hint: 'named & gifted',
  },
  {
    id: 'custom',
    handle: 'custom-orders',
    title: 'Custom orders',
    descriptionShort: 'Your leaf, your cloth. We sketch and quote.',
    descriptionLong:
      '[draft] Bring us your cloth, or your leaf. We sketch, quote, and start when it is ready.',
    productType: 'Commission',
    tags: ['custom'],
    vendor: 'Florelle',
    hint: 'your leaf, your cloth',
  },
];
