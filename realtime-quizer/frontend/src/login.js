import './login.css'

function login(){
   return(
        <div>
            <div className="form">
                <h1 id="title">QUIZZIE</h1>
                <form className="log">
                    <h1>LOGIN</h1>  
                    <input type="text" name="uname" placeholder="Username"/>
                    <input type="password" name="password" placeholder="Password"/>
                    <input type="submit" value="Login"/>
                </form>
            </div>
            
        </div>


   );   
}

export default login