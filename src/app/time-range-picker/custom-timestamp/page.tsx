"use client";

import {
  TimeRangePicker,
  Flex,
  FilterProvider,
  Counter,
} from "@propeldata/ui-kit";

export default async function TimeRangePickerExample() {
  return (
    <Flex p="7" justify="center" width="100%">
      <FilterProvider>
        <TimeRangePicker
          defaultValue={{ value: "today" }}
          options={(defaultOptions) => {
            return defaultOptions.map((option) => ({
              ...option,
              params: {
                ...option.params,
                timestamp: "order_item_generated_at",
              },
            }));
          }}
        />
        <Counter
          query={{
            metric: { count: { dataPool: { name: "TacoSoft Demo Data" } } },
          }}
        />
      </FilterProvider>
    </Flex>
  );
}