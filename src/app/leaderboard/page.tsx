import { Leaderboard, Container, RelativeTimeRange, Sort } from "@propeldata/ui-kit";

export default async function LeaderboardExample() {
  return (
    <Container p="3">
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
    </Container>
  );
}