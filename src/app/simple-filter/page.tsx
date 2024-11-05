import {
  TimeRangePicker,
  Flex,
  SimpleFilter,
  FilterProvider
} from "@propeldata/ui-kit";

export default async function SimpleFilterExample() {
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
      </FilterProvider>
    </Flex>
  );
}