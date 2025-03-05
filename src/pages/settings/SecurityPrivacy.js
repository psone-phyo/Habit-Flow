import SettingsLayout from "./SettingsLayout.js";

const SecurityPrivacy = () => {
  return (
    <SettingsLayout>
      <div className="mt-8">
        <h3 className="text-2xl font-semibold text-[#393939]">Security & Privacy</h3>
        <p className="text-gray-600">Manage your security and privacy settings here.</p>

        {/* Account Detail Section */}
        <div className="bg-[#e6f0fa] p-6 rounded-lg mt-6">
          <h4 className="text-xl font-semibold mb-4">Account Detail</h4>
          <div className="flex items-center justify-between border-b pb-3">
            <span>Verify Email Address</span>
            <button className="bg-[#ff904f] text-white px-4 py-2 rounded-md">Verified</button>
          </div>
          <div className="flex items-center justify-between mt-3">
            <span>Update Password</span>
            <button className="bg-[#ff904f] text-white px-4 py-2 rounded-md">Change</button>
          </div>
        </div>

        {/* Recovery Setting Section */}
        <div className="bg-[#e6f0fa] p-6 rounded-lg mt-6">
          <h4 className="text-xl font-semibold mb-4">Recovery Setting</h4>
          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-1">Recovery Email Address</label>
              <input 
                type="text" 
                placeholder="Enter recovery email"
                className="w-full p-2 border border-gray-300 rounded-md bg-white" 
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Another Email Address</label>
              <input 
                type="text" 
                placeholder="Enter another email"
                className="w-full p-2 border border-gray-300 rounded-md bg-white" 
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Recovery Phone</label>
              <input 
                type="text" 
                placeholder="Enter recovery phone number"
                className="w-full p-2 border border-gray-300 rounded-md bg-white" 
              />
            </div>
          </div>
        </div>

        {/* Deactivate Account Section - Side by Side */}
        <div className="bg-[#e6f0fa] p-6 rounded-lg mt-6 flex items-center justify-between">
          <h4 className="text-xl font-semibold">Deactivate Account</h4>
          <button className="bg-[#ff904f] text-white px-6 py-2 rounded-md">Deactivate</button>
        </div>

        {/* Save Button */}
        <div className="mt-6 text-right">
          <button className="bg-[#ff904f] text-white px-6 py-2 rounded-md">Save</button>
        </div>
      </div>
    </SettingsLayout>
  );
};

export default SecurityPrivacy;

