import useSWR from "swr";
import { styled } from "styled-components";

const StyledForm = styled.form`
  display: flex;
  flex-flow: column wrap;
  color: red;
  width: 300px;
`;
export default function Form() {
  const { mutate } = useSWR("/api/Coffee");
  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    const res = await fetch("api/Coffee/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (res.ok) {
      console.log("mutate ok");
      mutate();
    }
  }
  return (
    <StyledForm onSubmit={handleSubmit}>
      <label htmlFor="name">Coffee name:</label>
      <input id="name" name="name" />
      <label htmlFor="roaster">Roaster:</label>
      <input id="roaster" name="roaster" />
      <label htmlFor="origin">Origin:</label>
      <input id="origin" name="origin" />
      <label htmlFor="arabica">Arabica:</label>
      <input type="number" id="arabica" name="arabica" max="100" min="0" />
      <label htmlFor="robusta">Robusta:</label>
      <input type="number" max="100" min="0" id="robusta" name="robusta" />
      <label htmlFor="level">Roast level:</label>
      <input id="level" name="level" />
      <label htmlFor="score">Your score:</label>
      <input type="number" max="100" min="0" id="score" name="score" />
      <button type="submit">Grind coffee!</button>
    </StyledForm>
  );
}
