//useState 사용

import { useState, type JSX } from "react";

export default function Test5(): JSX.Element {
  function handleClick(): void {
    setCount(count + 1);
  }

  const [count, setCount] = useState(1);

  return (
    <div className="flex flex-row items-center gap-5">
      <button
        onClick={handleClick}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200 shadow-md"
      >
        Click me
      </button>
      Clicked {count} times
    </div>
  );
}
