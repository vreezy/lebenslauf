// Components
import ListItem from "./ListItem";

// Utils
import { v4 as uuidv4 } from "uuid";

// Interfaces
import { PropsWithChildren } from "react";

export default function List(props: PropsWithChildren) {
  if (props.children) {
    if (Array.isArray(props.children)) {
      return (
        <ul>
          {props.children.map((child) => (
            <ListItem key={uuidv4()}>{child}</ListItem>
          ))}
        </ul>
      );
    }

    return <List>{[props.children]}</List>;
  }

  return null;
}
