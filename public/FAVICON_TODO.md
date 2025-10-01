# Add Favicon Images

Before deploying, generate and add these favicon files:

## Quick Option: Use Favicon.io

1. Go to https://favicon.io/favicon-generator/
2. Create favicon with "BL" or your initials
3. Download the zip
4. Extract and place these files in `/public/`:
   - `favicon.png` (32×32 or 48×48)
   - `apple-touch-icon.png` (180×180)

## Or Use Any PNG

Just drop any square PNG (min 32×32) as:
- `/public/favicon.png`
- `/public/apple-touch-icon.png` (copy of same file is fine)

## Current Status

✅ Metadata configured in `app/layout.tsx`
⚠️ Actual image files need to be added to `/public/`

The site will work without these, but browsers will show a default icon.
