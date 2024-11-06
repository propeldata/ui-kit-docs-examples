import {
  Flex,
  SimpleFilter,
  FilterProvider,
  TimeRangePicker
} from "@propeldata/ui-kit";

export default async function FilterProviderExample() {
  return (
    <Flex p="7" justify="center" width="100%">
      <FilterProvider>
        <SimpleFilter
          query={{
          columnName: "restaurant_name",
          dataPool: { name: "TacoSoft Demo Data" },
          maxValues: 10,
        }}
        autocompleteProps={{ placeholder: "Restaurant..." }}
        />
        <TimeRangePicker
          defaultValue={{ value: "last-30-days" }}
        />
      </FilterProvider>
    </Flex>
  );
}