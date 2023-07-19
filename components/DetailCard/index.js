export default function DetailCard({
  name,
  roaster,
  origin,
  arabica,
  robusta,
  level,
  score,
}) {
  return (
    <div>
      <h2> Name: {name}</h2>
      <ul>
        <li>Roaster: {roaster}</li>
        <li>Origin: {origin}</li>
        <li>Arabica: {arabica}</li>
        <li>Robusta: {robusta}</li>
        <li>Roast-Level: {level}</li>
        <li>Score: {score}</li>
      </ul>
    </div>
  );
}
