import {
  TimeRangePicker,
  Flex,
  FilterProvider
} from "@propeldata/ui-kit";

export default async function TimeRangePickerExample() {
  return (
    <Flex p="7" justify="center" width="100%">
      <FilterProvider>
        <TimeRangePicker
          defaultValue={{ value: "last-30-days" }}
        />
      </FilterProvider>
    </Flex>
  );
}