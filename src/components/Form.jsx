import React, { useState } from "react";
import "./Form.scss";
import { useDispatch, useSelector } from "react-redux";
import { changeName } from "../redux/userSlice";

const Form = () => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const handleClick = (e) => {
    e.preventDefault();

    dispatch(changeName({ name }));
    console.log(name);
  };
  return (
    <div className="form-container">
      <h2>Yello {user.name}</h2>
      <form className="form">
        <p>
          <input
            type="text"
            name="name"
            placeholder={user.name}
            onChange={(e) => {
              setName(e.target.value);
              console.log(e.target.value);
            }}
          />
        </p>

        <button disabled={user.pending} type="submit" onClick={handleClick}>
          Change Name
        </button>
        {user.pending === false && (
          <span className="success">Account Updated Successfully</span>
        )}
      </form>
    </div>
  );
};

export default Form;
