import { useState } from "react";

export default function Form() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const handleNameInputChange = () => {
    const name = document.querySelector("#name").value;
    setName(name);
  };

  const handleAgeInputChange = () => {
    const age = document.querySelector("#age").value;
    setAge(age);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      name: name,
      age: age,
    });
    alert(`Name: ${name} - Age: ${age}`);
  };
  return (
    <div>
      <form>
        <input
          type="text"
          id="name"
          onChange={handleNameInputChange}
          placeholder="NAME"
        />
        <input
          type="text"
          id="age"
          onChange={handleAgeInputChange}
          placeholder="AGE"
        />
        <br />
        <input type="submit" onClick={handleSubmit} value="submit" />
      </form>
    </div>
  );
}
