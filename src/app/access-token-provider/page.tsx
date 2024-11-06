import { Counter, AccessTokenProvider } from '@propeldata/ui-kit'
import { fetchToken } from './utils'

export default async function AccessTokenProviderExample() {
  return (
    <AccessTokenProvider fetchToken={fetchToken}>
      <Counter
        query={{
          metric: {
            count: { dataPool: { name: "TacoSoft Demo Data" } },
          }
        }}
      />
    </AccessTokenProvider>
  );
}