import { useState, type JSX } from "react";

function MyButton(): JSX.Element {
  const [count, setCount] = useState(1);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button
      onClick={handleClick}
      className="bg-blue-500 px-4 py-2 rounded-lg text-lg font-bold  hover:bg-blue-800 transition-colors duration-200 shadow-md"
    >
      Cliked {count} times
    </button>
  );
}

export default function Test6(): JSX.Element {
  return (
    <div className="gap-5 flex flex-col text-white rounded-lg">
      <MyButton></MyButton>
      <MyButton></MyButton>
    </div>
  );
}
