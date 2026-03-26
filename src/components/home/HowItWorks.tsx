import { Search, Home, Key, Handshake } from "lucide-react";

const steps = [
  {
    icon: <Search className="w-10 h-10 text-blue-600" />,
    title: "Search Property",
    description: "Browse our extensive list of properties to find your dream home in your preferred location."
  },
  {
    icon: <Handshake className="w-10 h-10 text-blue-600" />,
    title: "Contact Agent",
    description: "Connect with our certified local experts to get more details and schedule a viewing."
  },
  {
    icon: <Home className="w-10 h-10 text-blue-600" />,
    title: "Visit & Inspect",
    description: "Take a tour of the property, check the neighborhood, and ensure everything meets your needs."
  },
  {
    icon: <Key className="w-10 h-10 text-blue-600" />,
    title: "Take the Keys",
    description: "Complete the easy documentation process and move into your new home with peace of mind."
  }
];

export function HowItWorks() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">How It Works</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            We make the process of buying or renting a home simple, transparent, and stress-free.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative p-8 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-blue-50 rounded-full">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.description}</p>
              
              {/* Optional: Step number badge */}
              <span className="absolute top-4 right-4 text-4xl font-black text-gray-100 select-none">
                0{index + 1}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}