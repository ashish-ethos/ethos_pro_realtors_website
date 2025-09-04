import React, { useState, useEffect } from 'react';
import { Star, Quote, ArrowLeft, ArrowRight } from 'lucide-react';
import Yuzvendra from "../../assets/images/home/yuzvendra-chahal.jpg";
import Rishi from "../../assets/images/home/rishi-dhawan.png";
import Rahul from "../../assets/images/home/rahul-dewan.webp";
import Paras from "../../assets/images/home/Paras-Dogra.jpg";
import Kabir from "../../assets/images/home/kabir-duhan-singh.jpg";

const Testimonial = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [pause, setPause] = useState(false);

  const testimonials = [
    {
      id: 1,
      name: "Yuzvendra Chahal",
      role: "Indian Cricketer",
      image: Yuzvendra,
      content: "I truly appreciate the honesty and professionalism of this team. They didn't just sell me a property; they guided me to make the right decision based on my needs. Their transparency and ethical approach set them apart. The entire experience was smooth, hassle-free, and absolutely worth it. Thank you for your amazing support!",
      rating: 5
    },
    {
      id: 2,
      name: "Rishi Dhawan",
      role: "Indian Cricketer",
      image: Rishi,
      content: "This company justifies its name, 'Ethos.' Unlike others, they did not make false claims just to sell me a property. Instead, they were honest, professional, and transparent. The team even refused things that were not possible, which I later appreciated. Thanks for your ethical approach—it helped me make a safe and smart investment!",
      rating: 5
    },
    {
      id: 3,
      name: "Rahul Dewan",
      role: "Indian Cricketer",
      image: Rahul,
      content: "I can confidently say that this group is destined for great success. Their polite, professional, and knowledgeable approach to real estate is commendable. From start to finish, I received an outstanding experience, with clear guidance and honest advice. Wishing the entire team all the best for the future—keep up the excellent work!",
      rating: 5
    },
    {
      id: 4,
      name: "Paras Dogra",
      role: "Indian Cricketer",
      image: Paras,
      content: "First time I came across a Real Estate group that truly focused on my needs rather than just making a sale. They understood my requirements and budget clearly and provided me with the best options. The experience was unreal—smooth, transparent, and absolutely amazing. Thanks, guys, for your great support and professionalism!",
      rating: 5
    },
    {
      id: 5,
      name: "Kabir Duhan Singh",
      role: "Indian Actor",
      image: Kabir,
      content: "Finding trustworthy real estate professionals is rare, but this team truly exceeded my expectations. They were honest, clear, and genuinely focused on helping me. Their dedication and knowledge made the entire process effortless. I'm grateful for their support and highly recommend them to anyone seeking real estate guidance!",
      rating: 5
    }
  ];

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  useEffect(() => {
    if (pause) return;
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [pause]);

  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentSlide + i) % testimonials.length;
      visible.push({ ...testimonials[index], position: i });
    }
    return visible;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 py-10 px-4 relative overflow-hidden" id='testimonials'>
      {/* Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full opacity-20 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-200 to-cyan-200 rounded-full opacity-20 blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-gradient-to-r from-green-200 to-teal-200 rounded-full opacity-15 blur-2xl animate-pulse delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex flex-col items-center justify-center space-x-2 mb-6">
            <p className="text-xl font-[Montserrat] md:text-2xl font-black bg-gradient-to-r from-black via-[#474236] to-[#c99913] bg-clip-text text-transparent animate-pulse">
              TESTIMONIALS
            </p>
  
            <div className="h-1 mt-2 w-60 bg-gradient-to-r from-black via-[#474236] to-[#c99913] rounded-full animate-pulse"></div>
          </div>

          <div className="flex justify-center mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 text-yellow-400 fill-current mx-0.5" />
            ))}
          </div>
          <h2 className="text-5xl md:text-6xl font-[Montserrat] font-bold bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent mb-6 testimonial-text-content">
            What Our Clients Have To Say About Us?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl font-bebas mx-auto leading-relaxed">
            Discover why our clients trust us for their real estate needs. Their success is our greatest achievement.
            Read their stories to see how we've helped them find their perfect property.
          </p>
        </div>

        {/* Carousel */}
        <div
          className="relative"
          onMouseEnter={() => setPause(true)}
          onMouseLeave={() => setPause(false)}
        >
          <div className="flex justify-center items-start space-x-8 mb-12">
            {getVisibleTestimonials().map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`transition-all duration-700 ease-in-out ${index === 1
                    ? 'scale-100 opacity-100 z-20'
                    : 'scale-90 opacity-70 z-10'
                  }`}
                style={{
                  transform: `translateX(${(index - 1) * 320}px)`
                }}
              >
                <div className="w-80 min-h-[440px] relative group">
                  <div className="absolute inset-0 bg-white/40 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/30 group-hover:bg-white/50 transition-all duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-3xl" />
                  <div className="relative z-10 p-8 h-full flex flex-col">
                    <Quote className="w-8 h-8 text-emerald-500 opacity-60 mb-4" />
                    <p className="text-gray-700 text-sm leading-relaxed mb-4 fontFamily-bebas">
                      {testimonial.content}
                    </p>
                    <div className="flex space-x-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <div className="flex items-center space-x-4 mt-auto">
                      <div className="relative">
                        <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover ring-3 ring-white/50" />
                        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-emerald-400/20 to-blue-400/20"></div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                        <p className="text-sm text-gray-600">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center space-x-4">
            <button
              onClick={prevSlide}
              disabled={isAnimating}
              className="group relative cursor-pointer p-4 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-white/90 disabled:opacity-50"
            >
              <ArrowLeft className="w-6 h-6 text-gray-700 group-hover:text-emerald-600 transition-colors" />
            </button>
            <button
              onClick={nextSlide}
              disabled={isAnimating}
              className="group relative cursor-pointer p-4 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-white/90 disabled:opacity-50"
            >
              <ArrowRight className="w-6 h-6 text-gray-700 group-hover:text-emerald-600 transition-colors" />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => !isAnimating && setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide
                    ? 'bg-emerald-500 w-8'
                    : 'bg-gray-300 hover:bg-gray-400'
                  }`}
              />
            ))}
          </div>
        </div>


      </div>
    </div>
  );
};

export default Testimonial;
