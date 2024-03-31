import React from "react";

function EditLogo(){
  return(
    <div className="edit-button">
      <button style={{ border: 'none', background: 'none' }}>
      <svg xmlns="http://www.w3.org/2000/svg" height="18" width="18" viewBox="0 0 18 18">
            <title>pen writing 4</title>
            <g fill="#212121" class="nc-icon-wrapper">
                <path d="M4.25,10.25h-1c-.828,0-1.5,.672-1.5,1.5h0c0,.828,.672,1.5,1.5,1.5H14.75c.828,0,1.5,.672,1.5,1.5h0c0,.828-.672,1.5-1.5,1.5h-2" fill="none" stroke="#212121" 
                stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" data-color="color-2">
                </path>
                <path d="M6.836,10.164s2.034-.034,2.75-.75,5.25-5.25,5.25-5.25c.552-.552,.552-1.448,0-2-.552-.552-1.448-.552-2,0,0,0-4.534,4.534-5.25,5.25s-.75,2.75-.75,2.75Z" fill="none" stroke="#212121"
                stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5">
                </path>
            </g>
        </svg>
        </button>
    </div>
  )
}

export default EditLogo;

