import React from "react";
import app from "./FirebaseConfig/FirebaseConfig";
import DataTable from "./DataTable";
import Fbconfig from './FirebaseConfig/FirebaseConfig'
import Navigation from './Navigation'

const Home = () => {
    let user = Fbconfig.auth().currentUser;
    let useremail;

      if (user) {
        useremail = user.email;
        console.log("dsako[das[oads[oasd[kdkads"+useremail);
      } else {
        // No user is signed in.
      }
  return (
    <React.Fragment>
        <Navigation signedin={useremail ? useremail : "Not Signed in"} />
      {/* <button onClick={() => app.auth().signOut()}>Sign out</button> */}
      <DataTable />
    </React.Fragment>
  );
};

export default Home;