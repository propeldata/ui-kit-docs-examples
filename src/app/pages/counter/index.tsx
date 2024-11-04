import { Counter } from "@propeldata/ui-kit";

export default async function CounterExample() {
  return (
    <Counter
      localize
      card
      prefixValue="$"
      query={{
        metric: {
          count: {
            dataPool: {
              name: "TacoSoft Demo Data",
            },
          },
        },
      }}
    />
  );
}