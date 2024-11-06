import {
  Counter,
  LogProvider,
  LogLevel
} from "@propeldata/ui-kit";

function LoggerComponent() {
  return (
    <LogProvider logLevel={LogLevel.Error}>
      <Counter />
    </LogProvider>
  );
}
