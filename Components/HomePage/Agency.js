import React from "react";
import { AgencyData } from "@/utils/data";
import Image from "next/image";

const Agency = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center container mx-auto ">
        <div>
          <Image
            src="/HomePage/ThematicAreas/img-3.png"
            width={600}
            height={300}
            alt="thematic image"
            className=""
          />
        </div>
        <div className="bg-black text-white text-center w-96">
          <p>title</p>
          <p>description</p>
        </div>
      </div>

      <div className="overflow-y-auto h-[calc(100vh-300px)] mt-10">
        <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
          {AgencyData.sections.map((section, index) => (
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

export default Agency;
