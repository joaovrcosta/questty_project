import { useEffect, useState } from "react";
import { api } from "../../services/api-test";

export function Test() {
  // const [questions, setQuestions] = useState([])

  const [question, setQuestion] = useState();

  useEffect(() => {
    api
      .get("/questions/ask")
      .then((response) => setQuestion(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  return (
    <>
      <label>Autor</label>
      <h1>{question && question[0]?.title}</h1>
      <p>{question && question[0]?.content}</p>

      <button>Responder</button>
    </>
  );
}
