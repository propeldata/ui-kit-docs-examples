import {
  TimeRangePicker,
  Flex,
  FilterProvider,
  Counter,
  RelativeTimeRange,
} from "@propeldata/ui-kit";

export default async function TimeRangePickerExample() {
  return (
    <Flex p="7" justify="center" width="100%">
      <FilterProvider
        defaultDataPool={{ name: "TacoSoft Demo Data" }}
        defaultTimeRange={{
          timestamp: "order_item_generated_at"
        }}
      >
        <TimeRangePicker
          defaultValue={{ value: "last-30-days" }}
        />
        <Counter
          query={{
            metric: { count: {} },
          }}
        />
      </FilterProvider>
    </Flex>
  );
}