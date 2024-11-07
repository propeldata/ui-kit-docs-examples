'use client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { RelativeTimeRange, useTopValues } from "@propeldata/ui-kit";

const queryClient = new QueryClient();

function UseTopValues() {
  const { data } = useTopValues({
    dataPool: { name: "TacoSoft Demo Data" },
    columnName: 'restaurant_name',
    timeRange: { relative: RelativeTimeRange.LastNDays, n: 30 },
  });

  return (
    <pre>
      {JSON.stringify(data?.topValues?.values, null, 2)}
    </pre>
  );
}

export default function UseSqlExample() {
  return (
    <QueryClientProvider client={queryClient}>
      <UseTopValues />
    </QueryClientProvider>
  );
}
