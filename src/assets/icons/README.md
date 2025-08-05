# Site Icons

Place your site icons in this directory with the following specifications:

## Required Files

### Favicon Files
- `favicon.ico` - Traditional ICO format (16x16, 32x32 combined)
- `icon-16x16.png` - PNG format, 16x16 pixels
- `icon-32x32.png` - PNG format, 32x32 pixels
- `icon.svg` - SVG format (scalable, modern browsers)

### Mobile/App Icons
- `apple-touch-icon.png` - iOS home screen icon, 180x180 pixels
- `icon-192x192.png` - Android icon, 192x192 pixels
- `icon-512x512.png` - Android icon (large), 512x512 pixels

### Configuration
- `site.webmanifest` - ✅ Already created (web app manifest)

## Icon Specifications

### Design Guidelines
- Use your personal brand colors
- Keep design simple and recognizable at small sizes
- Ensure good contrast for visibility
- Consider both light and dark themes

### Technical Requirements
- **Favicon.ico**: 16x16 and 32x32 pixels, ICO format
- **PNG icons**: Use high-quality PNG with transparency
- **Apple Touch Icon**: 180x180 pixels, PNG format, no transparency
- **Android icons**: 192x192 and 512x512 pixels, PNG format
- **SVG icon**: Scalable vector, optimized for web

## Online Icon Generators

You can use these tools to generate all required formats:
- [Favicon.io](https://favicon.io/) - Generate from text, image, or emoji
- [RealFaviconGenerator](https://realfavicongenerator.net/) - Comprehensive favicon generator
- [Favicon Generator](https://www.favicon-generator.org/) - Simple favicon creation

## Installation

1. Generate or create your icons in the required sizes
2. Place them in this directory (`src/assets/icons/`)
3. The site will automatically use them (already configured in base.njk)
4. Test on different devices and browsers

## Brand Colors

Current theme color: `#2b2b2b` (dark gray)
Consider using this or your personal brand colors for consistency. 