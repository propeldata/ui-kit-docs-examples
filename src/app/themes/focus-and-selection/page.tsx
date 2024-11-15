import {
  Container,
  Flex,
  Text,
  ThemeProvider
} from "@propeldata/ui-kit";

export default async function FocusAndSelectionExample() {
  return (
    <Container p="5">
      <ThemeProvider accentColor="indigo">
        <Flex direction="column" gap="4">
          <Text>
            View your dashboard metrics in <a href="#">analytics</a>
          </Text>
          <Text color="gray">
            Compare performance across <a href="#">time periods</a>
          </Text>
          <Text color="red">
            Critical alerts require <a href="#">immediate action</a>
          </Text>
        </Flex>
      </ThemeProvider>
    </Container>
  );
}