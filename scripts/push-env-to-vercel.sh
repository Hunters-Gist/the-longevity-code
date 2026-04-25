#!/usr/bin/env bash
# Push every non-comment, non-empty key from .env.local to all three Vercel
# environments (production, preview, development). Idempotent: removes an
# existing value before adding the new one.
#
# Usage:
#   VERCEL_TOKEN=vcp_... bash scripts/push-env-to-vercel.sh

set -uo pipefail  # NOT -e: we tolerate individual vercel call failures

if [[ -z "${VERCEL_TOKEN:-}" ]]; then
  echo "VERCEL_TOKEN is not set" >&2
  exit 1
fi

ENV_FILE=".env.local"
if [[ ! -f "$ENV_FILE" ]]; then
  echo "$ENV_FILE not found" >&2
  exit 1
fi

while IFS= read -r line || [[ -n "$line" ]]; do
  # Skip blanks and comments.
  [[ -z "$line" || "$line" =~ ^[[:space:]]*# ]] && continue
  # Split on the first '='.
  key="${line%%=*}"
  value="${line#*=}"
  [[ -z "$key" || -z "$value" ]] && continue

  for env in production preview development; do
    npx --yes vercel@latest env rm "$key" "$env" --yes --token "$VERCEL_TOKEN" >/dev/null 2>&1 || true
    printf '%s' "$value" | npx --yes vercel@latest env add "$key" "$env" --token "$VERCEL_TOKEN" >/dev/null 2>&1 || \
      echo "  FAILED: $key ($env)"
  done
  echo "  pushed $key"
done < "$ENV_FILE"

echo ""
echo "Done. Run next:"
echo "  npx vercel --prod --token \"\$VERCEL_TOKEN\""
