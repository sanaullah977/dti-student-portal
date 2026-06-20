import React, { useState } from 'react';
import { FaGraduationCap, FaCheckCircle, FaClipboardList, FaUndo } from 'react-icons/fa';

const SSCMarksheet = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    studentId: '',
    department: 'CSE',
    sscRoll: '',
    sscReg: '',
    passingYear: '2022',
    board: 'Dhaka',
    email: '',
    phone: '',
    reason: '',
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
      sscRoll: '',
      sscReg: '',
      passingYear: '2022',
      board: 'Dhaka',
      email: '',
      phone: '',
      reason: '',
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
          Your request for <strong>SSC Marksheet</strong> has been received. Reference ID: <span className="font-mono text-teal-600 font-bold">REF-SSC-{Math.floor(100000 + Math.random() * 900000)}</span>
        </p>

        <div className="bg-gray-50 rounded-xl p-6 text-left mb-6 border border-gray-100">
          <h3 className="font-semibold text-gray-700 mb-3 flex items-center gap-2 border-b pb-2">
            <FaClipboardList className="text-teal-600" /> Submitted Details
          </h3>
          <div className="grid grid-cols-2 gap-y-2 text-sm text-gray-600">
            <span className="font-medium">Name:</span> <span>{formData.fullName}</span>
            <span className="font-medium">Student ID:</span> <span>{formData.studentId}</span>
            <span className="font-medium">Department:</span> <span>{formData.department}</span>
            <span className="font-medium">SSC Roll:</span> <span>{formData.sscRoll}</span>
            <span className="font-medium">SSC Registration:</span> <span>{formData.sscReg}</span>
            <span className="font-medium">Passing Year:</span> <span>{formData.passingYear}</span>
            <span className="font-medium">Board:</span> <span>{formData.board}</span>
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
          <h2 className="text-2xl font-bold text-gray-800">Apply for SSC Marksheet</h2>
          <p className="text-gray-500 text-sm">Request a verified copy or original of your SSC Marksheet from records.</p>
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
            <label className="label"><span className="label-text font-semibold text-gray-600">SSC Roll Number</span></label>
            <input 
              type="text" 
              name="sscRoll" 
              value={formData.sscRoll} 
              onChange={handleChange} 
              required 
              placeholder="e.g. 102938" 
              className="input input-bordered w-full rounded-xl"
            />
          </div>

          <div className="form-control">
            <label className="label"><span className="label-text font-semibold text-gray-600">SSC Registration Number</span></label>
            <input 
              type="text" 
              name="sscReg" 
              value={formData.sscReg} 
              onChange={handleChange} 
              required 
              placeholder="e.g. 1512839281" 
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
              min="2010" 
              max="2026" 
              className="input input-bordered w-full rounded-xl"
            />
          </div>

          <div className="form-control">
            <label className="label"><span className="label-text font-semibold text-gray-600">SSC Board</span></label>
            <select 
              name="board" 
              value={formData.board} 
              onChange={handleChange} 
              className="select select-bordered w-full rounded-xl"
            >
              <option value="Dhaka">Dhaka</option>
              <option value="Chattogram">Chattogram</option>
              <option value="Rajshahi">Rajshahi</option>
              <option value="Jashore">Jashore</option>
              <option value="Barishal">Barishal</option>
              <option value="Sylhet">Sylhet</option>
              <option value="Dinajpur">Dinajpur</option>
              <option value="Cumilla">Cumilla</option>
              <option value="Mymensingh">Mymensingh</option>
              <option value="Madrasah">Madrasah</option>
              <option value="Technical">Technical</option>
            </select>
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

        <div className="form-control">
          <label className="label"><span className="label-text font-semibold text-gray-600">Reason for Request</span></label>
          <textarea 
            name="reason" 
            value={formData.reason} 
            onChange={handleChange} 
            placeholder="Please detail why you need this document..." 
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
            Submit Application
          </button>
        </div>
      </form>
    </div>
  );
};

export default SSCMarksheet;
