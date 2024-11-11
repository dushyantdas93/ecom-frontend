import React from "react";
import Layout from "../conponents/layout/Layout";
import { useAuth } from "../context/auth.jsx";

const Home = () => {
  const [auth, setAuth] = useAuth();
  return (
    <Layout>
      <h1>hwklj</h1>
      <pre>{JSON.stringify(auth, null, 4)}</pre>
    </Layout>
  );
};

export default Home;
