// pages/blogg/[slug].tsx - Fixed TypeScript version
import React from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import { MDXRemote } from 'next-mdx-remote';
import type { MDXComponents } from 'mdx/types';
import MainLayout from '../../layouts/MainLayout';
import Link from 'next/link';
import { getPostBySlug, getPostSlugs } from '../../lib/blog';
import type { BlogPost } from '../../lib/blog';
import ShareButtons from '../../components/ShareButtons';
import SEO from '../../components/SEO';
import RSSLink from '../../components/RSSLink';
import { ArrowLeft, Calendar, User, Clock } from 'lucide-react';
import styles from '../../styles/BlogPost.module.css';
interface BlogPostProps {
  post: BlogPost;
}

// MDX Components for custom styling - properly typed for MDXComponents
const components: MDXComponents = {
  h2: ({ children }) => (
    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">{children}</h2>
  ),
  h3: ({ children }) => (
    <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">{children}</h3>
  ),
  p: ({ children }) => (
    <p className="text-gray-700 mb-4 leading-relaxed">{children}</p>
  ),
  ul: ({ children }) => (
    <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">{children}</ul>
  ),
  ol: ({ children }) => (
    <ol className="list-decimal list-inside text-gray-700 mb-4 space-y-2">{children}</ol>
  ),
  blockquote: ({ children }) => (
    <blockquote className="border-l-4 border-blue-500 bg-blue-50 p-4 my-6 italic">
      {children}
    </blockquote>
  ),
  code: ({ children }) => (
    <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono">{children}</code>
  ),
  pre: ({ children }) => (
    <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto my-6">{children}</pre>
  ),
  a: ({ href, children }) => (
    <a href={href} className="text-blue-600 hover:text-blue-800 underline">
      {children}
    </a>
  ),
};

export default function BlogPost({ post }: BlogPostProps) {
  const estimatedReadTime = Math.ceil((post.content?.split(' ').length || 0) / 200); // ~200 words per minute

  return (
    <>
      <SEO 
        title={post.title}
        description={post.description}
        canonical={`/blogg/${post.slug}`}
      />
      <MainLayout>
        <div className={styles.container}>
          {/* Back Navigation */}
          <nav className={styles.breadcrumb}>
            <Link href="/blogg" className={styles.backLink}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Tillbaka till bloggen
            </Link>
          </nav>

          {/* Article Header */}
          <article className="prose prose-lg max-w-none">
            <header className="mb-8">
              <h1 className={styles.postTitle}>
                {post.title}
              </h1>
              
              <div className="flex items-center justify-between border-b border-gray-200 pb-6">
                <div className="flex items-center text-gray-600 space-x-6">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString('sv-SE', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </time>
                  </div>
                  
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-2" />
                    <span>{post.author}</span>
                  </div>
                  
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>{estimatedReadTime} min läsning</span>
                  </div>
                </div>
                
                {post.tags && post.tags.length > 0 && (
                  <div className={styles.postTags}>
                    {post.tags.map((tag) => (
                      <span key={tag} className={styles.tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
              
              {post.description && (
                <p className="text-xl text-gray-600 mt-6 leading-relaxed">
                  {post.description}
                </p>
              )}
            </header>

            {/* Article Content */}
            <div className={styles.postContent}>
              {post.mdxSource && (
                <MDXRemote {...post.mdxSource} components={components} />
              )}
            </div>

            {/* Article Footer */}
            <footer className="mt-12 pt-8 border-t border-gray-200">
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3">Tyckte du om detta inlägg?</h3>
                <p className="text-gray-600 mb-4">
                  Bli medlem i Fjärilspartiet för att få fler insikter om systemisk samhällsförnyelse 
                  och var med och forma framtidens politik.
                </p>
                <div className="flex gap-4 flex-wrap">
                  <Link href="/bli-medlem" className="btn-primary">
                    Bli medlem
                  </Link>
                  <Link href="/blogg" className="btn-secondary">
                    Läs fler inlägg
                  </Link>
                  <RSSLink variant="link" />
                </div>
              </div>
            </footer>
          </article>
        </div>

        <div className="mt-16">
          <ShareButtons 
            title={post.title}
            description={post.description}
          />
        </div>
      </MainLayout>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = getPostSlugs();
  const paths = slugs.map((slug) => ({
    params: { slug },
  }));

  return {
    paths,
    fallback: false, // Required for static export
  };
};

export const getStaticProps: GetStaticProps<BlogPostProps> = async ({ params }) => {
  const slug = params?.slug as string;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
    },
  };
};


