import React, { useState, useEffect } from "react";

const DetailedImage = () => {
  const [imageData, setImageData] = useState([]);

  useEffect(() => {
    // Fetch the list of file paths from the server
    fetch("http://localhost:5000/serve-all-files")
      .then((response) => response.json())
      .then((data) => {
        console.log("Response data:", data);

        // Extract file names from paths
        const fileData = data.files.map((path) => {
          const fileName = path.split("\\").pop();
          return { path, fileName };
        });

        // Sort the file data array by file name
        fileData.sort((a, b) => a.fileName.localeCompare(b.fileName));

        setImageData(fileData);
      })
      .catch((error) => {
        console.error("Error fetching image paths:", error);
      });
  }, []);

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto" }}>
      <h1>All Images</h1>
      <div>
        {imageData.map((item, index) => (
          <div
            key={index}
            style={{ marginBottom: "20px", textAlign: "center" }}
          >
            <img
              src={`http://localhost:5000/serve-files/${item.fileName}`}
              alt={`Image ${index}`}
              style={{ maxWidth: "100%", borderRadius: "8px" }}
            />
            <p style={{ marginTop: "10px", fontSize: "14px", color: "#555" }}>
              {item.fileName}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DetailedImage;
