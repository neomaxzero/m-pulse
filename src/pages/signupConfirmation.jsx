import { Auth } from "aws-amplify";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const SignUpConfirmation = ({ username }) => {
  const [number, setNumber] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const history = useHistory();

  const verify = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      await Auth.confirmSignUp(username, number);
      history.push("/login");
    } catch (err) {
      setError(err.message);
    }

    setLoading(false);
  };

  return (
    <div>
      {error && <p>{error} </p>}
      <form onSubmit={verify}>
        Please fill in the verification code sent to your email:
        <input
          type="text"
          required
          onChange={({ target: { value } }) => setNumber(value)}
        />
        {!loading ? (
          <button type="submit">Verify</button>
        ) : (
          <div> Loading...</div>
        )}
      </form>
    </div>
  );
};

export default SignUpConfirmation;
