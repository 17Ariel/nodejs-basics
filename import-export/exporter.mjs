const sayName = (name) => {
  console.log(`Hello! ${name} welcome to the team `);
};

const getAge = (birthyear) => {
  const todayage = 2023 - birthyear;
  console.log(`Your age is ${todayage} years old`);
};

export const sayHello = () => {
  console.log("Hallo Their!");
};

export default {
  sayName,
  getAge,
};
