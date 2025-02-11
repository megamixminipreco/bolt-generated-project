import React from 'react'
import { motion } from 'framer-motion'

const Blog = () => {
  const blogPosts = [
    {
      title: 'How AI is Transforming Web Development',
      excerpt: 'Discover the latest advancements in AI-powered web design and development.',
      date: 'May 15, 2023',
      image: 'https://via.placeholder.com/400x250',
    },
    {
      title: 'Machine Learning: The Future of Responsive Design',
      excerpt: 'Learn how machine learning algorithms are creating smarter, adaptive websites.',
      date: 'April 22, 2023',
      image: 'https://via.placeholder.com/400x250',
    },
    {
      title: 'Streamlining Workflow with AI Development Tools',
      excerpt: 'Explore tools that can dramatically reduce your web development time.',
      date: 'March 10, 2023',
      image: 'https://via.placeholder.com/400x250',
    },
  ]

  return (
    <section id="blog" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-white">
          Latest Blog Posts
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
            >
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {post.title}
                </h3>
                <p className="text-gray-300 mb-4">{post.excerpt}</p>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-sm">{post.date}</span>
                  <a href="#" className="text-primary hover:underline">
                    Read More
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Blog
