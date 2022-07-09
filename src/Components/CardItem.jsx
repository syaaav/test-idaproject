import CardImg from "../polaroid.png";
import "./Catalog.scss";

function CardItem() {
  return (
    <div className="card">
      <div className="card_img">
        <img src={CardImg} alt="item" />
      </div>
      <div className="card_title">Наименование товара</div>
      <div className="card_def">
        Довольно-таки интересное описание товара в несколько строк.
        Довольно-таки интересное описание товара в несколько строк
      </div>
      <div className="card_price">10000 руб.</div>
    </div>
  );
}

export default CardItem;
