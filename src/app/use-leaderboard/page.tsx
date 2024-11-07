'use client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useLeaderboard, RelativeTimeRange } from "@propeldata/ui-kit";

const queryClient = new QueryClient();

function UseLeaderboard() {
  const { data } = useLeaderboard({
    metric: {
      count: { dataPool: { name: "TacoSoft Demo Data" } },
    },
    timeRange: { relative: RelativeTimeRange.LastNDays, n: 30 },
    dimensions: [{
      columnName: 'restaurant_name',
    }],
  });

  return (
    <pre>
      {JSON.stringify(data?.leaderboard?.rows, null, 2)}
    </pre>
  );
}

export default function UseSqlExample() {
  return (
    <QueryClientProvider client={queryClient}>
      <UseLeaderboard />
    </QueryClientProvider>
  );
}