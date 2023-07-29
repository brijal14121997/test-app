import React from "react";

const Product = () => {
  return (
    <section id="product">
      <div className="flex flex-col md:mt-52 mt-5">
        <div className="flex flex-row justify-between items-center">
          <span className="md:text-[64px] text-xl font-normal">
            Product Range
          </span>
          <span className="md:text-2xl text-base font-medium">View all</span>
        </div>
        <div className="grid md:grid-cols-3 gap-3">
          <div className="col-span-2 grid md:grid-rows-2 grid-cols-2 gap-3">
            <img
              src="/images/product1.png"
              alt="product1"
              className="h-[310px]"
            />
            <img
              src="/images/product2.png"
              alt="product2"
              className="h-[315px]"
            />
            <img
              src="/images/product3.png"
              alt="product3"
              className="h-[310px]"
            />
            <div className="relative">
              <img
                src="/images/product4.png"
                alt="product4"
                className="h-[310px]"
              />
              <div className="absolute md:-mt-52 ml-40">
                <img
                  src="/images/bottle.png"
                  alt="product4"
                  className="h-[310px]"
                />
              </div>
            </div>
          </div>
          <div>
            <img src="/images/product5.png" alt="product5"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
