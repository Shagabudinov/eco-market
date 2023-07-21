import React from "react";
import "./EmptyCart.sass";
import emptyCart from "../img/empty-cart.png";

const EmptyCart = (props) => {
  return (
    <div>
      {props.isModalOpened ? (
        
        <div className="modal-overlay">
          <div className="order-modal-container">
            <p>Заказ успешно оформлен!</p>
            <button onClick={props.closeModal}>Х</button>
          </div>
        </div>
      ) : (
        <div className="empty-cart-container">
          <img src={emptyCart} alt="Изображение" />
          <p className="empty-cart-container__title">Ваша корзина пуста</p>
        </div>
      )}
    </div>
  );
};

export default EmptyCart;
