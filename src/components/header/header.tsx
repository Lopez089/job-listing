import React from "react";
import "./header.scss";

const Header = (props: any) => {
  return (
    <header className="header">
      <div className="header_wrap">{props.children}</div>
    </header>
  );
};

export default Header;
