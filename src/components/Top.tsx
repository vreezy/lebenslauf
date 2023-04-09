// Interfaces
import { PropsWithChildren } from "react";

export default function Top(props: PropsWithChildren) {
  if (!props.children) {
    return null;
  }

  return <h2>{props.children}</h2>;
}
