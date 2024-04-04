import { useGlobalContext } from "../../context/language";

const About = () => {
  const { mode } = useGlobalContext();

  return (
    <div className="bg-gray-200 flex flex-col lg:flex-row items-center justify-center  font-serif ">
      <img
        src="https://0effortthemes.com/veggie/images/homepage/small-text-baner.jpg"
        className="mx-auto lg:w-[20%] sm:w-[80%] my-5"
        alt="Veggie Banner"
      />
      <div className="  lg:w-[50%] px-10 pb-10 pt-10">
        <h1 className="text-4xl font-bold">
          {mode == "Eng"
            ? "Discover the Essence of Syrian Supermarkt"
            : "اكتشف جوهر السوبرماركت السوري"}
        </h1>
        <p className="mt-5">
          {mode == "Eng"
            ? "Welcome to Syrian Supermarkt, where we redefine your culinary experience with an exquisite selection of premium food products. At Syrian Supermarkt, we are committed to delivering unparalleled quality, freshness, and taste to our valued customers. With meticulous sourcing and a passion for excellence, we curate an array of fine produce, succulent meats, and gourmet delights from around the world. Our mission is to elevate your gastronomic journey and exceed your expectations with every visit."
            : "مرحبًا بك في السوبرماركت السوري، حيث نعيد تعريف تجربتك الطهوية مع مجموعة رائعة من منتجات الطعام الفاخرة. في السوبرماركت السوري، نحن ملتزمون بتقديم جودة لا مثيل لها، وطازجة، ونكهة رائعة لعملائنا الكرام, بفضل اختيارنا الدقيق وشغفنا بالتميز، نقوم بتجميع مجموعة متنوعة من المنتجات الطازجة واللحوم الشهية والأطعمة اللذيذة من جميع أنحاء العالم. مهمتنا هي تعزيز رحلتك الطهوية وتجاوز توقعاتك في كل زيارة."}
        </p>
        <button className="bg-green-600 px-10 py-3 rounded-lg text-white mt-9">
          {mode == "Eng" ? "Read More" : "اقرا المزيد"}
        </button>
      </div>
    </div>
  );
};

export default About;
