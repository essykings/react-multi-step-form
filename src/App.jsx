import { useState } from "react";

import {
  ChevronLeft,
  ChevronRight,

} from "lucide-react";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import Step4 from "./components/Step4";

function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    occupation: "",
    experience: "",
    country: "",
    city: "",
    hasTwitter: "no",
    twitterUsername: "",
    hasLinkedIn: "no",
    linkedInUrl: "",
    hasGithub: "no",
    githubUrl: "",
  });

 

  const nextStep = () => {
    setCurrentStep((prev) => Math.min(prev + 1, 6));
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  function renderStep() {
    switch (currentStep) {
      case 1:
        return <Step1 formData={formData} setFormData={setFormData} />;
      case 2:
        return <Step2 formData={formData} setFormData={setFormData} />;
      case 3:
        return <Step3 formData={formData} setFormData={setFormData} />;
      case 4:
        return <Step4 formData={formData} setFormData={setFormData} />;

      default:
        return null;
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert("Form submitted");
    console.log(formData);
  }

  return (
    <div className="max-w-2xl  mx-auto p-6 bg-white rounded-lg shadow">
      <form onSubmit={handleSubmit} className="space-y-6">
        {renderStep()}
        <div className=" flex justify-between pt-4">
          <button
            type="button"
            onClick={prevStep}
            disabled={currentStep === 1}
            className={`flex items-center px-4 py-2 rounded-md ${
              currentStep === 1
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-gray-600 text-white hover:bg-gray-700"
            }`}
          >
            <ChevronLeft className="w-4 h-4" />
            Previous
          </button>

          {currentStep === 4 ? (
            <button
              type="submit"
              className="flex items-center px-4  py-2 rounded-md bg-green-800 text-white hover:bg-black-700"
            >
              Submit
            </button>
          ) : (
            <button
              type="button"
              onClick={nextStep}
              disabled={currentStep === 4}
              className={`flex items-center px-4 py-2 rounded-md ${
                currentStep === 5
                  ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                  : "bg-gray-600 text-white hover:bg-gray-700"
              }`}
            >
              {currentStep === 4 ? " " : "Next"}
              <ChevronRight className="w-4 h-4" />
            </button>
          )}
          
        </div>
      </form>
    </div>
  );
}

export default App;
