import { IconSvgProps } from './types';

export const Xicon = ({ size = 24, width, height, ...props }: IconSvgProps) => {
  return (
    <svg
      height={size || height}
      width={size || width}
      viewBox="0 0 9 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        id="x"
        d="M6.95364 9L4.37086 5.64964L1.88742 9H0L3.51656 4.53285L0 0H2.04636L4.62914 3.33394L7.09272 0H8.98013L5.48344 4.45073L9 9H6.95364Z"
        fill="#D4D4D8"
      />
    </svg>
  );
};
