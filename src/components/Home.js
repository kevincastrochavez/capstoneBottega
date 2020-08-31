import React from "react";
import Product from "./Product";
import CategoryBar from "./CategoryBar";

function Home() {
  return (
    <div className="home">
      <img className="home__image" src="http://via.placeholder.com/1100x200" />

      <div className="home__category-bar">
        <CategoryBar />
      </div>

      <div className="home__products">
        <Product
          id={1}
          name={"product"}
          price={20}
          picture={"https://via.placeholder.com/50x180"}
        />

        <Product
          id={1}
          name={"product"}
          price={20}
          picture={"https://via.placeholder.com/50x180"}
        />

        <Product
          id={1}
          name={"product"}
          price={20}
          picture={"https://via.placeholder.com/50x180"}
        />

        <Product
          id={1}
          name={"product"}
          price={20}
          picture={"https://via.placeholder.com/50x180"}
        />

        <Product
          id={1}
          name={"product"}
          price={20}
          picture={"https://via.placeholder.com/50x180"}
        />

        <Product
          id={1}
          name={"product"}
          price={20}
          picture={"https://via.placeholder.com/50x180"}
        />

        <Product
          id={1}
          name={"product"}
          price={20}
          picture={"https://via.placeholder.com/50x180"}
        />

        <Product
          id={1}
          name={"product"}
          price={20}
          picture={"https://via.placeholder.com/50x180"}
        />
      </div>
    </div>
  );
}

export default Home;
