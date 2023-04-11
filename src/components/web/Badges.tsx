// Components
import Badge from "./Badge";

// Utils
import { v4 as uuidv4 } from "uuid";

// Interfaces
import { PropsWithChildren } from "react";

export default function Badges(props: PropsWithChildren) {
  if (props.children) {
    if (Array.isArray(props.children)) {
      return (
        // <Stack tokens={{ childrenGap: 3 }} style={{ marginTop: "5px" }} wrap>
        <div style={{display: "flex", gap: "1%", flexWrap: "wrap"}}>
          {props.children.map((child) => {
            return <Badge key={uuidv4()}>{child}</Badge>;
          })}
          </div>
        // </Stack>
      );
    }

    return <Badges>{[props.children]}</Badges>;
  }

  return null;
}
