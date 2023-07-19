export default function Card({ name, roaster, score }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>{roaster}</p>
      <p>{score}</p>
    </div>
  );
}
