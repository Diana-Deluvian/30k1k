import React, { Component } from "react";
import ReactDOM from "react-dom";
import { default as ReactSelect } from "react-select";

import { components } from "react-select";

const colourOptions = [
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

export default class BookSelect extends Component {
    constructor(props) {
      super(props);
      this.state = {
        optionSelected: null
      };
    }
  
    handleChange = (selected) => {
      this.setState({
        optionSelected: selected
      });
    };

    
  
    render() {
      return (
        <span
          className="d-inline-block"
          data-toggle="popover"
          data-trigger="focus"
          data-content="Please select account(s)"
        >
          <ReactSelect
            options={colourOptions}
            isMulti
            closeMenuOnSelect={false}
            hideSelectedOptions={false}
            components={{
              Option
            }}
            onChange={this.handleChange}
            allowSelectAll={true}
            value={this.state.optionSelected}
            styles={colourStyles}
          />
        </span>
      );
    }
  }
  