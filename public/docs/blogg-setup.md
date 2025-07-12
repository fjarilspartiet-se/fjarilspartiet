# Blog System Setup Guide

## 1. Install Required Dependencies

First, install the necessary packages:

```bash
npm install gray-matter next-mdx-remote
npm install -D @types/mdx
```

## 2. Create Content Directory Structure

Create the following folder structure in your project root:

```
content/
  blog/
    example-post.md
    another-post.mdx
```

## 3. Example Blog Post (content/blog/welcome-to-our-blog.md)

```markdown
---
title: "Välkommen till Fjärilspartiets blogg"
description: "Vi lanserar vår nya blogg för att hålla dig uppdaterad om vårt arbete med systemisk samhällsförnyelse och de senaste utvecklingarna inom partiet."
date: "2024-12-20"
author: "Björn Kenneth Holmström"
tags: ["lansering", "blogg", "systemisk förändring"]
featured: true
---

# Välkommen till vår nya blogg!

Vi är glada att lansera Fjärilspartiets officiella blogg där vi kommer att dela våra tankar, uppdateringar och insikter om systemisk samhällsförnyelse.

## Vad kan du förvänta dig?

Här kommer vi att skriva om:

- **Utvecklingen av våra initiativ** som AUBI, DPOP och andra systemiska lösningar
- **Tankar om samhällsförändring** och hur vi kan skapa positiva fjärilseffekter
- **Partiets tillväxt** och nya medlemmar som gör skillnad
- **Praktiska tips** för dig som vill engagera dig i lokal förändring

## Systemisk förändring börjar med små steg

Som vårt namn antyder tror vi på att små, genomtänkta förändringar kan skapa stora positiva effekter i samhället. Denna blogg är ett av många sätt vi kommunicerar och bygger gemenskap kring vår vision.

> "En fjärils vingslag kan skapa en storm på andra sidan jorden. På samma sätt kan våra gemensamma ansträngningar för systemisk förändring transformera hela samhället."

Vi ser fram emot att dela denna resa med dig. Kom ihåg att [bli medlem](/bli-medlem) för att vara en del av förändringen!
```

## 4. Another Example Post (content/blog/aubi-development-update.md)

```markdown
---
title: "AUBI-utveckling: Nya insikter från pilotprojekten"
description: "En uppdatering om hur vårt arbete med Adaptiv Universell Basinkomst utvecklas och vad vi lärt oss från våra tidiga analyser."
date: "2024-12-15"
author: "Björn Kenneth Holmström"
tags: ["AUBI", "ekonomi", "pilotprojekt", "välfärd"]
featured: false
---

# AUBI-utveckling: Nya insikter från pilotprojekten

Vi har arbetat intensivt med att utveckla vårt koncept för Adaptiv Universell Basinkomst (AUBI) och vill dela några viktiga insikter från våra analyser.

## Vad gör AUBI unikt?

Till skillnad från traditionell basinkomst fokuserar AUBI på:

1. **Adaptivitet** - systemet anpassar sig efter individuella behov och lokala förhållanden
2. **Samhällsengagemang** - belönar aktiviteter som stärker samhället
3. **Systemintegration** - fungerar tillsammans med befintliga välfärdssystem

## Tidiga resultat från våra modeller

Våra ekonomiska modeller visar att AUBI kan:

- Minska byråkrati med upp till 40%
- Öka lokal ekonomisk aktivitet
- Förbättra mental hälsa genom ökad grundtrygghet
- Stimulera innovation och entreprenörskap

## Nästa steg

Vi arbetar nu på att:

- Utveckla en pilotimplementation i samarbete med intresserade kommuner
- Förfina de tekniska systemen för bidragsverifiering
- Analysera juridiska ramverk för implementation

Följ våra framsteg och [läs mer om AUBI](/losningar?tab=aubi) på vår webbplats.
```

## 5. Update Your Navigation

Add blog link to your navigation in `MainLayout.tsx`:

```tsx
// In your navigation links
<Link href="/blogg" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900">
  Blogg
</Link>
```

## 6. Add Blog Link to Homepage

In your `index.tsx`, you can add a blog section:

```tsx
// Add to your homepage
<section className="bg-gray-50 py-16">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">
        Senaste från bloggen
      </h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        Följ vårt arbete och få de senaste insikterna om systemisk samhällsförnyelse
      </p>
    </div>
    <div className="text-center">
      <Link href="/blogg" className="btn-primary inline-flex items-center">
        Läs våra senaste inlägg <ArrowRight className="w-4 h-4 ml-2" />
      </Link>
    </div>
  </div>
</section>
```

## 7. Blog Post Metadata Format

When creating new blog posts, use this frontmatter format:

```yaml
---
title: "Your Post Title"
description: "A brief description for SEO and post previews"
date: "YYYY-MM-DD"
author: "Author Name"
tags: ["tag1", "tag2", "tag3"]
featured: false  # Set to true for the featured post
---
```

## Features Included

✅ **Automatic post discovery** - Just add .md or .mdx files to `/content/blog/`
✅ **Featured post highlighting** - Set `featured: true` in frontmatter
✅ **Tag system** - Organize posts with tags
✅ **SEO optimization** - Proper meta tags and structured data
✅ **Responsive design** - Works on all devices
✅ **Share buttons** - Easy social sharing
✅ **Reading time estimation** - Shows estimated reading time
✅ **Static generation** - Fast loading with ISR
✅ **MDX support** - Use React components in your posts

## Writing Tips

1. **Use Swedish titles** without capitalizing every word (only the first word)
2. **Include engaging descriptions** for better social sharing
3. **Add relevant tags** to help readers find related content
4. **Mark important posts as featured** to highlight them
5. **Use clear headings** for better readability
6. **Include call-to-actions** linking to membership or other pages

Start writing your first blog post and watch your content automatically appear on the blog page!
