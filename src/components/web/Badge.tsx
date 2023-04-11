import { PropsWithChildren } from "react";

export default function Badge(props: PropsWithChildren) {
  return (
    <span className="badge rounded-pill text-bg-secondary" id="badge">
      {props.children}
    </span>
  );
}
