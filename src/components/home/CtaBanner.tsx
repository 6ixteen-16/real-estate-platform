import { ArrowRight, Phone } from "lucide-react";

export function CtaBanner() {
  return (
    <section className="py-16 bg-blue-600 rounded-3xl mx-4 my-20 overflow-hidden relative shadow-2xl">
      {/* Decorative background circles */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-500 rounded-full opacity-50 blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-blue-700 rounded-full opacity-50 blur-3xl"></div>

      <div className="container mx-auto px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
              Ready to find your dream property?
            </h2>
            <p className="text-blue-100 text-lg">
              Whether you are looking to buy, sell, or rent, our team of experts is here to guide you every step of the way.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <button className="flex items-center justify-center gap-2 px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-gray-100 transition-colors shadow-lg">
              Get Started <ArrowRight className="w-5 h-5" />
            </button>
            <button className="flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-colors">
              <Phone className="w-5 h-5" /> Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}