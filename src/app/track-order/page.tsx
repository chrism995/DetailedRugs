"use client";

import { useState } from "react";
import Link from "next/link";

// Mock tracking data for demonstration
const MOCK_ORDER = {
  orderNumber: "ORD-2023-5678",
  customerName: "John Smith",
  orderDate: "2023-04-01",
  items: [
    {
      name: "Geometric Modern Rug",
      size: "8x10 ft",
      quantity: 1,
      price: 249.99,
    },
  ],
  shippingAddress: "123 Main St, Anytown, ST 12345",
  status: "shipped",
  statusDate: "2023-04-05",
  trackingNumber: "1Z999AA10123456784",
  carrier: "UPS",
  estimatedDelivery: "2023-04-08",
  events: [
    {
      date: "2023-04-05",
      status: "Shipped",
      location: "Warehouse",
      description: "Package has left our warehouse",
    },
    {
      date: "2023-04-04",
      status: "Preparing",
      location: "Warehouse",
      description: "Order is being prepared for shipment",
    },
    {
      date: "2023-04-02",
      status: "Processing",
      location: "Warehouse",
      description: "Payment confirmed, processing order",
    },
    {
      date: "2023-04-01",
      status: "Order Placed",
      location: "Online",
      description: "Thank you for your order",
    },
  ],
};

const MOCK_REQUEST = {
  requestNumber: "REQ-2023-1234",
  customerName: "Jane Doe",
  requestDate: "2023-03-15",
  type: "Custom Rug Design",
  status: "in_production",
  statusDate: "2023-03-28",
  estimatedCompletion: "2023-05-10",
  design: "Modern Geometric Pattern",
  size: "6x9 ft",
  material: "Premium Wool",
  events: [
    {
      date: "2023-03-28",
      status: "In Production",
      description: "Your custom rug is now being crafted by our artisans",
    },
    {
      date: "2023-03-22",
      status: "Design Approved",
      description: "Final design approved and sent to production",
    },
    {
      date: "2023-03-18",
      status: "Design Review",
      description: "Design team creating mockups based on your submission",
    },
    {
      date: "2023-03-15",
      status: "Request Received",
      description: "Custom rug request received and under review",
    },
  ],
};

export default function TrackPage() {
  const [trackingType, setTrackingType] = useState<"order" | "request">(
    "order"
  );
  const [formData, setFormData] = useState({
    email: "",
    orderNumber: "",
    requestNumber: "",
  });
  const [trackingResult, setTrackingResult] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Reset any previous results/errors when user types
    setTrackingResult(null);
    setError("");
  };

  const handleTrackingTypeChange = (type: "order" | "request") => {
    setTrackingType(type);
    // Reset form and results when switching tracking type
    setFormData({
      email: "",
      orderNumber: "",
      requestNumber: "",
    });
    setTrackingResult(null);
    setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      // In a real app, this would be an API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Mock tracking lookup
      if (trackingType === "order") {
        if (
          formData.orderNumber.trim() === "ORD-2023-5678" &&
          formData.email.toLowerCase().trim() === "john.smith@example.com"
        ) {
          setTrackingResult(MOCK_ORDER);
        } else {
          setError(
            "Order not found. Please check your order number and email."
          );
        }
      } else {
        if (formData.requestNumber.trim() === "REQ-2023-1234") {
          setTrackingResult(MOCK_REQUEST);
        } else {
          setError("Request not found. Please check your request number.");
        }
      }
    } catch {
      setError(
        "An error occurred while tracking your order. Please try again later."
      );
    } finally {
      setIsLoading(false);
    }
  };

  // Helper function to render the status badge with appropriate color
  const renderStatusBadge = (status: string) => {
    let statusConfig = {
      text: "Unknown",
      bgColor: "bg-gray-200",
      textColor: "text-gray-800",
    };

    switch (status) {
      case "processing":
        statusConfig = {
          text: "Processing",
          bgColor: "bg-blue-100",
          textColor: "text-blue-800",
        };
        break;
      case "shipped":
        statusConfig = {
          text: "Shipped",
          bgColor: "bg-green-100",
          textColor: "text-green-800",
        };
        break;
      case "delivered":
        statusConfig = {
          text: "Delivered",
          bgColor: "bg-green-100",
          textColor: "text-green-800",
        };
        break;
      case "cancelled":
        statusConfig = {
          text: "Cancelled",
          bgColor: "bg-red-100",
          textColor: "text-red-800",
        };
        break;
      case "in_production":
        statusConfig = {
          text: "In Production",
          bgColor: "bg-purple-100",
          textColor: "text-purple-800",
        };
        break;
      default:
        if (status.includes("design")) {
          statusConfig = {
            text: "Design Phase",
            bgColor: "bg-amber-100",
            textColor: "text-amber-800",
          };
        }
    }

    return (
      <span
        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium ${statusConfig.bgColor} ${statusConfig.textColor}`}
      >
        {statusConfig.text}
      </span>
    );
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Track Your Order
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Check the status of your order or custom rug request using your
            tracking information.
          </p>
        </div>

        {/* Tracking Form */}
        <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-6 md:p-8">
            {/* Tracking Type Selector */}
            <div className="flex rounded-md shadow-sm mb-8" role="group">
              <button
                type="button"
                onClick={() => handleTrackingTypeChange("order")}
                className={`flex-1 py-3 px-4 text-sm font-medium rounded-l-lg ${
                  trackingType === "order"
                    ? "bg-indigo-600 text-white"
                    : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
                }`}
              >
                Track Order
              </button>
              <button
                type="button"
                onClick={() => handleTrackingTypeChange("request")}
                className={`flex-1 py-3 px-4 text-sm font-medium rounded-r-lg ${
                  trackingType === "request"
                    ? "bg-indigo-600 text-white"
                    : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
                }`}
              >
                Track Custom Request
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit}>
              {/* Order Tracking Form */}
              {trackingType === "order" && (
                <>
                  <div className="mb-6">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="Enter the email used for your order"
                      required
                    />
                  </div>

                  <div className="mb-6">
                    <label
                      htmlFor="orderNumber"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Order Number
                    </label>
                    <input
                      type="text"
                      id="orderNumber"
                      name="orderNumber"
                      value={formData.orderNumber}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="Format: ORD-YYYY-XXXX"
                      required
                    />
                    <p className="mt-1 text-xs text-gray-500">
                      Your order number can be found in your order confirmation
                      email
                    </p>
                  </div>
                </>
              )}

              {/* Request Tracking Form */}
              {trackingType === "request" && (
                <div className="mb-6">
                  <label
                    htmlFor="requestNumber"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Request Number
                  </label>
                  <input
                    type="text"
                    id="requestNumber"
                    name="requestNumber"
                    value={formData.requestNumber}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Format: REQ-YYYY-XXXX"
                    required
                  />
                  <p className="mt-1 text-xs text-gray-500">
                    Your request number can be found in your custom rug request
                    confirmation email
                  </p>
                </div>
              )}

              {/* Error Message */}
              {error && (
                <div className="mb-6 p-3 bg-red-50 border-l-4 border-red-500 text-red-700">
                  <p>{error}</p>
                </div>
              )}

              {/* Submit Button */}
              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="bg-indigo-600 text-white px-6 py-2 rounded-md font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <span className="flex items-center">
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
                      Tracking...
                    </span>
                  ) : (
                    "Track"
                  )}
                </button>
              </div>
            </form>

            {/* For testing purposes */}
            <div className="mt-4 text-sm text-gray-500">
              <p>For demo purposes:</p>
              <ul className="list-disc pl-5 mt-1">
                <li>
                  Order test: <span className="font-mono">ORD-2023-5678</span>{" "}
                  with email{" "}
                  <span className="font-mono">john.smith@example.com</span>
                </li>
                <li>
                  Request test: <span className="font-mono">REQ-2023-1234</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Tracking Results */}
        {trackingResult && (
          <div className="max-w-4xl mx-auto mt-8 bg-white rounded-xl shadow-md overflow-hidden">
            {/* Order Results */}
            {trackingType === "order" && (
              <div>
                <div className="bg-indigo-600 px-6 py-4">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                    <div>
                      <h2 className="text-xl font-bold text-white">
                        Order #{trackingResult.orderNumber}
                      </h2>
                      <p className="text-indigo-100">
                        Placed on {trackingResult.orderDate}
                      </p>
                    </div>
                    <div className="mt-2 md:mt-0">
                      {renderStatusBadge(trackingResult.status)}
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  {/* Shipping Details */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">
                        Shipping Details
                      </h3>
                      <p className="text-gray-600 mb-1">
                        <span className="font-medium">Address:</span>{" "}
                        {trackingResult.shippingAddress}
                      </p>
                      {trackingResult.status === "shipped" && (
                        <>
                          <p className="text-gray-600 mb-1">
                            <span className="font-medium">Carrier:</span>{" "}
                            {trackingResult.carrier}
                          </p>
                          <p className="text-gray-600 mb-1">
                            <span className="font-medium">
                              Tracking Number:
                            </span>{" "}
                            <a
                              href="#"
                              className="text-indigo-600 hover:underline"
                            >
                              {trackingResult.trackingNumber}
                            </a>
                          </p>
                          <p className="text-gray-600">
                            <span className="font-medium">
                              Estimated Delivery:
                            </span>{" "}
                            {trackingResult.estimatedDelivery}
                          </p>
                        </>
                      )}
                    </div>

                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">
                        Order Summary
                      </h3>
                      {trackingResult.items.map((item: any, index: number) => (
                        <div key={index} className="flex justify-between mb-1">
                          <p className="text-gray-600">
                            {item.quantity} x {item.name} ({item.size})
                          </p>
                          <p className="font-medium">
                            ${item.price.toFixed(2)}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tracking Timeline */}
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-4">
                      Tracking Timeline
                    </h3>
                    <div className="relative">
                      {trackingResult.events.map(
                        (
                          event: {
                            date: string;
                            status: string;
                            location?: string;
                            description: string;
                          },
                          index: number
                        ) => (
                          <div key={index} className="mb-8 flex">
                            <div className="flex flex-col items-center mr-4">
                              <div className="flex items-center justify-center h-8 w-8 rounded-full bg-indigo-600 text-white">
                                {index === 0 ? (
                                  <svg
                                    className="w-5 h-5"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                      clipRule="evenodd"
                                    ></path>
                                  </svg>
                                ) : (
                                  <div className="h-3 w-3 rounded-full bg-white"></div>
                                )}
                              </div>
                              {index < trackingResult.events.length - 1 && (
                                <div className="h-full w-0.5 bg-indigo-200"></div>
                              )}
                            </div>
                            <div>
                              <p className="font-medium text-gray-900">
                                {event.status}
                                {event.location ? ` - ${event.location}` : ""}
                              </p>
                              <p className="text-sm text-gray-500 mb-1">
                                {event.date}
                              </p>
                              <p className="text-gray-600">
                                {event.description}
                              </p>
                            </div>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Request Results */}
            {trackingType === "request" && (
              <div>
                <div className="bg-indigo-600 px-6 py-4">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                    <div>
                      <h2 className="text-xl font-bold text-white">
                        Request #{trackingResult.requestNumber}
                      </h2>
                      <p className="text-indigo-100">
                        Submitted on {trackingResult.requestDate}
                      </p>
                    </div>
                    <div className="mt-2 md:mt-0">
                      {renderStatusBadge(trackingResult.status)}
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  {/* Request Details */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">
                        Request Details
                      </h3>
                      <p className="text-gray-600 mb-1">
                        <span className="font-medium">Type:</span>{" "}
                        {trackingResult.type}
                      </p>
                      <p className="text-gray-600 mb-1">
                        <span className="font-medium">Design:</span>{" "}
                        {trackingResult.design}
                      </p>
                      <p className="text-gray-600 mb-1">
                        <span className="font-medium">Size:</span>{" "}
                        {trackingResult.size}
                      </p>
                      <p className="text-gray-600">
                        <span className="font-medium">Material:</span>{" "}
                        {trackingResult.material}
                      </p>
                    </div>

                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">
                        Production Status
                      </h3>
                      <p className="text-gray-600 mb-1">
                        <span className="font-medium">Current Status:</span>{" "}
                        {trackingResult.status
                          .replace("_", " ")
                          .charAt(0)
                          .toUpperCase() +
                          trackingResult.status.replace("_", " ").slice(1)}
                      </p>
                      <p className="text-gray-600 mb-1">
                        <span className="font-medium">Status Updated:</span>{" "}
                        {trackingResult.statusDate}
                      </p>
                      <p className="text-gray-600">
                        <span className="font-medium">
                          Estimated Completion:
                        </span>{" "}
                        {trackingResult.estimatedCompletion}
                      </p>
                    </div>
                  </div>

                  {/* Request Timeline */}
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-4">
                      Request Timeline
                    </h3>
                    <div className="relative">
                      {trackingResult.events.map(
                        (event: any, index: number) => (
                          <div key={index} className="mb-8 flex">
                            <div className="flex flex-col items-center mr-4">
                              <div
                                className={`flex items-center justify-center h-8 w-8 rounded-full ${
                                  index === 0
                                    ? "bg-indigo-600"
                                    : "bg-indigo-200"
                                } text-white`}
                              >
                                {index === 0 ? (
                                  <svg
                                    className="w-5 h-5"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                      clipRule="evenodd"
                                    ></path>
                                  </svg>
                                ) : (
                                  <div className="h-3 w-3 rounded-full bg-white"></div>
                                )}
                              </div>
                              {index < trackingResult.events.length - 1 && (
                                <div className="h-full w-0.5 bg-indigo-200"></div>
                              )}
                            </div>
                            <div>
                              <p className="font-medium text-gray-900">
                                {event.status}
                              </p>
                              <p className="text-sm text-gray-500 mb-1">
                                {event.date}
                              </p>
                              <p className="text-gray-600">
                                {event.description}
                              </p>
                            </div>
                          </div>
                        )
                      )}
                    </div>
                  </div>

                  {/* Contact Info */}
                  <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <svg
                          className="h-5 w-5 text-blue-400"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm text-blue-700">
                          Have questions about your custom rug? Contact our
                          design team at{" "}
                          <a
                            href="mailto:design@detailedrugs.com"
                            className="font-medium underline"
                          >
                            design@detailedrugs.com
                          </a>{" "}
                          or call us at{" "}
                          <a
                            href="tel:+18005551234"
                            className="font-medium underline"
                          >
                            1-800-555-1234
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Actions */}
            <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 flex flex-wrap gap-4 justify-end">
              <Link
                href="/"
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
              >
                Return to Home
              </Link>
              {trackingType === "order" ? (
                <Link
                  href="/contact"
                  className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
                >
                  Contact Support
                </Link>
              ) : (
                <Link
                  href="/custom"
                  className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
                >
                  Update Request
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
