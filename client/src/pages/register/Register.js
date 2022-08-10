import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavBar } from "../../components/NavBar/NavBar";
import { useEffect } from "react";

export const Register = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    fetch(`/signin/user`, {})
      .then((response) => response.json())
      .then((responseJson) => {
        setIsLoggedIn(responseJson);
      });
  }, []);

  let navigate = useNavigate();

  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const validation = (values) => {
    let errors = {};
    if (!values.firstName) {
      errors.firstName = "First name is required.";
    }
    if (!values.lastName) {
      errors.lastName = "Last name is required.";
    }
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "Email is invalid.";
    }
    if (!values.password) {
      errors.password = "Password is required.";
    } else if (values.password.length < 5) {
      errors.password = "Password must be at least five characters.";
    } else {
      navigate("/signin");
    }

    return errors;
  };

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setErrors(validation(values));
    console.log(values);
    fetch(`/register/new`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });
  };

  return (
    <div className="background-image" id="background-register-image">
      <NavBar user={isLoggedIn} />
      <div className="form-container">
        <div className="register">
          <form className="form">
            <h1>Register</h1>
            <span>Register and Rate A Beach</span>
            <div className="name">
              <input
                className="input"
                type="text"
                name="firstName"
                value={values.firstName}
                onChange={handleChange}
                placeholder="First Name"
              />
              {errors.firstName && <p className="error">{errors.firstName}</p>}
              <div>
                <input
                  className="input"
                  type="text"
                  name="lastName"
                  value={values.lastName}
                  onChange={handleChange}
                  placeholder="Last Name"
                />
                {errors.lastName && <p className="error">{errors.lastName}</p>}
              </div>
            </div>
            <div className="email">
              <input
                className="input"
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                placeholder="Email"
              />
              {errors.email && <p className="error">{errors.email}</p>}
            </div>
            <div className="password">
              <input
                className="input"
                type="password"
                name="password"
                value={values.password}
                onChange={handleChange}
                placeholder="Password"
              />
              {errors.password && <p className="error">{errors.password}</p>}
            </div>
            <div>
              <button className="btn" type="submit" onClick={handleFormSubmit}>
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
