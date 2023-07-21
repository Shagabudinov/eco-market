import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "../App.sass";

const Layout = (props) => {
  return (
    <div className="layout-wrapper">
      <Header
        cartInfo={props.cartInfo}
        onCartInfoChange={props.onCartInfoChange}
      />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
