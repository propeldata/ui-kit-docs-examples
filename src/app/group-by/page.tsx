import {
  FilterProvider,
  Flex,
  GroupBy,
} from "@propeldata/ui-kit";

export default async function GroupByExample() {
  return (
      <Flex p="7" justify="center" width="100%">
        <FilterProvider>
          <GroupBy
            query={{
              dataPool: { name: "TacoSoft Demo Data" }
            }}
            includeColumns={[
              "taco_name",
              "restaurant_name",
              "sauce_name",
              "tortilla_name"
            ]}
            prettifyColumnNames={true}
            defaultOpen
          />
      </FilterProvider>
    </Flex>
  );
}