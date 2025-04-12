import { useState } from 'react';
<<<<<<< HEAD
=======
import image from "../../assets/image.png"
>>>>>>> 85245aeb05c52bf229904b483c9dfaee59dd498a

type Props = {}

const Home = (props: Props) => {
      // Sample data for testimonials
      const testimonials = [
        {
          id: 1,
          name: "Sarah Johnson",
          role: "Marketing Director",
          company: "TechCorp",
          image: "/api/placeholder/80/80",
          text: "This platform completely transformed how we approach customer engagement. The intuitive interface and powerful analytics have helped us increase conversion rates by 40%."
        },
        {
          id: 2,
          name: "Michael Chen",
          role: "Senior Developer",
          company: "DevStudio",
          image: "/api/placeholder/80/80",
          text: "As a developer, I appreciate the clean architecture and robust API. Implementing this solution saved us countless hours of custom development work."
        },
        {
          id: 3,
          name: "Emma Rodriguez",
          role: "E-commerce Manager",
          company: "ShopGlobal",
          image: "/api/placeholder/80/80",
          text: "Since implementing this platform, our customer satisfaction scores have increased by 35%. The personalization features are exactly what we needed."
        }
      ];

      // Sample data for feedback cards
      const feedbackCards = [
        {
          id: 1,
          title: "User-Friendly Interface",
          description: "Intuitive design that makes navigation seamless and enjoyable for all users.",
          icon: (
            <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"></path>
            </svg>
          )
        },
        {
          id: 2,
          title: "Powerful Analytics",
          description: "Gain valuable insights with our comprehensive data analysis tools.",
          icon: (
            <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
            </svg>
          )
        },
        {
          id: 3,
          title: "Secure Platform",
          description: "Enterprise-grade security to keep your data safe and protected.",
          icon: (
            <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
            </svg>
          )
        },
        {
          id: 4,
          title: "24/7 Support",
          description: "Our dedicated team is always available to help with any questions.",
          icon: (
            <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"></path>
            </svg>
          )
        }
      ];

      const [activeTestimonial, setActiveTestimonial] = useState(0);

      const nextTestimonial = () => {
        setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
      };

      const prevTestimonial = () => {
        setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
      };

      return (
        <div className="bg-white">
          {/* Hero Section */}
          <section className="relative">
            {/* Hero Image */}
            <div className="w-full h-96 md:h-screen md:max-h-[600px] bg-gray-200 overflow-hidden">
              <img
<<<<<<< HEAD
                src="/api/placeholder/1200/600"
                alt="Hero Image"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-purple-900/50 flex items-center">
                <div className="container mx-auto px-6 md:px-12">
                  <div className="w-full md:w-2/3 text-white">
=======
               src={image}
                alt="Hero Image"
                className="w-full h-full object-cover"
              />
              <div className="absolute flex items-center justify-center">
                <div className="container mx-auto px-6 md:px-12">
                  <div className="w-full md:w-2/3 text-black">
>>>>>>> 85245aeb05c52bf229904b483c9dfaee59dd498a
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
                      Transform Your Digital Experience
                    </h1>
                    <p className="text-lg md:text-xl mb-8">
                      Join thousands of satisfied customers who've elevated their online presence with our innovative solutions.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <button className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
                        Get Started
                      </button>
                      <button className="px-6 py-3 border-2 border-white text-white font-medium rounded-lg hover:bg-white/10 transition-colors">
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Main Content */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Our Platform</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  We provide cutting-edge solutions designed to meet your business needs and drive growth in today's competitive market.
                </p>
              </div>

              {/* Feature Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                {feedbackCards.map((card) => (
                  <div key={card.id} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                    <div className="bg-blue-50 p-3 rounded-lg inline-block mb-4">
                      {card.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                    <p className="text-gray-600">{card.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Don't just take our word for it. Here's what our customers have to say about their experience with our platform.
                </p>
              </div>

              <div className="relative max-w-4xl mx-auto">
                {/* Testimonial Card */}
                <div className="bg-white rounded-xl shadow-md p-8 md:p-12">
                  <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                    <img
                      src={testimonials[activeTestimonial].image}
                      alt={testimonials[activeTestimonial].name}
                      className="w-20 h-20 rounded-full object-cover"
                    />
                    <div>
                      <div className="flex mb-4">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                          </svg>
                        ))}
                      </div>
                      <blockquote className="text-lg md:text-xl mb-6 italic text-gray-800">
                        "{testimonials[activeTestimonial].text}"
                      </blockquote>
                      <div>
                        <p className="font-semibold text-lg">{testimonials[activeTestimonial].name}</p>
                        <p className="text-gray-600">{testimonials[activeTestimonial].role}, {testimonials[activeTestimonial].company}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Navigation Buttons */}
                <div className="flex justify-center mt-6 gap-4">
                  <button
                    onClick={prevTestimonial}
                    className="p-2 rounded-full bg-white border border-gray-300 hover:bg-gray-100"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                    </svg>
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="p-2 rounded-full bg-white border border-gray-300 hover:bg-gray-100"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </button>
                </div>

                {/* Testimonial Indicators */}
                <div className="flex justify-center mt-4">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveTestimonial(index)}
                      className={`mx-1 w-3 h-3 rounded-full ${
                        activeTestimonial === index ? 'bg-blue-600' : 'bg-gray-300'
                      }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 bg-blue-700 text-white">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
              <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
                Join thousands of satisfied customers and transform your digital experience today.
              </p>
              <button className="px-8 py-3 bg-white text-blue-700 font-medium rounded-lg hover:bg-gray-100 transition-colors">
                Sign Up Now
              </button>
            </div>
          </section>
        </div>
      );
    }

export default Home
