const ArtifactGallery = ({ title, artifacts }) => {
  const apiEndpoint = import.meta.env.VITE_API_URL;

  return (
    <div className="mt-8">
      <h2 className="text-center text-3xl font-semibold text-gray-300">
        {title}
      </h2>

      <div className="mt-10 space-y-4">
        {artifacts.map((artifactGroup, groupIndex) => (
          <div key={groupIndex}>
            {artifactGroup.map((artifact, index) => (
              <div key={`${groupIndex}-${index}`}>
                <img
                  src={`${apiEndpoint}/serve-files/${artifact}`}
                  alt={`Artifact ${groupIndex}-${index}`}
                  className="rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10"
                />
                <p className="mt-2 mb-8 text-center text-xl text-gray-400">
                  {artifact}
                </p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArtifactGallery;
