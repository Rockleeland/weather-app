import React from "react";
import styled from "styled-components";

const StyledSVG = styled.svg`
  @keyframes am-weather-cloud-2 {
    0% {
      -webkit-transform: translate(0px, 0px);
      -moz-transform: translate(0px, 0px);
      -ms-transform: translate(0px, 0px);
      transform: translate(0px, 0px);
    }

    50% {
      -webkit-transform: translate(2px, 0px);
      -moz-transform: translate(2px, 0px);
      -ms-transform: translate(2px, 0px);
      transform: translate(2px, 0px);
    }

    100% {
      -webkit-transform: translate(0px, 0px);
      -moz-transform: translate(0px, 0px);
      -ms-transform: translate(0px, 0px);
      transform: translate(0px, 0px);
    }
  }

  .am-weather-cloud-2 {
    -webkit-animation-name: am-weather-cloud-2;
    -moz-animation-name: am-weather-cloud-2;
    animation-name: am-weather-cloud-2;
    -webkit-animation-duration: 3s;
    -moz-animation-duration: 3s;
    animation-duration: 3s;
    -webkit-animation-timing-function: linear;
    -moz-animation-timing-function: linear;
    animation-timing-function: linear;
    -webkit-animation-iteration-count: infinite;
    -moz-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
  }

  /*
** SNOW
*/
  @keyframes am-weather-snow {
    0% {
      -webkit-transform: translateX(0) translateY(0);
      -moz-transform: translateX(0) translateY(0);
      -ms-transform: translateX(0) translateY(0);
      transform: translateX(0) translateY(0);
    }

    33.33% {
      -webkit-transform: translateX(-1.2px) translateY(2px);
      -moz-transform: translateX(-1.2px) translateY(2px);
      -ms-transform: translateX(-1.2px) translateY(2px);
      transform: translateX(-1.2px) translateY(2px);
    }

    66.66% {
      -webkit-transform: translateX(1.4px) translateY(4px);
      -moz-transform: translateX(1.4px) translateY(4px);
      -ms-transform: translateX(1.4px) translateY(4px);
      transform: translateX(1.4px) translateY(4px);
      opacity: 1;
    }

    100% {
      -webkit-transform: translateX(-1.6px) translateY(6px);
      -moz-transform: translateX(-1.6px) translateY(6px);
      -ms-transform: translateX(-1.6px) translateY(6px);
      transform: translateX(-1.6px) translateY(6px);
      opacity: 0;
    }
  }

  @keyframes am-weather-snow-reverse {
    0% {
      -webkit-transform: translateX(0) translateY(0);
      -moz-transform: translateX(0) translateY(0);
      -ms-transform: translateX(0) translateY(0);
      transform: translateX(0) translateY(0);
    }

    33.33% {
      -webkit-transform: translateX(1.2px) translateY(2px);
      -moz-transform: translateX(1.2px) translateY(2px);
      -ms-transform: translateX(1.2px) translateY(2px);
      transform: translateX(1.2px) translateY(2px);
    }

    66.66% {
      -webkit-transform: translateX(-1.4px) translateY(4px);
      -moz-transform: translateX(-1.4px) translateY(4px);
      -ms-transform: translateX(-1.4px) translateY(4px);
      transform: translateX(-1.4px) translateY(4px);
      opacity: 1;
    }

    100% {
      -webkit-transform: translateX(1.6px) translateY(6px);
      -moz-transform: translateX(1.6px) translateY(6px);
      -ms-transform: translateX(1.6px) translateY(6px);
      transform: translateX(1.6px) translateY(6px);
      opacity: 0;
    }
  }

  .am-weather-snow-1 {
    -webkit-animation-name: am-weather-snow;
    -moz-animation-name: am-weather-snow;
    -ms-animation-name: am-weather-snow;
    animation-name: am-weather-snow;
    -webkit-animation-duration: 2s;
    -moz-animation-duration: 2s;
    -ms-animation-duration: 2s;
    animation-duration: 2s;
    -webkit-animation-timing-function: linear;
    -moz-animation-timing-function: linear;
    -ms-animation-timing-function: linear;
    animation-timing-function: linear;
    -webkit-animation-iteration-count: infinite;
    -moz-animation-iteration-count: infinite;
    -ms-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
  }

  .am-weather-snow-2 {
    -webkit-animation-name: am-weather-snow;
    -moz-animation-name: am-weather-snow;
    -ms-animation-name: am-weather-snow;
    animation-name: am-weather-snow;
    -webkit-animation-delay: 1.2s;
    -moz-animation-delay: 1.2s;
    -ms-animation-delay: 1.2s;
    animation-delay: 1.2s;
    -webkit-animation-duration: 2s;
    -moz-animation-duration: 2s;
    -ms-animation-duration: 2s;
    animation-duration: 2s;
    -webkit-animation-timing-function: linear;
    -moz-animation-timing-function: linear;
    -ms-animation-timing-function: linear;
    animation-timing-function: linear;
    -webkit-animation-iteration-count: infinite;
    -moz-animation-iteration-count: infinite;
    -ms-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
  }

  .am-weather-snow-3 {
    -webkit-animation-name: am-weather-snow-reverse;
    -moz-animation-name: am-weather-snow-reverse;
    -ms-animation-name: am-weather-snow-reverse;
    animation-name: am-weather-snow-reverse;
    -webkit-animation-duration: 2s;
    -moz-animation-duration: 2s;
    -ms-animation-duration: 2s;
    animation-duration: 2s;
    -webkit-animation-timing-function: linear;
    -moz-animation-timing-function: linear;
    -ms-animation-timing-function: linear;
    animation-timing-function: linear;
    -webkit-animation-iteration-count: infinite;
    -moz-animation-iteration-count: infinite;
    -ms-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
  }
`;

const SnowIcon = () => {
  return (
    <StyledSVG xmlns="http://www.w3.org/2000/svg" width="64" height="64">
      <defs>
        <filter id="a" width="200%" height="200%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
          <feOffset dy="4" result="offsetblur" />
          <feComponentTransfer>
            <feFuncA slope="0.05" type="linear" />
          </feComponentTransfer>
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <g filter="url(#a)">
        <path
          className="0"
          fill="#57A0EE"
          stroke="#fff"
          strokeLinejoin="round"
          strokeWidth="1.2"
          d="M27.7 24.4c0-4.6-3.7-8.2-8.2-8.2-1 0-1.9.2-2.8.5-.3-3.4-3.1-6.2-6.6-6.2-3.7 0-6.7 3-6.7 6.7 0 .8.2 1.6.4 2.3-.3-.1-.7-.1-1-.1-3.7 0-6.7 3-6.7 6.7 0 3.6 2.9 6.6 6.5 6.7h17.2c4.4-.5 7.9-4 7.9-8.4z"
          transform="translate(20 10)"
        />
        <g
          className="0"
          fill="none"
          stroke="#57A0EE"
          strokeLinecap="round"
          transform="translate(20 10) translate(3 28)"
        >
          <path
            strokeWidth="1.2"
            d="M0 -2.5L0 2.5"
            transform="translate(0 9)"
          />
          <path d="M0 -2.5L0 2.5" transform="rotate(45 -10.864 4.5)" />
          <path d="M0 -2.5L0 2.5" transform="rotate(90 -4.5 4.5)" />
          <path d="M0 -2.5L0 2.5" transform="rotate(135 -1.864 4.5)" />
        </g>
        <g
          className="0"
          fill="none"
          stroke="#57A0EE"
          strokeLinecap="round"
          transform="translate(20 10) translate(11 28)"
        >
          <path
            strokeWidth="1.2"
            d="M0 -2.5L0 2.5"
            transform="translate(0 9)"
          />
          <path d="M0 -2.5L0 2.5" transform="rotate(45 -10.864 4.5)" />
          <path d="M0 -2.5L0 2.5" transform="rotate(90 -4.5 4.5)" />
          <path d="M0 -2.5L0 2.5" transform="rotate(135 -1.864 4.5)" />
        </g>
        <g
          className="0"
          fill="none"
          stroke="#57A0EE"
          strokeLinecap="round"
          transform="translate(20 10) translate(20 28)"
        >
          <path
            strokeWidth="1.2"
            d="M0 -2.5L0 2.5"
            transform="translate(0 9)"
          />
          <path d="M0 -2.5L0 2.5" transform="rotate(45 -10.864 4.5)" />
          <path d="M0 -2.5L0 2.5" transform="rotate(90 -4.5 4.5)" />
          <path d="M0 -2.5L0 2.5" transform="rotate(135 -1.864 4.5)" />
        </g>
      </g>
    </StyledSVG>
  );
};

export default SnowIcon;
