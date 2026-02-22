import React from 'react';

const AdmitCard = () => {
    return (
        <div className='shadow-sm flex flex-col items-center gap-10 p-9 shadow-blue-400  my-6  rounded-xl'>
            <div className='grid grid-cols-1 gap-5 w-auto md:grid-cols-2 sm:grid-cols-2'>
                <input type="text" placeholder="Enter Your Roll" className="border-blue-200 border rounded-sm w-96 h-10" />
                <select className='border-blue-200 border rounded-sm w-96 h-10'>
                    <option value="">Select Your Semester</option>
                    <option value="1st">1st</option>
                    <option value="2nd">2nd</option>
                    <option value="3rd">3rd</option>
                    <option value="4th">4th</option>
                    <option value="5th">5th</option>
                    <option value="6th">6th</option>
                    <option value="7th">7th</option>
                    <option value="8th">8th</option>
                </select>
                <select className='border-blue-200 border rounded-sm w-96 h-10'>
                    <option value="">Select Your Department</option>
                    <option value="1st">1st</option>
                    <option value="2nd">2nd</option>
                    <option value="3rd">3rd</option>
                    <option value="4th">4th</option>
                    <option value="5th">5th</option>
                    <option value="6th">6th</option>
                    <option value="7th">7th</option>
                    <option value="8th">8th</option>
                </select>
                <select className='border-blue-200 border rounded-sm w-96 h-10'>
                    <option value="">Select Your Session</option>
                    <option value="1st">1st</option>
                    <option value="2nd">2nd</option>
                    <option value="3rd">3rd</option>
                    <option value="4th">4th</option>
                    <option value="5th">5th</option>
                    <option value="6th">6th</option>
                    <option value="7th">7th</option>
                    <option value="8th">8th</option>
                </select>
            </div>
            <button className='btn text-white bg-blue-500 hover:bg-blue-700'>Submit</button>
        </div>
    );
};

export default AdmitCard;