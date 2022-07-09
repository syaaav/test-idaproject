import CardItem from "../Components/CardItem.jsx";
import "./Catalog.scss";

function Catalog() {
  return (
    <div className="catalog">
      <form>
        <div className="catalog_select">
          <select>
            <option value="default" selected disabled>
              По умолчанию
            </option>
            <option value="priceUp">По возрастанию цены</option>
            <option value="priceDown">По убыванию цены</option>
            <option value="byName">По наименованию</option>
          </select>
        </div>
      </form>
      <div className="catalog_cards">
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
      </div>
    </div>
  );
}

export default Catalog;
