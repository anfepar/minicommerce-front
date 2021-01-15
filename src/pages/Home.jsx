import camera from "../assets/images/camera.png";
import "../assets/styles/main.css";

function Home() {
  return (
    <div className="App">
      <header id="header">
        <div className="content">
          <h1>
            <a href="#">Canon EOS Rebel T6</a>
          </h1>
          <p>La cámara con la calidad que sus fotos merecen</p>
          <ul className="actions">
            <li>
              <button className="button primary ">Comprar ahora</button>
            </li>
          </ul>
        </div>
        <div className="image phone">
          <div className="inner">
            <img src={camera} alt="" />
          </div>
        </div>
      </header>
    </div>
  );
}

export default Home;
