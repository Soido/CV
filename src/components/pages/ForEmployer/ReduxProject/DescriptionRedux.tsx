import React from "react";
import { BiChevronRight } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const DescriptionRedux = () => {
  const navigate = useNavigate();

  return (
    <div className="md:w-[40rem] w-[95%] text-left md:text-[1rem] text-[.8rem]">
      <div className="text-left">
        <p>
          Проект Redux разработан с применением библиотек Redux и Redux-toolkit.
          <br className="pt-[1rem]" /> Для создания этого проекта был применены
          и реализованы следующие практические навыки:
        </p>
        <ul className="flex flex-col gap-2">
          <li className="pt-[1rem]">
            1. Применение функции Provider и использование Redux DevTools.
          </li>
          <li>
            2. Разработка sclice элементов (добавление фильмов, фильтр фильмов,
            поиск ошибки), c применением функции createSlice, подготовка
            соответствующих редюссеров, для добавления новых состояний (state),
            в зависимости от действий и передача их в Redux store. Применение
            createAsyncThunk и extraRedusers c методом обновления состояния
            builder.addCase.
          </li>
          <li>
            3. Использованы хуки React-toolkit для передачи Action в Store -
            useDispatсh и для подписки на соответствующие обновления
            useSelector.
          </li>
          <li>
            4. Работа с API, и удаленными серверами данных. Отправка get
            запросов с библиотекой axios.
          </li>
        </ul>
        <div
          className="flex flex-row items-center h-full w-full justify-end cursor-pointer text-right -pt- "
          onClick={() => navigate("/foremployer/reduxproject")}
        >
          <p className="pr-[.5rem]">Ознакомиться с проектом</p>
          <BiChevronRight className="text-xl mt-[.2rem]" />
        </div>
      </div>
    </div>
  );
};

export default DescriptionRedux;
