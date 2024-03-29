import { SVGProps } from "react";

const PhotoDottedFrame = (
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) => {
  return (
    <svg
      width="204"
      height="204"
      viewBox="0 0 204 204"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g filter="url(#filter0_b_48_61)">
        <rect
          x="7.9032"
          y="7.9032"
          width="188.194"
          height="188.194"
          stroke-miterlimit="16"
          stroke-dasharray="5 4"
        />
      </g>
      <g filter="url(#filter1_b_48_61)">
        <rect x="188.048" y="0.499969" width="14.629" height="14.629" />
      </g>
      <g filter="url(#filter2_b_48_61)">
        <rect x="0.5" y="0.499969" width="14.629" height="14.629" />
      </g>
      <g filter="url(#filter3_b_48_61)">
        <rect x="0.5" y="188.871" width="14.629" height="14.629" />
      </g>
      <g filter="url(#filter4_b_48_61)">
        <rect x="188.871" y="188.871" width="14.629" height="14.629" />
      </g>
      <defs>
        <filter
          id="filter0_b_48_61"
          x="3.4032"
          y="3.4032"
          width="197.193"
          height="197.194"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImage" stdDeviation="2" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_48_61"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_48_61"
            result="shape"
          />
        </filter>
        <filter
          id="filter1_b_48_61"
          x="183.548"
          y="-4.00003"
          width="23.629"
          height="23.629"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImage" stdDeviation="2" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_48_61"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_48_61"
            result="shape"
          />
        </filter>
        <filter
          id="filter2_b_48_61"
          x="-4"
          y="-4.00003"
          width="23.629"
          height="23.629"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImage" stdDeviation="2" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_48_61"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_48_61"
            result="shape"
          />
        </filter>
        <filter
          id="filter3_b_48_61"
          x="-4"
          y="184.371"
          width="23.629"
          height="23.629"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImage" stdDeviation="2" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_48_61"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_48_61"
            result="shape"
          />
        </filter>
        <filter
          id="filter4_b_48_61"
          x="184.371"
          y="184.371"
          width="23.629"
          height="23.629"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImage" stdDeviation="2" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_48_61"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_48_61"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default PhotoDottedFrame;
