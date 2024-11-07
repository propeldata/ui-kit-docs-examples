'use client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useTimeSeries, RelativeTimeRange, TimeSeriesGranularity } from "@propeldata/ui-kit";

const queryClient = new QueryClient();

function UseTimeSeries() {
  const { data } = useTimeSeries({
    metric: {
      count: { dataPool: { name: "TacoSoft Demo Data" } },
    },
    timeRange: { relative: RelativeTimeRange.LastNDays, n: 30 },
    granularity: TimeSeriesGranularity.Day,
  });

  return (
    <pre>
      {JSON.stringify(data?.timeSeries?.labels, null, 2)}
      {JSON.stringify(data?.timeSeries?.values, null, 2)}
    </pre>
  );
}

export default function UseSqlExample() {
  return (
    <QueryClientProvider client={queryClient}>
      <UseTimeSeries />
    </QueryClientProvider>
  );
}