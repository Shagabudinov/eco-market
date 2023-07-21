import { useLocation } from "react-router-dom";
import ProductCard from "./ProductCard";

const CategoryPage = (props) => {
  const transliteration = require("transliteration");
  const itemList = props.data;
  const category = useLocation();
  console.log(category.pathname.replace(/^\//, ""));

  return (
    <div className="sales-container">
      {itemList.map((item) => {
        console.log(transliteration.transliterate(item.category));
        if (
          category.pathname.replace(/^\//, "") ===
          transliteration.transliterate(item.category)
        ) {
          return (
            <ProductCard
              key={item.id}
              {...item}
              purchases={props.purchases}
              onPurchasesChange={props.onPurchasesChange}
            />
          );
        }
        console.log(category.pathname.replace(/^\//, ""));
        return null;
      })}
    </div>
  );
};

export default CategoryPage;
