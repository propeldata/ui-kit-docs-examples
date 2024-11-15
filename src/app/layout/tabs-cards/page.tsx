import {
  Flex,
  Text,
  Tabs,
  Container,
  Grid,
  Card,
  Counter,
  RelativeTimeRange
} from "@propeldata/ui-kit";
import { config } from "process";

export default async function TabsExample() {
  return (
    <Container p="5">
      <Tabs.Root defaultValue="Revenue">
        <Flex direction="column" width="100%">
          <Tabs.List>
            <Grid
              columns="3"
              gap="4"
              align="center"
              width="100%"
            >
              <Tabs.Card
                style={{ height: "100%", width: "100%", padding: 0, cursor: "pointer" }}
                value="Revenue"
              >
                <Flex
                  direction="column"
                  align="center"
                  justify="center"
                  width="100%"
                >
                  <Card style={{ width: "100%" }}>
                    <Text style={{ margin: 0 }}>Revenue</Text>
                    <br />
                    <Counter
                      localize
                      prefixValue="$"
                      query={{
                        metric: {
                          sum: {
                            dataPool: {
                              name: "TacoSoft Demo Data",
                            },
                            measure: {
                              columnName: "taco_total_price",
                            },
                          },
                        },
                        timeRange: { relative: RelativeTimeRange.LastNDays, n: 30 },
                      }}
                    />
                  </Card>
                </Flex>
              </Tabs.Card>
              <Tabs.Card
                style={{ height: "100%", width: "100%", padding: 0, cursor: "pointer" }}
                value="Orders"
              >
                <Flex
                  direction="column"
                  align="center"
                  justify="center"
                  width="100%"
                >
                  <Card style={{ width: "100%" }}>
                    <Text style={{ margin: 0 }}>Orders</Text>
                    <br />
                    <Counter
                      localize
                      query={{
                        metric: {
                          count: {
                            dataPool: {
                              name: "TacoSoft Demo Data",
                            },
                          },
                        },
                        timeRange: { relative: RelativeTimeRange.LastNDays, n: 30 },
                      }}
                    />
                  </Card>
                </Flex>
              </Tabs.Card>
              <Tabs.Card
                style={{ height: "100%", width: "100%", padding: 0, cursor: "pointer" }}
                value="Average Order"
              >
                <Flex
                  direction="column"
                  align="center"
                  justify="center"
                  width="100%"
                >
                  <Card style={{ width: "100%" }} key="metric-1">
                    <Text style={{ margin: 0 }}>Metric 1</Text>
                    <br />
                    <Counter
                      localize
                      prefixValue="$"
                      query={{
                        metric: {
                          custom: {
                            dataPool: {
                              name: "TacoSoft Demo Data",
                            },
                            expression: "SUM(taco_total_price) / COUNT()",
                          },
                        },
                        timeRange: { relative: RelativeTimeRange.LastNDays, n: 30 },
                      }}
                    />
                  </Card>
                </Flex>
              </Tabs.Card>
            </Grid>
          </Tabs.List>

          <div style={{ borderBottom: '1px solid #e5e7eb', marginTop: '0px' }} />

          <Flex pt="3" width="100%">
            <Tabs.Content value="Revenue" style={{ width: "100%" }}>
              <Container style={{ backgroundColor: "#f5f5f5", padding: "24px", borderRadius: "8px", width: "100%" }}>
                <Text size="2">Revenue content</Text>
              </Container>
            </Tabs.Content>

            <Tabs.Content value="Orders" style={{ width: "100%" }}>
              <Container style={{ backgroundColor: "#f0f9ff", padding: "24px", borderRadius: "8px", width: "100%" }}>
                <Text size="2">Orders content</Text>
              </Container>
            </Tabs.Content>

            <Tabs.Content value="Average Order" style={{ width: "100%" }}>
              <Container style={{ backgroundColor: "#f0fdf4", padding: "24px", borderRadius: "8px", width: "100%" }}>
                <Text size="2">Average Order content</Text>
              </Container>
            </Tabs.Content>
          </Flex>
        </Flex>
      </Tabs.Root>
    </Container>
  );
}