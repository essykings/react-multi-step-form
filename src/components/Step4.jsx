import React from "react";

export default function Step4({ formData, setFormData }) {
  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-extrabold">Social Media</h2>
      </div>
      <div className="space-y-4">
        <label className="block text-sm font-extrabold"> Twitter</label>
        <div className="flex items-center space-x-2">
          <label className="flex items-center">
            <input
              type="radio"
              name="hasTwitter"
              value="yes"
              checked={formData.hasTwitter === "yes"}
              onChange={handleChange}
            />

            <span className="px-4 text-sm">Yes</span>
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="hasTwitter"
              value="no"
              checked={formData.hasTwitter === "no"}
              onChange={handleChange}
            />

            <span className="px-4 text-sm">No</span>
          </label>
        </div>
        {formData.hasTwitter === "yes" && (
          <input
            type="text"
            name="twitterUsername"
            value={formData.twitterUsername}
            onChange={handleChange}
            placeholder="Enter your twitter username"
            className="w-full px-3 py-2 rounded-md border-gray-300 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        )}
      </div>
      <div className="space-y-4">
        <label className="block text-sm font-extrabold"> Linkedin</label>
        <div className="flex items-center space-x-2">
          <label className="flex items-center">
            <input
              type="radio"
              name="hasLinkedIn"
              value="yes"
              checked={formData.hasLinkedIn === "yes"}
              onChange={handleChange}
            />

            <span className="px-4 text-sm">Yes</span>
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="hasLinkedIn"
              value="no"
              checked={formData.hasLinkedIn === "no"}
              onChange={handleChange}
            />

            <span className="px-4 text-sm">No</span>
          </label>
        </div>
        {formData.hasLinkedIn === "yes" && (
          <input
            type="text"
            name="linkedinUrl"
            value={formData.linkedinUrl}
            onChange={handleChange}
            placeholder="Enter your Linkdein url"
            className="w-full px-3 py-2 rounded-md border-gray-300 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        )}
      </div>
      <div className="space-y-4">
      <label className="block text-sm font-extrabold"> Github</label>
        
        <div className="flex items-center space-x-2">
          <label className="flex items-center">
            <input
              type="radio"
              name="hasGithub"
              value="yes"
              checked={formData.hasGithub === "yes"}
              onChange={handleChange}
            />

            <span className="px-4 text-sm">Yes</span>
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="hasGithub"
              value="no"
              checked={formData.hasGithub === "no"}
              onChange={handleChange}
            />

            <span className="px-4 text-sm">No</span>
          </label>
        </div>
        {formData.hasGithub === "yes" && (
          <input
            type="text"
            name="githubUrl"
            value={formData.githubUrl}
            onChange={handleChange}
            placeholder="Enter your Github url"
            className="w-full px-3 py-2 rounded-md border-gray-300 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        )}
      </div>



    </div>
  );
}
