import React from "react";

const Footer = () => {
  return (
    <footer className="px-24 bg-[#051422] py-12">
      <div className="flex md:flex-row flex-col gap-2 justify-between items-center">
        <img className="w-[150px]" src="/assets/image.png" alt="footer-logo" />
        <ul className="flex gap-6 text-[18px]">
          {["About Us", "Roadmap", "FAQs"].map((item) => (
            <li
              key={item}
              className="transition duration-300 hover:text-[#F9D423] cursor-pointer"
            >
              {item}
            </li>
          ))}
        </ul>
        <div className="flex flex-col gap-4 md:pt-0 pt-4 justify-center items-center">
          <div className="text-[30px] font-bold">Contact Us</div>
          <div className="flex justify-center items-center gap-4">
            <svg
              className="cursor-pointer"
              width="24"
              height="24"
              viewBox="0 0 31 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_294_690)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M31 15.5C31 24.0604 24.0604 31 15.5 31C6.93959 31 0 24.0604 0 15.5C0 6.93959 6.93959 0 15.5 0C24.0604 0 31 6.93959 31 15.5ZM16.0554 11.4428C14.5478 12.0698 11.5348 13.3677 7.01619 15.3364C6.28245 15.6282 5.89808 15.9136 5.86309 16.1927C5.80396 16.6644 6.39467 16.8502 7.19906 17.1031C7.30848 17.1375 7.42186 17.1732 7.53809 17.211C8.32949 17.4682 9.39407 17.7692 9.9475 17.7811C10.4495 17.792 11.0098 17.585 11.6284 17.1602C15.8502 14.3104 18.0296 12.8699 18.1664 12.8389C18.2629 12.817 18.3967 12.7894 18.4873 12.87C18.578 12.9505 18.569 13.1031 18.5594 13.144C18.5009 13.3935 16.1822 15.5492 14.9822 16.6648C14.6081 17.0126 14.3428 17.2593 14.2885 17.3156C14.167 17.4418 14.0432 17.5612 13.9241 17.6759C13.1889 18.3847 12.6376 18.9162 13.9547 19.7842C14.5876 20.2013 15.0941 20.5462 15.5994 20.8903C16.1512 21.2661 16.7016 21.6409 17.4137 22.1077C17.5952 22.2267 17.7685 22.3502 17.9372 22.4705C18.5794 22.9283 19.1564 23.3397 19.8692 23.2741C20.2834 23.236 20.7112 22.8465 20.9285 21.685C21.4419 18.9399 22.4513 12.9922 22.6845 10.5413C22.705 10.3265 22.6793 10.0517 22.6586 9.93107C22.638 9.81044 22.5948 9.63856 22.438 9.51132C22.2523 9.36063 21.9656 9.32885 21.8374 9.33111C21.2544 9.34138 20.36 9.65239 16.0554 11.4428Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_294_690">
                  <rect width="31" height="31" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <svg
              className="cursor-pointer"
              width="31"
              height="31"
              viewBox="0 0 31 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.8141 3.80672C19.1391 5.17186 20.3763 6.18882 21.8536 6.18882C23.5783 6.18882 24.9766 4.80337 24.9766 3.09441C24.9766 1.38545 23.5783 0 21.8536 0C20.3455 0 19.0878 1.05903 18.795 2.46769C16.2694 2.73608 14.2972 4.8585 14.2972 7.43064C14.2972 7.43645 14.2972 7.4408 14.2972 7.4466C11.5505 7.56121 9.04246 8.3359 7.05124 9.55887C6.31186 8.99163 5.3836 8.65361 4.37628 8.65361C1.959 8.65361 0 10.5947 0 12.9898C0 14.7278 1.03075 16.225 2.51977 16.917C2.66471 21.951 8.20059 26 15.0102 26C21.8199 26 27.3631 21.9467 27.5007 16.9083C28.978 16.2119 30 14.7191 30 12.9913C30 10.5961 28.041 8.65506 25.6237 8.65506C24.6208 8.65506 23.6969 8.99018 22.959 9.55306C20.9502 8.32139 18.4143 7.5467 15.6398 7.4437C15.6398 7.43935 15.6398 7.43645 15.6398 7.43209C15.6398 5.58967 17.022 4.0606 18.8141 3.80962V3.80672ZM6.87555 15.7419C6.94876 14.1693 8.00293 12.9623 9.2284 12.9623C10.4539 12.9623 11.3909 14.2375 11.3177 15.8101C11.2445 17.3827 10.3294 17.9542 9.10249 17.9542C7.87555 17.9542 6.80234 17.3145 6.87555 15.7419ZM20.7936 12.9623C22.0205 12.9623 23.0747 14.1693 23.1464 15.7419C23.2196 17.3145 22.145 17.9542 20.9195 17.9542C19.694 17.9542 18.7775 17.3841 18.7042 15.8101C18.631 14.2375 19.5666 12.9623 20.7936 12.9623ZM19.3353 19.3803C19.5652 19.4035 19.7116 19.64 19.6223 19.8518C18.8682 21.6377 17.0878 22.8925 15.0102 22.8925C12.9327 22.8925 11.1537 21.6377 10.3982 19.8518C10.3089 19.64 10.4553 19.4035 10.6852 19.3803C12.0322 19.2454 13.489 19.1714 15.0102 19.1714C16.5315 19.1714 17.9868 19.2454 19.3353 19.3803Z"
                fill="white"
              />
            </svg>
            <svg
              className="cursor-pointer"
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23.8332 4.34272C22.8901 4.99522 21.8459 5.49428 20.7407 5.82068C20.1476 5.15174 19.3593 4.67762 18.4825 4.46243C17.6057 4.24724 16.6827 4.30137 15.8383 4.6175C14.9938 4.93363 14.2688 5.4965 13.7611 6.22998C13.2535 6.96347 12.9877 7.83218 12.9998 8.71863V9.68462C11.2691 9.72864 9.55412 9.35214 8.00765 8.58866C6.46118 7.82517 5.13121 6.69841 4.1362 5.30871C4.1362 5.30871 0.196807 14.0026 9.06044 17.8665C7.03218 19.2169 4.61598 19.894 2.1665 19.7985C11.0301 24.6284 21.8635 19.7985 21.8635 8.68965C21.8626 8.42058 21.8362 8.15218 21.7847 7.88789C22.7898 6.91562 23.4991 5.68806 23.8332 4.34272Z"
                stroke="#EEF4FF"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;