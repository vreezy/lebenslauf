import { isIsoDate } from "@/utils/isISODate";
import { PropsWithChildren } from "react";
import ListItem from "./ListItem";

// Utils
import { v4 as uuidv4 } from "uuid";

export default function List(props: PropsWithChildren) {
  if (props.children) {
    if (Array.isArray(props.children)) {
      return (
        <ul className="list-group">
          {props.children.map((child) => (
            <ListItem key={uuidv4()}>{child}</ListItem>
          ))}
        </ul>
      );
    }

    return (
      <ul className="list-group">
        <ListItem key={uuidv4()}>{props.children}</ListItem>
      </ul>
    );
  }

  return null;
}