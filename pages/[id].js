import { useRouter } from "next/router";
import Card from "@/components/Card";
import useSWR from "swr";

export default function CoffeeCard() {
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading } = useSWR(`/api/Coffee/${id}`);

  if (isLoading) {
    return <h1>...is Loading</h1>;
  }

  if (!data) {
    return;
  }

  return (
    <Card
      name={data.name}
      type={data.type}
      ratioA={data.ratioA}
      ratioB={data.ratioB}
    />
  );
}
