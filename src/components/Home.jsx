import React from "react";

const Home = () => {
    

  return (
    <div className="min-h-screen my-5">
      {/* Navigation */}

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-500 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 py-20 md:py-32 grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Preserve Your Memories, Unlock Your Future
            </h1>
            <p className="text-lg opacity-90">
              TimeCaps: The ultimate platform for creating, storing, and sharing
              digital time capsules of your most cherished moments.
            </p>
            <button className="bg-white text-blue-600 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors">
              Start Your Capsule
            </button>
          </div>
          <div className="relative aspect-square bg-white/10 rounded-lg backdrop-blur-sm">
            <img
              src="https://i.pinimg.com/736x/11/ce/1f/11ce1fd455d73bcf8d31de45dda9883a.jpg"
              alt="TimeCaps Interface Preview"
              className="absolute inset-0 w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-gray-50 text-black">
        <div className="max-w-7xl mx-auto px-4 shadow-sm">
          <h2 className="text-3xl font-bold text-center mb-12 text-black">
            Key Features
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: (
                  <svg
                    className="w-8 h-8 text-blue-600"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" />
                  </svg>
                ),
                title: "Future Messaging",
                description:
                  "Schedule messages to be delivered to your future self or loved ones.",
              },
              {
                icon: (
                  <svg
                    className="w-8 h-8 text-blue-600"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                ),
                title: "Global Community Capsules",
                description:
                  "Join worldwide events and contribute to shared digital time capsules.",
              },
              {
                icon: (
                  <svg
                    className="w-8 h-8 text-blue-600"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                ),
                title: "Interactive Storytelling",
                description:
                  "Create collaborative stories with friends and family across time.",
              },
              {
                icon: (
                  <svg
                    className="w-8 h-8 text-blue-600"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                ),
                title: "Secure Time-Lock",
                description:
                  "Lock your capsules until a specific date or event for a true time capsule experience.",
              },
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-xl">
                {feature.icon}
                <h3 className="font-semibold text-xl mt-4 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            What Our Users Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-black">
            {[
              {
                quote:
                  "TimeCaps has revolutionized how I preserve memories for my children. It's like sending love letters to the future!",
                name: "Sarah M.",
                title: "Mother of two",
              },
              {
                quote:
                  "As a history enthusiast, I love how TimeCaps allows me to contribute to global events. It's living history in the making.",
                name: "John D.",
                title: "History Teacher",
              },
              {
                quote:
                  "The interactive storytelling feature has brought my family closer together, despite living in different countries.",
                name: "Emily L.",
                title: "Digital Nomad",
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <p className="text-gray-600 mb-4">
                  &quot;{testimonial.quote}&quot;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-200" />
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">
                      {testimonial.title}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-gray-50 text-black">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Choose Your Plan
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Basic",
                price: "4.99",
                features: [
                  "1 personal capsule",
                  "5GB storage",
                  "1-year time lock",
                  "Text and image support",
                ],
              },
              {
                name: "Premium",
                price: "9.99",
                features: [
                  "5 personal capsules",
                  "25GB storage",
                  "5-year time lock",
                  "Text, image, and video support",
                  "Participate in global capsules",
                ],
                highlighted: true,
              },
              {
                name: "Family",
                price: "19.99",
                features: [
                  "10 personal capsules",
                  "100GB shared storage",
                  "10-year time lock",
                  "All media types supported",
                  "Family storytelling features",
                  "Priority customer support",
                ],
              },
            ].map((plan, index) => (
              <div
                key={index}
                className={`bg-white p-6 rounded-lg shadow-sm ${
                  plan.highlighted ? "ring-2 ring-blue-600" : ""
                }`}
              >
                <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-3xl font-bold">${plan.price}</span>
                  <span className="text-gray-600">/month</span>
                </div>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2">
                      <svg
                        className="w-5 h-5 text-green-500 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-2 px-4 rounded-md transition-colors ${
                    plan.highlighted
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "bg-white text-blue-600 border border-blue-600 hover:bg-blue-50"
                  }`}
                >
                  Choose Plan
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-blue-500 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Start Preserving Your Memories Today
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Join thousands of users creating their digital legacy with TimeCaps.
          </p>
          <button
            className="bg-white text-blue-600 px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors"
            
          >
            Sign Up Now
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 text-white mb-4">
              <svg
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" />
              </svg>
              <span className="font-semibold">TimeCaps</span>
            </div>
            <p className="text-sm">
              Preserving memories, connecting generations.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {["About Us", "Features", "Pricing", "Contact"].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              {["Terms of Service", "Privacy Policy", "Cookie Policy"].map(
                (item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-white transition-colors">
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Follow Us</h4>
            <div className="flex gap-4">
              {[
                "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
                "M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z",
                "M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z",
                "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
              ].map((path, index) => (
                <a
                  key={index}
                  href="#"
                  className="hover:text-white transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d={path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 mt-8 pt-8 border-t border-gray-800 text-sm text-center">
          © 2025 TimeCaps. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Home;
