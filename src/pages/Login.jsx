import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

function Login(){

const navigate = useNavigate();

const [email,setEmail]=useState("");
const [password,setPassword]=useState("");


async function handleLogin(e){

e.preventDefault();

try{

const response = await api.get(
`/users?email=${email}&password=${password}`
);


if(response.data.length > 0){

const loggedUser=response.data[0];


localStorage.setItem(
"user",
JSON.stringify(loggedUser)
);


alert("Login Successful");


navigate("/");


}
else{

alert("Invalid Email or Password");

}


}
catch(error){

console.log(error);

alert("Unable to Login");

}

}


return(

<form onSubmit={handleLogin}>

<input
type="email"
placeholder="Email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
/>


<input
type="password"
placeholder="Password"
value={password}
onChange={(e)=>setPassword(e.target.value)}
/>


<button>
Login
</button>


</form>

);

}

export default Login;