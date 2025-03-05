import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="w-full bg-white py-16">
      <div class="w-full  bg-white flex-col justify-start items-center gap-10 inline-flex overflow-hidden">
          <div class="self-stretch h-[89px] flex-col justify-start items-start gap-[25px] flex">
            <div class="self-stretch text-center text-[#272727] text-[32px] font-normal font-['Microsoft Sans Serif'] leading-10">Start Building Better Habits Today</div>
            <div class="self-stretch text-center text-[#393939] text-lg font-normal font-['Poppins'] leading-normal">Take control of your daily routines and stay consistent with Habit Flow. It's simple, effective, and completely free.</div>
          </div>
          <div class="px-[50px] py-[15px] bg-[#ff7423] rounded justify-start items-start gap-2 inline-flex hover:bg-[#e06620]">
          <Link to="/profile">
            <button class="text-center text-white text-lg font-medium font-['Poppins'] leading-normal">Start Habit Flow Now</button>
            </Link>
          </div>
      </div>
    </section>
  );
};

export default CTA;