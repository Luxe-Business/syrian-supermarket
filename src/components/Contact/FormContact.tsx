import { useGlobalContext } from "../../context/language";

const FormContact = () => {
  const { mode } = useGlobalContext();
  return (
    <div className="mt-10 ">
      <div className="text-center">
        <h1 className="text-5xl font-serif pb-8">
          {mode == "Eng" ? "Get in Touch" : "للتواصل معنا"}
        </h1>
        <p className="pb-4 px-10 lg:px-40">
          {mode == "Eng"
            ? "We value your communication with us. If you have any inquiries or questions, please feel free to reach out. Our support team is always ready to assist you with professionalism and dedication. You can contact us directly via email or fill out the form below. We look forward to hearing from you soon and providing the necessary support."
            : "نحن نقدر تواصلك معنا. إذا كان لديك أي استفسارات أو استفسارات، فلا تتردد في الاتصال بنا. فريق الدعم الخاص بنا مستعد دائمًا لمساعدتك بكل احترافية وتفانٍ. يمكنك التواصل معنا عبر البريد الإلكتروني المباشر أو ملء النموذج أدناه, نتطلع إلى الاستماع منك قريبًا وتقديم الدعم اللازم."}
        </p>
      </div>
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-24 mx-auto flex flex-wrap  ">
          <div
            className={`lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col   mb-16 md:mb-0  text-center ${
              mode === "Arabic" ? "md:ml-auto" : "md:mr-auto"
            }`}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3229.9459644966832!2d14.41459278473386!3d35.948291780133026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzXCsDU2JzUzLjkiTiAxNMKwMjQnNDQuNyJF!5e0!3m2!1sar!2sfr!4v1712003940727!5m2!1sar!2sfr"
              height="450px"
              loading="lazy"
              style={{ border: "0" }}
              className="rounded-lg shadow-lg w-full items-center mx-3"
              allowFullScreen
            ></iframe>
          </div>
          <div
            className={`px-5 lg:px-10 lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-end md:text-right mb-16 md:mb-0 items-center text-center ${
              mode === "Arabic" ? "md:mr-auto" : "md:ml-auto"
            }`}
          >
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs ">
                {mode == "Eng" ? "ADDRESS" : "الموقع"}
              </h2>
              <p className="mt-1 px-5">
                {mode == "Eng"
                  ? "72 triq IL Gifen ‏‎San Pawl il-Baħar‎‏، ‏‎Northern Region‎‏، ‏‎Malta"
                  : "72 triq IL Gifen ‏‎San Pawl il-Baħar‎‏، ‏‎Northern Region‎‏، ‏‎Malta"}
              </p>
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                EMAIL
              </h2>
              <a className="text-green-500 leading-relaxed">
                example@email.com
              </a>
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                PHONE
              </h2>
              <p className="leading-relaxed">99392771</p>
              <p className="leading-relaxed">79852375</p>
            </div>
          </div>
          <div className="w-[120%]   flex flex-col items-center justify-center mx-auto py-8 mt-8 md:mt-0 ">
            <div className="w-full max-w-md">
              <div className="relative mb-4">
                <label
                  htmlFor="name"
                  className="leading-7 text-sm text-gray-600"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="email"
                  className="leading-7 text-sm text-gray-600"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="message"
                  className="leading-7 text-sm text-gray-600"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
              <button className="text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                Send
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FormContact;
