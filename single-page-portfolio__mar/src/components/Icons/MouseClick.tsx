import { SVGProps } from "react";

const MouseClick = (
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M9 9L14 21L15.774 15.774L21 14L9 9Z"
        stroke="black"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M6.17104 11.828L4.05104 13.95M7.18804 2.239L7.96504 5.136L7.18804 2.239ZM5.13604 7.965L2.23804 7.188L5.13604 7.965ZM13.95 4.05L11.828 6.172L13.95 4.05Z"
        stroke="black"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default MouseClick;
