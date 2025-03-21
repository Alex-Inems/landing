// components/LandingPreview.js
import React from "react";

const LandingPreview = ({ landingData }) => {
  if (!landingData) {
    return <p className="text-center text-gray-500">No preview available</p>;
  }

  return (
    <div className="bg-white text-black shadow-lg rounded-lg p-6 my-6">
      <h1 className="text-3xl font-bold text-center mb-4">{landingData.title}</h1>
      <p className="text-lg text-gray-600 text-center">{landingData.subtitle}</p>
      
      {landingData.features && (
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-2">Features:</h2>
          <ul className="list-disc list-inside">
            {landingData.features.map((feature, index) => (
              <li key={index} className="text-gray-700">{feature}</li>
            ))}
          </ul>
        </div>
      )}

      {landingData.cta && (
        <div className="mt-6 text-center">
          <a
            href={landingData.cta.link}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
          >
            {landingData.cta.text}
          </a>
        </div>
      )}
    </div>
  );
};

export default LandingPreview;
