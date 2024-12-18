import {
  PieChart,
  Container,
  RelativeTimeRange,
  Sort,
} from "@propeldata/ui-kit";

export default async function PieChartExample() {
  return (
    <Container p="5">
      <PieChart
        query={{
          metric: {
            count: {
              dataPool: {
                name: "TacoSoft Demo Data",
              },
            },
          },
          timeRange: { relative: RelativeTimeRange.LastNDays, n: 90 },
          rowLimit: 3,
          dimension: { columnName: "restaurant_name" },
          sort: Sort.Desc,

        }}
        chartProps={{
          hideTotal: true,
          legendPosition: "bottom",
        }}
      />
    </Container>
  );
}