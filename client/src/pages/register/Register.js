import { Header } from "../../components/Header/Header";
import React, { useState } from "react";

export const Register = () => {
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
      errors.fullname = "First name is required.";
    }
    if (!values.lastName) {
      errors.fullname = "Last name is required.";
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
  };

  return (
    <div className="container">
      <div className="app-wrapper">
        <h1>Register</h1>
        <form className="form-wrapper">
          <div className="name">
            <label className="label">First Name</label>
            <input
              className="input"
              type="text"
              name="firstName"
              value={values.firstNname}
              onChange={handleChange}
            />
            {errors.firstname && <p className="error">{errors.firstName}</p>}
            <div>
              <label className="label">Last Name</label>
              <input
                className="input"
                type="text"
                name="lastName"
                value={values.lastNname}
                onChange={handleChange}
              />
              {errors.lastname && <p className="error">{errors.lastName}</p>}
            </div>
          </div>
          <div className="email">
            <label className="label">Email</label>
            <input
              className="input"
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>
          <div className="password">
            <label className="label">Password</label>
            <input
              className="input"
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
            />
            {errors.password && <p className="error">{errors.password}</p>}
          </div>
          <div>
            <button className="submit" onClick={handleFormSubmit}>
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
