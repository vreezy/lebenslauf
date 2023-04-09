import {
  IButtonProps,
  IIconProps,
  ActionButton,
  IButtonStyles,
} from "@fluentui/react";
import { PropsWithChildren } from "react";

interface TopLinkProps extends IButtonProps {}

export default function TopLink(props: PropsWithChildren<TopLinkProps>) {
  const icon: IIconProps = { iconName: "OpenInNewTab" };

  const styles: IButtonStyles = {
    textContainer: {
      fontWeight: "600",
      fontSize: "large",
    },
    label: {
      margin: 0,
    },
    root: {
      padding: 0,
      height: "unset"
    },
    flexContainer: {
      flexDirection: "row-reverse",
    },
    icon: {
      fontSize: "smaller"
    }
  };

  return (
    <ActionButton styles={styles} iconProps={icon} target="_blank" {...props}>
      {props.children}
    </ActionButton>
  );
}
