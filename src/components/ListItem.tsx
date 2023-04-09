import { PropsWithChildren } from "react";

export default function ListItem(props: PropsWithChildren) {
  return <li>{props.children}</li>;
}
