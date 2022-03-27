import { SVGProps } from "react";

const SquigglyCircle = (
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) => {
  return (
    <svg
      width="623"
      height="620"
      viewBox="0 0 623 620"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M353.496 23.6843L339.162 11.3259C323.403 -2.26177 300.07 -2.26177 284.311 11.3259L269.977 23.6843C259.618 32.6157 245.414 35.635 232.318 31.6891L214.196 26.2291C194.273 20.2261 172.957 29.7164 164.087 48.5392L156.019 65.6593C150.188 78.0319 138.44 86.5675 124.871 88.2895L106.096 90.6721C85.4534 93.2917 69.8409 110.631 69.3933 131.435L68.9863 150.356C68.6921 164.031 61.4313 176.607 49.7359 183.699L33.5529 193.512C15.7604 204.301 8.55025 226.492 16.6029 245.679L23.9272 263.13C29.2203 275.742 27.7024 290.184 19.9027 301.42L9.11025 316.967C-2.75563 334.06 -0.316705 357.265 14.8438 371.518L28.6329 384.481C38.5981 393.85 43.0856 407.661 40.5302 421.098L36.9944 439.69C33.1068 460.132 44.7731 480.339 64.4201 487.193L82.2897 493.427C95.204 497.933 104.921 508.724 108.052 522.039L112.384 540.462C117.147 560.718 136.023 574.433 156.76 572.703L175.62 571.13C189.25 569.993 202.517 575.9 210.792 586.79L222.243 601.858C234.833 618.426 257.656 623.277 275.896 613.263L292.486 604.154C304.476 597.572 318.997 597.572 330.987 604.154L347.577 613.263C365.817 623.277 388.64 618.426 401.23 601.858L412.681 586.79C420.956 575.9 434.222 569.993 447.853 571.13L466.713 572.703C487.449 574.433 506.326 560.718 511.089 540.462L515.421 522.039C518.552 508.724 528.269 497.933 541.183 493.427L559.053 487.193C578.7 480.339 590.366 460.132 586.478 439.69L582.943 421.098C580.387 407.661 584.875 393.85 594.84 384.481L608.629 371.518C623.789 357.265 626.228 334.06 614.363 316.967L603.57 301.42C595.77 290.184 594.252 275.742 599.546 263.13L606.87 245.679C614.923 226.492 607.712 204.301 589.92 193.512L573.737 183.699C562.042 176.607 554.781 164.031 554.486 150.356L554.079 131.435C553.632 110.631 538.019 93.2917 517.377 90.6721L498.601 88.2895C485.033 86.5675 473.284 78.0319 467.454 65.6593L459.386 48.5392C450.515 29.7164 429.2 20.2261 409.276 26.2291L391.155 31.6891C378.059 35.635 363.855 32.6157 353.496 23.6843Z" />
    </svg>
  );
};

export default SquigglyCircle;
