import { Link } from "react-router-dom";
import React, { useState } from "react";
import Refund from "../components/Refund";
const Item = ({ transaction }) => {
  const [refund, setRefund] = useState(false);
  const handleRefund = () => {
    setRefund(true);
  };

  const closeRefund = () => {
    setRefund(false);
  };
  return (
    <tr>
      <th>{transaction._id}</th>
      <th>{transaction.product}</th>
      <th>{transaction.quantity}</th>
      <th>{transaction.status}</th>
      <Link to={`/payment/${transaction._id}`}>Verificar pago</Link>
      {transaction.status === "paid" && !refund && (
        <th>
          <button onClick={handleRefund}>Reembolsar</button>
        </th>
      )}
      {refund && (
        <Refund onClose={closeRefund} transactionId={transaction._id} />
      )}
    </tr>
  );
};
export default Item;
