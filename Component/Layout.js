import React from "react";
import ThemeSwitch from './ThemeSwitch/ThemeSwitch'

const Layout = ({ children }) => {
  return (
    <div
      className="bg-white dark:bg-gray-800 "
      style={{
        margin: `0 auto`,
      }}
    >
      <ThemeSwitch />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
