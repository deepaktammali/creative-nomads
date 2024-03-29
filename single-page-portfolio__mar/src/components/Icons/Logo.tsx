import { SVGProps } from "react";

const Logo = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="55"
      height="53"
      viewBox="0 0 55 53"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect
        y="3.28168"
        width="49.4366"
        height="49.4366"
        rx="24.7183"
        fill="url(#paint0_linear_7_26)"
      />
      <circle
        cx="29.0986"
        cy="25.0986"
        r="23.0986"
        fill="#FCF4F5"
        stroke="url(#paint1_linear_7_26)"
        stroke-width="4"
      />
      <path
        d="M23.6965 34.297C21.6805 34.297 20.1865 33.829 19.2145 32.893C18.2425 31.957 17.7565 30.544 17.7565 28.654V24.253H16.8385C15.6325 24.253 15.0295 23.659 15.0295 22.471C15.0295 21.301 15.6325 20.716 16.8385 20.716H17.7565V19.042C17.7565 18.25 17.9635 17.647 18.3775 17.233C18.7915 16.819 19.3855 16.612 20.1595 16.612C21.7615 16.612 22.5625 17.422 22.5625 19.042V20.716H24.7765C26.0005 20.716 26.6125 21.301 26.6125 22.471C26.6125 23.659 26.0005 24.253 24.7765 24.253H22.5625V28.492C22.5625 29.788 23.2195 30.436 24.5335 30.436C24.7855 30.436 25.0285 30.409 25.2625 30.355C25.4965 30.301 25.7125 30.274 25.9105 30.274C26.1985 30.256 26.4325 30.346 26.6125 30.544C26.7925 30.724 26.8825 31.147 26.8825 31.813C26.8825 32.353 26.8015 32.812 26.6395 33.19C26.4775 33.55 26.1895 33.811 25.7755 33.973C25.5235 34.063 25.1815 34.135 24.7495 34.189C24.3175 34.261 23.9665 34.297 23.6965 34.297ZM31.1858 34.243C30.4118 34.243 29.8178 34.036 29.4038 33.622C29.0078 33.208 28.8098 32.605 28.8098 31.813V17.152C28.8098 15.532 29.6018 14.722 31.1858 14.722C31.9598 14.722 32.5538 14.929 32.9678 15.343C33.3998 15.757 33.6158 16.36 33.6158 17.152V26.062H33.6698L36.9638 22.066C37.4138 21.508 37.8278 21.103 38.2058 20.851C38.6018 20.599 39.1328 20.473 39.7988 20.473C40.4648 20.473 40.9778 20.635 41.3378 20.959C41.6978 21.283 41.8778 21.688 41.8778 22.174C41.8958 22.66 41.7068 23.146 41.3108 23.632L38.4488 27.034L41.7428 31.192C42.1208 31.714 42.2738 32.209 42.2018 32.677C42.1478 33.127 41.9228 33.505 41.5268 33.811C41.1488 34.099 40.6628 34.243 40.0688 34.243C39.3308 34.243 38.7458 34.117 38.3138 33.865C37.8998 33.595 37.4768 33.181 37.0448 32.623L33.6698 28.465H33.6158V31.813C33.6158 33.433 32.8058 34.243 31.1858 34.243Z"
        fill="#1D2D46"
      />
      <defs>
        <linearGradient
          id="paint0_linear_7_26"
          x1="10"
          y1="4"
          x2="81"
          y2="53"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#FE546F" />
          <stop offset="1" stop-color="#FE546F" stop-opacity="0.4" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_7_26"
          x1="12"
          y1="6"
          x2="78.5"
          y2="65"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#FE546F" />
          <stop offset="1" stop-color="#FE546F" stop-opacity="0.4" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Logo;
