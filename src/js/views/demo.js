import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/demo.css";

export const Demo = () => {
  const { store, actions } = useContext(Context);

  return (
    < na className="container">
      {/* Bootstrap form */}
      < na className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          name
        </label>
        <input
          type="name"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="name"
        />
        <label htmlFor="exampleFormControlInput1" className="form-label">
          address
        </label>
        <input
          type="address"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="address"
        />
        <label htmlFor="exampleFormControlInput1" className="form-label">
          phone
        </label>
        <input
          type="phone"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="phone"
        />
        <label htmlFor="exampleFormControlInput1" className="form-label">
          email
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="email"
        />
      </ na>

      {/* List group with demo items */}
     

      {/* Back home button */}
      <br />
      <Link to="/">
        <button className="btn btn-primary">Back home</button>
      </Link>
    </ na>
  );
};
