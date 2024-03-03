import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import Header from './components/Header';
import Middle from "./components/Middle";
import Footer from "./components/Footer";
import Top from "./components/Top";
import StitchImage from './components/StitchImage';

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stitch/*" element={<StitchWithHeader />} />
      </Routes>
    </Router>
  );
}

function Home() {
  return (
    <>
      <Top />
      <Middle />
      <Footer />
    </>
  );
}

function StitchWithHeader() {
  return (
    <>
      <Header />
      <StitchImage />
    </>
  );
}
