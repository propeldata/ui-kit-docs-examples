import { TimeSeries, Container, RelativeTimeRange, TimeSeriesGranularity } from "@propeldata/ui-kit";

export default async function PieChartExample() {
  return (
    <Container p="5">
      <TimeSeries
        variant="bar"
        query={{
          metric: {
            count: {
              dataPool: {
                name: "TacoSoft Demo Data",
              },
            },
          },
          timeRange: { relative: RelativeTimeRange.LastNDays, n: 90 },
          granularity: TimeSeriesGranularity.Day,
        }}
      />
    </Container>
  );
}