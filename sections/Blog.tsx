// sections/Blog.tsx
import React from 'react';
import BlogCard from '@/components/BlogCard';
import { blogPosts } from '@/data/portfolioData';

const Blog: React.FC = () => {
  return (
    <section id="blog" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-5xl mx-auto w-full">
        <h2 className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
          Blog
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
        {/* <p className="text-center text-gray-400 mt-12 text-lg">
          More insightful articles coming soon...
        </p> */}
      </div>
    </section>
  );
};

export default Blog;
