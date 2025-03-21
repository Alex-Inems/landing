'use client'

import React, { useState } from "react";
import LandingPreview from "./LandingPreview";
import { X } from "lucide-react";

const LandingForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    subtitle: "",
    features: [],
    cta: { text: "", link: "" },
  });

  const [featureInput, setFeatureInput] = useState("");
  const [showPreview, setShowPreview] = useState(false);

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

  const handleFeatureRemove = (index) => {
    const updatedFeatures = formData.features.filter((_, i) => i !== index);
    setFormData({ ...formData, features: updatedFeatures });
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-cover bg-center bg-[url('/background.jpg')]">
      <div className="w-full max-w-2xl mx-auto p-8 bg-white/10 backdrop-blur-md shadow-xl rounded-xl border border-white/20">
        <h2 className="text-4xl font-extrabold text-center text-white mb-6">
          Create Your Landing Page
        </h2>

        {/* Title Input */}
        <div className="mb-4">
          <label className="block text-lg font-medium text-white">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter your landing page title..."
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none bg-white/20 backdrop-blur-md text-white"
          />
        </div>

        {/* Subtitle Input */}
        <div className="mb-4">
          <label className="block text-lg font-medium text-white">Subtitle</label>
          <input
            type="text"
            name="subtitle"
            value={formData.subtitle}
            onChange={handleChange}
            placeholder="Enter a catchy subtitle..."
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none bg-white/20 backdrop-blur-md text-white"
          />
        </div>

        {/* Features Input */}
        <div className="mb-4">
          <label className="block text-lg font-medium text-white">Features</label>
          <div className="flex gap-2">
            <input
              type="text"
              value={featureInput}
              onChange={(e) => setFeatureInput(e.target.value)}
              placeholder="Add a feature..."
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none bg-white/20 backdrop-blur-md text-white"
            />
            <button
              type="button"
              onClick={handleFeatureAdd}
              className="px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all"
            >
              Add
            </button>
          </div>
        </div>

        {/* Feature List */}
        {formData.features.length > 0 && (
          <ul className="mt-4 bg-white/20 p-4 rounded-lg backdrop-blur-md">
            {formData.features.map((feature, index) => (
              <li key={index} className="flex justify-between items-center mb-2">
                <span className="text-white">{feature}</span>
                <button
                  onClick={() => handleFeatureRemove(index)}
                  className="text-red-400 hover:text-red-600 transition-all"
                >
                  <X size={18} />
                </button>
              </li>
            ))}
          </ul>
        )}

        {/* CTA Section */}
        <div className="mb-4 mt-6">
          <label className="block text-lg font-medium text-white">CTA Button</label>
          <input
            type="text"
            name="ctaText"
            value={formData.cta.text}
            onChange={(e) =>
              setFormData({ ...formData, cta: { ...formData.cta, text: e.target.value } })
            }
            placeholder="Enter CTA text (e.g., Get Started)"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none bg-white/20 backdrop-blur-md text-white"
          />
        </div>

        <div className="mb-4">
          <label className="block text-lg font-medium text-white">CTA Link</label>
          <input
            type="text"
            name="ctaLink"
            value={formData.cta.link}
            onChange={(e) =>
              setFormData({ ...formData, cta: { ...formData.cta, link: e.target.value } })
            }
            placeholder="Enter CTA link (e.g., https://yourwebsite.com)"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none bg-white/20 backdrop-blur-md text-white"
          />
        </div>

        {/* Preview Button */}
        <button
          onClick={() => setShowPreview(!showPreview)}
          className="mt-6 w-full px-5 py-3 bg-green-600 text-white text-lg font-medium rounded-lg hover:bg-green-700 transition-all"
        >
          {showPreview ? "Hide Preview" : "Show Preview"}
        </button>

        {/* Landing Page Preview */}
        {showPreview && <LandingPreview landingData={formData} />}
      </div>
    </div>
  );
};

export default LandingForm;
