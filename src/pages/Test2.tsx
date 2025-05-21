import type { JSX } from "react";

type Test2Props = {
  title: string;
};

export default function Test2({ title }: Test2Props): JSX.Element {
  return (
    <>
      <h1> Test2</h1>
      <h3> from props : {title}</h3>
    </>
  );
}
