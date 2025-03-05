import { useState } from "react";
import SettingsLayout from "./SettingsLayout.js";

const ContactSupport = () => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [reviewSubmitted, setReviewSubmitted] = useState(false);

  const handleStarClick = (index) => {
    if (!reviewSubmitted) {
      setRating(index + 1);
    }
  };

  const handleStarHover = (index) => {
    if (!reviewSubmitted) {
      setHoverRating(index + 1);
    }
  };

  const handleStarLeave = () => {
    if (!reviewSubmitted) {
      setHoverRating(0);
    }
  };

  const handleSubmitReview = () => {
    if (rating > 0) {
      console.log("Review submitted with rating:", rating);
      setReviewSubmitted(true);
    } else {
      alert("Please select a rating before submitting.");
    }
  };

  return (
    <SettingsLayout>
      <div className="mt-8 w-[700px] mx-auto">
        <h3 className="text-2xl font-semibold text-[#393939] text-center mb-4">Contact & Support</h3>
        <p className="text-gray-600 text-center mb-6">Get in touch with our support team here.</p>

        {/* Support Form */}
        <div className="bg-[#e0ecf4] p-6 rounded-lg">
          <h4 className="text-center font-semibold text-[#393939] mb-4">What kind of support do you need?</h4>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700">Full Name:</label>
              <input type="text" className="w-full p-2 border rounded" />
            </div>
            <div>
              <label className="block text-gray-700">Email:</label>
              <input type="email" className="w-full p-2 border rounded" />
            </div>
            <div>
              <label className="block text-gray-700">Message:</label>
              <textarea className="w-full p-2 border rounded h-24"></textarea>
            </div>
            <div className="text-center">
              <button className="bg-orange-500 text-white px-6 py-2 rounded-lg">Submit</button>
            </div>
          </form>
        </div>

        
         {/* Review Section */}
         <div className="bg-[#e0ecf4] p-6 rounded-lg mt-6 text-center">
          <h4 className="font-semibold text-[#393939]">Do you like Habit Flow?</h4>
          <p className="text-gray-600 mb-4">Please consider leaving a review</p>
          <div className="grid min-h-[140px] w-full place-items-center overflow-x-scroll rounded-lg p-6 lg:overflow-visible">
            <div className="inline-flex items-center">
              {[...Array(5)].map((_, index) => (
                <span
                  key={index}
                  className="cursor-pointer mx-2"
                  onClick={() => handleStarClick(index)}
                  onMouseEnter={() => handleStarHover(index)}
                  onMouseLeave={handleStarLeave}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`w-12 h-12 ${index < (hoverRating || rating) ? "text-yellow-500" : "text-gray-400"}`}                  >
                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd"></path>
                  </svg>
                </span>
              ))}
            </div>
          </div>
          {!reviewSubmitted ? (
            <button
              className="bg-orange-500 text-white px-6 py-2 rounded-lg mt-4"
              onClick={handleSubmitReview}
            >
              Submit Review
            </button>
          ) : (
            <p className="text-green-600 mt-4">Thank you for your review!</p>
          )}
        </div>
        {/* Social Media Icons */}
        <div className="flex justify-center space-x-4 mt-6 text-orange-500 text-2xl">
          {/* Facebook */}
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="#F97316"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M24 12.0733C24 5.40541 18.6274 0 12 0C5.37258 0 0 5.40541 0 12.0733C0 18.0995 4.38823 23.0943 10.125 24V15.5633H7.07813V12.0733H10.125V9.41343C10.125 6.38755 11.9165 4.71615 14.6576 4.71615C15.9705 4.71615 17.3438 4.95195 17.3438 4.95195V7.92313H15.8306C14.3399 7.92313 13.875 8.85379 13.875 9.80857V12.0733H17.2031L16.6711 15.5633H13.875V24C19.6118 23.0943 24 18.0995 24 12.0733Z" />
            </svg>
          </a>

          {/* Twitter */}
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="#F97316"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M24 4.55705C23.117 4.94905 22.168 5.21305 21.172 5.33205C22.189 4.72305 22.97 3.75805 23.337 2.60805C22.386 3.17205 21.332 3.58205 20.21 3.80305C19.313 2.84605 18.032 2.24805 16.616 2.24805C13.437 2.24805 11.101 5.21405 11.819 8.29305C7.728 8.08805 4.1 6.12805 1.671 3.14905C0.381 5.36205 1.002 8.25705 3.194 9.72305C2.388 9.69705 1.628 9.47605 0.965 9.10705C0.911 11.388 2.546 13.522 4.914 13.997C4.221 14.185 3.462 14.229 2.69 14.081C3.316 16.037 5.134 17.46 7.29 17.5C5.22 19.123 2.612 19.848 0 19.54C2.179 20.937 4.768 21.752 7.548 21.752C16.69 21.752 21.855 14.031 21.543 7.10605C22.505 6.41105 23.34 5.54405 24 4.55705Z" />
            </svg>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="#F97316"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2.163C15.204 2.163 15.584 2.175 16.85 2.233C18.053 2.289 18.785 2.517 19.355 2.752C20.003 3.018 20.517 3.355 21.032 3.87C21.547 4.385 21.884 4.899 22.15 5.547C22.385 6.117 22.613 6.849 22.669 8.052C22.727 9.318 22.739 9.698 22.739 12.902C22.739 16.106 22.727 16.486 22.669 17.752C22.613 18.955 22.385 19.687 22.15 20.257C21.884 20.905 21.547 21.419 21.032 21.934C20.517 22.449 20.003 22.786 19.355 23.052C18.785 23.287 18.053 23.515 16.85 23.571C15.584 23.629 15.204 23.641 12 23.641C8.796 23.641 8.416 23.629 7.15 23.571C5.947 23.515 5.215 23.287 4.645 23.052C3.997 22.786 3.483 22.449 2.968 21.934C2.453 21.419 2.116 20.905 1.85 20.257C1.615 19.687 1.387 18.955 1.331 17.752C1.273 16.486 1.261 16.106 1.261 12.902C1.261 9.698 1.273 9.318 1.331 8.052C1.387 6.849 1.615 6.117 1.85 5.547C2.116 4.899 2.453 4.385 2.968 3.87C3.483 3.355 3.997 3.018 4.645 2.752C5.215 2.517 5.947 2.289 7.15 2.233C8.416 2.175 8.796 2.163 12 2.163ZM12 0C8.741 0 8.333 0.013 7.053 0.072C5.775 0.131 4.902 0.367 4.14 0.699C3.347 1.043 2.7 1.493 2.052 2.141C1.404 2.789 0.954 3.436 0.61 4.229C0.278 4.991 0.042 5.864 -0.017 7.142C-0.076 8.422 -0.089 8.83 -0.089 12.089C-0.089 15.348 -0.076 15.756 -0.017 17.036C0.042 18.314 0.278 19.187 0.61 19.949C0.954 20.742 1.404 21.389 2.052 22.037C2.7 22.685 3.347 23.135 4.14 23.479C4.902 23.811 5.775 24.047 7.053 24.106C8.333 24.165 8.741 24.178 12 24.178C15.259 24.178 15.667 24.165 16.947 24.106C18.225 24.047 19.098 23.811 19.86 23.479C20.653 23.135 21.3 22.685 21.948 22.037C22.596 21.389 23.046 20.742 23.39 19.949C23.722 19.187 23.958 18.314 24.017 17.036C24.076 15.756 24.089 15.348 24.089 12.089C24.089 8.83 24.076 8.422 24.017 7.142C23.958 5.864 23.722 4.991 23.39 4.229C23.046 3.436 22.596 2.789 21.948 2.141C21.3 1.493 20.653 1.043 19.86 0.699C19.098 0.367 18.225 0.131 16.947 0.072C15.667 0.013 15.259 0 12 0ZM12 5.838C8.597 5.838 5.838 8.597 5.838 12C5.838 15.403 8.597 18.162 12 18.162C15.403 18.162 18.162 15.403 18.162 12C18.162 8.597 15.403 5.838 12 5.838ZM12 16C9.791 16 8 14.209 8 12C8 9.791 9.791 8 12 8C14.209 8 16 9.791 16 12C16 14.209 14.209 16 12 16ZM18.406 4.156C18.406 4.897 17.897 5.406 17.156 5.406C16.415 5.406 15.906 4.897 15.906 4.156C15.906 3.415 16.415 2.906 17.156 2.906C17.897 2.906 18.406 3.415 18.406 4.156Z" />
            </svg>
          </a>
        </div>
      </div>
    </SettingsLayout>
  );
};

export default ContactSupport;