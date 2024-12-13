import React from "react";
import Image from "next/image";
import { GenderEqualityData } from "@/utils/data";

const HealthWellbeing = () => {
  return (
    <>
      <div className="flex justify-center">
        <Image
          src="/HomePage/ThematicAreas/img-2.png"
          width={600}
          height={300}
          alt="thematic image"
          className="w-[900px]"
        />
      </div>

      <div className="overflow-y-auto h-[calc(100vh-300px)] mt-10">
        <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
          {GenderEqualityData.sections.map((section, index) => (
            <div key={index} className="flex items-start space-x-4">
              {/* Icon */}
              <Image
                width={400}
                height={400}
                src={section.icon}
                alt={section.title}
                className="w-12 h-12"
              />
              {/* Content */}
              <div>
                <h4 className="font-semibold text-lg">{section.title}</h4>
                <p className="text-gray-600 text-sm">{section.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HealthWellbeing;
