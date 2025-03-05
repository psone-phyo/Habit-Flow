import SettingsLayout from "./SettingsLayout.js";

const Language = () => {
  return (
    <SettingsLayout>
      <div className="mt-8">
        {/* Language Section */}
        <div className="flex justify-between items-center mb-8">
          {/* Left Side: Change Language Text */}
          <div className="flex-1">
            <h3 className="text-2xl font-semibold text-[#393939]">Change Language</h3>
            <p className="text-gray-600">Select your preferred language.</p>
          </div>

          {/* Right Side: Language Options */}
          <div className="flex-1 flex justify-end">
            <select className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#ff904f] w-48">
              <option value="en">English</option>
              <option value="es">Spanish</option>
              <option value="fr">French</option>
              <option value="de">German</option>
              <option value="zh">Chinese</option>
            </select>
          </div>
        </div>

        {/* Save Button Just Above Footer */}
        <div className="mt-12 text-center">
          <button className="bg-[#ff904f] text-white px-8 py-3 rounded-md hover:bg-[#ff7b35] transition-colors text-lg">
            Save
          </button>
        </div>
      </div>
    </SettingsLayout>
  );
};

export default Language;