import { styled } from "styled-components";
const StyledForm = styled.form`
  display: flex;
  flex-flow: column wrap;
  color: red;
  width: 300px;
`;
export default function DetailForm({ onSubmit }) {
  return (
    <StyledForm onSubmit={onSubmit}>
      <label htmlFor="score">Your score:</label>
      <input type="number" max="100" min="0" id="score" name="score" />
      <button type="submit">Grind coffee!</button>
    </StyledForm>
  );
}
