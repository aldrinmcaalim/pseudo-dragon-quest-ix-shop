import { Fragment } from "react";
import "./navigation.styles.scss";

import { Outlet, Link } from "react-router-dom";

const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link to="/" className="logo-container">
          <div className="logo">Dragon Quest</div>
        </Link>
        <div className="navigation-links-container">
          <Link to="shop" className="navigation-link">
            SHOP
          </Link>
        </div>
        <Outlet />
      </div>
    </Fragment>
  );
};

export default Navigation;
