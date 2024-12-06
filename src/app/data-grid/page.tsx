import {
  DataGrid,
  Sort,
  Flex,
} from "@propeldata/ui-kit";

export default async function DataGridExample() {
  return (
    <Flex p="3" justify="center" width="100%">
      <DataGrid
        query={{
          dataPool: {
            name: "TacoSoft Demo Data",
          },
          columns: ["timestamp", "taco_name", "taco_unit_price", "toppings"],
          orderByColumn: 1,
          sort: Sort.Desc
        }}
        resizable={true}
        prettifyHeaders={true}
        showRowCount={true}
      />
    </Flex>
  );
}