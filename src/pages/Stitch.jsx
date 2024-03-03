import { useState } from "react";
import axios from "axios";

import Artifact from "../components/Artifact";
import Download from "../components/Download";
import Layout from "../components/Layout";
import ProgressIndicator from "../components/ProgressIndicator";

import {
  AdjustmentsHorizontalIcon,
  ArrowsPointingOutIcon,
  PhotoIcon,
} from "@heroicons/react/24/outline";

import { FilePond, registerPlugin } from "react-filepond";
import "filepond/dist/filepond.min.css";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import Spinner from "../components/Spinner";

registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

export default function Stitch() {
  const [files, setFiles] = useState([]);
  const [finalPanorama, setFinalPanorama] = useState("");
  const [siftCorrespondences, setSiftCorrespondences] = useState("");
  const [inliersAndOutliers, setInliersAndOutliers] = useState("");
  const [panoramas, setPanoramas] = useState("");

  const [isUploading, setIsUploading] = useState(false);
  const [isClearing, setIsClearing] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);

  const apiEndpoint = "http://127.0.0.1:5000";

  const handleUpload = async () => {
    setIsUploading(true);
    try {
      const formData = new FormData();

      files.forEach((file) => {
        formData.append("files[]", file);
      });

      const response = await axios.post(`${apiEndpoint}/upload`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("Upload response:", response.data.message);

      setFiles([]);

      setIsUploading(false);
    } catch (error) {
      console.log("ERROR: ", error);
    }
  };

  const handleClear = async () => {
    setIsClearing(true);
    try {
      const response = await axios.delete(`${apiEndpoint}/clear-uploads`);

      console.log("Clear response:", response.data.message);

      setFiles([]);
      setFinalPanorama("");
      setSiftCorrespondences("");
      setInliersAndOutliers("");

      setIsClearing(false);
    } catch (error) {
      console.log("ERROR: ", error);
    }
  };

  const handleGeneratePanorama = async () => {
    setIsGenerating(true);
    try {
      const response = await axios.get(`${apiEndpoint}/generate-panorama`);

      const [responseData, status] = response.data;
      const { message, results } = responseData;

      const finalPanoramaPath = results.panoramas[0];
      setFinalPanorama(`${apiEndpoint}/serve-files/${finalPanoramaPath}`);

      setSiftCorrespondences(results.sift_correspondences);
      setSiftCorrespondences(results.inliers_outliers);
      setPanoramas(results.panoramas);

      console.log("Generate Panorama response:", message);

      setIsGenerating(false);
    } catch (error) {
      console.log("ERROR: ", error);
    }
  };

  return (
    <Layout>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24">
        <section aria-labelledby="products-heading" className="pb-24 pt-6">
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
            <form className="hidden lg:block">
              <FilePond
                files={files}
                onupdatefiles={(fileItems) => {
                  const newFiles = fileItems.map((fileItem) => fileItem.file);
                  setFiles(newFiles);
                }}
                allowMultiple={true}
                maxFiles={10}
                name="files"
                labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
              />

              <ul
                role="list"
                className="space-y-4 pb-6 text-sm font-medium text-gray-400"
              >
                <li className="space-y-4">
                  <a
                    href="#"
                    onClick={handleUpload}
                    className="flex justify-center gap-2 items-center px-4 py-3 bg-[#53B5FF]/95 rounded-full font-medium text-gray-100 text-center"
                  >
                    {isUploading ? <Spinner /> : <span>Upload</span>}
                  </a>

                  <a
                    href="#"
                    onClick={handleGeneratePanorama}
                    className="flex justify-center gap-2 items-center px-4 py-3 bg-[#53B5FF]/95 rounded-full font-medium text-gray-100 text-center"
                  >
                    {isGenerating ? (
                      <Spinner />
                    ) : (
                      <span>Generate Panorama</span>
                    )}
                  </a>

                  <a
                    href="#"
                    onClick={handleClear}
                    className="flex justify-center gap-2 items-center px-4 py-3 bg-[#53B5FF]/95 rounded-full font-medium text-gray-100 text-center"
                  >
                    {isClearing ? <Spinner /> : <span>Clear</span>}
                  </a>
                </li>
              </ul>
            </form>

            <div className="lg:col-span-3">
              <div className="relative">
                <img
                  src={finalPanorama}
                  alt="App screenshot"
                  width={2432}
                  height={1442}
                  className="rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10"
                />
                {isGenerating && (
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
                    <ProgressIndicator />
                  </div>
                )}
              </div>

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
