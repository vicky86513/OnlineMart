import React, {
  useCallback,
  useContext,
  useMemo,
  useReducer,
  useState
} from "react";
import offer1 from '../../images/offer1.png'
import "./Login.css";

const LoginForm = (props) => {
 

  let [valueState, setValue] = React.useState({
    name: "",
    email: "",
    pass: "123",
    npass: "123",
    state: "Assam"
  });

  let [err, seterr] = React.useState(false);
  let [errtext, seterrtxt] = React.useState("");

  function handleInputChange(e) {
    setValue({
      ...valueState,
      [e.target.name]: e.target.value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (
      !valueState.name ||
      !valueState.email ||
      !valueState.pass ||
      !valueState.npass
    ) {
      seterr(true);
      seterrtxt("Some fields are missing");
    } else if (valueState.name.length < 2) {
      seterr(true);
      seterrtxt("Name is too small");
    } else if (valueState.pass !== valueState.npass) {
      seterr(true);
      seterrtxt("Values do not match");
    } else {
      seterr(false);
      props.changeData(valueState.name);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="input_group">
        <label className="input_label red_star">
          <span className="label_text">Name</span>
        </label>
        <input
          className="input "
          name="name"
          required
          value={valueState.name}
          onChange={handleInputChange}
        />
      </div>
      <div className="input_group">
        <label className="input_label red_star">
          <span className="label_text">Email</span>
        </label>
        <input
          className="input"
          name="email"
          required
          type="email"
          value={valueState.email}
          onChange={handleInputChange}
        />
      </div>
      <div className="input_group">
        <label className="input_label red_star">
          <span className="label_text">Password</span>
        </label>
        <input
          className="input"
          name="pass"
          type="password"
          value={valueState.pass}
          required
          onChange={handleInputChange}
        />
      </div>
      <div className="input_group">
        <label className="input_label red_star">
          <span className="label_text">Re eneter your password</span>
        </label>
        <input
          className="input"
          name="npass"
          type="password"
          value={valueState.npass}
          required
          onChange={handleInputChange}
        />
      </div>
      <div className="input_group">
        <label className="input_label">
          <span className="label_text">State</span>
        </label>
        <select onChange={handleInputChange} value={valueState.state}>
          <option value="Assam">Assam</option>
          <option value="Bihar">Bihar</option>
          <option value="Goa">Goa</option>
          <option value="Punjab">Punjab</option>
  <option value="Jharkhand">Jharkhand</option>
          <option value="Orissa">Orissa</option>
          <option value="WestBengal">WestBengal</option>
 <option value="Maharashtra">Maharashtra</option>
          <option value="Karnatka">WestBengal</option>
     <option value="Kerala">Kerala</option>
        </select>
      </div>
      {err ? <div className="err">{errtext}</div> : null}
      <button
        type="submit"
        value="Submit"
        className="button button_wide"
        onClick={handleSubmit}
      >
        Create your account
      </button>
    </form>
  );
};

const Login = (props) => {
  return (
    <div className="login-wrapper">
      <div className="login-form">
        <div className="banner-img">
          <img
            alt="img"
            src={offer1}
          />
        </div>
        {/* FORM ELEMENT STARTS HERE */}
        <div className="form-container">
          <LoginForm changeData={props.changeData} />
        </div>
      </div>
    </div>
  );
};

export default Login;
