import React from "react";

function Page() {
  const changeLanguage = (l) => {
    localStorage.setItem("lang-test", l);
  };

  return (
    <div>
      <h3>{localStorage.getItem("lang-test")}</h3>
      <button onClick={() => changeLanguage("en-GB")}>EN</button>
      <button onClick={() => changeLanguage("ru-RU")}>RU</button>
    </div>
  );
}

export default Page;
