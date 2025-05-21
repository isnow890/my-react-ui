//이벤트 핸들링

import type { JSX } from "react";

export default function Test4({ input }: { input: string }): JSX.Element {
  function handleClick(): void {
    alert(input);
  }

  return <button onClick={handleClick}>Click me</button>;
}
