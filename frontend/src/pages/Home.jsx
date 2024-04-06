import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import { useEffect } from "react";

const Home = () => {
  const [foodItems, setfoodItems] = useState([]);
  const [foodCat, setfoodCat] = useState([]);
  const [search,setSearch] = useState('')

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const res = await fetch("http://localhost:4000/auth/fooditems");
    const resData = await res.json();
    console.log(resData);
    setfoodItems(resData[0]);
    setfoodCat(resData[1]);
  };

  return (
    <div>
      <Navbar />

      <div>
        <div
          id="carouselExampleFade"
          className="carousel slide carousel-fade "
          data-bs-ride="carousel"
        >
          <div className="carousel-inner " id="carousel">
            <div class=" carousel-caption  " style={{ zIndex: "9" }}>
              <div className=" d-flex justify-content-center">
                <input
                  className="form-control me-2 w-75 bg-white text-dark"
                  type="search"
                  placeholder="search for food..."
                  aria-label="Search"
                  value={search}
                  onChange={(e)=>setSearch(e.target.value)}
                  
                />
              </div>
            </div>
            <div className="carousel-item active">
              <img
                src="https://source.unsplash.com/random/900x700/?burger"
                className="d-block w-100  "
                style={{ filter: "brightness(30%)" }}
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://source.unsplash.com/random/900x700/?pastry"
                className="d-block w-100 "
                style={{ filter: "brightness(30%)" }}
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://source.unsplash.com/random/900x700/?barbeque"
                className="d-block w-100 "
                style={{ filter: "brightness(30%)" }}
                alt="..."
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <div className="container">
        {foodCat.length > 0
          ? foodCat.map((data) => {
              return (
                <div className="row ">
                  <div key={data._id} className="fs-3 m-3">
                    {data.CategoryName}
                  </div>
                  <hr />
                  {foodItems.length > 0
                    ? foodItems
                        .filter(
                          (item) => (item.CategoryName === data.CategoryName) &&  (item.name.toLowerCase().includes(search.toLocaleLowerCase()))
                        )
                        .map((filterData) => {
                          return (
                            <div
                              key={filterData._id}
                              className="col-12 col-md-6 col-lg-3"
                            >
                              <Card
                                foodName={filterData.name}
                                options={filterData.options[0]}
                                img={filterData.img}
                                foodItem = {filterData}
                              />
                            </div>
                          );
                        })
                    : ""}
                </div>
              );
            })
          : ""}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
