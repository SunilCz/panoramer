import { useState } from "react";
import { Dialog } from "@headlessui/react";
import {
  Bars3Icon,
  VariableIcon,
  XMarkIcon,
  PhotoIcon,
  WindowIcon,
} from "@heroicons/react/24/outline";

const navigation = [
  { name: "Stitch Images", href: "#" },
  { name: "Examples", href: "#" },
];

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

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-white">
      <header className="absolute max-w-7xl mx-auto inset-x-0 top-0 z-50">
        <nav
          className="flex items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Panoramer</span>
              <img className="h-8 w-auto" src="/panoramer-logo.svg" alt="" />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <div className="hidden lg:flex lg:gap-x-12">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  {item.name}
                </a>
              ))}
              <a
                href="https://github.com/iambasantarai/panoramer"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 32 32"
                >
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M16 2a14 14 0 0 0-4.43 27.28c.7.13 1-.3 1-.67v-2.38c-3.89.84-4.71-1.88-4.71-1.88a3.71 3.71 0 0 0-1.62-2.05c-1.27-.86.1-.85.1-.85a2.94 2.94 0 0 1 2.14 1.45a3 3 0 0 0 4.08 1.16a2.93 2.93 0 0 1 .88-1.87c-3.1-.36-6.37-1.56-6.37-6.92a5.4 5.4 0 0 1 1.44-3.76a5 5 0 0 1 .14-3.7s1.17-.38 3.85 1.43a13.3 13.3 0 0 1 7 0c2.67-1.81 3.84-1.43 3.84-1.43a5 5 0 0 1 .14 3.7a5.4 5.4 0 0 1 1.44 3.76c0 5.38-3.27 6.56-6.39 6.91a3.33 3.33 0 0 1 .95 2.59v3.84c0 .46.25.81 1 .67A14 14 0 0 0 16 2Z"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </nav>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Panoramer</span>
                <img className="h-8 w-auto" src="/panoramer-logo.svg" alt="" />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

      <div className="relative isolate pt-14">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="py-24 sm:py-32 lg:pb-40">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                The ultimate solution for seamless image stitching
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Effortlesly merge images and achieve flawless blending
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="#"
                  className="px-8 py-2.5 rounded-md bg-[#53B5FF] text-white font-medium transition hover:opacity-90  focus-visible:outline-none focus-visible:!ring-1 focus-visible:!ring-white"
                >
                  Stitch Images
                </a>
              </div>
            </div>
            <div className="mt-16 flow-root sm:mt-24">
              <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                <img
                  src="https://tailwindui.com/img/component-images/project-app-screenshot.png"
                  alt="App screenshot"
                  width={2432}
                  height={1442}
                  className="rounded-md shadow-2xl ring-1 ring-gray-900/10"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>

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

      <div className="grid place-items-center mt-16 sm:mt-20 lg:mt-24 pb-5 pt-20 sm:pt-10">
        <div className="flex w-full max-w-[22rem] items-center gap-2">
          <div className="h-px w-full bg-current opacity-20 dark:opacity-30"></div>
          <div className="shrink-0">A final year project, by</div>
        </div>

        <div className="flex items-start justify-center gap-5 pt-5">
          <div className="h-16 w-16 shrink-0 overflow-hidden rounded-full bg-slate-800">
            <img
              src="/basanta.png"
              alt="Basanta Rai"
              className="h-full w-full object-cover transition duration-300 will-change-transform hover:scale-110"
              width="auto"
              height="auto"
            />
          </div>
          <div className="text-left">
            <div className="bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-xl font-extrabold text-transparent">
              Basanta Rai
            </div>
            <div className="pt-0.5">23473/076</div>
          </div>

          <div className="h-16 w-16 shrink-0 overflow-hidden rounded-full bg-slate-800">
            <img
              src="/robin.png"
              alt="Robin Devkota"
              className="h-full w-full object-cover transition duration-300 will-change-transform hover:scale-110"
              width="auto"
              height="auto"
            />
          </div>
          <div className="text-left">
            <div className="bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-xl font-extrabold text-transparent">
              Robin Devkota
            </div>
            <div className="pt-0.5">23498/076</div>
          </div>

          <div className="h-16 w-16 shrink-0 overflow-hidden rounded-full bg-slate-800">
            <img
              src="/sunil.png"
              alt="Sunil Chaudhary"
              className="h-full w-full object-cover transition duration-300 will-change-transform hover:scale-110"
              width="auto"
              height="auto"
            />
          </div>
          <div className="text-left">
            <div className="bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-xl font-extrabold text-transparent">
              Sunil Chaudhary
            </div>
            <div className="pt-0.5">23508/076</div>
          </div>
        </div>
        <div className="mt-6 h-px w-full max-w-[22rem] bg-current opacity-20"></div>
        <div className="pt-20 text-center text-xs">
          <p>&copy; Panoramer, All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
