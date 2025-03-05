import { Link } from "react-router-dom";
import { signInWithGoogle } from "../../firebase.js"; 
import Kitchen from "../../img/s2.png";
import Logo from "../../img/logo.png";

function Signup() {
  return (
    <div className="flex h-screen">
      {/* Left side (Form) */}
      <div className="w-1/2 flex-col justify-center p-8 items-center gap-0.5 inline-flex">

        <div class="">

        <div class="rounded justify-start items-center gap-2 inline-flex -translate-y-8 translate-x-1/5">
          <p className="text-center text-[#272727] text-lg font-medium font-['Poppins'] underline leading-normal">
            <Link to="/" className="">Back to Home</Link>
          </p>
        </div>

          <div className="text-center"><span class="text-black text-xl font-medium font-['Poppins'] leading-normal">Welcome From </span><span class="text-black text-xl font-extrabold font-['Poppins'] leading-normal">HabitFlow</span><span class="text-black text-2xl font-medium font-['Poppins'] leading-normal">!</span></div>
          <div data-svg-wrapper class="relative">
            <svg width="270" height="2" viewBox="0 0 394 2" fill="none" xmlns="http://www.w3.org/2000/svg" transform="translate(58,0)">
              <path d="M0.5 1C0.5 0.447715 0.947715 0 1.5 0H392.5C393.052 0 393.5 0.447715 393.5 1C393.5 1.55228 393.052 2 392.5 2H1.5C0.947713 2 0.5 1.55228 0.5 1Z" fill="url(#paint0_linear_657_2188)"/>
              <defs>
                <linearGradient id="paint0_linear_657_2188" x1="0.5" y1="1" x2="393.5" y2="1" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#FF7423"/>
                  <stop offset="0.5" stop-color="white"/>
                  <stop offset="1" stop-color="#FF7423"/>
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Username Input */}
          <div className="w-96 mt-4">
            <label className="block text-sm font-medium text-gray-700">Username</label>
            <input type="text" placeholder="Enter your username" className="border p-2 w-full mt-1 rounded"/>
          </div>

          {/* Email Input */}
          <div className="w-96 mt-4">
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" placeholder="Enter your email" className="border p-2 w-full mt-1 rounded"/>
          </div>

          {/* Password Input */}
          <div className="w-96 mt-4">
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input type="password" placeholder="Enter your password" className="border p-2 w-full mt-1 rounded"/>
          </div>

          {/* Confirm Password Input */}
          <div className="w-96 mt-4">
            <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
            <input type="password" placeholder="Confirm your password" className="border p-2 w-full mt-1 rounded"/>
          </div>

          <button className="h-10 px-4 py-2 bg-[#ff7423] rounded-md flex justify-center items-center gap-2 text-white w-96 mt-4">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 2H12.6667C13.0203 2 13.3594 2.14048 13.6095 2.39052C13.8595 2.64057 14 2.97971 14 3.33333V12.6667C14 13.0203 13.8595 13.3594 13.6095 13.6095C13.3594 13.8595 13.0203 14 12.6667 14H10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M6.6665 11.3332L9.99984 7.99984L6.6665 4.6665" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M10 8H2" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <Link to="/dash">
              <span className="text-base font-medium">Sign Up</span>
            </Link>
          </button>

          <p className="mt-4">
          Already have an account? <Link to="/login" className="text-orange-500 hover:underline">Login</Link>
          </p>

          {/* OR Separator */}
          <div className="flex items-center w-96 my-4">
          <div className="flex-1 border-t border-gray-300"></div>
          <span className="px-4 text-gray-500">or</span>
          <div className="flex-1 border-t border-gray-300"></div>
          </div>

          {/* Google Sign-In Button */}
          <button
            onClick={signInWithGoogle}
            className="border border-gray-400 p-2 w-96 mt-2 rounded flex items-center justify-center hover:bg-gray-50 transition"
          >
          <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.9 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
            Sign Up with Google
          </button>
        </div>
      </div>

      {/* Right side (Logo, Illustration, and Footer) */}
      <div className="w-1/2 bg-black flex flex-col items-center py-8 relative">
        {/* Logo with Text*/}
        <div className="flex items-center gap-3 mt-4 md:mt-8 lg:mt-12">
          <img src={Logo}  alt="HabitFlow Logo" className="w-10 md:w-12 lg:w-14"/>
          <h1 className="text-white text-xl md:text-2xl lg:text-3xl font-bold font-['Nunito'] leading-9">Habit Flow</h1>
        </div>

        {/* Centered Illustration */}
        <div className="flex-grow -translate-y-10 flex items-center justify-center">
          <img src={Kitchen} alt="Illustration" className="w-1/2 md:w-2/3 lg:w-3/4 xl:w-4/5 h-auto mx-auto"/>
        </div>

        {/* Centered Footer - Adjusted for responsiveness */}
        <div className="absolute bottom-8 md:bottom-12 lg:bottom-16 inset-x-0 text-center">
          <p className="text-white text-sm md:text-base lg:text-lg font-['Poppins']">© 2025 HabitFlow. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
