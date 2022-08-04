const KEY = "http://localhost:5000";
export const createQuizAPI = async (values) => {
  const response = await fetch(KEY + "/quiz/createquiz", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      quiz: values,
    }),
  });
  return response;
};
export const getQuiz = async () => {
  const response = await fetch(KEY + "/quiz/getquiz", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response;
};
