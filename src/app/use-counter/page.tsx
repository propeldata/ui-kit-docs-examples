'use client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useCounter, RelativeTimeRange } from "@propeldata/ui-kit";

const queryClient = new QueryClient();

function UseCounter() {
  const { data } = useCounter({
    metric: {
      count: { dataPool: { name: "TacoSoft Demo Data" } },
    },
    timeRange: { relative: RelativeTimeRange.LastNDays, n: 30 },
  });


  return (
    <pre>
      {JSON.stringify(data?.counter?.value, null, 2)}
    </pre>
  );
}

export default function UseSqlExample() {
  return (
    <QueryClientProvider client={queryClient}>
      <UseCounter />
    </QueryClientProvider>
  );
}