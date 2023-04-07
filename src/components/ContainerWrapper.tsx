import { PropsWithChildren } from "react";
import { Container } from "react-bootstrap";

interface ContainerWrapperProps{
}

export default function ContainerWrapper(props: PropsWithChildren<ContainerWrapperProps>): JSX.Element {
  return (
    <Container>
      {props.children}
    </Container>
  )
}