import SettingsLayout from "./SettingsLayout.js";

const MoodRecord = () => {
  return (
    <SettingsLayout>
      <div className="mt-8">
        <h3 className="text-2xl font-semibold text-[#393939]">Mood Record</h3>
        <p className="text-gray-600">Track and manage your mood records here.</p>
        {/* Add mood record content here */}
      </div>
    </SettingsLayout>
  );
};

export default MoodRecord;