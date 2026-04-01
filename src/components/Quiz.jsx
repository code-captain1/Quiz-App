import { useState } from "react";

export const Quiz = () => {
  const [mainval, updateIndex] = useState(0);
  const questionBank = [
    {
      index: 1,
      question: "What is the largest continent in the world",
      options: ["Africa", "Asia", "Europe", "Antartica"],
      answer: "Asia",
    },
    {
      index: 2,
      question: "What is planet is known as the Red planet",
      options: ["Mars", "Earth", "Jupiter", "Mercury"],
      answer: "Mars",
    },
    {
      index: 3,
      question: "How many time zones are there in Russia",
      options: [11, 20, 5, 9],
      answer: 11,
    },
  ];

  function Increament() {
    mainval != questionBank.length - 1 && updateIndex(mainval + 1);
  }

  function Decrement(val) {
    mainval != 0 && updateIndex(mainval - 1);
  }

  return (
    <section className="Quiz">
      <h1>Question {questionBank[mainval].index}</h1>
      <h2>{questionBank[mainval].question}</h2>
      {questionBank[mainval].options.map((value, indexes) => {
        return <button key={indexes}>{value}</button>;
      })}
      <section className="nav-cont">
        <button className="navigate" onClick={() => Decrement()}>
          <i className="fa-solid fa-left-long"></i>
        </button>
        <button className="navigate" onClick={() => Increament()}>
          <i className="fa-solid fa-right-long"></i>
        </button>
      </section>
    </section>
  );
};
