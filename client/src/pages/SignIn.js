// import { Header } from "../components/Header/Header";
// import React from "react"







// export const SignIn = () => {

//   const [name, setNAme] = useState("GFG");

//   const handleChange = () => ();


//   return(
//     <div>
//       <Header title="Sign In" />
//       <form>
//         <input value={name} onChange={handleChange}/>
//       </form>
//       <h1>hello</h1>
//     </div>
    
//   )
// };

import { useState } from 'react';


export function SignIn() {

// States for registration
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');


return (
  <div className="form">
    <div>
      <h1>Sign In</h1>
    </div>

 
    <form>
      {/* Labels and inputs for form data */}
      <label className="label">Email</label>
      <input className="input"
        value={email} type="email" />

      <label className="label">Password</label>
      <input className="input"
        value={password} type="password" />

      <button className="btn" type="submit">
        Submit
      </button>
    </form>
  </div>
);
}