import React, { useState } from "react";
import axios from "axios";

function App() {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [stitchedImageSrc, setStitchedImageSrc] = useState("");
  const [matchedPointsSrc, setMatchedPointsSrc] = useState("");
  const [message, setMessage] = useState("");

  const handleFileChange = (event) => {
    const files = event.target.files;
    setSelectedFiles([...files]);
  };

  const handleUpload = async () => {
    try {
      const formData = new FormData();
      selectedFiles.forEach((file) => {
        formData.append("files[]", file);
      });

      const response = await axios.post(
        "http://localhost:5000/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        },
      );

      setMessage(response.data.message);
    } catch (error) {
      console.error("Error uploading files:", error);
    }
  };

  const handleStitch = async () => {
    try {
      const response = await axios.get("http://localhost:5000/stitch");

      const { matched_points_path, panorama_image_path, message } =
        response.data;

      setStitchedImageSrc("http://localhost:5000/" + panorama_image_path);
      setMatchedPointsSrc("http://localhost:5000/" + matched_points_path);
      setMessage(message);
    } catch (error) {
      console.error("Error stitching images: ", error);
    }
  };

  return (
    <div className="font-inter bg-gray-100 h-screen flex flex-col items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md mb-4 max-w-lg w-full">
        <h2 className="text-2xl font-semibold mb-4">Image Stitching App</h2>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Upload Images
          </label>
          <input
            type="file"
            id="fileInput"
            className="w-full p-2 border rounded"
            onChange={handleFileChange}
            multiple
          />
        </div>

        <div className="flex justify-between items-center">
          <button
            className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none"
            onClick={handleUpload}
          >
            Upload
          </button>
          <button
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-600 focus:outline-none"
            onClick={handleStitch}
          >
            Stitch
          </button>
        </div>
      </div>

      <div className="bg-white p-8 rounded shadow-md max-w-lg w-full">
        <h3 className="text-xl font-semibold mb-4">{message}</h3>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Stitched Image
          </label>
          <img
            id="mergedImage"
            src={stitchedImageSrc}
            alt="Merged Image"
            className="w-full rounded"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Matched Points
          </label>
          <img
            id="matchedPoints"
            src={matchedPointsSrc}
            alt="Matched Points"
            className="w-full rounded"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
