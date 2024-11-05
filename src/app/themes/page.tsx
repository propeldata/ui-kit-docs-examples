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
      <ThemeProvider
        accentColor="grass"
        grayColor="olive"
        panelBackground="solid"
        scaling="100%"
        radius="none"
      >
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
      </ThemeProvider>
    </Container>
  );
}