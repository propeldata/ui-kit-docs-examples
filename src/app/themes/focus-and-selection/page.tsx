import {
  Container,
  Flex,
  Link,
  Text,
  ThemeProvider
} from "@propeldata/ui-kit";

export default async function FocusAndSelectionExample() {
  return (
    <Container p="5">
      <ThemeProvider accentColor="indigo">
        <Flex direction="column" gap="4">
          <Text>
            View your dashboard metrics in <Link href="#">analytics</Link>
          </Text>
          <Text color="gray">
            Compare performance across <Link href="#">time periods</Link>
          </Text>
          <Text color="red">
            Critical alerts require <Link href="#">immediate action</Link>
          </Text>
        </Flex>
      </ThemeProvider>
    </Container>
  );
}