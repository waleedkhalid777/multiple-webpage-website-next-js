import React from "react";

const About = () => {
  return (
    <div>
      <section className="py-12">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Image Section */}
          <div>
            <img
              src="/about.jpg"
              alt="A vibrant collage of t-shirt designs"
              className="rounded-lg shadow-lg"
             
            />
          </div>

  


          {/* Text Section */}
          <div>
            <h2 className="text-2xl font-bold mb-4">About us</h2>
            <p className="text-lg mb-4">
              We’re passionate about creating high-quality, trendy t-shirts that
              let you express your personality. Whether you’re looking for bold
              designs, minimalist prints, or something unique, we’ve got
              something for everyone.
            </p>
            <p className="text-lg mb-4">
              To inspire individuality through fashion while delivering premium
              quality and unmatched comfort.
            </p>
            <a
              href="/shop"
              className="inline-block px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 hover:scale-105 transform transition-transform duration-300"
            >
              Shop Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
