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
** SUN
*/
  @keyframes am-weather-sun {
    0% {
      -webkit-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
      -ms-transform: rotate(0deg);
      transform: rotate(0deg);
    }

    100% {
      -webkit-transform: rotate(360deg);
      -moz-transform: rotate(360deg);
      -ms-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  .am-weather-sun {
    -webkit-animation-name: am-weather-sun;
    -moz-animation-name: am-weather-sun;
    -ms-animation-name: am-weather-sun;
    animation-name: am-weather-sun;
    -webkit-animation-duration: 9s;
    -moz-animation-duration: 9s;
    -ms-animation-duration: 9s;
    animation-duration: 9s;
    -webkit-animation-timing-function: linear;
    -moz-animation-timing-function: linear;
    -ms-animation-timing-function: linear;
    animation-timing-function: linear;
    -webkit-animation-iteration-count: infinite;
    -moz-animation-iteration-count: infinite;
    -ms-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
  }

  @keyframes am-weather-sun-shiny {
    0% {
      stroke-dasharray: 3px 10px;
      stroke-dashoffset: 0px;
    }

    50% {
      stroke-dasharray: 0.1px 10px;
      stroke-dashoffset: -1px;
    }

    100% {
      stroke-dasharray: 3px 10px;
      stroke-dashoffset: 0px;
    }
  }

  .am-weather-sun-shiny line {
    -webkit-animation-name: am-weather-sun-shiny;
    -moz-animation-name: am-weather-sun-shiny;
    -ms-animation-name: am-weather-sun-shiny;
    animation-name: am-weather-sun-shiny;
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

function CloudIcon() {
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
        <g transform="translate(20 10) translate(0 16)">
          <g className="am-weather-sun">
            <path
              fill="none"
              stroke="orange"
              strokeLinecap="round"
              strokeWidth="2"
              d="M0 0L0 3"
              transform="translate(0 9)"
            />
            <path
              fill="none"
              stroke="orange"
              strokeLinecap="round"
              strokeWidth="2"
              d="M0 0L0 3"
              transform="rotate(45) translate(0 9)"
            />
            <path
              fill="none"
              stroke="orange"
              strokeLinecap="round"
              strokeWidth="2"
              d="M0 0L0 3"
              transform="rotate(90) translate(0 9)"
            />
            <path
              fill="none"
              stroke="orange"
              strokeLinecap="round"
              strokeWidth="2"
              d="M0 0L0 3"
              transform="rotate(135) translate(0 9)"
            />
            <path
              fill="none"
              stroke="orange"
              strokeLinecap="round"
              strokeWidth="2"
              d="M0 0L0 3"
              transform="rotate(180) translate(0 9)"
            />
            <path
              fill="none"
              stroke="orange"
              strokeLinecap="round"
              strokeWidth="2"
              d="M0 0L0 3"
              transform="rotate(225) translate(0 9)"
            />
            <path
              fill="none"
              stroke="orange"
              strokeLinecap="round"
              strokeWidth="2"
              d="M0 0L0 3"
              transform="rotate(270) translate(0 9)"
            />
            <path
              fill="none"
              stroke="orange"
              strokeLinecap="round"
              strokeWidth="2"
              d="M0 0L0 3"
              transform="rotate(315) translate(0 9)"
            />
          </g>
          <circle r="5" fill="orange" stroke="orange" strokeWidth="2" />
        </g>
        <path
          className="0"
          fill="#C6DEFF"
          stroke="#fff"
          strokeLinejoin="round"
          strokeWidth="1.2"
          d="M27.7 24.4c0-4.6-3.7-8.2-8.2-8.2-1 0-1.9.2-2.8.5-.3-3.4-3.1-6.2-6.6-6.2-3.7 0-6.7 3-6.7 6.7 0 .8.2 1.6.4 2.3-.3-.1-.7-.1-1-.1-3.7 0-6.7 3-6.7 6.7 0 3.6 2.9 6.6 6.5 6.7h17.2c4.4-.5 7.9-4 7.9-8.4z"
          transform="translate(20 10)"
        />
      </g>
    </StyledSVG>
  );
}

export default CloudIcon;
