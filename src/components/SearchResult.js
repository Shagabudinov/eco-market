import { useLocation } from "react-router-dom";
import ProductCard from "./ProductCard";

export const SearchResult = (props) => {
  const data = props.data;
  const searchBody = decodeURIComponent(
    useLocation().pathname.split("/").pop()
  ).toLowerCase();
  
  
  return (
    <div className="sales-container">
      {data.map((item) => {
        if (
          searchBody === item.category.toLowerCase() ||
          searchBody === item.title.toLowerCase()
        )
          return (
            <ProductCard
              key={item.id}
              {...item}
              purchases={props.purchases}
              onPurchasesChange={props.onPurchasesChange}
            />
          );
        return null;
      })}
    </div>
  );
};
