import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Cart.sass";
import EmptyCart from "./EmptyCart";

const Cart = (props) => {
  const CalculateDigitFrequency = (array) => {
    const frequency = {};

    for (let i = 0; i < array.length; i++) {
      const digit = array[i];

      if (frequency[digit]) {
        frequency[digit]++;
      } else {
        frequency[digit] = 1;
      }
    }

    return frequency;
  };

  const StucturizePurchases = (objFreq, items) => {
    const structuredPurchases = [];
    Object.entries(objFreq).forEach(([key, value]) => {
      structuredPurchases[key] = items[key - 1];
      structuredPurchases[key]["count"] = value;
      console.log(structuredPurchases);
    });
    return structuredPurchases;
  };

  const [structuredPurchases, setStructuredPurchases] = useState([]);

  useEffect(() => {
    const buyList = CalculateDigitFrequency(props.purchases);
    const newStructuredPurchases = StucturizePurchases(buyList, props.data);
    setStructuredPurchases(newStructuredPurchases);
  }, [props.purchases, props.data]);

  const ResetPurchases = () => {
    setStructuredPurchases([]);
    props.onPurchasesChange([]);
  };

  const plusItemHandler = (id) => {
    console.log(props.purchases);
    props.onPurchasesChange([...props.purchases, id]);
  };

  const minusItemHandler = (id) => {
    let index = props.purchases.indexOf(id);
    let updatedPurchases = props.purchases.slice(); // Создаем копию массива
    updatedPurchases.splice(index, 1);
    props.onPurchasesChange(updatedPurchases);
  };


  const [isModalOpened, setIsModalOpened] = useState(false);

  const openModal = () => {
    console.log("true")
    setIsModalOpened(true);
  };

  const closeModal = () => {
    console.log("false")
    setIsModalOpened(false);
  };

  const submitDataHandler = (event) => {
    event.preventDefault();
    const formElements = event.target.elements;
    Array.from(formElements).forEach((item) => {
      console.log(item.value);
      if (item.tagName === "INPUT") {
        item.value = "";
      }
      
    });
    console.log(structuredPurchases);
    props.onPurchasesChange([]);
  };

  const { onPurchasesChange, ...newProps } = props;

  const [orderSum, setOrderSum] = useState(0);

  useEffect(() => {
    const sum = structuredPurchases.reduce(
      (acc, item) => acc + item.count * item.newCost,
      0
    );
    setOrderSum(sum);
  }, [structuredPurchases]);

  return structuredPurchases.length === 0 ? (
    <EmptyCart closeModal={closeModal} isModalOpened={isModalOpened} />
  ) : (
    <div className="cart-contanter">
      <div className="cart-contanter__column-1">
        <h1>Контактные данные</h1>
        <form
          className="cart-contanter__column-1__form"
          onSubmit={submitDataHandler}
        >
          <label>Ваши данные</label>
          <input
            className="cart-contanter__column-1__form__input-item"
            placeholder="Имя"
          ></input>
          <input
            className="cart-contanter__column-1__form__input-item"
            placeholder="Номер телефона"
          ></input>
          <input
            className="cart-contanter__column-1__form__input-item"
            placeholder="Email"
          ></input>
          <label>Способ оплаты</label>
          <p className="p-text">Картой или наличными курьеру</p>
          <label>Адрес</label>
          <input
            className="cart-contanter__column-1__form__input-item"
            placeholder="Город"
          ></input>
          <input
            className="cart-contanter__column-1__form__input-item"
            placeholder="Улица"
          ></input>
          <input
            className="cart-contanter__column-1__form__input-item"
            placeholder="Дом и кв."
          ></input>
          <h4 style={{ marginTop: "8px" }}>Сумма заказа: {orderSum} &#8381;</h4>
          <button
            className="button-main cart-button"
            type="submit"
            style={{ width: "95%", marginTop: "8px" }}
            onClick={openModal}
          >
            <p>Заказать</p>
          </button>
        </form>
      </div>

      <div className="cart-contanter__column-2">
        <div className="cart-contanter__column-2__title-block">
          <h1>Корзина</h1>
          <button
            onClick={ResetPurchases}
            className="button-main cart-button red-button"
          >
            <p className="cart-button__text">Очистить корзину</p>
          </button>
        </div>
        {structuredPurchases.map((item) => {
          if (item.count === 0) {
            return null; // Игнорировать элемент с item.count = 0
          }
          return (
            <div key={item.id} className="product-cart">
              <div className="product-cart__left">
                <div className="product-cart__left__img-container">
                  <img
                    className="product-cart__left__img-container__image"
                    src={item.imageURL}
                    alt="изображение"
                  ></img>
                </div>
              </div>
              <div className="product-cart__right">
                <div>
                  <h2 className="title-main" style={{ fontSize: "22px" }}>
                    {item.title}
                  </h2>
                  <p className="card-desctiption p-text">{item.weight} гр.</p>
                  <br></br>
                  <p className="item-cost" style={{ marginTop: "12px" }}>
                    {item.newCost} &#8381;
                  </p>
                  <div
                    className="product-card__info__many-to-cart p-text"
                    style={{ marginTop: "12px", width: "100%" }}
                  >
                    <div className="product-card__info__to-cart">
                      <button
                        style={{
                          borderRadius: "12px 0px 0px 12px",
                          width: "40px",
                        }}
                        className="product-card__info__to-cart__button 
                  product-card__info__to-cart__button__counter"
                        onClick={() => minusItemHandler(item.id)}
                      >
                        -
                      </button>
                    </div>
                    <div
                      style={({ display: "flex" }, { justifyItems: "center" })}
                    >
                      <span
                        className="product-card__info__to-cart__about-item"
                        style={{ fontWeight: "500" }}
                      >
                        {item.count} шт.
                      </span>
                      <span
                        className="product-card__info__to-cart__about-item"
                        style={{ fontWeight: "500" }}
                      >
                        {item.count * item.newCost} &#8381;
                      </span>
                    </div>
                    <div className="product-card__info__to-cart">
                      <button
                        style={{
                          borderRadius: "0px 12px 12px 0px",
                          width: "40px",
                        }}
                        className="product-card__info__to-cart__button
                   product-card__info__to-cart__button__counter"
                        onClick={() => plusItemHandler(item.id)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
