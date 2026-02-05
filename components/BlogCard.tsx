// components/BlogCard.tsx
import React from 'react';
import { ChevronDown } from 'lucide-react';
import { BlogPost } from '@/types';

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  return (
    <div className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20">
      <div className="text-sm text-purple-400 mb-2">{post.date}</div>
      <h3 className="text-2xl font-bold mb-4 text-purple-300">{post.title}</h3>
      <p className="text-gray-300 mb-4">{post.excerpt}</p>
      <button className="text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-2">
        Read More <ChevronDown size={16} className="rotate-[-90deg]" />
      </button>
    </div>
  );
};

export default BlogCard;
