# Florelle

Sustainable, plant-printed textiles and paper, made by hand with care for the earth and the lives it holds.

This is a single-page Astro site for pre-orders and inquiries. The primary call to action is a WhatsApp link.

## Stack

- Astro 5
- Hand-rolled CSS with a soft earthen-pastel palette
- Subtle inline-SVG fern + floral motifs
- No JavaScript framework, no client-side runtime

## Development

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # production build to dist/
npm run preview  # preview the production build
```

## Product images

The nine refined product photographs live in `public/images/`. They are:

| File | Product |
|------|---------|
| `tshirt-01.png` | Eco-printed t-shirt (sizes XL, L, M) |
| `tshirt-02.png` | Eco-printed t-shirt |
| `tshirt-03.png` | Eco-printed t-shirt |
| `silk-scarf-01.png` | Mulberry silk scarf, botanically dyed |
| `silk-scarf-02.png` | Mulberry silk scarf, botanically dyed |
| `silk-scarf-03.png` | Mulberry silk scarf, botanically dyed |
| `aloe-scarf.png` | Aloe-fibre scarf |
| `satin-scarf.png` | Satin scarf, plant-printed |
| `diary.png` | Hand-bound diary with botanical print cover |

To refresh them, download the renamed files from the `GPT images` folder in Drive into `public/images/` using the names above.

## Deployment

The site is deployed on Vercel. Pushing to `main` triggers a redeploy.

## WhatsApp CTA

All pre-order and inquiry buttons open WhatsApp at `+91 77670 58698`. Update the number in `src/components/WhatsAppButton.astro` if it changes.
