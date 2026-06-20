import React from 'react';
import Sidebar from '../../SideBar/Sidebar';
import { Outlet } from 'react-router';

const DashBoardLayout = () => {
    return (
        <div className='flex flex-col md:flex-row gap-6 p-4 md:p-6 bg-[#f8fafc] min-h-screen font-sans'>
            {/* Sidebar */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
                <Sidebar/>
            </div>

            {/* Main Content Area */}
            <div className='flex-1 flex flex-col gap-6'>
                {/* Header Banner */}
                <div className="relative bg-[#ebf8fa] border border-[#d2f0f4] rounded-2xl p-8 overflow-hidden flex flex-col items-center justify-center min-h-[140px] shadow-sm select-none">
                    {/* Dotted Circle SVG Background */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <svg className="text-[#a5e2e8] opacity-50" width="220" height="220" viewBox="0 0 100 100">
                            <defs>
                                <pattern id="dots" x="0" y="0" width="6" height="6" patternUnits="userSpaceOnUse">
                                    <circle cx="3" cy="3" r="1" fill="currentColor" />
                                </pattern>
                            </defs>
                            <circle cx="50" cy="50" r="48" fill="url(#dots)" />
                        </svg>
                    </div>

                    {/* Text content */}
                    <span className="text-[11px] font-bold tracking-[0.4em] text-[#0f6070] mb-2 relative z-10">ACADEMIC</span>
                    <h1 className="text-3xl md:text-4xl font-extrabold text-[#002f3c] tracking-wider relative z-10 text-center">
                        STUDENT APPLICATION
                    </h1>
                </div>

                {/* Content Pane */}
                <div className='bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-100 min-h-[450px]'>
                    <Outlet/>
                </div>
            </div>
        </div>
    );
};

export default DashBoardLayout;