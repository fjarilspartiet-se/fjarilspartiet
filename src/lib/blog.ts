// lib/blog.ts - Fixed TypeScript version
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import type { MDXRemoteSerializeResult } from 'next-mdx-remote';

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  tags?: string[];
  featured?: boolean;
  content?: string;
  mdxSource?: MDXRemoteSerializeResult;
}

interface BlogPostFrontmatter {
  title?: string;
  description?: string;
  date?: string;
  author?: string;
  tags?: string[];
  featured?: boolean;
}

// For static export, we need to handle the case where the directory might not exist at build time
function getPostsDirectory(): string {
  const postsDirectory = path.join(process.cwd(), 'content/blog');
  
  // Create directory if it doesn't exist (helpful during development)
  if (!fs.existsSync(postsDirectory)) {
    try {
      fs.mkdirSync(postsDirectory, { recursive: true });
      console.log('Created blog content directory:', postsDirectory);
    } catch (error) {
      console.warn('Could not create blog directory:', error);
    }
  }
  
  return postsDirectory;
}

export function getAllPosts(): BlogPost[] {
  const postsDirectory = getPostsDirectory();
  
  // Check if directory exists and has files
  if (!fs.existsSync(postsDirectory)) {
    console.warn('Blog directory does not exist:', postsDirectory);
    return [];
  }

  let fileNames: string[] = [];
  try {
    fileNames = fs.readdirSync(postsDirectory);
  } catch (error) {
    console.warn('Could not read blog directory:', error);
    return [];
  }

  const allPostsData = fileNames
    .filter((name) => name.endsWith('.md') || name.endsWith('.mdx'))
    .map((fileName) => {
      const slug = fileName.replace(/\.(md|mdx)$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      
      try {
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data } = matter(fileContents);
        const frontmatter = data as BlogPostFrontmatter;

        return {
          slug,
          title: frontmatter.title || 'Untitled',
          description: frontmatter.description || '',
          date: frontmatter.date || new Date().toISOString(),
          author: frontmatter.author || 'Fjärilspartiet',
          tags: frontmatter.tags || [],
          featured: frontmatter.featured || false,
        } as BlogPost;
      } catch (error) {
        console.warn(`Could not read blog post ${fileName}:`, error);
        return null;
      }
    })
    .filter((post): post is BlogPost => post !== null)
    .sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });

  return allPostsData;
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const postsDirectory = getPostsDirectory();
  
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    let fileContents: string;
    
    try {
      fileContents = fs.readFileSync(fullPath, 'utf8');
    } catch {
      // Try .mdx extension
      const fullPathMdx = path.join(postsDirectory, `${slug}.mdx`);
      fileContents = fs.readFileSync(fullPathMdx, 'utf8');
    }

    const { data, content } = matter(fileContents);
    const frontmatter = data as BlogPostFrontmatter;
    const mdxSource = await serialize(content);

    return {
      slug,
      title: frontmatter.title || 'Untitled',
      description: frontmatter.description || '',
      date: frontmatter.date || new Date().toISOString(),
      author: frontmatter.author || 'Fjärilspartiet',
      tags: frontmatter.tags || [],
      featured: frontmatter.featured || false,
      content,
      mdxSource,
    };
  } catch (error) {
    console.error(`Error loading post ${slug}:`, error);
    return null;
  }
}

export function getPostSlugs(): string[] {
  const postsDirectory = getPostsDirectory();
  
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }
  
  try {
    const fileNames = fs.readdirSync(postsDirectory);
    return fileNames
      .filter((name) => name.endsWith('.md') || name.endsWith('.mdx'))
      .map((fileName) => fileName.replace(/\.(md|mdx)$/, ''));
  } catch (error) {
    console.warn('Could not read blog directory for slugs:', error);
    return [];
  }
}

// Create a sample blog post if none exist (helpful for development)
export function createSamplePostIfNeeded(): void {
  const postsDirectory = getPostsDirectory();
  const posts = getAllPosts();
  
  if (posts.length === 0) {
    const samplePost = `---
title: "Välkommen till Fjärilspartiets blogg"
description: "Vi lanserar vår nya blogg för att hålla dig uppdaterad om vårt arbete med systemisk samhällsförnyelse och de senaste utvecklingarna inom partiet."
date: "${new Date().toISOString().split('T')[0]}"
author: "Fjärilspartiet"
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
`;

    try {
      const samplePath = path.join(postsDirectory, 'welcome-to-our-blog.md');
      fs.writeFileSync(samplePath, samplePost);
      console.log('Created sample blog post:', samplePath);
    } catch (error) {
      console.warn('Could not create sample blog post:', error);
    }
  }
}
