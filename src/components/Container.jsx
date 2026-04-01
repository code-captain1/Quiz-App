import { useState } from "react";
import { ScoreBoard } from "./ScoreBoard";
import { Quiz } from "./Quiz";

export const Container = () => {
  const [mainval, updateIndex] = useState(0);
  // 1. Move userAnswers to state so it persists
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);

  const questionBank = [
    { index: 1, question: "What is the largest continent...", options: ["Africa", "Asia", "Europe", "Antartica"], answer: "Asia" },
    { index: 2, question: "What is planet is known as the Red planet", options: ["Mars", "Earth", "Jupiter", "Mercury"], answer: "Mars" },
    { index: 3, question: "How many time zones are there in Russia", options: [11, 20, 5, 9], answer: 11 },
  ];

  // 2. Simplified Score Logic
  function calculateScore() {
    let finalScore = 0;
    questionBank.forEach((q, index) => {
      if (userAnswers[index] === q.answer) {
        finalScore++;
      }
    });
    setScore(finalScore);
  }

  function storeAnswers(value) {
    let copy = [...userAnswers];
    copy[mainval] = value; // Store answer at the current question index
    setUserAnswers(copy);
  }

  function Increament() {
    if (mainval < questionBank.length - 1) updateIndex(mainval + 1);
  }

  function Decrement() {
    if (mainval > 0) updateIndex(mainval - 1);
  }

  return (
    <main className="Container">
      {/* 3. Pass the actual score state */}
      <ScoreBoard score={score} />
      <Quiz
        questionBank={questionBank}
        Increament={Increament}
        Decrement={Decrement}
        mainval={mainval}
        userAnswers={userAnswers}
        storeAnswers={storeAnswers}
        CheckScore={calculateScore}
      />
    </main>
  );
};