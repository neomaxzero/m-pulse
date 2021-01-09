import React from 'react';
import LogoSvg from './m-pulse.logo.svg';

const Logo = () => (
  <svg
    height="36px"
    width="36px"
    viewBox="0 0 622 622"
    preserveAspectRatio="none"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_d)">
      <rect
        x="25"
        y="10"
        width="572"
        height="572"
        rx="100"
        fill="url(#paint0_linear)"
      />
      <g filter="url(#filter1_i)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M361.843 316.921C316.351 322.281 284.429 336.888 274.158 342.118C271.933 343.252 270.605 345.55 270.605 348.047V415.851V474H221C193.386 474 171 451.614 171 424V171C171 143.386 193.386 121 221 121H402.483C437.052 150.61 444 164.821 444 215C444 270.5 444 280.5 431 293.5C430.15 294.35 429.354 295.161 428.593 295.937C417.721 307.014 414.034 310.772 361.843 316.921Z"
          fill="white"
        />
      </g>
    </g>
    <defs>
      <filter
        id="filter0_d"
        x="0"
        y="0"
        width="622"
        height="622"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy="15" />
        <feGaussianBlur stdDeviation="12.5" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow"
          result="shape"
        />
      </filter>
      <filter
        id="filter1_i"
        x="171"
        y="121"
        width="273"
        height="363"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="10" />
        <feGaussianBlur stdDeviation="7.5" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"
        />
        <feBlend mode="normal" in2="shape" result="effect1_innerShadow" />
      </filter>
      <linearGradient
        id="paint0_linear"
        x1="311"
        y1="10"
        x2="311"
        y2="582"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#470E74" />
        <stop offset="1" stop-color="#781BC1" />
      </linearGradient>
    </defs>
  </svg>
);
export default Logo;
