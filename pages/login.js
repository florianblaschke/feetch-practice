export default function Login() {
  async function handleCreateAccount(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    console.log(data);
    const res = await fetch("api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      alert("New account created");
    }
  }
  return (
    <form onSubmit={handleCreateAccount}>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" />
      <label htmlFor="mail">Mail:</label>
      <input type="email" id="mail" name="mail" />
      <label htmlFor="password">Password:</label>
      <input type="text" id="password" name="password" />
      <button type="submit">Create account</button>
    </form>
  );
}
