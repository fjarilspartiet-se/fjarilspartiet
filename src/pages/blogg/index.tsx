// pages/blogg/index.tsx - Blog listing page
import { GetStaticProps } from 'next';
import MainLayout from '../../layouts/MainLayout';
import Link from 'next/link';
import { getAllPosts } from '../../lib/blog';
import type { BlogPost } from '../../lib/blog';
import ShareButtons from '../../components/ShareButtons';
import SEO from '../../components/SEO';
import RSSLink from '../../components/RSSLink';
import { Calendar, User, ArrowRight, Sparkles } from 'lucide-react';

interface BlogIndexProps {
  posts: BlogPost[];
}

export default function BlogIndex({ posts }: BlogIndexProps) {
  const featuredPost = posts.find(post => post.featured) || posts[0];
  const regularPosts = posts.filter(post => post !== featuredPost);

  return (
    <>
      <SEO 
        title="Blogg och nyheter"
        description="Läs de senaste nyheterna och insikterna från Fjärilspartiet om systemisk samhällsförnyelse, politik och framtidslösningar."
        canonical="/blogg"
      />
      <MainLayout>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Blogg och nyheter</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
              Följ utvecklingen av Fjärilspartiet och våra tankar om systemisk samhällsförnyelse, 
              nya initiativ och visioner för framtiden.
            </p>
            
            {/* Add RSS link */}
            <div className="flex justify-center items-center space-x-4">
              <RSSLink variant="button" />
              <span className="text-gray-400">|</span>
              <RSSLink variant="link" />
            </div>
          </div>

          {posts.length === 0 ? (
            /* No Posts State */
            <div className="text-center py-12">
              <div className="w-16 h-16 mx-auto mb-4 text-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Inga blogginlägg än
              </h3>
              <p className="text-gray-600 mb-6">
                Vi arbetar på att få igång vår blogg. Håll utkik för kommande inlägg!
              </p>
              <Link href="/bli-medlem" className="btn-primary">
                Bli medlem för att få uppdateringar →
              </Link>
            </div>
          ) : (
            <>
              {/* Featured Post */}
              {featuredPost && (
                <div className="mb-16">
                  <h2 className="text-2xl font-bold mb-6 flex items-center">
                    <Sparkles className="w-6 h-6 text-yellow-500 mr-2" />
                    Senaste inlägget
                  </h2>
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="p-8">
                      <div className="flex items-center mb-4">
                        <span className="bg-yellow-400 text-gray-900 text-xs font-bold px-3 py-1 rounded-full">
                          NYTT
                        </span>
                        {featuredPost.tags && featuredPost.tags.length > 0 && (
                          <div className="ml-4 flex gap-2">
                            {featuredPost.tags.slice(0, 2).map((tag) => (
                              <span key={tag} className="text-xs text-blue-600 bg-blue-100 px-2 py-1 rounded">
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                      
                      <h3 className="text-3xl font-bold text-gray-900 mb-4 hover:text-blue-600 transition-colors">
                        <Link href={`/blogg/${featuredPost.slug}`}>
                          {featuredPost.title}
                        </Link>
                      </h3>
                      
                      <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                        {featuredPost.description}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-gray-500 text-sm">
                          <Calendar className="w-4 h-4 mr-2" />
                          <span className="mr-4">
                            {new Date(featuredPost.date).toLocaleDateString('sv-SE', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric'
                            })}
                          </span>
                          <User className="w-4 h-4 mr-2" />
                          <span>{featuredPost.author}</span>
                        </div>
                        
                        <Link 
                          href={`/blogg/${featuredPost.slug}`} 
                          className="btn-primary inline-flex items-center"
                        >
                          Läs mer <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Regular Posts Grid */}
              {regularPosts.length > 0 && (
                <div>
                  <h2 className="text-2xl font-bold mb-8">
                    {featuredPost ? 'Tidigare inlägg' : 'Alla inlägg'}
                  </h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {regularPosts.map((post) => (
                      <article key={post.slug} className="bg-white rounded-lg shadow-sm border hover:shadow-lg transition-all duration-200 overflow-hidden">
                        <div className="p-6">
                          <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center text-gray-500 text-sm">
                              <Calendar className="w-4 h-4 mr-1" />
                              <span>
                                {new Date(post.date).toLocaleDateString('sv-SE', {
                                  month: 'short',
                                  day: 'numeric'
                                })}
                              </span>
                            </div>
                            {post.tags && post.tags.length > 0 && (
                              <span className="text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded">
                                {post.tags[0]}
                              </span>
                            )}
                          </div>
                          
                          <h3 className="text-xl font-semibold mb-3 hover:text-blue-600 transition-colors">
                            <Link href={`/blogg/${post.slug}`}>
                              {post.title}
                            </Link>
                          </h3>
                          
                          <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                            {post.description}
                          </p>
                          
                          <div className="flex items-center justify-between">
                            <div className="flex items-center text-gray-500 text-xs">
                              <User className="w-3 h-3 mr-1" />
                              <span>{post.author}</span>
                            </div>
                            
                            <Link 
                              href={`/blogg/${post.slug}`} 
                              className="text-blue-600 hover:text-blue-800 text-sm font-medium inline-flex items-center"
                            >
                              Läs mer <ArrowRight className="w-3 h-3 ml-1" />
                            </Link>
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              )}

              {/* Call to Action */}
              <div className="mt-16 bg-blue-50 rounded-lg p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Håll dig uppdaterad</h3>
                <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                  Vill du få de senaste nyheterna och insikterna direkt? Bli medlem eller 
                  följ oss på sociala medier för att inte missa något.
                </p>
                <div className="flex justify-center gap-4">
                  <Link href="/bli-medlem" className="btn-primary">
                    Bli medlem
                  </Link>
                  <Link href="/kontakt" className="btn-secondary">
                    Kontakta oss
                  </Link>
                </div>
              </div>
            </>
          )}
        </div>

        <div className="mt-16">
          <ShareButtons 
            title="Fjärilspartiets blogg och nyheter"
            description="Följ utvecklingen av systemisk samhällsförnyelse och våra initiativ för ett blomstrande samhälle."
          />
        </div>
      </MainLayout>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts();
  
  return {
    props: {
      posts,
    },
    // Remove revalidate for static export
  };
};
