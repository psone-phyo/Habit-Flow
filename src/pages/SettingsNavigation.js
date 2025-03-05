import { NavLink } from "react-router-dom";

const SettingsNavigation = () => {
  return (
    <div className="w-[1340px] h-[60px] bg-orange-200 rounded-md justify-center items-center gap-1 inline-flex">
      {[
        { name: "Profile", path: "/profile", width: "w-40" },
        { name: "Language", path: "/language", width: "w-40" },
        { name: "Mood Record", path: "/mood-record", width: "w-40" },
        { name: "Security & Privacy", path: "/security-privacy", width: "w-[172px]" },
        { name: "Notification", path: "/notification", width: "w-40" },
        { name: "FAQs", path: "/faqs", width: "w-40" },
        { name: "Contact & Support", path: "/contact-support", width: "w-44" },
        { name: "Log Out", path: "/logout", width: "w-40" },
      ].map((tab, index) => (
        <NavLink
          key={index}
          to={tab.path}
          className={({ isActive }) => 
            `${tab.width} py-0.5 flex-col justify-start items-start gap-2.5 inline-flex`
          }
        >
          {({ isActive }) => (
            <>
              <div className={`${tab.width} h-16 px-3 py-2 justify-center items-center gap-2.5 inline-flex`}>
                <div className="grow shrink basis-0 text-center text-black text-lg font-normal font-['Microsoft Sans Serif'] leading-[64px]">
                  {tab.name}
                </div>
              </div>
              {isActive && (
                <div className="self-stretch h-14 bg-[#ff904f] rounded-[20px]" />
              )}
            </>
          )}
        </NavLink>
      ))}
    </div>
  );
};

export default SettingsNavigation;