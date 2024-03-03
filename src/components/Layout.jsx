import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-900 text-[#545D82]">
      <Header />
      {children}
    </div>
  );
};

export default Layout;
