import { Link } from "react-router-dom";

const Item = ({ transaction }) => (
  <tr>
    <th>{transaction._id}</th>
    <th>{transaction.product}</th>
    <th>{transaction.quantity}</th>
    <th>{transaction.status}</th>
    <Link to={`/payment/${transaction._id}`}>Verificar pago</Link>
  </tr>
);
export default Item;
