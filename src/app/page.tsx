import Link from 'next/link'
import { Flex, Heading } from "@propeldata/ui-kit"

export default function Home() {
  return (
    <Flex direction="column" gap="4" p="7">
      <Heading>Propel UI Kit Examples</Heading>
      <Link href="/counter">Counter</Link>
      <Link href="/filter-provider">Filter Provider</Link>
      <Link href="/group-by">Group By</Link>
      <Link href="/simple-filter">Simple Filter</Link>
      <Link href="/time-grain-picker">Time Grain Picker</Link>
      <Link href="/time-range-picker">Time Range Picker</Link>
      <Link href="/use-sql">SQL Query Example</Link>
    </Flex>
  )
}
