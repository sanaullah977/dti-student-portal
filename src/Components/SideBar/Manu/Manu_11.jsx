import React, { useState } from 'react';
import { FaGraduationCap, FaCheckCircle, FaClipboardList, FaUndo } from 'react-icons/fa';

const Manu_11 = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    studentId: '',
    department: 'CSE',
    semester: '1st',
    examRoll: '',
    passingYear: '2025',
    marksheetSerial: '',
    email: '',
    phone: '',
    details: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      studentId: '',
      department: 'CSE',
      semester: '1st',
      examRoll: '',
      passingYear: '2025',
      marksheetSerial: '',
      email: '',
      phone: '',
      details: '',
    });
    setSubmitted(false);
  };

  if (submitted) {
    return (
      <div className="card bg-base-100 shadow-xl border border-teal-100 p-8 max-w-2xl mx-auto text-center animate-fade-in">
        <div className="flex justify-center text-teal-600 mb-4">
          <FaCheckCircle size={64} className="animate-bounce" />
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Application Submitted!</h2>
        <p className="text-gray-600 mb-6">
          Your request for <strong>Marksheet Verification</strong> has been received. Reference ID: <span className="font-mono text-teal-600 font-bold">REF-VER-{Math.floor(100000 + Math.random() * 900000)}</span>
        </p>

        <div className="bg-gray-50 rounded-xl p-6 text-left mb-6 border border-gray-100">
          <h3 className="font-semibold text-gray-700 mb-3 flex items-center gap-2 border-b pb-2">
            <FaClipboardList className="text-teal-600" /> Submitted Details
          </h3>
          <div className="grid grid-cols-2 gap-y-2 text-sm text-gray-600">
            <span className="font-medium">Name:</span> <span>{formData.fullName}</span>
            <span className="font-medium">Student ID:</span> <span>{formData.studentId}</span>
            <span className="font-medium">Department:</span> <span>{formData.department}</span>
            <span className="font-medium">Semester:</span> <span>{formData.semester}</span>
            <span className="font-medium">Exam Roll:</span> <span>{formData.examRoll}</span>
            <span className="font-medium">Passing Year:</span> <span>{formData.passingYear}</span>
            <span className="font-medium">Marksheet Serial:</span> <span>{formData.marksheetSerial}</span>
            <span className="font-medium">Email:</span> <span>{formData.email}</span>
            <span className="font-medium">Phone:</span> <span>{formData.phone}</span>
          </div>
        </div>

        <button 
          onClick={handleReset}
          className="btn btn-outline border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white flex items-center gap-2 mx-auto rounded-3xl px-6"
        >
          <FaUndo /> Submit Another Application
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-teal-50 text-teal-600 rounded-2xl">
          <FaGraduationCap size={28} />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Marksheet Verification</h2>
          <p className="text-gray-500 text-sm">Request verification of your semester marksheet for employment, higher studies, or third-party background checks.</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="card bg-base-100 shadow-md border border-gray-200 p-6 md:p-8 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="form-control">
            <label className="label"><span className="label-text font-semibold text-gray-600">Full Name</span></label>
            <input 
              type="text" 
              name="fullName" 
              value={formData.fullName} 
              onChange={handleChange} 
              required 
              placeholder="e.g. John Doe" 
              className="input input-bordered w-full rounded-xl"
            />
          </div>

          <div className="form-control">
            <label className="label"><span className="label-text font-semibold text-gray-600">Student ID</span></label>
            <input 
              type="text" 
              name="studentId" 
              value={formData.studentId} 
              onChange={handleChange} 
              required 
              placeholder="e.g. DTI-2026-081" 
              className="input input-bordered w-full rounded-xl"
            />
          </div>

          <div className="form-control">
            <label className="label"><span className="label-text font-semibold text-gray-600">Department</span></label>
            <select 
              name="department" 
              value={formData.department} 
              onChange={handleChange} 
              className="select select-bordered w-full rounded-xl"
            >
              <option value="CSE">Computer Science & Engineering</option>
              <option value="EEE">Electrical & Electronic Engineering</option>
              <option value="Civil">Civil Engineering</option>
              <option value="BBA">Business Administration</option>
              <option value="Textile">Textile Engineering</option>
            </select>
          </div>

          <div className="form-control">
            <label className="label"><span className="label-text font-semibold text-gray-600">Semester</span></label>
            <select 
              name="semester" 
              value={formData.semester} 
              onChange={handleChange} 
              className="select select-bordered w-full rounded-xl"
            >
              <option value="1st">1st Semester</option>
              <option value="2nd">2nd Semester</option>
              <option value="3rd">3rd Semester</option>
              <option value="4th">4th Semester</option>
              <option value="5th">5th Semester</option>
              <option value="6th">6th Semester</option>
              <option value="7th">7th Semester</option>
              <option value="8th">8th Semester</option>
            </select>
          </div>

          <div className="form-control">
            <label className="label"><span className="label-text font-semibold text-gray-600">Exam Roll Number</span></label>
            <input 
              type="text" 
              name="examRoll" 
              value={formData.examRoll} 
              onChange={handleChange} 
              required 
              placeholder="e.g. 293810" 
              className="input input-bordered w-full rounded-xl"
            />
          </div>

          <div className="form-control">
            <label className="label"><span className="label-text font-semibold text-gray-600">Passing Year</span></label>
            <input 
              type="number" 
              name="passingYear" 
              value={formData.passingYear} 
              onChange={handleChange} 
              required 
              min="2015" 
              max="2026" 
              className="input input-bordered w-full rounded-xl"
            />
          </div>

          <div className="form-control">
            <label className="label"><span className="label-text font-semibold text-gray-600">Marksheet Serial / Reference No</span></label>
            <input 
              type="text" 
              name="marksheetSerial" 
              value={formData.marksheetSerial} 
              onChange={handleChange} 
              required 
              placeholder="e.g. MS-928301" 
              className="input input-bordered w-full rounded-xl"
            />
          </div>

          <div className="form-control">
            <label className="label"><span className="label-text font-semibold text-gray-600">Email Address</span></label>
            <input 
              type="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              required 
              placeholder="e.g. student@dti.edu.bd" 
              className="input input-bordered w-full rounded-xl"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="form-control">
            <label className="label"><span className="label-text font-semibold text-gray-600">Upload Marksheet Scan Copy (PDF/Image)</span></label>
            <input 
              type="file" 
              required
              className="file-input file-input-bordered w-full rounded-xl text-sm"
            />
          </div>

          <div className="form-control">
            <label className="label"><span className="label-text font-semibold text-gray-600">Phone Number</span></label>
            <input 
              type="tel" 
              name="phone" 
              value={formData.phone} 
              onChange={handleChange} 
              required 
              placeholder="e.g. +880 1XXXXXXXXX" 
              className="input input-bordered w-full rounded-xl"
            />
          </div>
        </div>

        <div className="form-control">
          <label className="label"><span className="label-text font-semibold text-gray-600">Verification Purpose / Additional Details</span></label>
          <textarea 
            name="details" 
            value={formData.details} 
            onChange={handleChange} 
            placeholder="State the organization requesting verification, or any special requests..." 
            className="textarea textarea-bordered w-full rounded-xl h-24"
          ></textarea>
        </div>

        <div className="flex justify-end gap-4 pt-4 border-t border-gray-100">
          <button 
            type="button" 
            onClick={handleReset} 
            className="btn btn-ghost hover:bg-gray-100 rounded-xl px-6"
          >
            Clear Form
          </button>
          <button 
            type="submit" 
            className="btn bg-teal-600 hover:bg-teal-700 text-white rounded-xl px-8 border-none"
          >
            Verify Marksheet
          </button>
        </div>
      </form>
    </div>
  );
};

export default Manu_11;