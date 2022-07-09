import CircleApp from "../circle.svg";
import handleSubmit from "../Functions/Submit.js";
import "./Form.scss";

function Form() {
  return (
    <div className="form">
      <div className="header_text">Добавление товара</div>
      <form action="" method="get" className="form_inputs">
        <div className="input_field">
          <label className="label">
            Наименование товара
            <div className="flag_field">
              <img src={CircleApp} className="flag" alt="required field" />
            </div>
          </label>
          <input
            type="text"
            id="title"
            placeholder="Введите наименование товара"
            className="input"
            required
          />
        </div>
        <div className="input_field">
          <label className="label">Описание товара</label>
          <textarea
            cols="34"
            rows="3"
            id="def"
            placeholder="Введите описание товара"
            className="textarea"
          />
        </div>
        <div className="input_field">
          <label className="label">
            Ссылка на изображение
            <div className="flag_field">
              <img src={CircleApp} className="flag" alt="required field" />
            </div>
          </label>
          <input
            type="url"
            id="link"
            placeholder="Введите ссылку"
            className="input"
            required
          />
        </div>
        <div className="input_field">
          <label className="label">
            Цена товара
            <div className="flag_field">
              <img src={CircleApp} className="flag" alt="required field" />
            </div>
          </label>
          <input
            type="number"
            id="price"
            placeholder="Введите цену"
            className="input"
            required
          />
        </div>
        <button
          type="button"
          className="button"
          onClick={() => handleSubmit("title", "def", "price")}
        >
          Добавить товар
        </button>
      </form>
    </div>
  );
}

export default Form;
