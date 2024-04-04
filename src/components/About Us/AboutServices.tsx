import logo from "../../assets/Syrian SuperMarket Logo.svg";
import { useGlobalContext } from "../../context/language";
import about from "../../assets/content-image-1.jpg";
import food from "../../assets/foodstuffs.jpg";
import foodt from "../../assets/foodt.jpg";
const AboutServices = () => {
  const { mode } = useGlobalContext();

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10 px-4 md:px-10 lg:px-56 items-center pb-10">
        <img
          src={about}
          className={`${
            mode == "Eng" ? "ml-6 lg:ml-20" : "mr-6 lg:mr-20"
          }"w-[80%] object-cover h-[80%] `}
          alt="Content"
        />
        <div className="text-gray-500">
          <img src={logo} className="h-24 md:h-32 lg:h-30 mx-auto" alt="Logo" />
          <p className="pb-4">
            {mode == "Eng"
              ? "Welcome to SYRIAN SUPERMARKET, your one-stop destination for all your grocery needs. At SYRIAN SUPERMARKET, we pride ourselves on offering a wide range of high-quality products to meet the diverse needs of our customers. Established with a vision to provide convenience and quality, we strive to exceed customer expectations with every visit. Whether you're looking for fresh produce, pantry staples, or specialty items, we have you covered. Our team is committed to delivering exceptional service and creating a welcoming shopping experience for everyone who walks through our doors. With a dedication to sourcing the finest ingredients and products, we ensure that every item on our shelves meets the highest standards of freshness and quality. At SYRIAN SUPERMARKET, we understand the importance of convenience and affordability. That's why we continuously update our offerings to reflect the latest trends and customer preferences while keeping prices competitive. Thank you for choosing SYRIAN SUPERMARKET. We look forward to serving you and becoming your trusted partner for all your grocery needs."
              : "    وجهتك الشاملة لجميع احتياجاتك من المواد الغذائية.  في SYRIAN SUPERMARKET, نفخر بتقديم مجموعة واسعة من المنتجات عالية الجودة لتلبية احتياجات عملائنا المتنوعة تأسست برؤية لتوفير الراحة والجودة, نسعى لتجاوز توقعات العملاء في كل زيارة. سواء كنت تبحث عن الخضروات الطازجة, أو المنتجات الأساسية للمطبخ, أو السلع المتخصصة, نحن نغطي كل احتياجاتك. فريقنا ملتزم بتقديم خدمة استثنائية وخلق تجربة تسوق مرحبة لكل من يدخل أبوابنا. بفضل التفاني في اختيار أجود المكونات والمنتجات, نضمن أن كل عنصر على رفوفنا يلبي أعلى معايير الطازجة والجودة. في SYRIAN SUPERMARKET, ندرك أهمية الراحة والتوفير. لذلك نقوم بتحديث عروضنا بشكل مستمر ليعكس أحدث الاتجاهات وتفضيلات العملاء مع الحفاظ على تنافسية الأسعار. شكرًا لاختيارك SYRIAN SUPERMARKET. نتطلع لخدمتك وأن نصبح شريكك الموثوق به لجميع احتياجاتك من المواد الغذائية."}
          </p>
        </div>
      </div>
      <div className="flex justify-center">
        <hr className="border border-none w-[70%] h-1 bg-gray-100" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 px-4 md:px-10 lg:px-56 items-center pb-10">
        {/* <div className="text-gray-500">
    <p className="pb-4">{mode == "Eng" ? "" : ""}</p>
  </div> */}
        <img
          src={food}
          className={`${
            mode == "Eng"
              ? "mx-auto md:ml-6 lg:ml-20"
              : "mx-auto md:mr-6 lg:mr-20"
          }shadow-2xl w-[80%] object-cover rounded-md h-[80%]`}
          alt="Content"
        />
        <img
          src={foodt}
          className={`${
            mode == "Eng"
              ? "mx-auto md:ml-6 lg:ml-20"
              : "mx-auto md:mr-6 lg:mr-20"
          }shadow-2xl w-[80%] rounded-md object-cover h-[80%]`}
          alt="Content"
        />
      </div>
    </div>
  );
};

export default AboutServices;
