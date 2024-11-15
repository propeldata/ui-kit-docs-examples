import {
  TimeSeries,
  Container,
  RelativeTimeRange,
  TimeSeriesGranularity,
  ThemeProvider,
} from "@propeldata/ui-kit";

export default async function TimeSeriesExample() {
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
        timeRange: { relative: RelativeTimeRange.LastNMonths, n: 5 },
         granularity: TimeSeriesGranularity.Month,
       }}
      />
    </Container>
  );
}