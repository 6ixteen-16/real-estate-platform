import { Calendar, ArrowRight } from "lucide-react";

const blogPosts = [
  {
    title: "How to Choose the Right Neighborhood",
    excerpt: "Location is everything. Learn the 5 key factors to consider before signing that contract.",
    date: "March 20, 2026",
    image: "https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Real Estate Market Trends in 2026",
    excerpt: "An in-depth look at why property values are rising and what it means for investors.",
    date: "March 15, 2026",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Tips for First-Time Home Buyers",
    excerpt: "Navigating the mortgage process doesn't have to be scary. Here is our step-by-step guide.",
    date: "March 10, 2026",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=800",
  }
];

export function LatestBlog() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">Latest from Our Blog</h2>
            <p className="mt-4 text-gray-600">Insights and advice from the leaders in luxury real estate.</p>
          </div>
          <button className="flex items-center gap-2 text-blue-600 font-bold hover:underline">
            View All Posts <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article key={index} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
              <div className="h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                  <Calendar className="w-4 h-4" />
                  {post.date}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                <button className="text-sm font-bold text-gray-900 flex items-center gap-1 group-hover:gap-2 transition-all">
                  Read More <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}