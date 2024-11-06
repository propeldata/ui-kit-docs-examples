import {
  SimpleFilter,
  FilterProvider,
  TimeRangePicker
} from "@propeldata/ui-kit";

export default async function FilterProviderExample() {
  return (
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
  );
}