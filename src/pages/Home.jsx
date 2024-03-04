import Footer from "../components/Footer";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";
import ScrollToTopButton from "../components/Scroll";

import {
  VariableIcon,
  PhotoIcon,
  WindowIcon,
} from "@heroicons/react/24/outline";

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

const Home = () => {
  return (
    <Layout>
      <div className="relative isolate pt-14">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="py-24 sm:py-32 lg:pb-40">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                The ultimate solution for seamless image stitching
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Effortlesly merge images and achieve flawless blending
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link
                  to="/stitch-images"
                  className="rounded-md bg-[#53B5FF]/95 px-8 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#53B5FF] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
                >
                  Try Panoramer
                </Link>
              </div>
            </div>
            <img
              src="/ui-for-image-stitching.png"
              alt="App screenshot"
              width={2432}
              height={1442}
              className="mt-16 rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10 sm:mt-24"
            />
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-6 sm:mt-20 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-200 sm:text-4xl">
            What is Panoramer?
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-400">
            Panoramer is a panoramic image stitching web application that
            delivers seamless, professional-quality panoramas with precise
            alignment and an intuitive interface, catering to users of all skill
            levels.{" "}
          </p>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-6 sm:mt-24 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-200 sm:text-4xl">
            Why Panoramer?
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-400">
            Panoramer provides seamless, professional-quality panoramas with
            precise alignment and an intuitive interface, ensuring ease of use
            for users of all skill levels.{" "}
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-300">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-[#53B5FF]">
                    <feature.icon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-400">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
      <Footer />
      <ScrollToTopButton />
    </Layout>
  );
};

export default Home;
