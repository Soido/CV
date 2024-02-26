import React from "react";
import MyInput from "../../../../../../../UX/UI/MyInput";
import MySelect from "../../../../../../../UX/UI/MySelect";

const PostFiler = ({ filter, setFilter }: any) => {
  return (
    <div className="pt-[2rem]">
      <h1></h1>
      <MyInput
        value={filter.query}
        onChange={(e: any) => setFilter({ ...filter, query: e.target.value })}
        placeholder="Поиск"
      />
      <div className="w-full flex justify-start ">
        <MySelect
          value={filter.sort}
          onChange={(selectedSort: any) =>
            setFilter({ ...filter, sort: selectedSort })
          }
          defaultValue="Сортировка по"
          options={[
            { value: "title", name: "По названию" },
            { value: "body", name: "По описанию" },
          ]}
        />
      </div>
    </div>
  );
};

export default PostFiler;
