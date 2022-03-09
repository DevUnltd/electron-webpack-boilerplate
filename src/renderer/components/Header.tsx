import * as React from "react";
import classnames from "classnames";
import { Link, useLocation } from "react-router-dom";

import "../styles/Header.css";

const headerItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
];

const Header = () => {
  const location = useLocation();
  const [currentPath, setCurrentPath] = React.useState("/");
  React.useEffect(() => {
    setCurrentPath(location.pathname);
  }, [location]);

  return (
    <div className={classnames("header")}>
      {headerItems.map(({ name, path }) => (
        <Link
          to={path}
          className={classnames({ active: path === currentPath })}
          key={name}
        >
          {name}
        </Link>
      ))}
    </div>
  );
};

export default Header;
