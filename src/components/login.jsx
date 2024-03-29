import logo from '../logo.png';

function login(){
    return (
        <div className = "App">
        <div className = "image" >
          <img src={logo} alt="Logo" />
        </div>

        <div className = "container">
            <div className='welcome'>Welcome Back</div> 
            <div className='signin'>Sign in to continue to Aiworksquad</div>
            <form >
                <div className='email'>
                <input type="email" placeholder='Email'/>
                <svg xmlns="http://www.w3.org/2000/svg" height="18" width="18" viewBox="0 0 18 18">
                    <title>envelope</title>
                    <g fill="#212121" class="nc-icon-wrapper">
                    <path d="M1.75,5.75l6.767,3.733c.301,.166,.665,.166,.966,0l6.767-3.733" fill="none" stroke="#9095A0FF" 
                    stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" data-color="color-2"></path>
                    <rect x="1.75" y="3.25" width="14.5" height="11.5" rx="2" ry="2" transform="translate(18 18) rotate(180)" fill="none" 
                    stroke="#9095A0FF" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></rect>
                    </g>
                </svg>
                </div>
                <div className='password'>
                <svg xmlns="http://www.w3.org/2000/svg" height="18" width="18" viewBox="0 0 18 18">
                    <title>lock</title><g fill="#9095A0FF" class="nc-icon-wrapper">
                    <path d="M5.75,8.25v-3.25c0-1.795,1.455-3.25,3.25-3.25h0c1.795,0,3.25,1.455,3.25,3.25v3.25" fill="none" stroke="#9095A0FF" 
                    stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" data-color="color-2"></path>
                    <line x1="9" y1="11.75" x2="9" y2="12.75" fill="none" stroke="#9095A0FF" stroke-linecap="round"
                    stroke-linejoin="round" stroke-width="1.5" data-color="color-2"></line>
                    <rect x="3.25" y="8.25" width="11.5" height="8" rx="2" ry="2" fill="none"
                    stroke='#9095A0FF' stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></rect>
                    </g>
                </svg>
                    <input type="password" placeholder='Password'/>
                </div>
                <label class = 'remember'>Remember me</label><input type="checkbox" class="checkbox" />
               <div className='forgot'>Forgot password?</div>
               <button class= 'button'>Login</button>
            </form>
        </div>
    
        <div className = "footer">
           2023 Aiworksquad.
        </div>
        </div>
    )
}

export default login;