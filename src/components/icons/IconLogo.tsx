import { IconSvgProps } from './types';

export const IconLogo = ({ size = 24, width, height, ...props }: IconSvgProps) => {
  return (
    <svg
      height={size || height}
      width={size || width}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M16 0H0V12.1905H4.06349V4.06349H16C22.5924 4.06349 27.9365 9.40765 27.9365 16V27.9365H4.23571C4.94272 23.8135 7.76442 20.4129 11.5444 18.8911C12.4934 20.3245 14.1204 21.2698 15.9683 21.2698C18.8962 21.2698 21.2698 18.8962 21.2698 15.9683C21.2698 13.0403 18.8962 10.6667 15.9683 10.6667C13.4287 10.6667 11.3062 12.4522 10.7877 14.8364C4.51022 16.9983 0 22.9566 0 29.9683V32H32V16C32 7.16344 24.8366 0 16 0Z"
        fill="#F26419"
      />
    </svg>
  );
};
