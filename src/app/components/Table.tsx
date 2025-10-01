import Card from "./Card";

export default function Table() {
  return (
    <section className="grid xl:grid-cols-5 sm:grid-cols-2 gap-5 w-full grid-cols-1">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </section>
  );
}
