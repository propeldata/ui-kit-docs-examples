'use client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useSql } from "@propeldata/ui-kit";

const queryClient = new QueryClient();

function SqlTable() {
  const { data } = useSql({
    query: 'SELECT * FROM "TacoSoft Demo Data" LIMIT 5'
  });

  return (
    <pre>
      {JSON.stringify(data?.sqlV1?.rows, null, 2)}
    </pre>
  );
}

export default function UseSqlExample() {
  return (
    <QueryClientProvider client={queryClient}>
      <SqlTable />
    </QueryClientProvider>
  );
}
