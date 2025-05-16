<<<<<<< HEAD
"use client";

import { FaLocationArrow } from "react-icons/fa6";
import Image from "next/image";

import { project } from "@/data";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

const RecentProjects = () => {
  return (
    <div className="py-10 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8">
      <h1 className="heading text-center text-2xl sm:text-3xl md:text-4xl">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>

      <div className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-12 lg:gap-16 mt-6 sm:mt-8 md:mt-10">
        {project.map((item) => (
          <CardContainer key={item.id} className="inter-var">
            <CardBody className="bg-gray-50 dark:bg-black border rounded-xl p-4 sm:p-5 md:p-6 w-full sm:w-[280px] md:w-[320px] lg:w-[360px] flex flex-col justify-between hover:shadow-lg dark:hover:shadow-emerald-500/20">
              {/* Title */}
              <CardItem
                translateZ="50"
                className="text-base sm:text-lg font-semibold text-neutral-700 dark:text-white mb-1"
              >
                {item.title}
              </CardItem>

              {/* Description */}
              <CardItem
                as="p"
                translateZ="60"
                className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-300 mb-2 sm:mb-3"
              >
                {item.des}
              </CardItem>

              {/* Image */}
              <CardItem translateZ="100" className="mb-3 sm:mb-4">
                <Image
                  src={item.img || "/placeholder.svg"}
                  alt={item.title}
                  width={1000}
                  height={1000}
                  className="rounded-xl h-36 sm:h-40 md:h-48 w-full object-cover"
                />
              </CardItem>

              {/* Icons + Button */}
              <div className="flex justify-between items-center mt-auto pt-2">
                <div className="flex gap-1 sm:gap-2">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/20 rounded-full bg-black w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 flex justify-center items-center"
                    >
                      <img
                        src={icon || "/placeholder.svg"}
                        alt={`icon-${index}`}
                        className="p-1 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 object-contain"
                      />
                    </div>
                  ))}
                </div>

                <CardItem
                  translateZ={20}
                  as="a"
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 sm:px-4 py-1 sm:py-1.5 rounded-md text-xs bg-black text-white dark:bg-white dark:text-black font-medium flex items-center gap-1 hover:bg-gray-800 dark:hover:bg-gray-200 transition"
                >
                  Live <FaLocationArrow className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
=======
"use client";

import { FaLocationArrow } from "react-icons/fa6";
import Image from "next/image";

import { project } from "@/data";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

const RecentProjects = () => {
  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>

      <div className="flex flex-wrap justify-center p-4 gap-16 mt-10">
        {project.map((item) => (
          <CardContainer key={item.id} className="inter-var">
            <CardBody className="bg-gray-50 dark:bg-black border rounded-xl p-6 w-[300px] md:w-[360px] flex flex-col justify-between hover:shadow-lg dark:hover:shadow-emerald-500/20">
              {/* Title */}
              <CardItem
                translateZ="50"
                className="text-lg font-semibold text-neutral-700 dark:text-white mb-1"
              >
                {item.title}
              </CardItem>

              {/* Description */}
              <CardItem
                as="p"
                translateZ="60"
                className="text-sm text-neutral-500 dark:text-neutral-300 mb-3"
              >
                {item.des}
              </CardItem>

              {/* Image */}
              <CardItem translateZ="100" className="mb-4">
                <Image
                  src={item.img || "/placeholder.svg"}
                  alt={item.title}
                  width={1000}
                  height={1000}
                  className="rounded-xl h-48 w-full object-cover"
                />
              </CardItem>

              {/* Icons + Button */}
              <div className="flex justify-between items-center mt-auto pt-2">
                <div className="flex gap-2">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/20 rounded-full bg-black w-8 h-8 flex justify-center items-center"
                    >
                      <img
                        src={icon}
                        alt={`icon-${index}`}
                        className="p-1 w-6 h-6 object-contain"
                      />
                    </div>
                  ))}
                </div>

                <CardItem
                  translateZ={20}
                  as="a"
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-1.5 rounded-md text-xs bg-black text-white dark:bg-white dark:text-black font-medium flex items-center gap-1 hover:bg-gray-800 dark:hover:bg-gray-200 transition"
                >
                  Live <FaLocationArrow className="w-3 h-3" />
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
>>>>>>> b98f8b34bc329a4c2f075154c50e90d0dcfd2b6a
