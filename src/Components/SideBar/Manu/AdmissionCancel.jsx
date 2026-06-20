import React, { useState } from 'react';
import { FaGraduationCap, FaCheckCircle, FaClipboardList, FaUndo } from 'react-icons/fa';

const AdmissionCancel = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    studentId: '',
    department: 'CSE',
    admissionSemester: 'Spring 2025',
    currentSemester: '3rd',
    reason: 'Transferring to another university',
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
      admissionSemester: 'Spring 2025',
      currentSemester: '3rd',
      reason: 'Transferring to another university',
      email: '',
      phone: '',
      details: '',
    });
    setSubmitted(false);
  };

  if (submitted) {
    return (
      <div className="card bg-base-100 shadow-xl border border-red-100 p-8 max-w-2xl mx-auto text-center animate-fade-in">
        <div className="flex justify-center text-red-600 mb-4">
          <FaCheckCircle size={64} className="animate-bounce" />
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Cancellation Request Filed!</h2>
        <p className="text-gray-600 mb-6">
          Your request for <strong>Admission Cancellation</strong> has been received. Reference ID: <span className="font-mono text-red-600 font-bold">REF-CAN-{Math.floor(100000 + Math.random() * 900000)}</span>
        </p>

        <div className="bg-gray-50 rounded-xl p-6 text-left mb-6 border border-gray-100">
          <h3 className="font-semibold text-gray-700 mb-3 flex items-center gap-2 border-b pb-2">
            <FaClipboardList className="text-red-600" /> Submitted Details
          </h3>
          <div className="grid grid-cols-2 gap-y-2 text-sm text-gray-600">
            <span className="font-medium">Name:</span> <span>{formData.fullName}</span>
            <span className="font-medium">Student ID:</span> <span>{formData.studentId}</span>
            <span className="font-medium">Department:</span> <span>{formData.department}</span>
            <span className="font-medium">Admission Term:</span> <span>{formData.admissionSemester}</span>
            <span className="font-medium">Current Semester:</span> <span>{formData.currentSemester}</span>
            <span className="font-medium">Reason:</span> <span>{formData.reason}</span>
            <span className="font-medium">Email:</span> <span>{formData.email}</span>
            <span className="font-medium">Phone:</span> <span>{formData.phone}</span>
          </div>
        </div>

        <button 
          onClick={handleReset}
          className="btn btn-outline border-red-600 text-red-600 hover:bg-red-600 hover:text-white flex items-center gap-2 mx-auto rounded-3xl px-6"
        >
          <FaUndo /> Submit Another Application
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-red-50 text-red-600 rounded-2xl">
          <FaGraduationCap size={28} />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Admission Cancel Form</h2>
          <p className="text-gray-500 text-sm">Formally cancel admission and retrieve academic transcripts submitted during admission.</p>
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
            <label className="label"><span className="label-text font-semibold text-gray-600">Admission Semester</span></label>
            <input 
              type="text" 
              name="admissionSemester" 
              value={formData.admissionSemester} 
              onChange={handleChange} 
              required 
              placeholder="e.g. Spring 2025" 
              className="input input-bordered w-full rounded-xl"
            />
          </div>

          <div className="form-control">
            <label className="label"><span className="label-text font-semibold text-gray-600">Current Semester</span></label>
            <input 
              type="text" 
              name="currentSemester" 
              value={formData.currentSemester} 
              onChange={handleChange} 
              required 
              placeholder="e.g. 3rd" 
              className="input input-bordered w-full rounded-xl"
            />
          </div>

          <div className="form-control">
            <label className="label"><span className="label-text font-semibold text-gray-600">Reason for Cancellation</span></label>
            <select 
              name="reason" 
              value={formData.reason} 
              onChange={handleChange} 
              className="select select-bordered w-full rounded-xl"
            >
              <option value="Transferring to another university">Transferring to another university</option>
              <option value="Financial difficulty">Financial difficulty</option>
              <option value="Relocating to another city/country">Relocating to another city/country</option>
              <option value="Personal / Family issues">Personal / Family issues</option>
              <option value="Other">Other</option>
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="form-control">
            <label className="label"><span className="label-text font-semibold text-gray-600">Upload Parents' Consent Letter (PDF/Image)</span></label>
            <input 
              type="file" 
              required
              className="file-input file-input-bordered w-full rounded-xl text-sm"
            />
          </div>

          <div className="form-control">
            <label className="label"><span className="label-text font-semibold text-gray-600">Upload Student ID Card Scan</span></label>
            <input 
              type="file" 
              required
              className="file-input file-input-bordered w-full rounded-xl text-sm"
            />
          </div>
        </div>

        <div className="form-control">
          <label className="label"><span className="label-text font-semibold text-gray-600">Detailed Statement</span></label>
          <textarea 
            name="details" 
            value={formData.details} 
            onChange={handleChange} 
            placeholder="Please write details about why you want to cancel admission..." 
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
            className="btn bg-red-600 hover:bg-red-700 text-white rounded-xl px-8 border-none"
          >
            Cancel Admission
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdmissionCancel;