// 1. Define the shape of a Blog Post (matching your Prisma output)
interface BlogPost {
  id: string;
  slug: string;
  title: string;
  publishedAt: Date | null;
  excerpt: string;
  coverImageUrl: string | null;
  categories: string[];
  readTime: number | null;
  author: {
    name: string;
    photo: string | null;
  };
}

// 2. Define the Props for the component
interface LatestBlogProps {
  posts: BlogPost[];
}

// 3. Update the component to use these props
export default function LatestBlog({ posts }: LatestBlogProps) {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12">Latest from our Blog</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div key={post.id} className="bg-white rounded-xl overflow-hidden shadow-sm">
              {/* If you have an image, use post.coverImageUrl here */}
              <div className="p-6">
                <div className="flex gap-2 mb-3">
                  {post.categories.map(cat => (
                    <span key={cat} className="text-xs font-semibold text-blue-600 uppercase">
                      {cat}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
                <div className="flex items-center text-sm text-gray-500">
                  <span>{post.author.name}</span>
                  {post.readTime && <span className="ml-auto">{post.readTime} min read</span>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}