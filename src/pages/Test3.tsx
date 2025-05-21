//리스트 렌더링

import type { JSX } from "react";

const products = [
  {
    title: "Cabbage",
    id: 1,
    isFuruit: false,
  },
  {
    title: "Garlic",
    id: 2,
    isFuruit: false,
  },
  {
    title: "Apple",
    id: 3,
    isFuruit: true,
  },
];

export default function Test3(): JSX.Element {
  const listItems = products.map((product) => {
    return (
      <li key={product.id} style={{ color: product.isFuruit ? "red" : "blue" }}>
        {product.title}
      </li>
    );
  });

  // const list = products.map((product) => {
  //   return <li key={product.id}>{product.title}</li>;
  // });

  return <ul>{listItems}</ul>;
}
