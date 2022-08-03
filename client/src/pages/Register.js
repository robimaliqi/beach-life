import { Header } from "../components/Header/Header";

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
        </form>
      </div>
    </div>
  );
};
