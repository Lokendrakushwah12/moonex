import React from "react";

const Hero = () => {
  return (
    <section className="text-center relative py-20 bg-gradient-to-b from-dark to-gray-900">
      <img
        className="absolute -top-32 left-0"
        src="/assets/Bg-Grad-1.svg"
        alt="bg"
        draggable="false"
      />
      <img
        className="absolute -top-32 z-[-10] left-0"
        src="/assets/Circles.svg"
        alt="bg"
        draggable="false"
      />
      <div className="absolute right-12 top-40 blur-[400px] select-none z-[-10] w-[32rem] h-[12rem] rounded-[100%] bg-[#EDD955]" />
      <div className="absolute left-12 top-40 blur-[400px] select-none z-[-10] w-[32rem] h-[12rem] rounded-[100%] bg-[#EDD955]" />
      <svg
        className="absolute z-[-10] left-32 top-12"
        width="61"
        height="60"
        viewBox="0 0 61 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M30.5 0L32.8344 24.4567L52.0668 8.7868L36.1357 27.7039L61 30L36.1357 32.2961L52.0668 51.2132L32.8344 35.5433L30.5 60L28.1656 35.5433L8.93324 51.2132L24.8643 32.2961L0 30L24.8643 27.7039L8.93324 8.7868L28.1656 24.4567L30.5 0Z"
          fill="white"
        />
      </svg>
      <svg
        className="absolute z-[-10] right-32 bottom-[10%] sm:bottom-[30%]"
        width="61"
        height="60"
        viewBox="0 0 61 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        >
        <path
          d="M30.5 0L32.8344 24.4567L52.0668 8.7868L36.1357 27.7039L61 30L36.1357 32.2961L52.0668 51.2132L32.8344 35.5433L30.5 60L28.1656 35.5433L8.93324 51.2132L24.8643 32.2961L0 30L24.8643 27.7039L8.93324 8.7868L28.1656 24.4567L30.5 0Z"
          fill="white"
          />
      </svg>
      <svg
      className="absolute z-[-10] right-[20%] top-[0%]"
        width="54"
        height="46"
        viewBox="0 0 54 46"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M40.4708 0C34.0714 10.8963 30.5357 16.33 26.9708 16.33C23.4058 16.33 19.8701 10.8963 13.5 0C19.8701 10.8963 22.9091 16.6463 21.1266 19.665C19.3442 22.6837 12.7695 23 0 23C13.237 23 19.8117 23.3162 21.3019 26.6512C22.7045 29.7562 19.6656 35.4775 13.5 46C19.8993 35.1037 23.4351 29.67 27 29.67C30.5649 29.67 34.1006 35.1037 40.5 46C33.7208 34.4137 30.7403 28.6637 33.2532 25.7887C35.474 23.2587 42.0195 23 54 23C40.5 23 33.9253 22.655 32.6104 19.1187C31.4123 15.9562 34.4513 10.2638 40.4708 0Z"
          fill="white"
        />
      </svg>

      <div className="flex flex-col justify-center pt-12 items-start z-10">
        <div className="flex size-full justify-between px-4 md:px-12 py-12">
          <div className="size-full flex justify-start flex-col items-start">
            <h1 className="md:text-[75px] text-[50px] text-left leading-[100%] PPNeueMachina font-extrabold text-white">
              Trusted Multi-Chain <br />
              <span className="text-[#F9D423]">DEX </span>
              Platform
            </h1>
            <p className="mt-4 text-[25px] text-left text-[#9E9E9E]">
              Trade, earn, and own crypto on the all-in-one multi-chain DEX
            </p>
            <div className="flex justify-center gap-4 mt-8">
            <button className="bg-gradient-to-r from-[#E4B40D] to-[#FFE68FD6] text-[#111] font-[500] py-3 px-4 rounded-full hover:bg-[#FFE68F] transition-colors duration-200">
                Connect Wallet
              </button>
              <button className="border-[#E4B40D] border-2 text-[#F9D423] font-[500] py-3 px-4 rounded-full hover:border-[#ffe278] hover:text-[#ffe278] transition-colors duration-200">
                Trade Crypto
              </button>
            </div>
          </div>
          <img
            className="sm:translate-y-[-500px] -translate-y-[60%] sm:translate-x-0 translate-x-1/4 z-[-10] md:z-[10] right-12 top-40 md:relative absolute"
            src="/assets/Bg-Grad-2.svg"
            alt="bg"
            draggable="false"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
