import { Link } from "react-router-dom";
import "./Catalog.sass";

const Catalog = (props) => {
  const transliteration = require("transliteration");

  console.log(props);

  const data = props.data;
  const categoryList = [];

  data.forEach((element) => {
    categoryList.push(element.category);
  });

  const uniqueCategoryList = [...new Set(categoryList)];




  const imageURLsByCategory = {};

  // Проходим по всем позициям данных
  data.forEach((item) => {
    const category = item.category;
    const imageURL = item.imageURL;

    // Проверяем, существует ли уже URL-адрес для данной категории
    if (!imageURLsByCategory[category]) {
      // Если не существует, сохраняем данный URL-адрес для этой категории
      imageURLsByCategory[category] = imageURL;
    }
  });

  return (
    <div className="category-container">
      {uniqueCategoryList.map((item, index) => {
        const englishCategory = transliteration.transliterate(item);
        return (
          <div key={index} className="category-container__box">
            <Link to={`/${englishCategory.replace(" ", "-")}`}>
              <img
                className="product-card__image"
                src={`${imageURLsByCategory[item]}`}
                alt="изображение"
              ></img>
              <div className="category-container__background">
                <p className="category-container__title">{item}</p>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Catalog;
