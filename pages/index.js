import useSWR from "swr";
import Card from "@/components/Card";
import Form from "@/components/Form";
import Link from "next/link";

export default function Home() {
  const { data, isLoading } = useSWR("/api/Coffee");

  if (isLoading) {
    return <h1>...isLoading</h1>;
  }
  return (
    <>
      <h1>Hello Coffee-Nerd</h1>
      {data.map((cof) => (
        <Link href={`/${cof._id}`} key={cof._id}>
          <Card
            name={cof.name}
            type={cof.type}
            ratioA={cof.ratioA}
            ratioB={cof.ratioB}
          />
        </Link>
      ))}
      <Form />
    </>
  );
}
