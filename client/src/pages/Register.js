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
        </form>
      </div>
    </div>
  );
};
