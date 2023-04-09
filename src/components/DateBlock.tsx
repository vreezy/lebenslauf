// Components
import { Text } from "@fluentui/react";
import DateField from "./DateField";

// Interfaces
interface DateBlockPropss {
  startDate: string | undefined;
  endDate: string | undefined;
}
export default function DateBlock(props: DateBlockPropss) {
  return (
    <Text block style={{ fontStyle: "italic" }}>
      <DateField dateString={props.startDate} type="start" />
      {" - "}
      <DateField dateString={props.endDate} type="end" />
    </Text>
  );
}
