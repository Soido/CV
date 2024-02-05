import Rusmetrologiya from "../../../img/rusmetrologiya-logo.png";

export interface IContentSlider {
  id: number;
  icon: string;
  type: string;
  engage: string;

  desc?: any;
  link: string;
}

const contentItemsSlider: IContentSlider[] = [
  {
    id: 1,
    icon: "../../../img/rusmetrologiya-logo.png",
    type: "Корпоротивный сайт",
    engage: "100%, передан Заказчику",

    desc: [
      "разработка дизайна",
      "разработка навигации",
      "разработка функциональных блоков",
      "верстка под все экраны",
      "размещение сайта на GitHub",
    ],
    link: "",
  },
  {
    id: 2,
    icon: "../../../img/MedpromlabLogo_2.png",
    type: "Корпортивный сайт",
    engage: "100%, в проецссе разработки",

    desc: [
      "разработка дизайна",
      "выбор медиалементов",
      "разработка навигации",
      "разработка функциональных блоков",
      "верстка под все экраны",
      "размещение сайта на GitHub",
      "размещение на хостинге",
    ],
    link: "",
  },
  {
    id: 3,
    icon: "https://catherineasquithgallery.com/uploads/posts/2021-03/1614612233_137-p-fon-dlya-fotoshopa-priroda-209.jpghttps://knx24.com/local/templates/knx24_dev/assets/images/nav-mob-logo-white.svg",
    type: "Корпоративный сайт, интернет-магазин ",
    engage: "участие в разработке функциональных блоков",

    desc: [
      "подключение готовых сервисов",
      "разработка некоторых функциональных блоково",
    ],
    link: "https://knx24.com/",
  },
];

export default contentItemsSlider;
