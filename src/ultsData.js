import Banner_1 from "./assets/img/bg-banner2.jpg";
import Banner_2 from "./assets/img/bg-banner1.jpg";
import Banner_3 from "./assets/img/bg-banner3.jpg";
import Button from "./components/Button/ButtonBlue";
import ButtonYello from "./components/Button/ButtonYello";
import Slide_1 from "./assets/img/slide_1.png";
import Slide_2 from "./assets/img/slide_2.jpg";
import icon1 from "./assets/img/tooth-brush-icon.png";
import icon2 from "./assets/img/dashboard-icon.png";
const ultsData = {
  menuCountry: [
    {
      id: 1,
      text: "USD",
    },
    {
      id: 2,
      text: "EROU",
    },
  ],
  menuLanguage: [
    {
      id: 1,
      text: "English",
    },
    {
      id: 2,
      text: "French",
    },
  ],
  latestPost: [
    {
      id: 1,
      condition: false,
      title: "Candid Whitening kit",
      parsentage: "-10%",
      price: false,
      image: Banner_1,
      button: <Button text="Shop Now" />,
    },
    {
      id: 2,
      condition: "New",
      title: "Get rid of bacteria in your home",
      price: false,
      image: Banner_2,
      button: <Button text="More" />,
    },
    {
      id: 3,
      condition: false,
      title: <span className="text-white">SuperBrush X200 Higenic</span>,
      price: "119.00",
      image: Banner_3,
      button: <Button text="Shop Now" />,
    },
  ],
  sliders: [
    {
      id: 1,
      title: "Antibacterial Medical Mask",
      des: "Just a few seconds to measure your body temperature.",
      button: <ButtonYello text="Shop Now" />,
      only: "only",
      price: "$ 25",
      discount: false,
      discountPersentage: false,
      image: Slide_1,
    },
    {
      id: 2,
      title: "PowerSteel X-tra 200 Brush",
      des: "Only in this week. Don't misss!",
      button: (
        <button className="bg-yellow-500 font-semibold  text-white px-7 py-2 rounded-3xl transition duration-500 hover:bg-white hover:text-blue-800 ">
          Add to cart
        </button>
      ),
      only: false,
      price: "$ 29.99",
      discount: "$15.99",
      image: Slide_2,
      discountPersentage: "-30%",
    },
  ],
  offers: [
    {
      id: 1,
      title: "Super Sonic Brush X200 Higenic",
      des: "The sonic power of the brush is the best for dental problems",
      button: <ButtonYello text="About" />,
      icon: icon1,
      icon2: icon2,
      iconText: "Up to 5 users simultaneously",
      iconText2: "Has HEALTH certificate",
      discountPersentage: "-30%",
    },
  ],
};
export default ultsData;
