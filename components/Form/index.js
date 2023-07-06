/* import useSWR from "swr"; */
import { useSWRConfig } from "swr";
export default function Form() {
  const { mutate } = useSWRConfig("/api/Coffee");
  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    console.log(data);

    const res = await fetch("api/Coffee/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (res.ok) {
      mutate();
    }
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Coffee name:</label>
        <input id="name" name="name" />
        <label htmlFor="type">Roast:</label>
        <input id="type" name="type" />
        <label htmlFor="ratioA">Arabica:</label>
        <input type="number" id="ratioA" name="ratioA" max="100" min="0" />
        <label htmlFor="ratioB">Robusta:</label>
        <input type="number" max="100" min="0" id="ratioB" name="ratioB" />
        <button type="submit">Grind coffee!</button>
      </form>
    </>
  );
}
