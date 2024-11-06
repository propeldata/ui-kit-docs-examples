'use client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useDataGrid, RelativeTimeRange } from "@propeldata/ui-kit";

const queryClient = new QueryClient();

function UseDataGrid() {
  const { data } = useDataGrid({
    dataPool: { name: "TacoSoft Demo Data" },
    columns: ['*'],
    timeRange: { relative: RelativeTimeRange.LastNDays, n: 30 },
  });


  return (
    <pre>
      {JSON.stringify(data?.dataGrid?.rows, null, 2)}
    </pre>
  );
}

export default function UseSqlExample() {
  return (
    <QueryClientProvider client={queryClient}>
      <UseDataGrid />
    </QueryClientProvider>
  );
}