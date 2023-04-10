// Components
import {
  IButtonProps,
  IIconProps,
  ActionButton,
  IButtonStyles,
} from "@fluentui/react";

// Interfaces
import { PropsWithChildren } from "react";

interface TopLinkProps extends IButtonProps {}

export default function TopLink(props: PropsWithChildren<TopLinkProps>) {
  const icon: IIconProps = { iconName: "OpenInNewTab" };

  const styles: IButtonStyles = {
    textContainer: {
      fontWeight: "600",
      fontSize: "large",
      color: props.href ? undefined : "rgb(50, 49, 48)",
    },
    label: {
      margin: 0,
    },
    root: {
      padding: 0,
      height: "unset",
    },
    flexContainer: {
      flexDirection: "row-reverse",
    },
    icon: {
      fontSize: "smaller",
    },
  };

  return (
    <ActionButton
      styles={styles}
      target="_blank"
      iconProps={props.href ? icon : undefined}
      disabled={props.href ? false : true}
      {...props}
    >
      {props.children}
    </ActionButton>
  );
}
