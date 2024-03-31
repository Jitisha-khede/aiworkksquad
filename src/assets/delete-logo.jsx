import React from "react";

function DeleteLogo(){
  return(
    <div className="delete-button">
      <button style={{ border: 'none', background: 'none' }}>
        <svg xmlns="http://www.w3.org/2000/svg" height="18" width="18" viewBox="0 0 18 18">
            <title>trash</title>
            <g fill="#212121" class="nc-icon-wrapper">
                <line x1="2.75" y1="4.25" x2="15.25" y2="4.25" fill="none" stroke="#212121" stroke-linecap="round" 
                stroke-linejoin="round" stroke-width="1.5" data-color="color-2">
                </line>
                <path d="M6.75,4.25v-1.5c0-.552,.448-1,1-1h2.5c.552,0,1,.448,1,1v1.5" fill="none" stroke="#212121"
                stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" data-color="color-2">
                </path>
                <path d="M13.5,6.75l-.4,7.605c-.056,1.062-.934,1.895-1.997,1.895H6.898c-1.064,0-1.941-.833-1.997-1.895l-.4-7.605"
                fill="none" stroke="#212121" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5">
                </path>
            </g>
        </svg>
        </button>
    </div>
  )
}

export default DeleteLogo;

