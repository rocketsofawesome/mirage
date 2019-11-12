import React from 'react'

const InfoIcon = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 18 18" version="1.1">
      <g id="Gift-message-Enhanced" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <g id="mobile---pdp" transform="translate(-194.000000, -1189.000000)" stroke="#0073D1">
              <g id="info-icon" transform="translate(195.000000, 1190.000000)">
                  <circle id="Oval" cx="8" cy="8" r="8"></circle>
                  <path d="M8,6.5 L8,13" id="Line" strokeLinecap="square"></path>
                  <rect id="Rectangle" x="8" y="4" width="0.2" height="0.2"></rect>
              </g>
          </g>
      </g>
  </svg>
)

InfoIcon.defaultProps = {
  size: '18px'
}

export default InfoIcon
