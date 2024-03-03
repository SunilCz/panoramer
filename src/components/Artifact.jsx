const Artifact = ({ title, subtitle, icon, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="flex items-center justify-between rounded-2xl bg-gray-800 px-3 py-4 transition duration-300 hover:bg-gray-800/80 cursor-pointer"
    >
      <div className="hidden sm:block relative z-0 grid h-10 w-10 place-items-center">
        {icon}
        <div className="absolute right-1/2 top-1/2 -z-10 h-10 w-10 -translate-y-1/2 translate-x-1/2 rounded-full bg-[#84278C] blur-[20px]"></div>
      </div>

      <div className="flex flex-row items-center gap-7 sm:min-w-[14rem]">
        <div className="space-y-0.5 text-left sm:text-center min-[500px]:flex-grow min-[500px]:text-left">
          <div className="text-lg font-bold text-white">{title}</div>
          <div className="text-xs font-semibold text-[#53B5FF]">{subtitle}</div>
        </div>
      </div>
    </div>
  );
};

export default Artifact;
