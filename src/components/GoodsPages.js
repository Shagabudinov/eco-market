import { useLocation, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./GoodsPages.sass";
import "../components/styles/fontStyles.sass";

const GoodsPage = (props) => {
  console.log(useLocation().state);
  const {
    id,
    description,
    imageURL,
    newCost,
    title,
    weight,
    ingredients,
    expiryDays,
    energyValuePer100g,
  } = useLocation().state;


  const count = props.purchases.filter((item) => item === id).length;

  const plusItemHandler = () => {
    props.onPurchasesChange([...props.purchases, id]);
  };

  const buttonNewPressHadler = () => {
    props.onPurchasesChange([...props.purchases, id]);
  };

  const minusItemHandler = () => {
    let index = props.purchases.indexOf(id);
    let updatedPurchases = props.purchases.slice(); // Создаем копию массива
    updatedPurchases.splice(index, 1);
    props.onPurchasesChange(updatedPurchases);
  };

  return (
    <div className="goods-container">
      <div className="goods-container__info-about-item">
        <h3 className="title-main">{title}</h3>
        <p className="card-desctiption p-text">{weight} гр.</p>
        <p className="p-text" style={{ fontSize: "20px" }}>
          {description}.
        </p>
        <p
          className="p-text"
          style={{
            fontSize: "20px",
            opacity: "0.5",
            fontWeight: "500",
            marginTop: "16px",
          }}
        >
          Срок годности:
        </p>
        <p className="p-text" style={{ fontSize: "20px" }}>
          {expiryDays} дней
        </p>
        <p
          className="p-text"
          style={{
            fontSize: "20px",
            opacity: "0.5",
            fontWeight: "500",
            marginTop: "16px",
          }}
        >
          Пищевая ценность на 100г.:
        </p>
        <p className="p-text" style={{ fontSize: "20px" }}>
          Белки: {energyValuePer100g.proteins} г; Жиры:{" "}
          {energyValuePer100g.fatContent} г; Углеводы:{" "}
          {energyValuePer100g.carbContent} г; {energyValuePer100g.kcal} ккал
        </p>
        <p
          className="p-text"
          style={{
            fontSize: "20px",
            fontWeight: "500",
            opacity: "0.5",
            marginTop: "16px",
          }}
        >
          Состав:
        </p>
        <ul className="p-text">
          {ingredients.map((item) => (
            <li
              style={{
                fontSize: "18px",
                fontWeight: "400",
                marginLeft: "20px",
                color: "black",
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="goods-container__img-container">
        <div className="imggg">
          <img src={imageURL} alt="изображение"></img>
        </div>
        <div className="goods-container__title-container">
          <p className="item-cost p-text">{newCost} &#8381;</p>
          <div className="p-text cost">
            

            


            {props.purchases.indexOf(id) === -1 ? (
              <button
                onClick={buttonNewPressHadler}
                className="product-card__info__to-cart__button"
              >
                В корзину
              </button>
            ) : (
              <div className="product-card__info__many-to-cart">
                <div className="product-card__info__to-cart">
                  <button
                    style={{ borderRadius: "12px 0px 0px 12px" }}
                    className="product-card__info__to-cart__button 
                  product-card__info__to-cart__button__counter"
                    onClick={minusItemHandler}
                  >
                    -
                  </button>
                </div>
                <div style={({ display: "flex" }, { justifyItems: "center" })}>
                  <span className="product-card__info__to-cart__about-item">
                    {count} шт.
                  </span>
                  <span className="product-card__info__to-cart__about-item">
                    {count * newCost} &#8381;
                  </span>
                </div>
                <div className="product-card__info__to-cart">
                  <button
                    style={{ borderRadius: "0px 12px 12px 0px" }}
                    className="product-card__info__to-cart__button
                   product-card__info__to-cart__button__counter"
                    onClick={plusItemHandler}
                  >
                    +
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoodsPage;
