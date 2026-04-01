import { ScoreBoard } from "./ScoreBoard";
import { Quiz } from "./Quiz";

export const Container = () => {
  const [mainval, updateIndex] = useState(0);
  const userAnswers = [];

  function CheckScore(userAnswers) {
    let score = 0;
    let userans = userAnswers;
    for (var i = 0; i < questionBank.length - 1; i++) {
      questionBank.forEach((ans, indexes) => {
        userans[indexes] == ans[indexes] && score++;
      });
      return score;
    }
  }

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

  function storeAnswers(value, indexes) {
    let copy = [...userAnswers];
    copy[indexes] = value;
    userAnswers[indexes] = value;
    console.log(userAnswers);
    return userAnswers;
  }

  function Increament() {
    mainval != questionBank.length - 1 && updateIndex(mainval + 1);
  }

  function Decrement(val) {
    mainval != 0 && updateIndex(mainval - 1);
  }
  return (
    <main className="Container">
      <ScoreBoard score={0} />
      <Quiz
        questionBank={questionBank}
        Increament={Increament}
        Decrement={Decrement}
        mainval={mainval}
        userAnswers={userAnswers}
      />
    </main>
  );
};
