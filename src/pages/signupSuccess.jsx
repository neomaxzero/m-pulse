import React from "react";
import { Link } from "react-router-dom";

const SignUpSuccess = () => (
  <p>
    Sign-up success!
    <Link to="/login"> Click here to login</Link>
  </p>
);

export default SignUpSuccess;
