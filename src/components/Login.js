import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import app from "../components/FirebaseConfig/FirebaseConfig";
import { AuthContext } from "./Auth.js";
import Fbconfig from './FirebaseConfig/FirebaseConfig'
import Navigation from './Navigation'

const Login = ({ history }) => {

  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);
  let user = Fbconfig.auth().currentUser;
    let useremail;

      if (user) {
        useremail = user.email;
        console.log("dsako[das[oads[oasd[kdkads"+useremail);
      } else {
        // No user is signed in.
      }
  if (currentUser) {
    return <Redirect to="/" />;
  }
  const demoMethod= (email) =>{ 
    this.props.sendData(email.value);
  }
  return (
    <div>
        <Navigation signedin={useremail ? useremail : "Not Signed in"} />
      <h1>Log in</h1>
      <form onSubmit={handleLogin}>
        <label>
          Email
          <input name="email" type="email" placeholder="Email" />
        </label>
        <label>
          Password
          <input name="password" type="password" placeholder="Password" />
        </label>
        <button type="submit">Log in</button>
      </form>
    </div>
  );
};

export default withRouter(Login);