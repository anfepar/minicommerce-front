import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchGet } from "../utils/fetchApi";
import "../assets/styles/main.css";
import bill from "../assets/images/bill.png";
import errorIcon from "../assets/images/error.png";

const Payment = () => {
  const { id } = useParams();
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    fetchGet(`transactions/checkPayment/${id}`)
      .then((transaction) => {
        setLoading(false);
        if (transaction.status) {
          setStatus(transaction.status);
        } else {
          setError(true);
        }
      })
      .catch((err) => {
        setLoading(false);
        setError(true);
      });
  }, [id, setStatus, setLoading, setError]);
  return (
    <section id="main">
      {loading ? (
        <h2>{"Loading ..."}</h2>
      ) : (
        <div className="content">
          <h1>
            {error
              ? `ha ocurrido un problema con tu pago`
              : `tu pago esta en estado ${status}`}
          </h1>
          <ul className="actions">
            <li>
              <Link to="/" className="button primary ">
                Volver al Home
              </Link>
            </li>
          </ul>
        </div>
      )}

      <div className="image phone">
        <div className="inner">
          <img src={error ? errorIcon : bill} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Payment;
