// Components
import Badge from "./Badge";

// Utils
import { v4 as uuidv4 } from "uuid";

// Interfaces
import { PropsWithChildren } from "react";

export default function Badges(props: PropsWithChildren) {
  if (props.children) {
    if (Array.isArray(props.children)) {
      // TODO Container
      return (
        <>
          {props.children.map((child) => {
            return <Badge key={uuidv4()}>{child}</Badge>;
          })}
        </>
      );
    }

    return <Badge key={uuidv4()}>{props.children}</Badge>;
  }

  return null;
}
