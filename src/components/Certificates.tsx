
import { containerStackTokens } from "@/styles/styles";
import { Stack, StackItem, Link, DefaultButton, IButtonStyles, FontIcon} from "@fluentui/react";


import { v4 as uuidv4 } from 'uuid';

import useSiteStore from "@/stores/site";
import { shallow } from "zustand/shallow";
import Top from "./Top";

export default function Certificates() {
  const resume = useSiteStore((state) => state.resume, shallow);

  if(!resume.certificates) {
    return null;
  }

  const buttonStyles: IButtonStyles = {
    root: {
      height: "unset"
    }
  }

  
  
  return (
    <section>
    <Stack tokens={containerStackTokens}>
      <StackItem>
        <Top iconName="Certificate">Zertifikate</Top>
      </StackItem>
      {resume.certificates.map(certificate => {
          return (
            <StackItem key={uuidv4()}>
              <DefaultButton href={certificate.url} target="_blank" styles={buttonStyles}>{certificate.name} - {certificate.issuer} - {certificate.date ? new Date(certificate.date).toLocaleDateString() : ""}</DefaultButton>
            </StackItem>
          )
        })}

    </Stack>
    </section>
  );
}
