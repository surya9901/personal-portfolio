import React, { useState } from "react";
import Categories from "../components/Categories";
import Menu from "../components/Menu";
import Title from "../components/Title";
import portfolios from "../components/Portfolios";

const allCategories = [
  "All",
  ...new Set(portfolios.map((item) => item.category)),
];

const PortfolioPage = () => {
  const [categories] = useState(allCategories);
  const [menuItems, setMenuItems] = useState(portfolios);

  const filter = (category) => {
    if (category === "All") {
      setMenuItems(portfolios);
      return;
    }
    const filteredData = portfolios.filter((item) => {
      return item.category === category;
    });
    setMenuItems(filteredData);
  };

  return (
    <div className="PortfolioPage">
        <Title className="title" title={"Portfolios"} span={"Portfolios"} />
     
      <div className="portfolios-data">
        <Categories filter={filter} categories={categories} />
        <Menu menuItems={menuItems} />
      </div>
    </div>
  );
};

export default PortfolioPage;
