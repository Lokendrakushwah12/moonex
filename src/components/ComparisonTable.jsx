import React from "react";

const ComparisonTable = () => {
  return (
    <section className="pb-32 relative px-4 md:px-12 bg-dark">
      <h2 className="text-left PPNeueMachina text-[45px] font-bold text-[#F9D423]">
        <span className="text-white">Why </span>
        MoonEX <span className="text-white">?</span>
      </h2>
      <div className="absolute left-[20%] bottom-40 blur-[300px] select-none z-[-10] w-[32rem] h-[7rem] rounded-[100%] bg-[#EDD955]" />
      <div className="mt-8 rounded-[20px] overflow-x-auto">
        <table className="w-full bg-[#ffffff05] border-collapse text-left text-sm">
          <thead>
            <tr className="text-[16px] sm:text-[25px] text-[#F9D423]">
              <th className="sm:px-6 px-0 text-center py-6">Comparison</th>
              <th className="sm:px-6 px-0 border-x border-[#D9D9D9]/10 text-center py-6">
                Moonex
              </th>
              <th className="sm:px-6 px-0 text-center py-6">Uniswap</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#D9D9D9]/10">
            <tr>
              <td className="sm:px-6 px-0 text-center border-t border-[#d9d9d9]/10 py-7">
                Point no one
              </td>
              <td className="sm:px-6 px-0 text-center border-t border-[#d9d9d9]/10 border-x py-7 text-[#B2FFAC]">
                ✔
              </td>
              <td className="sm:px-6 px-0 text-center border-t border-[#d9d9d9]/10 py-7 text-[#FF5050]">
                ✘
              </td>
            </tr>
            <tr>
              <td className="sm:px-6 px-0 text-center py-7">Point no two</td>
              <td className="sm:px-6 px-0 text-center border-x border-[#D9D9D9]/10 py-7 text-[#B2FFAC]">
                ✔
              </td>
              <td className="sm:px-6 px-0 text-center py-7 text-[#FF5050]">✘</td>
            </tr>
            <tr>
              <td className="sm:px-6 px-0 text-center py-7">Point no three</td>
              <td className="sm:px-6 px-0 text-center border-x border-[#D9D9D9]/10 py-7 text-[#B2FFAC]">
                ✔
              </td>
              <td className="sm:px-6 px-0 text-center py-7 text-[#FF5050]">✘</td>
            </tr>
            <tr>
              <td className="sm:px-6 px-0 text-center py-7">Point no four</td>
              <td className="sm:px-6 px-0 text-center border-x border-[#D9D9D9]/10 py-7 text-[#B2FFAC]">
                ✔
              </td>
              <td className="sm:px-6 px-0 text-center py-7 text-[#FF5050]">✘</td>
            </tr>
            <tr>
              <td className="sm:px-6 px-0 text-center py-7">Point no five</td>
              <td className="sm:px-6 px-0 text-center border-x border-[#D9D9D9]/10 py-7 text-[#B2FFAC]">
                ✔
              </td>
              <td className="sm:px-6 px-0 text-center py-7 text-[#FF5050]">✘</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ComparisonTable;
