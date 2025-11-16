import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import sanityClient from '../client.js';
import { PortableText } from '@portabletext/react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const SinglePost = () => {
  const [postData, setPostData] = useState(null);
  const { slug } = useParams(); // URL se 'slug' ko get karega

  useEffect(() => {
    sanityClient.fetch(`*[_type == "post" && slug.current == $slug][0]{
      title,
      "mainImageUrl": mainImage.asset->url,
      body, // Rich text content
      "authorName": author->name,
      publishedAt
    }`, { slug })
    .then((data) => setPostData(data))
    .catch(console.error);
  }, [slug]);

  if (!postData) {
    return (
       <div className="bg-gray-100 dark:bg-slate-900 min-h-screen">
        <Header />
        <div className="text-center py-20 text-sky-700 dark:text-sky-400">Loading post...</div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-slate-900 min-h-screen">
      <Header />
      <main className="pt-24">
        <article className="max-w-4xl mx-auto py-12 px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-sky-700 dark:text-sky-400 mb-6">
            {postData.title}
          </h1>
          <p className="text-slate-600 dark:text-slate-400 mb-4">
            By {postData.authorName} on {new Date(postData.publishedAt).toLocaleDateString()}
          </p>
          <img src={postData.mainImageUrl} alt={postData.title} className="w-full h-auto max-h-[500px] object-cover rounded-xl shadow-lg mb-8" />
          
          {/* Tailwind 'prose' plugin yahaan styling karega */}
          <div className="prose dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <PortableText value={postData.body} />
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default SinglePost;