import Artifact from "../components/Artifact";
import Download from "../components/Download";
import Layout from "../components/Layout";

import {
  AdjustmentsHorizontalIcon,
  ArrowsPointingOutIcon,
  PhotoIcon,
} from "@heroicons/react/24/outline";

export default function Stitch() {
  return (
    <Layout>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24">
        <section aria-labelledby="products-heading" className="pb-24 pt-6">
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
            <form className="hidden lg:block">
              <ul
                role="list"
                className="space-y-4 pb-6 text-sm font-medium text-gray-400"
              >
                <li className="space-y-4">
                  <a
                    href="#"
                    className="flex justify-center gap-2 items-center px-4 py-3 bg-[#53B5FF]/95 rounded-full font-medium text-gray-100 text-center"
                  >
                    <span>Clear</span>
                  </a>
                  <a
                    href="#"
                    className="flex justify-center gap-2 items-center px-4 py-3 bg-[#53B5FF]/95 rounded-full font-medium text-gray-100 text-center"
                  >
                    <span>Upload</span>
                  </a>
                  <a
                    href="#"
                    className="flex justify-center gap-2 items-center px-4 py-3 bg-[#53B5FF]/95 rounded-full font-medium text-gray-100 text-center"
                  >
                    <span>Generate Panorama</span>
                  </a>
                </li>
              </ul>
            </form>

            <div className="lg:col-span-3">
              <img
                src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
                alt="App screenshot"
                width={2432}
                height={1442}
                className="rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10"
              />

              <div className="flex items-center mt-6 justify-between">
                <div className="flex items-center gap-2.5 text font-medium text-gray-400">
                  <svg
                    className="w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 16 16"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M1.667 4.667h12.666m-3.466-3 1.8 3M7 1.333l2 3.334m-5.333-3 1.666 3M5 11.333a.333.333 0 1 1-.667 0m.667 0a.333.333 0 0 0-.667 0m.667 0h-.667m2.334 3.334h2.666c1.867 0 2.8 0 3.514-.364a3.333 3.333 0 0 0 1.456-1.456c.364-.713.364-1.647.364-3.514V6.667c0-1.867 0-2.8-.364-3.514a3.333 3.333 0 0 0-1.456-1.456c-.713-.364-1.647-.364-3.514-.364H6.667c-1.867 0-2.8 0-3.514.364-.627.32-1.137.83-1.456 1.456-.364.713-.364 1.647-.364 3.514v2.666c0 1.867 0 2.8.364 3.514.32.627.83 1.137 1.456 1.456.713.364 1.647.364 3.514.364Z"
                    ></path>
                  </svg>
                  <h2>Image Name</h2>
                </div>

                <Download />
              </div>

              <div className="flex mt-8 gap-x-4">
                <Artifact
                  title={"SIFT matches"}
                  subtitle={"View sift correspondences"}
                  icon={
                    <AdjustmentsHorizontalIcon
                      height={42}
                      width={42}
                      className="text-gray-200"
                    />
                  }
                />

                <Artifact
                  title={"Inliers & Outliers"}
                  subtitle={"View inliers & outliers"}
                  icon={
                    <ArrowsPointingOutIcon
                      height={42}
                      width={42}
                      className="text-gray-200"
                    />
                  }
                />

                <Artifact
                  title={"Panoramas"}
                  subtitle={"View step wise panorama creation"}
                  icon={
                    <PhotoIcon
                      height={42}
                      width={42}
                      className="text-gray-200"
                    />
                  }
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
