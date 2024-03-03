const Download = () => {
  return (
    <div className="flex items-center gap-2 xl:justify-end">
      <a
        href="#"
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-1.5 rounded-full text-sm text-gray-400 font-medium px-4 py-1.5 bg-gray-800 transition hover:bg-gray-700/60"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
          />
        </svg>

        <span>Download</span>
      </a>
    </div>
  );
};

export default Download;
