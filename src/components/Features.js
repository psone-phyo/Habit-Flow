import React from 'react';
import Check from "../img/ck.png"

const Feature = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
      <div className="max-w-5xl w-full">
        <div className="flex flex-col md:flex-row gap-16 mb-12"> 
          <div className="flex-1">
            <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center md:text-left">
              Everything You Need to Build Better Habits
            </h1>
          </div>
          <div className="flex-1">
            <p className="text-gray-600 text-lg mb-6 text-center md:text-left">
              Developing habits that last requires the right tools. With Habit Flow, you can easily track progress, stay accountable, and customize your experience to fit your unique routine.
            </p>
          </div>
        </div>

      
        <div className="flex flex-row gap-16"> 
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full md:w-2/3">
            {/* Row 1 */}
            {/* Card 1: User-Focused Design */}
            <div className="bg-orange-500 text-white p-6 rounded-lg flex flex-col items-center justify-center text-center h-40">
              <span className="text-4xl font-bold mb-2">01</span>
              <h3 className="text-xl font-semibold">User-Focused Design</h3>
            </div>

            {/* Card 2: Habit Tracking */}
            <div className="bg-gray-200 text-gray-800 p-6 rounded-lg flex flex-col items-center justify-center text-center h-40">
              <span className="text-4xl font-bold mb-2">02</span>
              <h3 className="text-xl font-semibold">Habit Tracking</h3>
            </div>

            {/* Card 3: Personalized Experience */}
            <div className="bg-orange-500 text-white p-6 rounded-lg flex flex-col items-center justify-center text-center h-40">
              <span className="text-4xl font-bold mb-2">03</span>
              <h3 className="text-xl font-semibold">Personalized Experience</h3>
            </div>

            {/* Row 2 */}
            {/* Card 4: Progress Visualization */}
            <div className="bg-gray-200 text-gray-800 p-6 rounded-lg flex flex-col items-center justify-center text-center h-40">
              <span className="text-4xl font-bold mb-2">04</span>
              <h3 className="text-xl font-semibold">Progress Visualization</h3>
            </div>

            {/* Card 5: Cross-Platform Access */}
            <div className="bg-orange-500 text-white p-6 rounded-lg flex flex-col items-center justify-center text-center h-40">
              <span className="text-4xl font-bold mb-2">05</span>
              <h3 className="text-xl font-semibold">Cross-Platform Access</h3>
            </div>

            {/* Card 6: Smart Reminders */}
            <div className="bg-gray-200 text-gray-800 p-6 rounded-lg flex flex-col items-center justify-center text-center h-40">
              <span className="text-4xl font-bold mb-2">06</span>
              <h3 className="text-xl font-semibold">Smart Reminders</h3>
            </div>
          </div>

          <div className="w-full md:w-1/3 flex items-center justify-center">
            <img
              src={Check}
              alt="Checklist Illustration"
              className="max-w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;