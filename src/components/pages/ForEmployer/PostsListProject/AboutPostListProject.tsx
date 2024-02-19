function AboutPostListProject() {
  return (
    <>
      <div className="w-full h-full text-white flex pl-[1rem] py-[1rem] flex-col justify-end gap-4">
        <h1 className="font-thin tracking-widest text-[1.5rem] leading-relaxed text-right">
          Проект Список постов
        </h1>
        <div className="text-right">Иконки</div>
        <div className="text-left">
          <p>
            Проект подбора фильма для просмотра из удаленного API, который вы
            можете использовать прямо сейчас.
          </p>
          <p>
            В проекте реализована возможность случайного выбора фильмов со
            стороннего сервера. Возможность сортировки списка по нескольким
            параметрам, в том числе включения в изабранное. Реальзована функция
            ввода данных. А также обработчик возможных ошибок
          </p>
        </div>
        <div className="text-left">
          <p>
            В проекте использованы технологии Redux и Redux-toolkit, а также
            следующие библиотеки: axios, express, express, react-toastify, uuid.
          </p>
        </div>
        <div className="text-right">
          <p>Ознакомиться с проектом</p>
        </div>
      </div>
    </>
  );
}

export default AboutPostListProject;
