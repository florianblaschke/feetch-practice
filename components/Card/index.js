export default function Card({ name, type, ratioA, ratioB }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>{type}</p>
      <p>{ratioA}</p>
      <p>{ratioB}</p>
    </div>
  );
}
