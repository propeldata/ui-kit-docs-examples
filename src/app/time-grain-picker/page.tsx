import {
  TimeGrainPicker,
  TimeSeriesGranularity,
  FilterProvider,
  Flex,
} from "@propeldata/ui-kit";

export default async function TimeGrainPickerExample() {
  return (
      <Flex p="7" justify="center" width="100%">
        <FilterProvider>
          <TimeGrainPicker
          defaultValue={TimeSeriesGranularity.Day}
          options={[
            TimeSeriesGranularity.FifteenMinutes,
            TimeSeriesGranularity.Hour,
            TimeSeriesGranularity.Day,
            TimeSeriesGranularity.Month,
            TimeSeriesGranularity.Year,
          ]}
          defaultOpen
        />
      </FilterProvider>
    </Flex>
  );
}