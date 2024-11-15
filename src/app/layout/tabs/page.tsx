import {
  Flex,
  Text,
  Tabs,
  Container
} from "@propeldata/ui-kit";

export default async function TabsExample() {
  return (
    <Container p="5">
      <Tabs.Root defaultValue="overview">
        <Tabs.List>
          <Tabs.Trigger value="overview">Dashboard</Tabs.Trigger>
          <Tabs.Trigger value="sales">Orders</Tabs.Trigger>
        </Tabs.List>

        <Flex pt="3">
          <Tabs.Content value="overview">
            <Text size="2">View key metrics and KPIs for your business.</Text>
          </Tabs.Content>

          <Tabs.Content value="sales">
            <Text size="2">View incoming orders.</Text>
          </Tabs.Content>
        </Flex>
      </Tabs.Root>
    </Container>
  );
}