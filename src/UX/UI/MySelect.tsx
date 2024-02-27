import React from "react";

const MySelect = ({ options, defaultValue, value, onChange }: any) => {
  return (
    <div className=" bg-transparent text-white mt-[1rem]  border-2">
      <select
        className=" bg-transparent text-white"
        value={value}
        onChange={(event) => onChange(event.target.value)}
      >
        <option className=" bg-black/90 text-white" disabled value={""}>
          {defaultValue}
        </option>
        {options.map((option: any) => (
          <option
            className=" bg-black/90 text-white"
            key={option.value}
            value={option.value}
          >
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default MySelect;
