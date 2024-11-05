import {
  Counter,
  RelativeTimeRange,
  Flex,
} from "@propeldata/ui-kit";

export default async function CounterExample() {
  return (
    <Flex p="7" justify="center" width="100%">
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
          timeRange: { relative: RelativeTimeRange.LastNDays, n: 30 },
        }}
      />
    </Flex>
  );
}