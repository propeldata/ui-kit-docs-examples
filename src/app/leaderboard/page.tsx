import { Leaderboard, Flex, RelativeTimeRange, Sort } from "@propeldata/ui-kit";

export default async function LeaderboardExample() {
  return (
    <Flex p="1" align="center" justify="center">
      <Leaderboard
        query={{
          metric: {
            count: {
              dataPool: {
                name: "TacoSoft Demo Data",
              },
            },
          },
          timeRange: { relative: RelativeTimeRange.LastNDays, n: 90 },
          rowLimit: 5,
          dimensions: [{ columnName: "restaurant_name" }],
          sort: Sort.Desc,
        }}
        card
        chartProps={{ showBarValues: true }}
      />
    </Flex>
  );
}