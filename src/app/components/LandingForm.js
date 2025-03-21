// components/LandingForm.js
import React, { useState } from "react";
import LandingPreview from "./LandingPreview";

const LandingForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    subtitle: "",
    features: [],
    cta: { text: "", link: "" },
  });

  const [featureInput, setFeatureInput] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFeatureAdd = () => {
    if (featureInput.trim() !== "") {
      setFormData({
        ...formData,
        features: [...formData.features, featureInput],
      });
      setFeatureInput("");
    }
  };

  return (
    <div className="p-6 max-w-3xl mx-auto bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Create Your Landing Page</h2>

      <label className="block mb-2 font-medium">Title:</label>
      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={handleChange}
        className="w-full p-2 border rounded-md"
      />

      <label className="block mt-4 mb-2 font-medium">Subtitle:</label>
      <input
        type="text"
        name="subtitle"
        value={formData.subtitle}
        onChange={handleChange}
        className="w-full p-2 border rounded-md"
      />

      <label className="block mt-4 mb-2 font-medium">Features:</label>
      <div className="flex">
        <input
          type="text"
          value={featureInput}
          onChange={(e) => setFeatureInput(e.target.value)}
          className="w-full p-2 border rounded-md"
        />
        <button
          type="button"
          onClick={handleFeatureAdd}
          className="ml-2 px-4 py-2 bg-blue-600 text-white rounded-md"
        >
          Add
        </button>
      </div>

      <label className="block mt-4 mb-2 font-medium">CTA Text:</label>
      <input
        type="text"
        name="ctaText"
        value={formData.cta.text}
        onChange={(e) =>
          setFormData({ ...formData, cta: { ...formData.cta, text: e.target.value } })
        }
        className="w-full p-2 border rounded-md"
      />

      <label className="block mt-4 mb-2 font-medium">CTA Link:</label>
      <input
        type="text"
        name="ctaLink"
        value={formData.cta.link}
        onChange={(e) =>
          setFormData({ ...formData, cta: { ...formData.cta, link: e.target.value } })
        }
        className="w-full p-2 border rounded-md"
      />

      <LandingPreview landingData={formData} />
    </div>
  );
};

export default LandingForm;
