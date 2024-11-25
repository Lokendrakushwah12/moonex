import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ComparisonTable from "./components/ComparisonTable";
import Features from "./components/Features";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="bg-dark overflow-hidden text-white">
      <Navbar />
      <Hero />
      <ComparisonTable />
      <Features />
      <FAQ />
      <Footer />
    </div>
  );
};

export default App;
