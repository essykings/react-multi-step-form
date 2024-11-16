import React from "react";

export default function Step1({ formData, setFormData, setCurrentStep }) {
  console.log(formData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-extra-bold">Personal Info</h2>
    
        <div className="space-y-4">
          <label className="text-sm text-left font-medium mb-1"> Name:</label>

          <input
            type="text"
            name="name"
            required
            className="w-full "
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="space-y-4">
          <label className="block text-sm font-medium mb-1"> Email:</label>
          <input
            type="email"
            required
            name="email"
            className="w-full "
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
      </div>
    
  );
}
