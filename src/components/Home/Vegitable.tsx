import { useGlobalContext } from "../../context/language";

const Vegitable = () => {
  const { mode } = useGlobalContext();
  return (
    <>
      <div
        className="bg-cover grid lg:grid-cols-2 sm:grid-col-1 px-5 lg:px-56"
        style={{
          backgroundImage: `url("https://img.freepik.com/free-photo/brick-wall-texture_1194-5394.jpg?t=st=1711963400~exp=1711967000~hmac=878cdb42b496a32c1797bfa43906a52f5ea8b2c99c84421c4541eb1e8fea4e93&w=996")`,
        }}
      >
        <img
          src="https://0effortthemes.com/veggie/images/homepage/veg-rack.png"
          alt=""
          className="pt-20"
        />
        <div className=" text-black font-serif text-lg py-[30%]">
          <h1 className="text-4xl">
            {mode == "Eng"
              ? "Discover a World of Culinary Delights"
              : "اكتشف عالمًا من النكهات الشهية"}
          </h1>
          <h3 className="pt-5 text-2xl">
            {mode == "Eng" ? "Fresh Produce" : "المنتجات الطازجة"}
          </h3>
          <p className="pt-2">
            {mode == "Eng"
              ? "Indulge in the vibrant colors and flavors of our fresh produce section."
              : "اختر من بين مجموعة متنوعة من الفواكه والخضروات الطازجة، مباشرة من الحقول إلى طاولتك."}
          </p>
          <h3 className="pt-5 text-2xl">
            {mode == "Eng" ? "Frozen Delicacies" : "المأكولات المجمدة"}
          </h3>
          <p className="pt-2">
            {mode == "Eng"
              ? "Convenience meets quality with our range of frozen delicacies."
              : "اختر من بين مجموعة متنوعة من المأكولات المجمدة، بما في ذلك الفواكه المثلجة والخضروات المقطعة، لتوفير الوقت والجهد دون التنازل عن الجودة."}
          </p>
          <h3 className="pt-5 text-2xl">
            {mode == "Eng" ? "Gourmet Pantry Essentials" : "الأطعمة الشهية"}
          </h3>
          <p className="pt-2">
            {mode == "Eng"
              ? "Elevate your cooking with our selection of gourmet pantry essentials"
              : "اكتشف مجموعتنا المتنوعة من البقوليات، والبقسماط، والصلصات الشهية التي تضيف نكهة فريدة وعمقًا إلى وصفاتك المفضلة."}
          </p>
          <button className=" bg-green-600 w-[55%] lg:w-[40%] px-4 text-white py-3 mt-6 rounded-lg ">
            {mode == "Eng" ? "Browse Products" :"تصفح المنتجات"}
          </button>{" "}
        </div>
      </div>
    </>
  );
};

export default Vegitable;
