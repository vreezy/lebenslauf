import { PropsWithChildren } from "react";

export default function ListItem(props: PropsWithChildren) {
  return <li className="list-group-item">{props.children}</li>;
}
