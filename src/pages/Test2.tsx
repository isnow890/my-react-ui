type Test2Props = {
  title: string;
};

export default function Test2({ title }: Test2Props) {
  return (
    <>
      <h1> Test2</h1>
      <h3> from props : {title}</h3>
    </>
  );
}
