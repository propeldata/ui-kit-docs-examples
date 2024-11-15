import {
  Text,
  Container,
  Card,
  Heading
} from "@propeldata/ui-kit";

export default async function TabsExample() {
  return (
    <Container p="5">
      <Card>
        <Heading as="h3" color="gray">Card heading</Heading>
        <Text>Card content</Text>
      </Card>
    </Container>
  );
}