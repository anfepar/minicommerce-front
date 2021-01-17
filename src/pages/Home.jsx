import { useState, useEffect } from "react";
import game from "../assets/images/game.png";
import "../assets/styles/main.css";
import { fetchPost } from "../utils/fetchApi";

function Home() {
  const [deepLink, setDeepLink] = useState(null);
  const [quantity, setQuanity] = useState(1);
  useEffect(() => {
    if (deepLink) {
      window.location.href = deepLink;
    }
  }, [deepLink]);

  const handleQuantityChange = (e) => {
    setQuanity(parseInt(e.target.value));
  };

  const handlePayment = () => {
    fetchPost("transactions/generatePayment", {
      product: "0001",
      quantity,
    }).then((res) => {
      setDeepLink(res.tpaga_payment_url);
    });
  };

  return (
    <div>
      <section id="header">
        <div className="content">
          <h1>
            <a href="#">Old School Game</a>
          </h1>
          <p>
            Cansado de esperar en filas o salas de espera<br></br> Con Old
            School Game diviértete esperando
          </p>
          <ul className="actions">
            <li>
              <input
                onChange={handleQuantityChange}
                className="actions__input"
                type="number"
                min="1"
                max="1000"
                placeholder="Selecciona la cantidad"
              />
            </li>
            <li>
              <button onClick={handlePayment} className="button primary ">
                Comprar ahora
              </button>
            </li>
          </ul>
        </div>
        <div className="image phone">
          <div className="inner">
            <img src={game} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
