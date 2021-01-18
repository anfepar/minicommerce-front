import React, { useState } from "react";
import { fetchAuthPost } from "../utils/fetchApi";
import base64 from "base-64";
import "../assets/styles/components/Refund.css";

const Refund = (props) => {
  const { onClose, transactionId } = props;
  const [form, setForm] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleChangeInput = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    fetchAuthPost(
      "transactions/refund",
      { transactionId },
      base64.encode(`${form.username}:${form.password}`)
    )
      .then((res) => {
        console.log(res);
        setLoading(false);
        if (res) {
          if (res.error_message) {
            setError(res.error_message);
          } else {
            onClose();
          }
        } else {
          setError("Ha ocurrido un error");
        }
      })
      .catch((err) => {
        setLoading(false);
        setError(err);
      });
  };
  return (
    <section className="Refund">
      <form>
        <input
          className="Refund___input"
          name="username"
          type="text"
          onChange={handleChangeInput}
          placeholder="Nombre de usuario"
        />
        <input
          className="Refund___input"
          name="password"
          type="password"
          onChange={handleChangeInput}
          placeholder="Password"
        />
        <button
          className="Refund___button"
          type="submit"
          onClick={handleSubmit}
        >
          Reembolsar
        </button>
        <button className="Refund___button" onClick={onClose}>
          Cancelar
        </button>
      </form>
      {loading && <p>{"Loading ..."}</p>}
      {error && <p className="Refund___error">{error}</p>}
    </section>
  );
};
export default Refund;
