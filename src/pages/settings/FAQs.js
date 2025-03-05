import SettingsLayout from "./SettingsLayout.js";

const FAQs = () => {
  return (
    <SettingsLayout>
      <div className="mt-8 w-[700px] mx-auto">
        <h3 className="text-2xl font-semibold text-[#393939] mb-4">FAQs</h3>
        <p className="text-gray-600 mb-6">Find answers to frequently asked questions here.</p>

        {/* FAQ Items */}
        <div className="space-y-4">
          <div className="bg-[#e0ecf4] p-4 rounded-lg">
            <h4 className="font-semibold text-[#393939]">How do I add a new habit?</h4>
            <p className="text-gray-600">
              You can add a new habit by clicking the "Add Habit" button on your dashboard.
            </p>
          </div>

          <div className="bg-[#e0ecf4] p-4 rounded-lg">
            <h4 className="font-semibold text-[#393939]">Can I track multiple habits at once?</h4>
            <p className="text-gray-600">
              Yes, you can track multiple habits and view their progress separately.
            </p>
          </div>

          <div className="bg-[#e0ecf4] p-4 rounded-lg">
            <h4 className="font-semibold text-[#393939]">How do I edit or delete a habit?</h4>
            <p className="text-gray-600">
              Go to your habit list, select the habit you want to change, and choose "Edit" or "Delete."
            </p>
          </div>

          <div className="bg-[#e0ecf4] p-4 rounded-lg">
            <h4 className="font-semibold text-[#393939]">How do I view my progress?</h4>
            <p className="text-gray-600">
              You can check your habit streaks and stats in the "Progress" section.
            </p>
          </div>
        </div>
      </div>
    </SettingsLayout>
  );
};

export default FAQs;
