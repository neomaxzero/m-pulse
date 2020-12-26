import React, { useState } from "react";
import { Auth } from "aws-amplify";
import styled from "styled-components";
import { useForm } from "react-hook-form";

import Layout from "../Layout";
import { Link } from "react-router-dom";

const Input = styled.div``;

const ErrorMessage = styled.div`
  color: red;
`;
const Login = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    setLoading(true);
    const { user: username, password } = data;

    try {
      const user = await Auth.signIn(username, password);
      console.log(user);
    } catch (error) {
      setError(error);
    }

    setLoading(false);
  };

  return (
    <Layout>
      <ErrorMessage>{error && error.message}</ErrorMessage>
      <form id="login" onSubmit={handleSubmit(onSubmit)}>
        <Input>
          <label htmlFor="name">User:</label>
          <input type="text" id="name" name="user" required ref={register()} />
        </Input>
        <Input>
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            type="password"
            name="password"
            required
            ref={register()}
          />
        </Input>
        <div>
          {loading ? <p>Loading...</p> : <button type="submit">Log in</button>}
        </div>
        <Link to="/signup">Sign-up</Link>
      </form>
    </Layout>
  );
};

export default Login;