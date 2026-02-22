import React from "react";
import { FaCalendarAlt, FaGraduationCap, FaIdCard } from "react-icons/fa";
import { FcCalendar, FcConferenceCall, FcGraduationCap, FcOvertime, FcReading, FcSurvey, FcViewDetails, FcVoicePresentation } from "react-icons/fc";
import { GoBook } from "react-icons/go";
import { IoLibraryOutline } from "react-icons/io5";
import { MdNotificationAdd, MdNotificationsActive } from "react-icons/md";
import { RiBookShelfFill } from "react-icons/ri";
import { VscFeedback } from "react-icons/vsc";
import { Link } from "react-router";


const Card = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 py-8">
      <Link to={"admit-card"}>
      <div className="card-body flex justify-center items-center flex-col bg-base-100 shadow-md rounded-lg p-6">
        <figure>
        <FcSurvey size={70} />
        </figure>
        <h2 className="font-semibold text-2xl text-gray-600 text-center">
          Admit Card Clearance
        </h2>
      </div>
      </Link>

      <div className="card-body flex justify-center items-center flex-col bg-base-100 shadow-md rounded-lg p-6">
        <figure>
         <FcOvertime size={70}/>
        </figure>
        <h2 className="font-semibold text-2xl text-gray-600 text-center">
          Routine
        </h2>
      </div>

      <div className="card-body flex justify-center items-center flex-col bg-base-100 shadow-md rounded-lg p-6">
        <figure>
          < FaCalendarAlt color="gray" size={70} />
        </figure>
        <h2 className="font-semibold text-2xl text-gray-600 text-center">
         Academic Calendar
        </h2>
      </div>

      <Link to={"scholarship"}>
      <div className="card-body flex justify-center items-center flex-col bg-base-100 shadow-md rounded-lg p-6">
        <figure>
          <FcGraduationCap size={70} />
        </figure>
        <h2 className="font-semibold text-2xl text-gray-600 text-center">
         Scholarship
        </h2>
      </div>
      </Link>
      <div className="card-body flex justify-center items-center flex-col bg-base-100 shadow-md rounded-lg p-6">
        <figure>
          <MdNotificationsActive size={70}/>
        </figure>
        <h2 className="font-semibold text-2xl text-gray-600 text-center">
          Student Notice Board
        </h2>
      </div>
      <div className="card-body flex justify-center items-center flex-col bg-base-100 shadow-md rounded-lg p-6">
        <figure>
          <FcVoicePresentation size={70} />
        </figure>
        <h2 className="font-semibold text-2xl text-gray-600 text-center">
          Student Feedback
        </h2>
      </div>
      <div className="card-body flex justify-center items-center flex-col bg-base-100 shadow-md rounded-lg p-6">
        <figure>
          <FcConferenceCall size={70} />
        </figure>
        <h2 className="font-semibold text-2xl text-gray-600 text-center">
          Job Placement Cell
        </h2>
      </div>
      <div className="card-body flex justify-center items-center flex-col bg-base-100 shadow-md rounded-lg p-6">
        <figure>
          <FcReading size={70} />
        </figure>
        <h2 className="font-semibold text-2xl text-gray-600 text-center">
          Admit Card Clearance
        </h2>
      </div>
      <Link to="result">
      <div className="card-body flex justify-center items-center flex-col bg-base-100 shadow-md rounded-lg p-6">
        <figure>
          <FcViewDetails size={70} />
        </figure>
        <h2 className="font-semibold text-2xl text-gray-600 text-center">
           Students Result
        </h2>
      </div>
      </Link>
      <div className="card-body flex justify-center items-center flex-col bg-base-100 shadow-md rounded-lg p-6">
        <figure>
          <IoLibraryOutline size={70} />
        </figure>
        <h2 className="font-semibold text-2xl text-gray-600 text-center">
          Library
        </h2>
      </div>
     <Link to="syllabus">
      <div className="card-body flex justify-center items-center flex-col bg-base-100 shadow-md rounded-lg p-6">
        <figure>
          <GoBook size={70} />
        </figure>
        <h2 className="font-semibold text-2xl text-gray-600 text-center">
         Syllabus
        </h2>
      </div>
      </Link>
    </div>
  );
};

export default Card;
