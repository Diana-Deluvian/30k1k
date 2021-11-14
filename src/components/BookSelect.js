import React, { useState } from "react";
import { default as ReactSelect } from "react-select";

import { components } from "react-select";

const categories = [
    { value: "Feminism", label: "Feminism" },
    { value: "Racism", label: "Racism" },
    { value: "Fantasy", label: "Fantasy" },
    { value: "Science-fiction", label: "Science-fiction" },
    { value: "Other", label: "Other" },
    { value: "Fiction", label: "Fiction" },
    { value: "Trans", label: "Trans" },
    { value: "Witch", label: "Witch" },
    { value: "Youth-liberation", label: "Youth-liberation" },
    { value: "Socialism", label: "Socialism" }
  ];

const Option = (props) => {
    return (
      <div >
        <components.Option {...props} >
          <input 
            type="checkbox"
            checked={props.isSelected}
            onChange={() => null}
          />{" "}
          <label>{props.label}</label>
        </components.Option>
      </div>
    );
  };

  const colourStyles = {
    menuList: styles => ({
      ...styles,
      background: 'white'
    }),
    option: (styles, {isFocused, isSelected}) => ({
      ...styles,
      background: isFocused
        ? "gray"
        : isSelected
          ? 'black'
          : undefined,
      zIndex: 1
    }),
    menu: base => ({
      ...base,
      zIndex: 100
    })
  }

const BookSelect = (props) => {
  const [optionSelected, setOptionSelected] = useState(props.optionSelected ? props.optionSelected : null);

  const handleChange = (selected) => {
    setOptionSelected(selected);
    props.handleChange(selected);
  }  

  return (
    <span
      className="d-inline-block"
      data-toggle="popover"
      data-trigger="focus"
      data-content="Please select account(s)"
    >
      <ReactSelect
        options={categories}
        isMulti
        closeMenuOnSelect={false}
        hideSelectedOptions={false}
        components={{
          Option
        }}
        onChange={handleChange}
        allowSelectAll={true}
        value={optionSelected}
        styles={colourStyles}
      />
    </span>
  );
}
  
  
  export default BookSelect;