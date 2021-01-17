import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchGet } from "../utils/fetchApi";
import "../assets/styles/main.css";
import bill from "../assets/images/bill.png";
import errorIcon from "../assets/images/error.png";
import Item from "../components/Item";

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    fetchGet(`transactions`)
      .then((transactions) => {
        setLoading(false);
        setTransactions(transactions);
      })
      .catch((err) => {
        setLoading(false);
        setError(err);
      });
  }, [setTransactions, setLoading, setError]);
  return (
    <section id="table">
      {loading ? (
        <h2>{"Loading ..."}</h2>
      ) : (
        <section>
          <Link to="/" className="button primary ">
            {"< Volver al Home"}
          </Link>
          <table className="content">
            <thead>
              <th>ID</th>
              <th>PRODUCTO</th>
              <th>CANTIDAD</th>
              <th>ESTADO</th>
            </thead>
            <tbody>
              {transactions.map((transaction) => (
                <Item key={transaction._id} transaction={transaction} />
              ))}
            </tbody>
          </table>
        </section>
      )}
    </section>
  );
};

export default Transactions;
