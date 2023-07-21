import { Link, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Arrows from "../img/123.svg";
import "./ProductCard.sass";

const ProductCard = (props) => {
  const { title, newCost, weight, imageURL, id, sale } = props;
  const { onPurchasesChange, ...newProps } = props;
  const count = props.purchases.filter((item) => item === id).length;

  const plusItemHandler = () => {
    props.onPurchasesChange([...props.purchases, props.id]);
  };

  const buttonNewPressHadler = () => {
    props.onPurchasesChange([...props.purchases, props.id]);
  };

  const minusItemHandler = () => {
    let index = props.purchases.indexOf(id);
    let updatedPurchases = props.purchases.slice(); // Создаем копию массива
    updatedPurchases.splice(index, 1);
    props.onPurchasesChange(updatedPurchases);
  };

  const [isImageHovered, SetIsImageHovered] = useState(false);

  const HoverImage = () => {
    SetIsImageHovered(true);
  };

  const UnhoverImage = () => {
    SetIsImageHovered(false);
  };

  return (
    <div
      className="product-card"
      onMouseEnter={HoverImage}
      onMouseLeave={UnhoverImage}
    >
      <Link to={`/goods/${id}`} state={newProps}>
        <div className="photo">
          <img
            className={
              isImageHovered
                ? "product-card__image hovered-image"
                : "product-card__image"
            }
            src={imageURL}
            alt="изображение"
          ></img>
            <div className="item-moved">{weight} гр.</div>
        </div>
      </Link>
      <hr className="product-card__hr" />
      <div className="product-card__info">
        <Link to={`/goods/${id}`} state={newProps}>
          <h2 className="product-card__info__title">{title} </h2>
        </Link>
        <div className="product-card__info__meta">
          <div className="item-cost">{newCost} &#8381;</div>
          {sale ? (
            <span className="product-card__info__meta__new">
              <p>Новинка!</p>
            </span>
          ) : null}
        </div>
        <div className="product-card__info__to-cart">
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
  );
};

export default ProductCard;
