"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";
import HealthWellbeing from "./HealthWellbeing";
import GenderEquality from "./GenderEquality";
import { ThematicAreas } from "@/utils/data";
import AgencyBuilding from "./Agency";
import Financial from "./Financial";
import Workplace from "./Workplace";
import SocialProtection from "./SocialProtection";

const ThematicDesktop = () => {
  const [selectedTab, setSelectedTab] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef(null);

  const handleCardClick = (tab) => {
    setSelectedTab(tab);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleOverlayClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      closeModal();
    }
  };

  const getTabContent = () => {
    switch (selectedTab) {
      case "profile":
        return <HealthWellbeing />;
      case "genter_equality":
        return <GenderEquality />;
      case "settings":
        return <AgencyBuilding />;
      case "contacts":
        return <Financial />;
      case "workplace":
        return <Workplace />;
      case "social_protection":
        return <SocialProtection />;
      default:
        return null;
    }
  };

  useEffect(() => {
    if (isModalOpen) {
      // Disable body scroll when the modal is open
      document.body.style.overflow = "hidden";
    } else {
      // Re-enable body scroll when the modal is closed
      document.body.style.overflow = "auto";
    }

    return () => {
      // Ensure body scroll is re-enabled if the component is unmounted
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen]);

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center flex flex-col justify-center items-center">
          <p className="custom-title mt-10 lg:text-3xl text-xl">
            Thematic Areas
          </p>
          <p className="secondary-title lg:text-5xl lg:w-[50vw] text-2xl text-center mt-2 mb-10">
            Building Resilience through Workforce Wellbeing and Inclusive
            Practices
          </p>
        </div>
        <div className="grid md:grid-cols-2 border border-gray-300 lg:mt-10">
          {ThematicAreas.map((card, index) => (
            <div
              key={index}
              className={`relative flex flex-col bg-white overflow-hidden lg:p-10 p-3 group 
              ${
                index < ThematicAreas.length - 2
                  ? "border-b border-gray-300"
                  : ""
              }
              ${index % 2 === 0 ? "md:border-r border-gray-300" : ""}`}
              onClick={() => handleCardClick(card.tab)} // Open modal on card click
            >
              {/* Background Effect */}
              <div className="absolute inset-0 bg-[#E8E8E8] transform scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100 z-0"></div>
              <div className="relative z-10">
                <div className="relative overflow-hidden">
                  <Image
                    width={400}
                    height={400}
                    src={card.image}
                    alt={card.title}
                    className="h-80 object-cover w-full transform transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="pt-4 text-left">
                  <h3 className="text-lg font-semibold text-gray-900 flex items-center transition-colors duration-300">
                    {card.title}
                    <span className="ml-2 transform transition-transform duration-500 group-hover:scale-150">
                      <FiArrowRight className="text-[#E82B52] text-[20px]" />
                    </span>
                  </h3>
                  <p className="text-gray-600 mt-2 transition-colors duration-300">
                    {card.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4"
          onClick={handleOverlayClick}
        >
          <div
            ref={modalRef}
            className="bg-white lg:p-10 p-3 rounded-lg shadow-lg max-w-4xl relative overflow-auto max-h-[80vh]"
          >
            <button
              className="absolute top-2 right-0 text-white p-1 bg-black rounded-full"
              onClick={closeModal}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div className="overflow-y-auto max-h-[80vh]">
              {getTabContent()}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ThematicDesktop;
