import React, {useState, useContext} from "react";
import { Button, Form, FormGroup, Input } from "reactstrap";
import ErrorMessage from "../components/errorMessage";
import useErrorHandler from "../utils/errorHandler";
import { authContext } from "../contexts/authContext";
import { apiRequest, validateLoginForm } from "../utils/helpers";
import { Header } from "../components/styles";

function Login() {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const auth = useContext(authContext);
  const { error, showError } = useErrorHandler(null);
  const authHandler = async () => {
    try {
      setLoading(true);
      const userData = await apiRequest(
        "https://jsonplaceholder.typicode.com/users",
        "post",
        { email: userEmail, password: userPassword }
      );
      const { id, email } = userData;
      auth.setAuthStatus({ id, email });
    } catch (err) {
      setLoading(false);
      showError(err.message);
    }
  };
  return (
    <Form
      onSubmit={e => {
        e.preventDefault();
        if (validateLoginForm(userEmail, userPassword, showError)) {
          authHandler();
        }
      }}
    >
      <Header>Sign in</Header>
      <br />
      <FormGroup>
        <Input
          type="email"
          name="email"
          value={userEmail}
          placeholder="john@mail.com"
          onChange={e => setUserEmail(e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Input
          type="password"
          name="password"
          value={userPassword}
          placeholder="Password"
          onChange={e => setUserPassword(e.target.value)}
        />
      </FormGroup>
      <Button type="submit" disabled={loading} block={true}>
        {loading ? "Loading..." : "Sign In"}
      </Button>
      <br />
      {error && <ErrorMessage errorMessage={error} />}
    </Form>
  );
}
export default Login;
