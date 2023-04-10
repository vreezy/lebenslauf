// Components
import { FontIcon, IFontIconProps } from "@fluentui/react";

// Interfaces
import { PropsWithChildren } from "react";

interface TopProps extends IFontIconProps {}

export default function Top(props: PropsWithChildren<TopProps>) {
  if (!props.children) {
    return null;
  }

  return (
    <h4 style={{ display: "flex" }}>
      {props.iconName && (
        <>
          <FontIcon aria-label={props.iconName} iconName={props.iconName} />
          &nbsp;
        </>
      )}
      {props.children}
    </h4>
  );
}
