import { useGlobalContext } from "../../context/language";

const Services = () => {
  const { mode } = useGlobalContext();
  return (
    <div className=" bg-custom-color py-5 px-0 lg:px-20">
      <h1 className="text-4xl font-serif text-center pt-20">
        {mode == "Eng"
          ? "Explore Food syrian supermarket"
          : "استكشف خدماتنا في السوبرماركت السوري"}
      </h1>
      <p className="text-center mx-auto max-w-2xl pt-2">
        {mode == "Eng"
          ? " where we offer a wide range of services to meet all your culinary needs, From fresh produce to premium meats and gourmet delicacies, we have everything you need to create delicious meals at home. Enjoy the convenience of online ordering and delivery, allowing you to shop from the comfort of your own home."
          : "نقدم مجموعة واسعة من الخدمات لتلبية جميع احتياجاتك الغذائية من المنتجات الطازجة إلى اللحوم الفاخرة والأطعمة اللذيذة، لدينا كل ما تحتاجه لإعداد وجبات شهية في المنزل. تمتع براحة الطلب عبر الإنترنت والتوصيل، مما يتيح لك التسوق من راحة منزلك."}
      </p>
      <div className="grid lg:grid-cols-4 sm:grid-cols-1 gap-3 pt-20 place-items-center">
        <img
          src="https://0effortthemes.com/veggie/images/homepage/text-block1.png"
          alt="Block 1"
          className="py-5"
        />
        <img
          src="https://0effortthemes.com/veggie/images/homepage/text-block1.png"
          alt="Block 2"
          className="py-5 lg:py-0"
        />
        <img
          src="https://0effortthemes.com/veggie/images/homepage/text-block1.png"
          alt="Block 3"
          className="py-5"
        />
        <img
          src="https://0effortthemes.com/veggie/images/homepage/text-block1.png"
          alt="Block 4"
          className="py-5 lg:py-0"
        />
      </div>
    </div>
  );
};

export default Services;
