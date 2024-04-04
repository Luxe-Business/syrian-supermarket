import React, { useState } from "react";
import { ButtonShob, CardItemShop } from "../../data/Shopitems";
import ProductCard from "./ProductCard";
import { useGlobalContext } from "../../context/language";

const OurShop: React.FC = () => {
  const { mode } = useGlobalContext();
  const [activeIndex, setActiveIndex] = useState<number>();
  return (
    <div className="bg-zinc-300 pb-3">
      <h1 className="text-4xl font-serif text-center text-gray-500 pt-10">
        {mode == "Eng"
          ? "Discover Quality at Our Shop"
          : "اكتشف الجودة في متجرنا"}
      </h1>
      <p className="text-center mx-auto max-w-2xl pt-2 text-gray-500">
        {mode == "Eng"
          ? "Welcome to Our Shop, where quality meets convenience. Explore our carefully curated selection of premium products, meticulously sourced to elevate your everyday experiences. From fresh produce to gourmet treats, each item in our shop is chosen with your satisfaction in mind. With fast delivery and exceptional customer service, shopping with us is always a pleasure. Start browsing now and discover the finest selection just for you."
          : "مرحبًا بك في متجرنا، حيث تجتمع الجودة والراحة. استكشف اختيارنا بعناية من المنتجات الراقية، التي تم اختيارها بعناية لتعزيز تجاربك اليومية. من المنتجات الطازجة إلى الأطعمة الشهية، يتم اختيار كل عنصر في متجرنا مع مراعاة رضاك. مع التوصيل السريع والخدمة الاستثنائية للعملاء، التسوق معنا دائمًا متعةابدأ التصفح الآن واكتشف أجمل التشكيلات خصيصًا لك."}
      </p>
      <div className="flex justify-center flex-wrap gap-4 pt-10">
        {ButtonShob.map((button, index) => (
          <button
            key={index}
            className={`text-gray-900 hover:text-white uppercase border border-green-300 ${
              activeIndex === index
                ? "bg-green-600 text-white"
                : "hover:bg-green-600"
            } focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5   ${
              activeIndex === index ? "bg-green-600" : "hover:bg-green-600"
            } dark:focus:ring-gray-700 transition-colors duration-300`}
            onClick={() => setActiveIndex(index)}
          >
            {mode == "Eng" ? button.title : button.titleArabic}
          </button>
        ))}
      </div>
      <div className=" grid grid-cols-1 lg:grid-cols-3 gap-5 px-5 pt-10">
        {CardItemShop.map((card, index) => (
          <ProductCard
            key={index}
            title={mode == "Eng" ? card.title : card.titleArabic}
            img={card.img}
          />
        ))}
      </div>
    </div>
  );
};

export default OurShop;
