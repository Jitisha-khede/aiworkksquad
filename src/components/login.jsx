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
                <input type="email" class='email' />
                <input type="password" class='password' />
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