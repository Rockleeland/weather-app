import React from "react";
import styled from "styled-components";

const StyledSVG = styled.svg`
  /*
** RAIN
*/
  @keyframes am-weather-rain {
    0% {
      stroke-dashoffset: 0;
    }

    100% {
      stroke-dashoffset: -100;
    }
  }

  .am-weather-rain-1 {
    -webkit-animation-name: am-weather-rain;
    -moz-animation-name: am-weather-rain;
    -ms-animation-name: am-weather-rain;
    animation-name: am-weather-rain;
    -webkit-animation-duration: 8s;
    -moz-animation-duration: 8s;
    -ms-animation-duration: 8s;
    animation-duration: 8s;
    -webkit-animation-timing-function: linear;
    -moz-animation-timing-function: linear;
    -ms-animation-timing-function: linear;
    animation-timing-function: linear;
    -webkit-animation-iteration-count: infinite;
    -moz-animation-iteration-count: infinite;
    -ms-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
  }

  .am-weather-rain-2 {
    -webkit-animation-name: am-weather-rain;
    -moz-animation-name: am-weather-rain;
    -ms-animation-name: am-weather-rain;
    animation-name: am-weather-rain;
    -webkit-animation-delay: 0.25s;
    -moz-animation-delay: 0.25s;
    -ms-animation-delay: 0.25s;
    animation-delay: 0.25s;
    -webkit-animation-duration: 8s;
    -moz-animation-duration: 8s;
    -ms-animation-duration: 8s;
    animation-duration: 8s;
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

const RainyIcon = () => {
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
          fill="#57A0EE"
          stroke="#fff"
          strokeLinejoin="round"
          strokeWidth="1.2"
          d="M27.7 24.4c0-4.6-3.7-8.2-8.2-8.2-1 0-1.9.2-2.8.5-.3-3.4-3.1-6.2-6.6-6.2-3.7 0-6.7 3-6.7 6.7 0 .8.2 1.6.4 2.3-.3-.1-.7-.1-1-.1-3.7 0-6.7 3-6.7 6.7 0 3.6 2.9 6.6 6.5 6.7h17.2c4.4-.5 7.9-4 7.9-8.4z"
          transform="translate(20 10)"
        />
        <g transform="rotate(10 -247.391 200.166)">
          <path
            fill="none"
            stroke="#91C0F8"
            strokeDasharray="4,4"
            strokeLinecap="round"
            strokeWidth="2"
            d="M0 0L0 8"
            className="am-weather-rain-1"
            transform="translate(-4 1)"
          />
          <path
            fill="none"
            stroke="#91C0F8"
            strokeDasharray="4,4"
            strokeLinecap="round"
            strokeWidth="2"
            d="M0 0L0 8"
            className="am-weather-rain-2"
            transform="translate(0 -1)"
          />
          <path
            fill="none"
            stroke="#91C0F8"
            strokeDasharray="4,4"
            strokeLinecap="round"
            strokeWidth="2"
            d="M0 0L0 8"
            className="am-weather-rain-1"
            transform="translate(4)"
          />
        </g>
      </g>
    </StyledSVG>
  );
};

export default RainyIcon;
