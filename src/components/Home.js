import React from "react";
import app from "./FirebaseConfig/FirebaseConfig";
import DataTable from "./DataTable";

const Home = () => {
  return (
    <React.Fragment>
      <button onClick={() => app.auth().signOut()}>Sign out</button>
      <DataTable />
    </React.Fragment>
  );
};

export default Home;