import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import { NavBar } from "../../components/NavBar/NavBar";

export function SignIn() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    fetch(`/signin/user`, {})
      .then((response) => response.json())
      .then((responseJson) => {
        setIsLoggedIn(responseJson);
      });
  }, []);

  let navigate = useNavigate();

  // States for registration
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  // Handling the email change
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
  };

  // Handling the password change
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };

  // Handling the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      setError(true);
    } else {
      setSubmitted(true);
      setError(false);
    }
    fetch(`/signin/new`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    }).then((response) => {
      console.log(response);
      if (response.status === 200) {
        navigate("/");
      }
    });
  };

  // Showing error message if error is true
  const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: error ? "" : "none",
        }}
      >
        <p>Please enter all the fields</p>
      </div>
    );
  };

  return (
    <div className="background-image" id="background-sign-in-image">
      <NavBar user={isLoggedIn} />
      <div className="form-container" id="sign-in-container">
        <div className="form">
          <div>
            <Header title="Sign In" />
          </div>

          {/* Calling to the methods */}
          <div className="messages">
            {errorMessage()}
            {/* {successMessage()} */}
          </div>

          <form>
            {/* Labels and inputs for form data */}
            <input
              onChange={handleEmail}
              className="input"
              value={email}
              type="email"
              placeholder="Email"
            />

            <input
              onChange={handlePassword}
              className="input"
              value={password}
              type="password"
              placeholder="Password"
            />

            <button onClick={handleSubmit} className="btn" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
