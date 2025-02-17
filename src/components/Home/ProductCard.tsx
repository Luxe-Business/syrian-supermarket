import React from "react";

interface CardItem {
  title: string;
  img: string;
}

const ProductCard: React.FC<CardItem> = ({ title, img }) => {
  return (
    <div className="max-w-sm mx-auto bg-green-700 border border-gray-200 rounded-lg shadow-md transition-all duration-300 ease-in-out dark:bg-green-700 dark:border-gray-200 overflow-hidden group mb-8">
      <div className="w-full  bg-gray-200 overflow-hidden">
        <img className="object-cover w-full h-full" src={img} alt="Product" />
      </div>
      <div className="px-5 pb-5">
        <h5 className="text-xl font-semibold tracking-tight text-white dark:text-white mt-5 text-center">
          {title}
        </h5>
      </div>
    </div>
  );
};

export default ProductCard;
