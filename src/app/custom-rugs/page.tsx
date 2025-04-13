"use client";

import { useState } from "react";
import Link from "next/link";

export default function CustomRugPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    width: "",
    length: "",
    material: "wool",
    additionalNotes: "",
  });

  const [file, setFile] = useState<File | null>(null);
  const [fileError, setFileError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const materials = [
    {
      id: "wool",
      name: "Premium Wool",
      description: "Soft, durable, and naturally stain-resistant",
    },
    {
      id: "cotton",
      name: "Pure Cotton",
      description: "Lightweight and perfect for layering",
    },
    {
      id: "silk",
      name: "Luxurious Silk",
      description: "Elegant with a distinctive sheen",
    },
    {
      id: "synthetic",
      name: "Synthetic Blend",
      description: "Durable and more affordable option",
    },
  ];

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0] || null;

    if (!selectedFile) {
      setFile(null);
      return;
    }

    // Check if the file is a PDF
    if (selectedFile.type !== "application/pdf") {
      setFileError("Please upload a PDF file");
      setFile(null);
      return;
    }

    // Check if the file size is less than 10MB
    if (selectedFile.size > 10 * 1024 * 1024) {
      setFileError("File size should be less than 10MB");
      setFile(null);
      return;
    }

    setFileError("");
    setFile(selectedFile);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form
    if (!file) {
      setFileError("Please upload a design file (PDF)");
      return;
    }

    try {
      setIsSubmitting(true);
      setSubmitError("");

      // Here you would typically send the form data and file to your server
      // For example using FormData API

      const formPayload = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        formPayload.append(key, value.toString());
      });
      if (file) {
        formPayload.append("designFile", file);
      }

      // Mock API call - replace with actual API endpoint
      // const response = await fetch('/api/custom-rug-request', {
      //   method: 'POST',
      //   body: formPayload
      // });

      // if (!response.ok) throw new Error("Failed to submit request");

      // Simulating API success after 1 second
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setSubmitSuccess(true);
      // Reset form after successful submission
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        width: "",
        length: "",
        material: "wool",
        additionalNotes: "",
      });
      setFile(null);
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitError(
        "There was a problem submitting your request. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen pb-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Information Section */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white rounded-xl shadow p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Create Your Dream Rug
              </h2>
              <p className="text-gray-600">
                Our expert artisans will bring your vision to life with
                meticulous craftsmanship and premium materials. Simply upload
                your design and provide the details, and we&apos;ll handle the
                rest.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                How It Works
              </h3>
              <ol className="space-y-4 text-gray-600">
                <li className="flex">
                  <div className="flex-shrink-0 flex items-center justify-center h-8 w-8 rounded-full bg-indigo-100 text-indigo-600 font-bold text-lg mr-3">
                    1
                  </div>
                  <div>
                    <p>
                      <strong>Upload Your Design</strong> - Provide a PDF file
                      containing your rug design
                    </p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex-shrink-0 flex items-center justify-center h-8 w-8 rounded-full bg-indigo-100 text-indigo-600 font-bold text-lg mr-3">
                    2
                  </div>
                  <div>
                    <p>
                      <strong>Consultation</strong> - Our design team will
                      review your request and contact you within 2 business days
                    </p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex-shrink-0 flex items-center justify-center h-8 w-8 rounded-full bg-indigo-100 text-indigo-600 font-bold text-lg mr-3">
                    3
                  </div>
                  <div>
                    <p>
                      <strong>Production</strong> - Once details are confirmed,
                      our artisans begin crafting your custom rug
                    </p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex-shrink-0 flex items-center justify-center h-8 w-8 rounded-full bg-indigo-100 text-indigo-600 font-bold text-lg mr-3">
                    4
                  </div>
                  <div>
                    <p>
                      <strong>Delivery</strong> - Your finished rug will be
                      delivered to your doorstep
                    </p>
                  </div>
                </li>
              </ol>
            </div>

            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Design Tips
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Provide clear, high-resolution design files</li>
                <li>• Include color codes or references if possible</li>
                <li>
                  • Consider the scale of patterns relative to your rug size
                </li>
                <li>• For complex designs, include multiple views or angles</li>
              </ul>
              <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-800">
                  <strong>Need design help?</strong> Our team can assist you in
                  refining or creating a design from scratch. Just mention this
                  in the additional notes section.
                </p>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="lg:col-span-7">
            {submitSuccess ? (
              <div className="bg-white rounded-xl shadow p-8 text-center">
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-green-100 text-green-600 mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Request Submitted!
                </h2>
                <p className="text-gray-600 mb-6">
                  Thank you for your custom rug request. Our team will review
                  your design and contact you within 2 business days to discuss
                  the details and provide a quote.
                </p>
                <div className="space-x-4">
                  <button
                    onClick={() => setSubmitSuccess(false)}
                    className="px-6 py-2 border border-indigo-600 text-indigo-600 rounded-md hover:bg-indigo-50"
                  >
                    Submit Another Request
                  </button>
                  <Link
                    href="/"
                    className="px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
                  >
                    Return to Home
                  </Link>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-xl shadow p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Custom Rug Request Form
                </h2>

                {submitError && (
                  <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700">
                    <p>{submitError}</p>
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  {/* Personal Information */}
                  <div className="space-y-6">
                    <h3 className="text-lg font-medium text-gray-900">
                      Personal Information
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="firstName"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          First Name*
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          required
                          className="w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-500"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="lastName"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Last Name*
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          required
                          className="w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-500"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Email Address*
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-500"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Phone Number*
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          className="w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-500"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-8 border-t border-gray-200">
                    <h3 className="text-lg font-medium text-gray-900 mb-6">
                      Rug Specifications
                    </h3>

                    {/* Size */}
                    <div className="mb-6">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Rug Size (in feet)*
                      </label>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <div className="flex items-center">
                            <input
                              type="number"
                              id="width"
                              name="width"
                              value={formData.width}
                              onChange={handleInputChange}
                              required
                              min="1"
                              step="0.1"
                              placeholder="Width"
                              className="w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-500"
                            />
                            <span className="ml-2 text-gray-500">ft</span>
                          </div>
                        </div>
                        <div>
                          <div className="flex items-center">
                            <input
                              type="number"
                              id="length"
                              name="length"
                              value={formData.length}
                              onChange={handleInputChange}
                              required
                              min="1"
                              step="0.1"
                              placeholder="Length"
                              className="w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-500"
                            />
                            <span className="ml-2 text-gray-500">ft</span>
                          </div>
                        </div>
                      </div>
                      <p className="mt-2 text-sm text-gray-500">
                        Standard sizes range from 2x3 ft to 12x15 ft
                      </p>
                    </div>

                    {/* Material Selection */}
                    <div className="mb-6">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Preferred Material*
                      </label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {materials.map((material) => (
                          <div
                            key={material.id}
                            className={`border rounded-md p-4 cursor-pointer transition ${
                              formData.material === material.id
                                ? "border-indigo-500 bg-indigo-50"
                                : "border-gray-300 hover:border-gray-400"
                            }`}
                            onClick={() =>
                              setFormData((prev) => ({
                                ...prev,
                                material: material.id,
                              }))
                            }
                          >
                            <div className="flex items-start">
                              <div className="flex h-5 items-center">
                                <input
                                  id={`material-${material.id}`}
                                  name="material"
                                  type="radio"
                                  value={material.id}
                                  checked={formData.material === material.id}
                                  onChange={handleInputChange}
                                  className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                                />
                              </div>
                              <div className="ml-3 text-sm">
                                <label
                                  htmlFor={`material-${material.id}`}
                                  className="font-medium text-gray-800 block"
                                >
                                  {material.name}
                                </label>
                                <p className="text-gray-500">
                                  {material.description}
                                </p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Design Upload */}
                    <div className="mb-6">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Upload Design (PDF)*
                      </label>
                      <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-dashed rounded-md border-gray-300 hover:border-gray-400 transition">
                        <div className="space-y-2 text-center">
                          <svg
                            className="mx-auto h-12 w-12 text-gray-400"
                            stroke="currentColor"
                            fill="none"
                            viewBox="0 0 48 48"
                          >
                            <path
                              d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <div className="flex text-sm text-gray-600">
                            <label
                              htmlFor="design-file"
                              className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none"
                            >
                              <span>Upload a file</span>
                              <input
                                id="design-file"
                                name="design-file"
                                type="file"
                                accept=".pdf"
                                onChange={handleFileChange}
                                className="sr-only"
                              />
                            </label>
                            <p className="pl-1">or drag and drop</p>
                          </div>
                          <p className="text-xs text-gray-500">
                            PDF up to 10MB
                          </p>

                          {file && (
                            <div className="mt-2 p-2 bg-indigo-50 rounded-md flex items-center">
                              <svg
                                className="h-5 w-5 text-indigo-500 mr-2"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              <span className="text-sm font-medium text-indigo-700 truncate max-w-xs">
                                {file.name}
                              </span>
                            </div>
                          )}

                          {fileError && (
                            <p className="text-xs text-red-500 mt-2">
                              {fileError}
                            </p>
                          )}
                        </div>
                      </div>
                      <p className="mt-2 text-sm text-gray-500">
                        Please provide your design as a PDF file. The clearer
                        your design, the better we can bring it to life.
                      </p>
                    </div>

                    {/* Additional Notes */}
                    <div className="mb-8">
                      <label
                        htmlFor="additionalNotes"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Additional Notes
                      </label>
                      <textarea
                        id="additionalNotes"
                        name="additionalNotes"
                        value={formData.additionalNotes}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-500"
                        placeholder="Any special requirements, color preferences, or questions you may have..."
                      ></textarea>
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-end">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="inline-flex justify-center py-3 px-8 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <div className="flex items-center">
                            <svg
                              className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              ></circle>
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              ></path>
                            </svg>
                            Submitting...
                          </div>
                        ) : (
                          "Submit Request"
                        )}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
