import React from "react";
import { BiChevronRight } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const DescriptionPostList = () => {
  const navigate = useNavigate();
  return (
    <div className="md:w-[40rem] w-[95%] text-left md:text-[1rem] text-[.8rem]">
      <div className="text-left">
        <p>
          Проект "Список постов" разработан с применением основных кейсов
          фронтэнд разработки.
          <br className="pt-[1rem]" /> Для создания этого проекта был применены
          и реализованы следующие практические навыки:
        </p>
        <ul className="flex flex-col gap-2">
          <li className="pt-[1rem]">
            1. Создание управляемых инпутов, переиспользуемых функциональных
            компонентов и их декомпозиция, создание UI компонентов,
            использование хуков React и создание на основании стандартных хуков,
            таких как useState и useMemo переиспользуемых хуков. Создание
            переиспользуемого хука useFetching.
          </li>
          <li>2. Использование ReactDevtools.</li>
          <li>
            3. Передача данных от родительского компонента к дочернему и от
            дочернего компонента к родительскому (props, callback функции).
          </li>
          <li>
            4. Отрисовка по условию, сортировка и выпадающий список. Поиск,
            фильтрация. Мемоизация и кеширование.
          </li>
          <li>
            4. Работа с сервером и get запросом с использованием библиотеки
            Axios. Жизненный цикл компонента и применение useEffect. Работа с
            API. Индикация загрузки данных с сервера и обработка ошибок.
            постраничный вывод и пагинация (pagination).
          </li>
        </ul>
        <div
          className="flex flex-row items-center h-full w-full justify-end cursor-pointer text-right pt-[1rem] "
          onClick={() => navigate("/foremployer/postlistproject")}
        >
          <p className="pr-[.5rem]">Ознакомиться с проектом</p>
          <BiChevronRight className="text-xl mt-[.2rem]" />
        </div>
      </div>
    </div>
  );
};

export default DescriptionPostList;
