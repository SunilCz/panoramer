import React from 'react'

import {
  
  VariableIcon,
 
  PhotoIcon,
  WindowIcon,
} from "@heroicons/react/24/outline";

const Middle = () => {
    const features = [
        {
          name: "Algorithms",
          description:
            "Utilizes advanced algorithms for precise image alignment, minimizing distortions and seam visibility in panoramas.",
          icon: VariableIcon,
        },
        {
          name: "User Friendly Interface",
          description:
            "Intuitive user interface for easy panorama creation, catering to users of all technical skill levels.",
          icon: WindowIcon,
        },
        {
          name: "Seamless Panorama",
          description:
            "Produces panoramas with seamless transitions and exceptional visual fidelity, meeting professional standards and user expectations.",
          icon: PhotoIcon,
        },
      ];
      
  return (
    <div className="bg-white"> 
          <div className="mx-auto max-w-7xl px-6 sm:mt-20 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            What is Panoramer?
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Panoramer is a panoramic image stitching software that delivers
            seamless, professional-quality panoramas with precise alignment and
            an intuitive interface, catering to users of all skill levels.{" "}
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 sm:mt-20 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Why Panoramer?
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Panoramer provides seamless, professional-quality panoramas with
            precise alignment and an intuitive interface, ensuring ease of use
            for users of all skill levels.{" "}
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-[#53B5FF]">
                    <feature.icon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

export default Middle