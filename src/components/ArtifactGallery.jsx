const ArtifactGallery = ({ title, artifacts }) => {
  console.log(artifacts);
  const apiEndpoint = "http://127.0.0.1:5000";

  return (
    <div className="mt-8">
      <h2 className="text-center text-3xl font-semibold text-gray-300">
        {title}
      </h2>

      <div className="mt-10 space-y-4">
        {artifacts.map((artifact, index) => (
          <div key={index}>
            <img
              key={index}
              src={`${apiEndpoint}/serve-files/${artifact}`}
              alt={`Artifact ${index}`}
              className="rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10"
            />
            <p className="text-center text-xl text-gray-400">{artifact}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArtifactGallery;
