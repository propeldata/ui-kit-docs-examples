import {
  AccessTokenProvider,
  Container,
  Flex,
  Grid,
  Heading,
  Text,
  Card,
  TimeRangePicker,
  SimpleFilter,
  GroupBy,
  FilterProvider,
  TimeSeries,
  TimeGrainPicker,
  TimeSeriesGranularity,
  Leaderboard,
  Sort,
  Tabs,
  DataGrid,
  Counter,
  PieChart,
} from "@propeldata/ui-kit";
import { iris } from "@propeldata/ui-kit/colors";
import yaml from 'yaml';

// Configuration YAML
const configYaml = `
dataPoolName: TacoSoft Demo Data
heading:
  text: My Dashboard
  as: h1
welcomeText: Welcome to your Propel dashboard. Here you'll find an overview of your data.
filterProvider:
  maxGroupBy: 25
  defaultGroupBy:
    - taco_name
filters:
  - type: SimpleFilter
    filter: restaurant_name
    label: Restaurant...
    maxValues: 1000
  - type: SimpleFilter
    filter: taco_name
    label: Taco...
    maxValues: 1000
groupBy:
  query:
    dataPool:
      name: TacoSoft Demo Data
  includeColumns:
    - restaurant_name
    - taco_name
    - tortilla_name
    - sauce_name
  prettifyColumnNames: true
metrics:
  - counterLabel: Orders
    timeSeriesLabel: Orders over time
    definition:
      count:
        dataPool:
          name: TacoSoft Demo Data
  - counterLabel: Revenue
    timeSeriesLabel: Revenue over time
    prefix: $
    suffix: ''
    definition:
      sum:
        dataPool:
          name: TacoSoft Demo Data
        measure:
          columnName: taco_total_price
  - counterLabel: Average order
    timeSeriesLabel: Average order over time
    prefix: $
    definition:
      custom:
        dataPool:
          name: TacoSoft Demo Data
        expression: SUM(taco_total_price) / COUNT()
`;

// Parse YAML to JavaScript object
const config = yaml.parse(configYaml);

const REFETCH_INTERVAL = 10000; // 10 second refresh interval



export default async function Home() {

  return (
      <FilterProvider
        maxGroupBy={config.filterProvider.maxGroupBy}
        defaultGroupBy={config.filterProvider.defaultGroupBy}
      >
        <Container
          style={{
            maxWidth: "min(1200px, 95%)",
            margin: "0 auto",
            paddingTop: "2rem",
          }}
        >
          <Flex direction="column" gap="4">
            {config.heading && (
              <Heading as={config.heading.as}>{config.heading.text}</Heading>
            )}
            {config.welcomeText && (
              <Text size="3">{config.welcomeText}</Text>
            )}
            {/* filters and time range picker */}
            <Flex direction={{ initial: "column", sm: "row" }} width="100%">
              <Flex
                style={{
                  padding: "1rem",
                  width: "100%",
                  backgroundColor: "var(--propel-accent-2)",
                  gap: "16px",
                  flexWrap: "wrap",
                }}
              >
                {config.filters.map((filter: any, index: number) => {
                  if (filter.type === 'SimpleFilter') {
                    return (
                      <SimpleFilter
                        key={index}
                        query={{
                          columnName: filter.filter,
                          dataPool: { name: config.dataPoolName },
                          maxValues: filter.maxValues,
                        }}
                        autocompleteProps={{ placeholder: filter.label }}
                        style={{ minWidth: "150px", flexGrow: 1, maxWidth: "200px" }}
                      />
                    );
                  }
                  return null;
                })}
                {config.groupBy && (
                  <>
                    <Text align="center" size="7" color="gray" weight="light" style={{ margin: "0 8px" }}>|</Text>
                    <GroupBy
                      query={config.groupBy.query}
                      includeColumns={config.groupBy.includeColumns}
                      prettifyColumnNames={config.groupBy.prettifyColumnNames}
                      style={{ minWidth: "150px", flexGrow: 1, maxWidth: "200px" }}
                    />
                  </>
                )}
              </Flex>
              <Flex
                style={{
                  padding: "1rem",
                  backgroundColor: "var(--propel-accent-2)",
                  gap: "16px",
                  flexWrap: "wrap",
                  justifyContent: "flex-end",
                  minWidth: "fit-content"
                }}
              >
                <TimeGrainPicker
                  defaultValue={TimeSeriesGranularity.FifteenMinutes}
                  options={[
                    TimeSeriesGranularity.FifteenMinutes,
                    TimeSeriesGranularity.Hour,
                    TimeSeriesGranularity.Day,
                    TimeSeriesGranularity.Month,
                    TimeSeriesGranularity.Year,
                  ]}
                  style={{ minWidth: "150px" }}
                />
                <TimeRangePicker
                  defaultValue={{ value: "last-30-days" }}
                  style={{ minWidth: "150px" }}
                />
              </Flex>
            </Flex>
            <Tabs.Root
              defaultValue={config.metrics[0].counterLabel}
              style={{ border: "none", width: "100%" }}
            >
              {/* Metrics cards */}
              <Tabs.List style={{ padding: 0, width: "100%" }}>
                <Grid
                  columns={Math.min(config.metrics.length, 5).toString()} // Set a max of 5 columns
                  gap="4"
                  align="center"
                  width="100%"
                >
                  {config.metrics.map((metric: any, index: number) => (
                    <Tabs.Card
                      key={index}
                      style={{ height: "100%", width: "100%", padding: 0, cursor: "pointer" }}
                      value={metric.counterLabel}
                    >
                      <Flex
                        direction="column"
                        align="center"
                        justify="center"
                        width="100%"
                      >
                        <Card style={{ width: "100%" }}>
                          <Text style={{ margin: 0 }}>{metric.counterLabel}</Text>
                          <br />
                          <Counter
                            localize
                            prefixValue={metric.prefix}
                            query={{
                              metric: metric.definition,
                              refetchInterval: REFETCH_INTERVAL,
                            }}
                          />
                        </Card>
                      </Flex>
                    </Tabs.Card>
                  ))}
                </Grid>
              </Tabs.List>
              {/* Metric content */}
              {config.metrics.map((metric: any, index: number) => (
                <Tabs.Content key={index} value={metric.counterLabel}>
                  <Flex
                    direction="column"
                    gap="4"
                    style={{ width: "100%", paddingTop: "16px" }}
                  >
                    <Flex direction="column" style={{ width: "100%" }}>
                      <Card>
                        <Text size="3" weight="bold" style={{ margin: 0 }}>
                          {metric.timeSeriesLabel}
                        </Text>
                        <TimeSeries
                          variant="bar"
                          query={{
                            metric: metric.definition,
                            refetchInterval: REFETCH_INTERVAL,
                          }}
                          otherColor="gray.gray5"
                          stacked={true}
                          style={{ height: "300px" }} // Set a fixed height for better responsiveness
                        />
                      </Card>
                    </Flex>
                    <Tabs.Root
                      defaultValue="breakdowns"
                      style={{ border: "none", width: "100%", paddingBottom: "16px" }}
                    >
                      <Tabs.List>
                        <Tabs.Trigger value="breakdowns">Breakdowns</Tabs.Trigger>
                        <Tabs.Trigger value="records">Records</Tabs.Trigger>
                      </Tabs.List>
                      <Tabs.Content value="breakdowns">
                        <Grid
                          columns={{ initial: "1", lg: "2" }} // Changed to single column on smaller screens
                          gap="4"
                          align="center"
                          style={{ paddingTop: "16px" }}
                        >
                          <Flex
                            direction="column"
                            align="center"
                            justify="center"
                            width="100%"
                          >
                            <Card style={{ width: "100%" }}>
                              <Leaderboard
                                variant="table"
                                query={{
                                  metric: metric.definition,
                                  sort: Sort.Desc,
                                  refetchInterval: REFETCH_INTERVAL,
                                }}
                                prettifyHeaders={true}
                              />
                            </Card>
                          </Flex>
                          <Flex
                            direction="column"
                            align="center"
                            justify="center"
                            style={{ width: "100%" }}
                          >
                            <Card style={{ width: "100%" }}>
                              <PieChart
                                variant="pie"
                                chartProps={{
                                  hideTotal: true,
                                  legendPosition: "bottom", // Changed to bottom for better responsiveness
                                }}
                                query={{
                                  metric: metric.definition,
                                  sort: Sort.Desc,
                                  refetchInterval: REFETCH_INTERVAL,
                                }}
                              />
                            </Card>
                          </Flex>
                        </Grid>
                      </Tabs.Content>
                      <Tabs.Content value="records">
                        <Flex
                          style={{
                            paddingTop: "16px",
                            height: "35vh",
                          }}
                        >
                          <DataGrid
                            query={{
                              columns: ["*"],
                              dataPool: { name: config.dataPoolName },
                              orderByColumn: 1,
                              sort: Sort.Desc
                            }}
                            paginationProps={{
                              defaultPageSize: 100
                            }}
                            prettifyHeaders={true}
                            showRowCount={true}
                          />
                        </Flex>
                      </Tabs.Content>
                    </Tabs.Root>
                  </Flex>
                </Tabs.Content>
              ))}
            </Tabs.Root>
          </Flex>
        </Container>
      </FilterProvider>
  );
}
