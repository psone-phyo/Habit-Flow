import React, { useState } from "react";
import p1 from "../img/p1.png";
import p2 from "../img/p2.png";
import p3 from "../img/p3.png";

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
  const testimonials = [
    {
      author: "Emma Collins",
      role: "Freelancer & Productivity Enthusiast",
      text: "Habit Flow has completely changed how I manage my daily routines. The streak counter and reminders keep me motivated, and I love seeing my progress over time!",
      image: p2
    },
    {
      author: "Daniel Lee",
      role: "Software Engineer",
      text: "I used to struggle with consistency, but Habit Flow makes tracking easy. The progress insights help me stay on track, and the ability to customize habits is a game-changer!",
      image: p1
    },
    {
      author: "James Carter",
      role: "Entrepreneur",
      text: "Running a business is hectic, but Habit Flow helps me maintain a balanced routine. Tracking my habits daily keeps me productive and focused!",
      image: p3
    }
    // Add more testimonials as needed
  ];

  const handlePrevious = () => {
    setCurrentTestimonial((prev) => 
      (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const handleNext = () => {
    setCurrentTestimonial((prev) => 
      (prev + 1) % testimonials.length
    );
  };

  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif text-gray-800 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg font-sans text-gray-600">
            Hear from our satisfied customers
          </p>
        </div>

        {/* Testimonial Content */}
        <div className="flex items-center justify-center gap-8 mb-16">
          <button 
            onClick={handlePrevious}
            className="w-11 h-11 bg-[#FF7423] rounded-lg flex items-center justify-center 
                    hover:bg-[#e06620] transition-colors text-white"
          >
            ←
          </button>

          <div className="bg-white rounded-lg p-8 flex gap-8 w-full max-w-4xl 
                          transition-all duration-300">
            <img 
              src={testimonials[currentTestimonial].image} 
              alt={testimonials[currentTestimonial].author}
              className="w-80 h-96 object-cover rounded-xl"
            />
            <div className="flex-1">
              <h3 className="text-2xl font-serif text-gray-800 mb-2">
                {testimonials[currentTestimonial].author}
              </h3>
              <p className="text-gray-600 mb-4">
                {testimonials[currentTestimonial].role}
              </p>
              <div className="w-48 h-px bg-gray-300 mb-4"></div>
              <p className="italic text-gray-800 text-lg">
                “{testimonials[currentTestimonial].text}”
              </p>
            </div>
          </div>

          <button 
            onClick={handleNext}
            className="w-11 h-11 bg-[#FF7423] rounded-lg flex items-center justify-center 
                    hover:bg-[#e06620] transition-colors text-white"
          >
            →
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${
                index === currentTestimonial ? "bg-[#FF7423]" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;