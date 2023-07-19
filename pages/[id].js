import { useRouter } from "next/router";
import DetailCard from "@/components/DetailCard";
import useSWR from "swr";
import DetailForm from "@/components/DetailForm";

export default function CoffeeCard() {
  const router = useRouter();
  const { id } = router.query;

  const { data: cof, isLoading, mutate } = useSWR(`/api/Coffee/${id}`);

  if (isLoading) {
    return <h1>...is Loading</h1>;
  }

  if (!cof) {
    return;
  }

  async function updateScore(event) {
    event.preventDefault();

    const data = event.target.elements.score.value;

    const res = await fetch(`api/Coffee/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (res.ok) {
      mutate();
    }
  }

  return (
    <>
      <DetailCard
        name={cof.name}
        roaster={cof.roaster}
        origin={cof.provenance}
        arabica={cof.arabica}
        robusta={cof.robusta}
        level={cof.level}
        score={
          cof.score.length > 0
            ? Math.floor(
                cof.score.reduce((acc, curr) => acc + curr) / cof.score.length
              )
            : 0
        }
      />
      <DetailForm onSubmit={updateScore}></DetailForm>
    </>
  );
}
