export default function Fun1() {
  return "Function 1";
}

const Fun2 = () => {
  return "Function 2";
};

const Fun3 = () => {
  return "Function 3 ";
};

export const Fun4 = () => {
  return "Function 4 ";
};

// Every Module can have one default export

// export default Fun1;
// Above line is one of the way to do default export

export { Fun2, Fun3 };
