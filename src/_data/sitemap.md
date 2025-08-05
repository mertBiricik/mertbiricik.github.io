# Sitemap Configuration

This site automatically generates a sitemap.xml file that helps search engines understand and index the website structure.

## How It Works

### Automatic Generation
- The sitemap is generated automatically during each build
- Located at `/sitemap.xml` (https://mert.biricik.de/sitemap.xml)
- Includes all pages in the site collections
- Updates automatically when content changes

### Page Priorities
- **Homepage (/)**: Priority 1.0 (highest)
- **Projects**: Priority 0.9 (very important - showcases work)
- **About & Publications**: Priority 0.8 (important)
- **Contact**: Priority 0.7 (useful but lower priority)
- **Default for new pages**: Priority 0.5

### Update Frequencies
- **Homepage**: Weekly (frequently updated content)
- **Projects**: Monthly (new projects added regularly)
- **About**: Monthly (experience and skills updates)
- **Publications**: Yearly (academic publications less frequent)
- **Contact**: Yearly (contact info rarely changes)

## Adding New Pages

When creating new pages, add these frontmatter fields:

```yaml
---
layout: base
title: "Page Title"
description: "Page description for SEO"
priority: 0.8  # 0.0 to 1.0 (importance)
changefreq: monthly  # yearly, monthly, weekly, daily
---
```

### Recommended Priorities
- **Blog posts**: 0.6
- **Project details**: 0.7
- **Main sections**: 0.8-0.9
- **Homepage**: 1.0

### Recommended Change Frequencies
- **Dynamic content**: weekly/daily
- **Project updates**: monthly
- **Static info**: yearly
- **News/blog**: weekly

## SEO Benefits

The sitemap provides:
- Faster indexing of new content
- Better search engine understanding
- Improved Google Search Console reporting
- Professional SEO setup for portfolio

## Technical Details

- **Template**: `src/sitemap.njk`
- **Output**: `sitemap.xml` in site root
- **Format**: XML Sitemap Protocol 0.9
- **Automatic**: Regenerated on every build
- **Referenced**: In robots.txt for search engine discovery 