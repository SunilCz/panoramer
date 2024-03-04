import { useState, useEffect } from "react";
import { ArrowUpIcon } from "@heroicons/react/24/outline";

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-10 right-10">
      {isVisible && (
        <button
          className="bg-[#53B5FF]/95 text-white px-4 py-2 rounded-full h-12 w-12 hover:bg-[#53B5FF] focus:outline-none flex items-center justify-center"
          onClick={scrollToTop}
        >
          <ArrowUpIcon strokeWidth={3} />
        </button>
      )}
    </div>
  );
}

export default ScrollToTopButton;
