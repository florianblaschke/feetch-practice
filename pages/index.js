import useSWR from "swr";
import Card from "@/components/Card";
import Form from "@/components/Form";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const { data, isLoading } = useSWR("/api/Coffee");
  const [login, setLogin] = useState(false);

  if (isLoading) {
    return <h1>...isLoading</h1>;
  }

  async function handleLogin(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    const res = await fetch("/api/login/session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!res.ok) {
      alert("You could not be logged in");
    }
    setLogin(true);
  }
  return (
    <>
      <h1>Hello Coffee-Nerd</h1>
      {data.map((cof) => (
        <Link href={`/${cof._id}`} key={cof._id}>
          <Card name={cof.name} roaster={cof.roaster} score={cof.score} />
        </Link>
      ))}
      <Form />
      <form onSubmit={handleLogin}>
        <label htmlFor="email">Login to proceed:</label>
        <input type="text" name="email" id="email" />
        <label htmlFor="password">Your password:</label>
        <input type="text" name="password" id="password" />
        <button>Login!</button>
      </form>
    </>
  );
}
