import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, User } from "lucide-react";
import { format } from "date-fns";

interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  coverImageUrl: string | null;
  publishedAt: Date | null;
  categories: string[];
  readTime: number | null;
  author: {
    name: string;
    photo: string | null;
  };
}

interface LatestBlogProps {
  posts: BlogPost[];
}

export function LatestBlog({ posts }: LatestBlogProps) {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">Latest News & Articles</h2>
            <p className="mt-4 text-gray-600">Stay updated with the latest trends in the real estate market.</p>
          </div>
          <Link 
            href="/blog" 
            className="hidden md:block text-blue-600 font-semibold hover:text-blue-700 transition-colors"
          >
            View All Posts →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link 
              key={post.id} 
              href={`/blog/${post.slug}`}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all border border-gray-100"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={post.coverImageUrl || "/images/blog-placeholder.jpg"}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  {post.categories.slice(0, 1).map((cat) => (
                    <span key={cat} className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-blue-600 uppercase tracking-wider">
                      {cat}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {post.publishedAt ? format(new Date(post.publishedAt), "MMM dd, yyyy") : "Draft"}
                  </div>
                  {post.readTime && (
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime} min read
                    </div>
                  )}
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-6 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex items-center gap-3 pt-4 border-t border-gray-50">
                  <div className="relative w-8 h-8 rounded-full overflow-hidden bg-gray-100">
                    <Image
                      src={post.author.photo || "/images/avatar-placeholder.jpg"}
                      alt={post.author.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <span className="text-sm font-medium text-gray-700">{post.author.name}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}