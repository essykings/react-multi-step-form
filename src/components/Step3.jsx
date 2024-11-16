import React from "react";

export default function Step3({formData, setFormData}) {


    function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }
  return (
    <div className="space-y-6">

        <div>
            <label className="text-lg  font-extrabold mb-1"> Contact Info:</label>
        </div>
      <div className="space-y-4">
        <label htmlFor="country" className="block text-sm font-bold"> Country</label>
        <div className="relative">
            <input type="text" 
            id="country"
            name="country"
            value={formData.country}
            onChange={handleChange}
            placeholder="Enter your country"
            className="w-full px-3 py-2 rounded-md border-gray-300 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            
            />

        </div>
      </div>
      <div className="space-y-4">
        <label htmlFor="country" className="block text-sm font-bold"> City</label>
        <div className="relative">
            <input type="text" 
            id="country"
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder="Enter your city"
            className="w-full px-3 py-2 rounded-md border-gray-300 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            
            />

        </div>
      </div>
    </div>
  );
}
