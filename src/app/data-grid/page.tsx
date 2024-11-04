import { DataGrid, Sort, Flex } from "@propeldata/ui-kit";

export default async function CounterExample() {
  return (
    <Flex p="7" align="center" justify="center">
      <DataGrid
        query={{
          columns: ["timestamp", "restaurant_name", "taco_name", "taco_unit_price"],
          dataPool: {
            name: "TacoSoft Demo Data",
          },
          orderByColumn: 1,
          sort: Sort.Desc
        }}
        paginationProps={{
          defaultPageSize: 5
        }}
        prettifyHeaders={true}
        showRowCount={true}
      />
    </Flex>
  );
}