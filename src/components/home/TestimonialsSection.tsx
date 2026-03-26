import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Home Buyer",
    content: "The process was incredibly smooth. I found my dream apartment within a week of using Prestige Properties!",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "Property Seller",
    content: "Professional and transparent. They handled all the paperwork and got me a price higher than I expected.",
    rating: 5
  },
  {
    name: "Emma Williams",
    role: "First-time Buyer",
    content: "As a first-time buyer, I was nervous. Their team walked me through every step. Highly recommended!",
    rating: 4
  }
];

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">What Our Clients Say</h2>
          <p className="mt-4 text-gray-600">Don't just take our word for it—hear from our satisfied homeowners.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div key={index} className="p-8 bg-gray-50 rounded-2xl relative">
              <Quote className="absolute top-4 right-4 w-8 h-8 text-blue-100" />
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-4 h-4 ${i < item.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`} 
                  />
                ))}
              </div>
              <p className="text-gray-700 italic mb-6">"{item.content}"</p>
              <div>
                <h4 className="font-bold text-gray-900">{item.name}</h4>
                <p className="text-sm text-gray-500">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}