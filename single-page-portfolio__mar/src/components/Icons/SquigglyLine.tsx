import { SVGProps } from "react";

const SquigglyLine = (
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="43"
      height="6"
      viewBox="0 0 43 6"
      fill="none"
      {...props}
    >
      <path
        d="M1 4.50002L2.08151 3.00002C3.14578 1.52393 5.34329 1.52392 6.40756 3.00002V3.00002C7.47183 4.47611 9.66934 4.47611 10.7336 3.00002V3.00002C11.7979 1.52392 13.9954 1.52392 15.0597 3.00002V3.00002C16.1239 4.47611 18.3214 4.47611 19.3857 3.00002V3.00002C20.45 1.52392 22.6475 1.52392 23.7118 3.00002V3.00002C24.776 4.47611 26.9735 4.47611 28.0378 3.00002V3.00002C29.1021 1.52392 31.2996 1.52392 32.3638 3.00002V3.00002C33.4281 4.47611 35.6411 4.45468 36.7053 2.97859V2.97859C37.7668 1.50642 39.9636 1.4558 41.0644 2.89874L42 4.12502"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default SquigglyLine;
