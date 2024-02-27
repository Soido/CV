import React from "react";
import { FaGithub } from "react-icons/fa6";

const DescriptionSkills = () => {
  return (
    <div className="md:w-[40rem] w-[95%] text-left md:text-[1rem] text-[.8rem]">
      <div>
        <p>
          Для разработки этого веб-приложения применялся фраймфорк JavaScript -
          React.
          <br className="pt-[1rem]" /> Для создания были реализованы следующие
          практические навыки:
        </p>
        <ul className="flex flex-col gap-2">
          <li className="pt-[1rem]">
            1. Работа с javascript: работа с переменными, функциями,
            использование большинства часто применяемых методов объектов и
            массивов, таких как: .map, .push, .filter, concat, reduce, .pop и
            другие. Создание переиспользуемых функций.
          </li>
          <li>
            2. Работа с компонентами React: декомпозиция компонентов, передача
            props, callback, создание переиспользуемых компонентов. Разработка
            навигации SPA при помощи ReactRouter. Использование основных хуков,
            включая useState, useEffect, useMemo, useCallback, useLocation,
            useNavigate, useRef и т.д. Работа с библиотеками хуков react-use,
            react-swipeable и npm библиотеками для создания анимации, слайдеров,
            формы обратной связи, инфографики, всплывающих окон, визуализации
            скроллов, и т.д. Создание переиспользуемых хуков.
          </li>
          <li>
            3. Работа с типизицией переменных посредством работы с
            TypeScript-файлами. Создание interface, применение типов переменных
            и их передача.
          </li>
          <li>
            4. Работа с API, и удаленными серверами данных. Отправка get
            запросов с библиотекой axios. Работа с файлами стандарта JSON.
          </li>
          <li>5. Работа с библиотеками Redux и Redux-toolkit.</li>
          <li>
            6. Разработка дизайна. а также верстка на все экраны, с применением
            библиотеки TailwindCSS.{" "}
          </li>
        </ul>
        <a href="https://github.com/Soido/CV">
          {" "}
          <div className="text-right w-full flex justify-end flex-row items-center pr-[1rem] lg:pr-0">
            <FaGithub className=" text-[1.5rem] mr-[1rem]" />{" "}
            <p>Ссылка на GitHub</p>
          </div>{" "}
        </a>
      </div>
    </div>
  );
};

export default DescriptionSkills;
