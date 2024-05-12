import React, { Component } from "react";
import Product from "../Product";
import Header from "../Header";
import { IoIosArrowBack } from "react-icons/io";
import Footer from "../Footer";
import "./index.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      error: null,
      totalItem: 0,
    };
  }

  componentDidMount() {
    this.fetchProducts();
  }

  fetchProducts = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }
      const data = await response.json();
      this.setState({ products: data, totalItem: data.length });
    } catch (error) {
      console.error("Failed to fetch products:", error);
      this.setState({ error: error.message });
    }
  };

  render() {
    const { products, error, totalItem } = this.state;

    return (
      <>
        <div className="bg-container">
          <Header />
          <div className="heading-group-container">
            <h1 className="group-heading">DISCOVER OUR PRODUCTS</h1>
            <p className="group-paragraph">
              Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus{" "}
              <br />
              scelerisque. Dolor integer scelerisque nidh amet mi ut elementum
              dolor.
            </p>
          </div>
          <div className="item-filter-recommend-container">
            <div className="hide-item-container">
              <p className="items-count">{totalItem} ITEMS</p>
              <button className="hide-button">
                <IoIosArrowBack /> HIDE FILTER
              </button>
            </div>

            <select className="select-category">
              <option>RECOMMENDED</option>
              <option>NEWEST FIRST</option>
              <option>POPULAR</option>
              <option>PRICE: HIGH TO LOW</option>
              <option>PRICE: LOW TO HIGH</option>
            </select>
          </div>

          {error ? (
            <div>Error: {error}</div>
          ) : (
            <div className="product-card-container">
              {products.map((product) => (
                <Product
                  key={product.id}
                  products={products}
                  eachItem={product}
                />
              ))}
            </div>
          )}
        </div>
        <Footer />
      </>
    );
  }
}

export default Home;
