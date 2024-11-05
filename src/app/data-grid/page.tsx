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
          columns: ["timestamp", "taco_name", "taco_unit_price"],
          dataPool: {
            name: "TacoSoft Demo Data",
          },
          orderByColumn: 1,
          sort: Sort.Desc
        }}
        paginationProps={{
          defaultPageSize: 5
        }}
        resizable={true}
        prettifyHeaders={true}
        showRowCount={true}
      />
    </Flex>
  );
}