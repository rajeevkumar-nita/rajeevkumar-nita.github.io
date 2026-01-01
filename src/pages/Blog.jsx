import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import sanityClient from '../client.js'; 
import Header from '../components/Header'; 
import Footer from '../components/Footer'; 

// --- 1. SEO IMPORT ---
import SEO from '../components/SEO';

const Blog = () => {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    sanityClient.fetch(`*[_type == "post"] | order(publishedAt desc) {
      title,
      slug,
      "mainImageUrl": mainImage.asset->url,
      publishedAt,
      "excerpt": pt::text(body[0]) 
    }`)
    .then((data) => setPosts(data))
    .catch(console.error);
  }, []);

  if (!posts) {
    return (
      <div className="bg-gray-100 dark:bg-slate-900 min-h-screen">
        <Header />
        <div className="text-center py-20 text-sky-700 dark:text-sky-400">Loading posts...</div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-gray-100 dark:bg-slate-900 min-h-screen">
      
      {/* --- 2. SEO COMPONENT YAHAN LAGAYA --- */}
      <SEO 
        title="Tech Blogs & Articles"
        description="Read my latest articles, tutorials, and insights on Web Development, React, Sanity CMS, and Software Engineering."
        keywords={['Tech Blog', 'Rajeev Kumar Blog', 'React Tutorials', 'Web Development', 'Software Engineering']}
        url={window.location.href}
      />

      <Header />
      <section className="py-20 pt-32 min-h-screen">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-sky-700 dark:text-sky-400 mb-12">
            My Blog & Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link to={`/blog/${post.slug.current}`} key={post.slug.current}>
                <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl text-left">
                  {post.mainImageUrl && (
                    <img src={post.mainImageUrl} alt={post.title} className="w-full h-48 object-cover" />
                  )}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100">{post.title}</h3>
                    <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                      {new Date(post.publishedAt).toLocaleDateString()}
                    </p>
                    <p className="mt-2 text-slate-600 dark:text-slate-400">
                      {post.excerpt ? post.excerpt.substring(0, 100) : "Click to read more"}...
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Blog;