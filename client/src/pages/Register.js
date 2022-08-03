import { Header } from "../components/Header/Header";

const handleFormSubmit = (event) => {
  event.preventDefault();
};

export const Register = () => {
  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          <Header title="Register" />
        </div>
        <form className="form-wrapper">
          <div className="name">
            <label clasName="label">Full Name</label>
            <input className="input" type="text" />
          </div>
          <div className="email">
            <label clasName="label">Email</label>
            <input className="input" type="email" />
          </div>
          <div className="password">
            <label clasName="label">Password</label>
            <input className="input" type="password" />
          </div>
          <div>
            <button className="submit" onClick={handleFormSubmit}>
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
