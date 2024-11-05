import {
  TimeRangePicker,
  Flex
} from "@propeldata/ui-kit";

export default async function PieChartExample() {
  return (
    <Flex p="7" justify="center" width="100%">
      <TimeRangePicker
        defaultValue={{ value: "last-30-days" }}
      />
    </Flex>
  );
}