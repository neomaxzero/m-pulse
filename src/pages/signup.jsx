import React, { useState } from "react";
import { Auth } from "aws-amplify";
import styled from "styled-components";
import { useForm } from "react-hook-form";

import Layout from "../Layout";
import SignUpConfirmation from "./signupConfirmation";

const Input = styled.div``;

const ErrorMessage = styled.div`
  color: red;
`;

const SignUp = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const { register, handleSubmit, watch, errors, getValues } = useForm();
  const onSubmit = async (data) => {
    setLoading(true);
    const { user: username, password } = data;
    try {
      const { user } = await Auth.signUp({
        username,
        password,
        attributes: {
          email: username,
        },
      });
      setSuccess(username);
      console.log(user);
    } catch (error) {
      setError(error);
      console.log("error signing up:", error);
    }
    setLoading(false);
  };

  if (success)
    return (
      <Layout>
        <SignUpConfirmation username={success} />
      </Layout>
    );

  return (
    <Layout>
      <h1>Sign Up</h1>
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
          {loading ? <p>Loading...</p> : <button type="submit">Sign Up</button>}
        </div>
      </form>
    </Layout>
  );
};

export default SignUp;
