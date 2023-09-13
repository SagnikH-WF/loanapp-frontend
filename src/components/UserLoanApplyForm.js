import React from "react";
import "./UserLoanApplyForm.css";

const Form = () => {
  const categ = [
    { value: "", label: "None" },
    { value: "furniture", label: "Furniture" },
    { value: "electronics", label: "Electronics" },
    { value: "rent", label: "Rent" },
    { value: "medical", label: "Medical" },
  ];

  const make = [
    { value: "", label: "None" },
    { value: "wooden", label: "Wooden" },
    { value: "metal", label: "Metal" },
    { value: "plastic", label: "Plastic" },
  ];

  return (
    <div className="main_container">
      <h1>Loan Management Application</h1>
      <br />
      <h1>Select product and Apply for loan</h1>
      <br />

      <form>
        <label htmlFor="id">Employee Id:</label>
        <input id="id" type="text" />
        <label htmlFor="description">Item description:</label>
        <input id="description" type="text" />
        <label htmlFor="val">Item value:</label>
        <input id="val" type="text" />
        <label htmlFor="categ">Item category:</label>
        <select id="categ">
          {categ.map(({ value, label }) => (
            <option value={value}>{label}</option>
          ))}
        </select>
        <label htmlFor="make">Item make:</label>
        <select id="make">
          {make.map(({ value, label }) => (
            <option value={value}>{label}</option>
          ))}
        </select>
        <br></br>
        <button type="submit">Apply Loan</button>
      </form>
    </div>
  );
};

export default Form;