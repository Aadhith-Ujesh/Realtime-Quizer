import './login.css'
// import './index.css'

function login(){
   return(
        <div className="login bg-gray-200">
            <label className="max-w-sm rounded overflow-hidden shadow-lg">Enter username</label>
            <input type = "text" name = "username"/><br/>
            <label>Enter password</label>
            <input type = "password" name = "password"/>
        </div>
   );   
}

export default login