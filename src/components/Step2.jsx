import React from "react";

export default function Step2({ formData, setFormData, setCurrentStep }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="space-y-6">
    
       <div className="space-y-4">
       <h2 className="text-2xl font-extrabold">Occupation</h2>
       </div>
        
          <div className="space-y-4">
            <select
              id="occupation"
              name="occupation"
              value={formData.occupation}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded-md border-gray-300 shadow-sm"
            >
              <option value="">Select Your Profession</option>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="manager">Manager</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <div className="space-y-4">
            
              <span className="text-sm text-gray-700">Years of Experience</span>
              <div className="flex space-x-4">
               
                {['0-2', '3-5', '5+'].map((value) => (
                  <label key={value} className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="experience"
                      value={value}
                      checked={formData.experience === value}
                      onChange={handleChange}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                    />
                    <span className="text-sm text-gray-700">{value} years</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>
      
    
  );
}
