import { Link } from "react-router-dom";
import laptop from "../img/laptop.png";
import phone from "../img/phone.png";

const Hero = () => {
  return (
    <section className="w-full bg-black text-white h-[650px] relative">
      {/* Text Container - Fixed Position */}
      <div className="absolute left-[132px] top-[228px] w-[588px]">
        <p className="opacity-70 text-white text-lg font-normal font-['Poppins'] leading-normal">
          Track your daily habits, stay motivated, and build a better routine with Habit Flow<br/><br/>
        </p>
        <div class="w-[309px] h-24 relative">
          <div class="left-0 top-0 absolute text-white text-[40px] font-normal font-['Microsoft Sans Serif'] leading-[48px]">Build your <br/>habits</div>
          <div class="left-[117px] top-[48px] absolute justify-center items-center inline-flex overflow-hidden">
          <div class="text-[#ff7423] text-[40px] font-normal font-['Microsoft Sans Serif'] leading-[48px]">effortlessly</div>
          </div>
        </div>
        <br/><br/>
        <Link to="/signup">
        <button className="bg-[#FF7423] px-[50px] py-[15px] rounded-[4px] text-[18px] leading-[px] hover:bg-[#e06620]">
          Get Started
        </button>
        </Link>
      </div>

       {/* Image Container */}
      <div className="absolute right-[132px] top-0 w-[720px] h-full">
        <div className="relative w-full h-full">
          {/* Laptop Image - Responsive Size */}
          <img 
            src={laptop} 
            alt="laptop" 
            className="absolute left-0 top-0 w-[600px] md:w-[720px] lg:w-[799px] h-[450px] md:h-[550px] lg:h-[600px] object-contain" 
          />
        {/* Phone Image - Responsive Size */}
        <img 
          src={phone} 
          alt="phone" 
          className="absolute left-[420px] top-[120px] w-[250px] md:w-[300px] lg:w-[338px] h-[300px] md:h-[350px] lg:h-[400px] scale-x-[-1]"
        />
      </div>
</div>
    </section>
  );
};

export default Hero;