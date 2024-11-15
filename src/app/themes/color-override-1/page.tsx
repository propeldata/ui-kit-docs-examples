import {
  TimeSeries,
  Container,
  RelativeTimeRange,
  TimeSeriesGranularity,
  ThemeProvider
} from "@propeldata/ui-kit";

export default async function ColorOverride1Example() {
  return (
    <Container p="5">
      <ThemeProvider accentColor="blue">
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
      </ThemeProvider>
    </Container>
  );
}