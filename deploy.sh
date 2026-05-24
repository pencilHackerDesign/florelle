#!/usr/bin/env bash
# Florelle — one-shot deploy script
# Creates the GitHub repo (idempotent) and triggers a Vercel deploy.
set -e

cd "$(dirname "$0")"

echo "→ Florelle deploy"
echo "  project: $(pwd)"
echo ""

# ---- 1. GitHub ----
if git remote get-url origin >/dev/null 2>&1; then
  echo "→ git remote already set:"
  git remote -v | head -1
else
  echo "→ creating GitHub repo pencilHackerDesign/florelle (public)…"
  gh repo create pencilHackerDesign/florelle \
    --public \
    --source=. \
    --remote=origin \
    --push \
    --description "Florelle — plant-printed textiles & paper, made with care."
fi

# Push any new commits (if remote was already set)
if [ -n "$(git remote -v 2>/dev/null | head -1)" ]; then
  echo "→ pushing latest commits…"
  git push -u origin main 2>&1 | tail -5 || true
fi

echo ""

# ---- 2. Vercel ----
echo "→ deploying to Vercel…"
echo "  (first time will prompt for team/project — accept defaults)"
echo ""
vercel deploy --yes

echo ""
echo "✔ Done. The deploy URL is above."
echo "  Tip: run 'vercel deploy --prod --yes' to promote to production."
