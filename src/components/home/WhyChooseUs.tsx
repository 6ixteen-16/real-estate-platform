import { ShieldCheck, House, Headphones, BadgeDollarSign } from "lucide-react";

const features = [
  {
    icon: <ShieldCheck className="w-8 h-8 text-blue-600" />,
    title: "Trusted & Secure",
    description: "Every listing on our platform is verified by our legal team to ensure your safety."
  },
  {
    icon: <House className="w-8 h-8 text-blue-600" />,
    title: "Wide Range of Properties",
    description: "From luxury villas to cozy apartments, we have the perfect home for every budget."
  },
  {
    icon: <BadgeDollarSign className="w-8 h-8 text-blue-600" />,
    title: "No Hidden Fees",
    description: "We believe in transparency. What you see is exactly what you pay."
  },
  {
    icon: <Headphones className="w-8 h-8 text-blue-600" />,
    title: "24/7 Support",
    description: "Our dedicated agents are available around the clock to answer your questions."
  }
];

export function WhyChooseUs() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Why Choose Us</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            We provide a seamless experience for buyers and sellers in the real estate market.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}