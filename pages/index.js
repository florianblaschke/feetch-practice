import useSWR from "swr";
import Card from "@/components/Card";
import Form from "@/components/Form";

export default function Home() {
  const { data, error, isLoading, isValidating } = useSWR("/api/Coffee");

  console.log(data /* , error, isLoading, isValidating */);

  if (isLoading) {
    return <h1>...isLoading</h1>;
  }
  return (
    <>
      <h1>Hello Coffee-Nerd</h1>
      {data.map((cof) => (
        <Card
          key={cof._id}
          name={cof.name}
          type={cof.type}
          ratioA={cof.ratioA}
          ratioB={cof.ratioB}
        />
      ))}
      <Form />
    </>
  );
}
