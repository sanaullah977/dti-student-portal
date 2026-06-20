import React, { useState } from 'react';
import { FaGraduationCap, FaCheckCircle, FaClipboardList, FaUndo } from 'react-icons/fa';

const IndustrialDocuments = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    studentId: '',
    department: 'CSE',
    companyName: '',
    duration: '3 Months',
    startDate: '',
    supervisorName: '',
    supervisorEmail: '',
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
      companyName: '',
      duration: '3 Months',
      startDate: '',
      supervisorName: '',
      supervisorEmail: '',
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
          Your request for <strong>Industrial Placement Documents</strong> has been received. Reference ID: <span className="font-mono text-teal-600 font-bold">REF-IND-{Math.floor(100000 + Math.random() * 900000)}</span>
        </p>

        <div className="bg-gray-50 rounded-xl p-6 text-left mb-6 border border-gray-100">
          <h3 className="font-semibold text-gray-700 mb-3 flex items-center gap-2 border-b pb-2">
            <FaClipboardList className="text-teal-600" /> Submitted Details
          </h3>
          <div className="grid grid-cols-2 gap-y-2 text-sm text-gray-600">
            <span className="font-medium">Name:</span> <span>{formData.fullName}</span>
            <span className="font-medium">Student ID:</span> <span>{formData.studentId}</span>
            <span className="font-medium">Department:</span> <span>{formData.department}</span>
            <span className="font-medium">Company Name:</span> <span>{formData.companyName}</span>
            <span className="font-medium">Duration:</span> <span>{formData.duration}</span>
            <span className="font-medium">Start Date:</span> <span>{formData.startDate}</span>
            <span className="font-medium">Supervisor:</span> <span>{formData.supervisorName}</span>
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
          <h2 className="text-2xl font-bold text-gray-800">Industrial Placement Documents</h2>
          <p className="text-gray-500 text-sm">Apply for forwarding letters, internship clearance, and NOC letters for industrial placement.</p>
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
            <label className="label"><span className="label-text font-semibold text-gray-600">Placement Company Name</span></label>
            <input 
              type="text" 
              name="companyName" 
              value={formData.companyName} 
              onChange={handleChange} 
              required 
              placeholder="e.g. Google Bangladesh" 
              className="input input-bordered w-full rounded-xl"
            />
          </div>

          <div className="form-control">
            <label className="label"><span className="label-text font-semibold text-gray-600">Internship Duration</span></label>
            <select 
              name="duration" 
              value={formData.duration} 
              onChange={handleChange} 
              className="select select-bordered w-full rounded-xl"
            >
              <option value="3 Months">3 Months</option>
              <option value="6 Months">6 Months</option>
              <option value="1 Year">1 Year</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="form-control">
            <label className="label"><span className="label-text font-semibold text-gray-600">Start Date</span></label>
            <input 
              type="date" 
              name="startDate" 
              value={formData.startDate} 
              onChange={handleChange} 
              required 
              className="input input-bordered w-full rounded-xl"
            />
          </div>

          <div className="form-control">
            <label className="label"><span className="label-text font-semibold text-gray-600">Industry Supervisor Name</span></label>
            <input 
              type="text" 
              name="supervisorName" 
              value={formData.supervisorName} 
              onChange={handleChange} 
              required 
              placeholder="e.g. Mr. Robert Chen" 
              className="input input-bordered w-full rounded-xl"
            />
          </div>

          <div className="form-control">
            <label className="label"><span className="label-text font-semibold text-gray-600">Industry Supervisor Email</span></label>
            <input 
              type="email" 
              name="supervisorEmail" 
              value={formData.supervisorEmail} 
              onChange={handleChange} 
              required 
              placeholder="e.g. r.chen@company.com" 
              className="input input-bordered w-full rounded-xl"
            />
          </div>

          <div className="form-control">
            <label className="label"><span className="label-text font-semibold text-gray-600">Your Email Address</span></label>
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

        <div className="form-control">
          <label className="label"><span className="label-text font-semibold text-gray-600">Upload Professional CV (PDF)</span></label>
          <input 
            type="file" 
            required
            className="file-input file-input-bordered w-full rounded-xl text-sm"
          />
        </div>

        <div className="form-control">
          <label className="label"><span className="label-text font-semibold text-gray-600">Additional Instructions</span></label>
          <textarea 
            name="reason" 
            value={formData.reason} 
            onChange={handleChange} 
            placeholder="Include any specific details to be printed on the NOC/Forwarding Letter..." 
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

export default IndustrialDocuments;