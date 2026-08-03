import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {

  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    role:"customer"
  });


  function handleChange(e) {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  }


  function handleSubmit(e) {
    e.preventDefault();


    // Get existing users
    const users = JSON.parse(
      localStorage.getItem("users")
    ) || [];


    // Check email already exists
    const existingUser = users.find(
      (u) => u.email === user.email
    );


    if(existingUser){
      alert("Email already registered");
      return;
    }


    // New customers will be customer role
    const newUser = {
      ...user,
      role: "customer"
    };


    // Add new user
    users.push(newUser);


    localStorage.setItem(
      "users",
      JSON.stringify(users)
    );


    alert("Registration Successful");

    navigate("/login");

  }


  return (

    <div className="login-container">

      <form
        className="login-form"
        onSubmit={handleSubmit}
      >

        <h2>Register</h2>


        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={user.name}
          onChange={handleChange}
          required
        />


        <input
          type="email"
          name="email"
          placeholder="Email"
          value={user.email}
          onChange={handleChange}
          required
        />


        <input
          type="password"
          name="password"
          placeholder="Password"
          value={user.password}
          onChange={handleChange}
          required
        />


        <button
          type="submit"
          className="submit-btn"
        >
          Register
        </button>


      </form>

    </div>

  );
}

export default Register;