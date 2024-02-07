import Rusmetrologiya from "../../img/rusmetrologiya-logo.png";
import MedpromLab from "../../img/MedpromlabLogo_2.png";
import knx24 from "../../img/knx24.png";

export interface IContentSlider {
  id: number;
  icon?: string;
  type: string;
  engage: string;

  desc?: any;
  link: string;
}

const contentItemsSlider: IContentSlider[] = [
  {
    id: 1,
    icon: Rusmetrologiya,
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
    icon: MedpromLab,
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
    icon: knx24,
    type: "Корпоративный сайт, интернет-магазин ",
    engage: "участие в разработке функциональных блоков",

    desc: [
      "подключение готовых сервисов",
      "разработка некоторых функциональных блоков",
    ],
    link: "https://knx24.com/",
  },
];

export default contentItemsSlider;
