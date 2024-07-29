import { Snackbar } from '@mui/material';
import React, { useState } from 'react';

export const CopyToClipboard = (props: { text: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(props.text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }).catch((err) => {
      console.error('Error copying text: ', err);
    });
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <button onClick={handleCopy} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24px"
          height="24px"
          viewBox="0 0 270.92 270.92"
          fill="#000000"
        >
          <defs>
            <style type="text/css">
              {`.fil0 {fill:black;fill-rule:nonzero}`}
            </style>
          </defs>
          <g id="Layer_x0020_1">
            <path className="fil0" d="M64.52 191.12l0 -139.81c0,-6.11 4.97,-11.09 11.08,-11.09l72.12 0c1.53,0 2.94,0.6 4,1.66l24.82 24.94c1.07,1.07 1.65,2.47 1.65,3.97l0 120.33c0,6.1 -4.97,11.07 -11.08,11.07l-91.51 0c-6.11,0 -11.08,-4.97 -11.08,-11.07zm132.68 -129.72c-0.46,-0.03 -3.17,-0.04 -4.27,-0.04l-0.36 3.52 0.38 3.53c0.91,0 3.08,-0.01 3.54,0.01 5.57,0.57 9.91,5.58 9.91,11.38l0 139.8c0,6.12 -4.96,11.08 -11.06,11.08l-91.53 0c-5.65,0 -10.39,-4.22 -11,-9.8 -0.04,-0.71 -0.07,-4.04 -0.07,-4.53 0,-1.94 -1.58,-3.53 -3.51,-3.53 -1.97,0 -3.53,1.59 -3.53,3.53 0,0.6 0.03,4.71 0.09,5.25 1.02,9.21 8.75,16.14 18.02,16.14l91.53 0c9.98,0 18.12,-8.14 18.12,-18.14l0 -139.8c0,-9.39 -7.13,-17.47 -16.26,-18.4zm-23.56 8.99c0,-1.95 -1.59,-3.52 -3.53,-3.52l-18.45 0 0 -19.44c0,-1.95 -1.57,-3.52 -3.52,-3.52 -1.95,0 -3.53,1.57 -3.53,3.52l0 22.96c0,1.95 1.58,3.53 3.53,3.53l21.97 0c1.94,0 3.53,-1.58 3.53,-3.53zm11.61 120.73l0 -120.33c0,-3.38 -1.31,-6.54 -3.69,-8.94l-24.84 -24.94c-2.4,-2.4 -5.6,-3.74 -9,-3.74l-72.12 0c-10,0 -18.14,8.14 -18.14,18.14l0 139.81c0,9.99 8.14,18.13 18.14,18.13l91.51 0c10,0 18.14,-8.14 18.14,-18.13z" />
          </g>
        </svg>
      </button>
      <Snackbar
        open={copied}
        autoHideDuration={6000}
        onClose={() => setCopied(false)}
        message="Successfully copied "
      />
    </div>
  );
};