import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { useFormInput } from "../customHooks/useFormInput";
import { AuthContext } from "../providers/AuthProvider";
const Register = (props) => {
  const email = useFormInput("testx@test.com", "Email");
  const password = useFormInput("123456", "Password");
  const firstName = useFormInput("","First Name")
  const lastName = useFormInput("", "Last Name")
  const cohort = useFormInput("", "Cohort")

  const passwordConfirmation = useFormInput("123456", "password Confirmation");
  const { handleRegister, authLoading, authErrors } = useContext(AuthContext);
  const history = useHistory();
  // history.push('/pathname') => will take us to route
  const handleSubmit = (e) => {
    //need to do this
    e.preventDefault();
    // maybe check valid email, etc
    if (password.value !== passwordConfirmation.value) {
      alert("passwords don not match");
    } else {
      // regisiter user
      handleRegister(
        {
          email: email.value,
          password: password.value,
          first_name: firstName.value,
          last_name: lastName.value,
          cohort: cohort.value,
        },
        history
      );
    }
  };
  // if (authLoading) {
  //   return (
  //     <>
  //       <p>loading</p>
  //     </>
  //   );
  // }
  return (
    <div>
      {authErrors && (
        <>
          {authErrors.map((err) => (
            <p>{err}</p>
          ))}
        </>
      )}
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <p>{email.label}</p>
        <input autoFocus {...email} />
        <p>{firstName.label}</p>
        <input autoFocus {...firstName} />
        <p>{lastName.label}</p>
        <input autoFocus {...lastName} />
        <p>{cohort.label}</p>
        <input autoFocus {...cohort} />
        <p>{password.label}</p>
        <input type="password" {...password} />
        <p>{passwordConfirmation.label}</p>
        <input type="password" {...passwordConfirmation} />
        {authLoading ? (
          <button disabled> spinner goes here</button>
        ) : (
          <button type="submit">register</button>
        )}
      </form>
    </div>
  );
};
export default Register;