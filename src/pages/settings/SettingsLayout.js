import { Link, useLocation } from "react-router-dom"; 

const SettingsLayout = ({ children }) => {

  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen mx-auto">
      <div className="flex flex-grow">
        {/* Sidebar */}
        <div className="w-[100px] p-4">
          <div className="h-[434px] px-1 py-6 bg-orange-200 rounded-lg shadow-[0px_4px_6px_0px_rgba(0,0,0,0.09)] flex-col justify-center items-center gap-7 inline-flex">
            {/* Habit Flow Logo */}
            <div className="w-[67px] h-[67px] flex-col justify-center items-center flex overflow-hidden gap-2">
              <div data-svg-wrapper>
                <svg width="33" height="40" viewBox="0 0 33 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.5031 5.00813C15.9814 4.77781 16.536 5.12636 16.536 5.65724V18.7585C16.536 19.3117 17.1336 19.6585 17.6138 19.3841L20.0661 17.9828C26.1265 14.4999 29.9641 8.12068 30.2114 1.12473C30.2255 0.72705 30.5467 0.404297 30.9446 0.404297H32.0973C32.4952 0.404297 32.8177 0.726833 32.8177 1.12473V18.1269C32.8177 23.8903 29.5038 29.2215 24.2446 31.743L17.4969 34.9919C17.0186 35.2222 16.464 34.8736 16.464 34.3428V21.2414C16.464 20.6883 15.8664 20.3415 15.3861 20.6159L12.9339 22.0172C6.87353 25.5001 3.03588 31.8793 2.78855 38.8753C2.77443 39.2729 2.45326 39.5957 2.05537 39.5957H0.902681C0.504788 39.5957 0.182251 39.2732 0.182251 38.8753V21.8731C0.182251 16.1097 3.49623 10.7785 8.75537 8.25698L15.5031 5.00813Z" fill="#393939"/>
                </svg>
              </div>
              <div className="text-[#393939] text-xs font-normal font-['Poppins'] leading-none">Habit Flow</div>
            </div>

            {/* Home Button */}
            <Link to="/dash" className="w-[60px] h-[60px] p-1 bg-transparent hover:bg-orange-300 rounded-md flex flex-col justify-center items-center gap-2">
              <div data-svg-wrapper className='relative'>
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.5 9.5L12.5 2.5L21.5 9.5V20.5C21.5 21.0304 21.2893 21.5391 20.9142 21.9142C20.5391 22.2893 20.0304 22.5 19.5 22.5H5.5C4.96957 22.5 4.46086 22.2893 4.08579 21.9142C3.71071 21.5391 3.5 21.0304 3.5 20.5V9.5Z" stroke="#393939" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9.5 22.5V12.5H15.5V22.5" stroke="#393939" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="text-[#393939] text-xs font-extrabold font-['Roboto'] leading-none">Home</div>
            </Link>

            {/* Analysis Button */}
            <Link to="/" className="h-[49px] p-1 bg-transparent hover:bg-orange-300 rounded-md flex flex-col justify-center items-center gap-2">
              <div data-svg-wrapper className="relative">
                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.5 3V21H21.5" stroke="#393939" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M13.5 17V9" stroke="#393939" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M18.5 17V5" stroke="#393939" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8.5 17V14" stroke="#393939" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="self-stretch text-[#393939] text-xs font-normal font-['Roboto'] leading-none">Analysis</div>
            </Link>

            {/* Notifications Button */}
            <Link to="/notifications" className="gap-2 p-1 bg-transparent hover:bg-orange-300 rounded-md flex flex-col justify-center items-center">
              <div data-svg-wrapper className="relative">
                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.5 8C18.5 6.4087 17.8679 4.88258 16.7426 3.75736C15.6174 2.63214 14.0913 2 12.5 2C10.9087 2 9.38258 2.63214 8.25736 3.75736C7.13214 4.88258 6.5 6.4087 6.5 8C6.5 15 3.5 17 3.5 17H21.5C21.5 17 18.5 15 18.5 8Z" stroke="#393939" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M14.23 21C14.0542 21.3031 13.8019 21.5547 13.4982 21.7295C13.1946 21.9044 12.8504 21.9965 12.5 21.9965C12.1496 21.9965 11.8054 21.9044 11.5018 21.7295C11.1982 21.5547 10.9458 21.3031 10.77 21" stroke="#393939" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2.5 8C2.5 5.8 3.2 3.7 4.5 2" stroke="#393939" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M22.5 8C22.5 5.8363 21.7982 3.73096 20.5 2" stroke="#393939" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="text-center text-[#393939] text-xs font-normal font-['Roboto'] leading-none">Notification</div>
            </Link>

            {/* Settings Button */}
            <Link to="/profile" className="h-[49px] flex flex-col justify-center items-center bg-[#ff904f] rounded-md px-3 py-2 hover:bg-orange-300 gap-2">
              <div data-svg-wrapper className='relative'>
                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.72 2H12.28C11.7496 2 11.2409 2.21071 10.8658 2.58579C10.4907 2.96086 10.28 3.46957 10.28 4V4.18C10.2796 4.53073 10.1871 4.87519 10.0115 5.17884C9.83602 5.48248 9.58374 5.73464 9.28 5.91L8.85 6.16C8.54596 6.33554 8.20108 6.42795 7.85 6.42795C7.49893 6.42795 7.15404 6.33554 6.85 6.16L6.7 6.08C6.24107 5.81526 5.69584 5.74344 5.184 5.88031C4.67217 6.01717 4.23555 6.35154 3.97 6.81L3.75 7.19C3.48526 7.64893 3.41345 8.19416 3.55031 8.706C3.68717 9.21783 4.02154 9.65445 4.48 9.92L4.63 10.02C4.93228 10.1945 5.18362 10.4451 5.35905 10.7468C5.53448 11.0486 5.6279 11.391 5.63 11.74V12.25C5.6314 12.6024 5.53965 12.949 5.36405 13.2545C5.18844 13.5601 4.93521 13.8138 4.63 13.99L4.48 14.08C4.02154 14.3456 3.68717 14.7822 3.55031 15.294C3.41345 15.8058 3.48526 16.3511 3.75 16.81L3.97 17.19C4.23555 17.6485 4.67217 17.9828 5.184 18.1197C5.69584 18.2566 6.24107 18.1847 6.7 17.92L6.85 17.84C7.15404 17.6645 7.49893 17.5721 7.85 17.5721C8.20108 17.5721 8.54596 17.6645 8.85 17.84L9.28 18.09C9.58374 18.2654 9.83602 18.5175 10.0115 18.8212C10.1871 19.1248 10.2796 19.4693 10.28 19.82V20C10.28 20.5304 10.4907 21.0391 10.8658 21.4142C10.4907 21.7893 11.7496 22 12.28 22H12.72C13.2504 22 13.7591 21.7893 14.1342 21.4142C14.5093 21.0391 14.72 20.5304 14.72 20V19.82C14.7204 19.4693 14.8129 19.1248 14.9885 18.8212C15.164 18.5175 15.4163 18.2654 15.72 18.09L16.15 17.84C16.454 17.6645 16.7989 17.5721 17.15 17.5721C17.5011 17.5721 17.846 17.6645 17.15 17.84L18.3 17.92C18.7589 18.1847 19.3042 18.2566 19.816 18.1197C20.3278 17.9828 20.7645 17.6485 21.03 17.19L21.25 16.8C21.5147 16.3411 21.5866 15.7958 21.4497 15.284C21.3128 14.7722 20.9785 14.3356 20.52 14.07L20.37 13.99C20.0648 13.8138 19.8116 13.5601 19.636 13.2545C19.4604 12.949 19.3686 12.6024 19.37 12.25V11.75C19.3686 11.3976 19.4604 11.051 19.636 10.7455C19.8116 10.4399 20.0648 10.1862 20.37 10.01L20.52 9.92C20.9785 9.65445 21.3128 9.21783 21.4497 8.706C21.5866 8.19416 21.5147 7.64893 21.25 7.19L21.03 6.81C20.7645 6.35154 20.3278 6.01717 19.816 5.88031C19.3042 5.74344 18.7589 5.81526 18.3 6.08L18.15 6.16C17.846 6.33554 17.5011 6.42795 17.15 6.42795C16.7989 6.42795 16.454 6.33554 16.15 6.16L15.72 5.91C15.4163 5.73464 15.164 5.48248 14.9885 5.17884C14.8129 4.87519 14.7204 4.53073 14.72 4.18V4C14.72 3.46957 14.5093 2.96086 14.1342 2.58579C13.7591 2.21071 13.2504 2 12.72 2Z" stroke="#393939" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12.5 15C14.1569 15 15.5 13.6569 15.5 12C15.5 10.3431 14.1569 9 12.5 9C10.8431 9 9.5 10.3431 9.5 12C9.5 13.6569 10.8431 15 12.5 15Z" stroke="#393939" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="text-[#FFE3D3] text-xs font-extrabold font-['Roboto'] leading-none">Setting</div>
            </Link>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col items-center mx-auto">
          <div className="p-5 w-full max-w-6xl">
            <h2 className="text-3xl font-bold text-[#393939] mb-6 text-left">Settings</h2>

            {/* Tab Navigation */}
            <div className="flex bg-orange-200 p-2 rounded-lg items-center">
              {["Profile", "Language", "Mood Record", "Security & Privacy", "FAQs", "Contact & Support", "Log Out"].map((tab, index) => {
              
                const path = tab === "Log Out" ? "/" : `/${tab.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-")}`;
              
                const isActive = location.pathname === path;

                return (
                  <Link
                    key={index}
                    to={path}
                    className={`px-4 py-2 rounded-lg mx-5 ${
                      isActive ? "bg-orange-500 text-white" : "hover:bg-orange-300"
                    }`}
                  >
                    {tab}
                  </Link>
                );
              })}
            </div>

            {/* Page Content */}
            {children}
          </div>
        </div>
      </div>

      {/* Full-Width Footer */}
      <footer className="py-5 bg-neutral-50 shadow-md">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4">
            <Link to="#" className="text-[#ff904f] text-sm">Terms & Conditions</Link>
            <Link to="#" className="text-[#ff904f] text-sm">Privacy & Policy</Link>
          </div>
          <div className="text-sm text-[#ff904f]">
            © 2025 HabitFlow All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SettingsLayout;