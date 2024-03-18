import { useState } from "react";
import axios from "axios";
import { Toaster, toast } from "sonner";

import Artifact from "../components/Artifact";
import Download from "../components/Download";
import Layout from "../components/Layout";
import ProgressIndicator from "../components/ProgressIndicator";
import Spinner from "../components/Spinner";
import ArtifactGallery from "../components/ArtifactGallery";
import ScrollToTopButton from "../components/Scroll";

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

registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

export default function Stitch() {
  const [files, setFiles] = useState([]);
  const [finalPanorama, setFinalPanorama] = useState("/placeholder.png");
  const [finalPanoramaName, setFinalPanoramaName] = useState("");
  const [siftCorrespondences, setSiftCorrespondences] = useState("");
  const [inliersAndOutliers, setInliersAndOutliers] = useState("");
  const [panoramas, setPanoramas] = useState("");

  const [isUploading, setIsUploading] = useState(false);
  const [isClearing, setIsClearing] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);

  const [selectedArtifact, setSelectedArtifact] = useState("");
  const [artifacts, setArtifacts] = useState([]);
  const [galleryTitle, setGalleryTitle] = useState("");

  const apiEndpoint = import.meta.env.VITE_API_URL;

  const handleArtifactSelection = (artifact) => {
    setSelectedArtifact(artifact);

    switch (artifact) {
      case "siftMatches":
        setGalleryTitle("SIFT correspondences between images");
        setArtifacts([siftCorrespondences]);
        break;
      case "inliersOutliers":
        setGalleryTitle("Inliers & Outliers");
        setArtifacts([inliersAndOutliers]);
        break;
      case "panoramas":
        setGalleryTitle("Panoramas");
        setArtifacts([panoramas]);
        break;
      default:
        setGalleryTitle("");
        setArtifacts([]);
    }
  };

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

      if (response.status === 201) {
        toast.success(response.data.message);
        setFiles([]);

        setIsUploading(false);
      }
    } catch (error) {
      setIsUploading(false);
      toast.error(error.response.data.message);
      console.log("ERROR: ", error);
    }
  };

  const handleClear = async () => {
    setIsClearing(true);
    try {
      const response = await axios.delete(`${apiEndpoint}/clear-uploads`);

      if (response.status === 200) {
        toast.success(response.data.message);

        setFiles([]);
        setFinalPanorama("/placeholder.png");
        setSiftCorrespondences("");
        setInliersAndOutliers("");
        setPanoramas("");
        setFinalPanoramaName("");
        setGalleryTitle("");
        setArtifacts([]);
        setSelectedArtifact("");

        setIsClearing(false);
      }
    } catch (error) {
      toast.error(error.response.data.message);
      setIsClearing(false);
      console.log("ERROR: ", error);
    }
  };

  const handleGeneratePanorama = async () => {
    setIsGenerating(true);
    try {
      const response = await axios.get(`${apiEndpoint}/generate-panorama`);

      if (response.status === 200) {
        const [responseData] = response.data;
        const { message, results } = responseData;

        const finalPanoramaPath = results.panoramas[0];
        setFinalPanoramaName(finalPanoramaPath);
        setFinalPanorama(`${apiEndpoint}/serve-files/${finalPanoramaPath}`);

        setSiftCorrespondences(results.sift_correspondences);
        setInliersAndOutliers(results.inliers_outliers);
        setPanoramas(results.panoramas);
        toast.success(message);

        setIsGenerating(false);
      }
    } catch (error) {
      toast.error(error.response.data.message);
      setIsGenerating(false);
      console.log("ERROR: ", error);
    }
  };

  return (
    <Layout>
      <Toaster richColors />

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
                  <div className="absolute inset-0 bg-gray-800/25 bg-opacity-50 backdrop-blur-md flex justify-center items-center">
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
                  <h2>
                    {finalPanoramaName ? finalPanoramaName : "Image Name"}
                  </h2>
                </div>

                <Download imageURL={finalPanorama} />
              </div>

              <div className="flex mt-8 gap-x-4">
                {siftCorrespondences && (
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
                    onClick={() => handleArtifactSelection("siftMatches")}
                  />
                )}

                {inliersAndOutliers && (
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
                    onClick={() => handleArtifactSelection("inliersOutliers")}
                  />
                )}

                {panoramas && (
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
                    onClick={() => handleArtifactSelection("panoramas")}
                  />
                )}
              </div>

              {selectedArtifact && (
                <ArtifactGallery title={galleryTitle} artifacts={artifacts} />
              )}
            </div>
          </div>
        </section>
      </div>
      <ScrollToTopButton />
    </Layout>
  );
}
