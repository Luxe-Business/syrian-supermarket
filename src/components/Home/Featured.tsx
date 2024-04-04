import { useGlobalContext } from "../../context/language";

const Featured = () => {
  const { mode } = useGlobalContext();

  return (
    <div className="bg-gray-200 text-center">
      <div>
        <h1 className="text-4xl font-serif text-center pt-20 text-gray-500">
          {mode == "Eng"
            ? "Explore Freshness Every Week"
            : "استكشاف المواد الجديدة كل أسبوع"}
        </h1>
        <p className="text-center mx-auto max-w-2xl pt-2 text-gray-500">
          {mode == "Eng"
            ? "At Syrian Supermarkt, we pride ourselves on our commitment to providing you with the freshest and finest quality products. That's why we continuously update our inventory with new arrivals and seasonal offerings every week. From farm-fresh produce to gourmet specialties, our shelves are always stocked with the latest and greatest selections to enhance your culinary experience. Experience the excitement of discovering new flavors and ingredients with our weekly updates, ensuring that every visit to Syrian Supermarkt is a delightful adventure in taste and quality."
            : "في السوبرماركت السوري، نفخر بالتزامنا بتوفير لكم أجود وأطايب المنتجات ذات الجودة العالية. لذلك، نقوم بتحديث مخزوننا باستمرار بوصول المنتجات الجديدة والعروض الفصلية كل أسبوع, بدءًا من المنتجات الطازجة من المزارع إلى الأطعمة الخاصة بالشيف، تتوفر منتجاتنا الحديثة دائمًا لتعزيز تجربتك الطهوية, اكتشف متعة اكتشاف النكهات والمكونات الجديدة مع تحديثاتنا الأسبوعية، مما يضمن أن كل زيارة إلى السوبرماركت السوري تكون مغامرة لذيذة في النكهة والجودة."}
        </p>
      </div>
      <div className="flex flex-wrap justify-center items-start mt-10">
        <div className="relative m-2 group">
          <img
            src="https://0effortthemes.com/veggie/images/homepage/veg-big.jpg"
            alt=""
            className="w-full h-full rounded-xl transition duration-300 ease-in-out transform group-hover:scale-90"
          />
          <div className="absolute top-[30%] left-20 text-white font-bold p-2 text-4xl">
            Fresh vegetables 30% off
          </div>
        </div>
        <div className="m-2">
          <div className="relative group">
            <img
              src="https://0effortthemes.com/veggie/images/homepage/veg-big-2.jpg"
              alt=""
              className="w-full h-full rounded-xl transition duration-300 ease-in-out transform group-hover:scale-90"
            />
            <div className="absolute top-[30%]">
              <p className=" left-0 text-white font-bold p-2 text-3xl">
                Fresh vegetables 30% off
              </p>
            </div>
          </div>
          <div className="relative mt-2 group">
            <img
              src="https://0effortthemes.com/veggie/images/homepage/veg-big-3.jpg"
              alt=""
              className="w-full h-full rounded-xl transition duration-300 ease-in-out transform group-hover:scale-90"
            />
            <div className="absolute top-[30%]">
              <p className=" left-0 text-white font-bold p-2  text-3xl">
                Fresh vegetables 30% off
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
