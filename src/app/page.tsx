import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero Section - More dynamic and engaging */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50 -z-10"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-indigo-100 rounded-full opacity-70 blur-3xl -z-10"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-100 rounded-full opacity-70 blur-3xl -z-10"></div>

        <div className="container mx-auto px-5 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <span className="bg-indigo-100 text-indigo-800 text-sm font-medium px-4 py-1 rounded-full">
                Premium Quality
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              Transform Your Space With{" "}
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">
                Artisan Rugs
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              Handcrafted luxury rugs that blend timeless tradition with
              contemporary design. Each piece tells a story and brings character
              to your home.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/shop"
                className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-lg font-medium hover:shadow-lg hover:shadow-indigo-200 transition transform hover:-translate-y-1"
              >
                Explore Collection
              </Link>
              <Link
                href="/custom"
                className="bg-white border border-gray-300 text-gray-800 px-8 py-4 rounded-lg font-medium hover:shadow-lg hover:border-indigo-300 transition transform hover:-translate-y-1"
              >
                Design Your Custom Rug
              </Link>
            </div>
            <div className="flex items-center space-x-4 pt-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className={`w-8 h-8 rounded-full border-2 border-white bg-gradient-to-br from-indigo-${
                      i * 100
                    } to-purple-${i * 100}`}
                  ></div>
                ))}
              </div>
              <p className="text-sm text-gray-600">
                <span className="font-semibold">500+</span> happy customers
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-lg blur-xl"></div>
            <div className="relative h-96 lg:h-[500px] bg-gradient-to-br from-indigo-100 to-purple-100 rounded-lg overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/10 to-purple-600/10"></div>
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <div className="text-center">
                  <div className="inline-block p-3 bg-white/30 backdrop-blur-sm rounded-xl mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-8 h-8 text-indigo-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <p className="text-lg font-medium text-gray-800">
                    Featured Rug Image
                  </p>
                  <p className="text-sm text-gray-600 mt-2">
                    Add your showcase image here
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-yellow-100 rounded-full z-10"></div>
            <div className="absolute -top-6 -left-6 w-16 h-16 bg-indigo-100 rounded-full z-10"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-5">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-indigo-600 font-medium">
              Why Choose DetailedRugs
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
              Craftsmanship Meets Innovation
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-10 h-10"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                    />
                  </svg>
                ),
                title: "Handcrafted Excellence",
                description:
                  "Each rug is meticulously crafted by skilled artisans using traditional techniques passed down through generations.",
              },
              {
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-10 h-10"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                ),
                title: "Premium Materials",
                description:
                  "We source only the finest natural fibers and sustainable materials to ensure durability and timeless beauty.",
              },
              {
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-10 h-10"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
                    />
                  </svg>
                ),
                title: "Custom Design",
                description:
                  "Work with our design team to create a completely bespoke rug tailored to your exact specifications and style.",
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition"
              >
                <div className="w-16 h-16 bg-indigo-50 rounded-lg flex items-center justify-center text-indigo-600 mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section - More visual appeal */}
      <section className="py-20">
        <div className="container mx-auto px-5">
          <div className="text-center mb-16">
            <span className="text-indigo-600 font-medium">Collections</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
              Shop by Category
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Modern",
                description: "Sleek designs for contemporary spaces",
                color: "from-blue-500 to-indigo-600",
                pattern:
                  "bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.2)_0%,_transparent_20%,_transparent_40%,_rgba(255,255,255,0.2)_50%,_transparent_60%,_rgba(255,255,255,0.2)_100%)]",
              },
              {
                name: "Traditional",
                description: "Timeless patterns with cultural heritage",
                color: "from-amber-500 to-red-600",
                pattern:
                  "bg-[repeating-linear-gradient(45deg,rgba(255,255,255,0.1),rgba(255,255,255,0.1)_10px,transparent_10px,transparent_20px)]",
              },
              {
                name: "Custom",
                description: "Unique rugs tailored to your specifications",
                color: "from-emerald-500 to-teal-600",
                pattern:
                  "bg-[linear-gradient(30deg,rgba(255,255,255,0.1)_12%,transparent_12.5%,transparent_87%,rgba(255,255,255,0.1)_87.5%),linear-gradient(150deg,rgba(255,255,255,0.1)_12%,transparent_12.5%,transparent_87%,rgba(255,255,255,0.1)_87.5%),linear-gradient(30deg,rgba(255,255,255,0.1)_12%,transparent_12.5%,transparent_87%,rgba(255,255,255,0.1)_87.5%),linear-gradient(150deg,rgba(255,255,255,0.1)_12%,transparent_12.5%,transparent_87%,rgba(255,255,255,0.1)_87.5%)]",
              },
            ].map((category) => (
              <div
                key={category.name}
                className="relative group overflow-hidden rounded-2xl"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${category.color} ${category.pattern} bg-size-20`}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="relative h-96 p-8 flex flex-col justify-end text-white transition-all duration-300 group-hover:h-72">
                  <h3 className="text-2xl font-bold mb-2">
                    {category.name} Rugs
                  </h3>
                  <p className="text-white/90 mb-4">{category.description}</p>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <Link
                      href={`/shop/${category.name.toLowerCase()}`}
                      className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg font-medium hover:bg-white/30 transition"
                    >
                      Explore Collection →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials - More engaging display */}
      <section className="py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        <div className="container mx-auto px-5">
          <div className="text-center mb-16">
            <span className="text-indigo-600 font-medium">Testimonials</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
              What Our Customers Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="col-span-4 md:sticky md:top-20 self-start h-fit">
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
                <div className="flex-none">
                  <div className="inline-flex mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        className="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Customer satisfaction is our top priority
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Don&#39;t just take our word for it — see what our customers
                    have to say about their DetailedRugs experience.
                  </p>
                  <Link
                    href="/reviews"
                    className="text-indigo-600 font-medium hover:text-indigo-800"
                  >
                    Read all reviews →
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-span-8 space-y-6">
              {[
                {
                  name: "Sarah J.",
                  location: "New York",
                  image: "/avatars/sarah.jpg",
                  quote:
                    "The custom rug I ordered exceeded my expectations. The quality is outstanding and it fits perfectly in my living room. The attention to detail is remarkable.",
                  rating: 5,
                },
                {
                  name: "Michael T.",
                  location: "Chicago",
                  image: "/avatars/michael.jpg",
                  quote:
                    "Fast shipping and the colors are even more vibrant in person. Will definitely shop here again! The customer service team was also incredibly helpful.",
                  rating: 5,
                },
                {
                  name: "Amanda L.",
                  location: "Los Angeles",
                  image: "/avatars/amanda.jpg",
                  quote:
                    "The design team was so helpful in creating exactly what I envisioned. Worth every penny. I'm already planning my next purchase.",
                  rating: 5,
                },
              ].map((testimonial, idx) => (
                <div
                  key={idx}
                  className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-2">
                        <div>
                          <h3 className="font-semibold text-gray-900">
                            {testimonial.name}
                          </h3>
                          <p className="text-sm text-gray-500">
                            {testimonial.location}
                          </p>
                        </div>
                        <div className="flex">
                          {Array(testimonial.rating)
                            .fill(0)
                            .map((_, i) => (
                              <svg
                                key={i}
                                className="w-4 h-4 text-yellow-400"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                        </div>
                      </div>
                      <p className="text-gray-700">
                        &quot;{testimonial.quote}&quot;
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="container mx-auto px-5">
          <div className="relative overflow-hidden bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('/pattern.svg')] opacity-10"></div>
            <div className="relative p-12 md:p-20 flex flex-col items-center text-center text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 max-w-2xl">
                Ready to transform your space with a perfect rug?
              </h2>
              <p className="text-white/90 text-lg mb-8 max-w-2xl">
                Browse our collection or create something totally unique with
                our custom design service. We&#39;ll guide you through every
                step of the process.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link
                  href="/shop"
                  className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-medium hover:shadow-lg hover:bg-opacity-95 transition transform hover:-translate-y-1"
                >
                  Shop Now
                </Link>
                <Link
                  href="/custom"
                  className="bg-transparent border-2 border-white px-8 py-4 rounded-lg font-medium hover:bg-white/10 transition transform hover:-translate-y-1"
                >
                  Custom Design
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Modern design */}
      <footer className="bg-gray-900 text-white mt-auto">
        <div className="container mx-auto px-5 py-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            <div className="col-span-4">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 text-transparent bg-clip-text mb-6">
                DetailedRugs
              </h3>
              <p className="text-gray-400 mb-6">
                Crafting quality rugs since 2010. Elevate your space with our
                handcrafted collection that brings together tradition and
                innovation.
              </p>
              <div className="flex items-center space-x-4">
                {["facebook", "instagram", "pinterest", "twitter"].map(
                  (social) => (
                    <a
                      key={social}
                      href="#"
                      className="w-10 h-10 rounded-full bg-gray-800/50 flex items-center justify-center text-gray-400 hover:bg-indigo-600/20 hover:text-white transition"
                    >
                      <span className="sr-only">{social}</span>
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        {social === "facebook" && (
                          <path
                            fillRule="evenodd"
                            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                            clipRule="evenodd"
                          />
                        )}
                        {social === "instagram" && (
                          <path
                            fillRule="evenodd"
                            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                            clipRule="evenodd"
                          />
                        )}
                        {social === "pinterest" && (
                          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z" />
                        )}
                        {social === "twitter" && (
                          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                        )}
                      </svg>
                    </a>
                  )
                )}
              </div>
            </div>

            <div className="col-span-2">
              <h4 className="text-lg font-semibold mb-6">Shop</h4>
              <ul className="space-y-3">
                {[
                  "Modern",
                  "Traditional",
                  "Custom",
                  "Sale",
                  "New Arrivals",
                ].map((item) => (
                  <li key={item}>
                    <Link
                      href={`/shop/${item.toLowerCase().replace(" ", "-")}`}
                      className="text-gray-400 hover:text-white transition"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-2">
              <h4 className="text-lg font-semibold mb-6">Customer Support</h4>
              <ul className="space-y-3">
                {[
                  "Track Order",
                  "Shipping & Returns",
                  "FAQ",
                  "Contact Us",
                  "Care Instructions",
                ].map((item) => (
                  <li key={item}>
                    <Link
                      href={`/${item
                        .toLowerCase()
                        .replace(" & ", "-")
                        .replace(" ", "-")}`}
                      className="text-gray-400 hover:text-white transition"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-4">
              <h4 className="text-lg font-semibold mb-6">
                Sign Up for Updates
              </h4>
              <p className="text-gray-400 mb-4">
                Get early access to new designs and exclusive offers.
              </p>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="bg-gray-800 text-white px-4 py-3 rounded-l-lg flex-1 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-5 py-3 rounded-r-lg font-medium hover:shadow-lg hover:from-indigo-500 hover:to-purple-500 transition">
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} DetailedRugs. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                href="/privacy"
                className="text-gray-500 hover:text-gray-300 text-sm"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-gray-500 hover:text-gray-300 text-sm"
              >
                Terms of Service
              </Link>
              <Link
                href="/sitemap"
                className="text-gray-500 hover:text-gray-300 text-sm"
              >
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
