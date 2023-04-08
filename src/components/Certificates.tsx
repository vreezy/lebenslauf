
import { containerStackTokens } from "@/styles/styles";
import { Stack, StackItem, Link, Text, IStackTokens} from "@fluentui/react";


import { v4 as uuidv4 } from 'uuid';

import useSiteStore from "@/stores/site";
import { shallow } from "zustand/shallow";

export default function Certificates() {
  const resume = useSiteStore((state) => state.resume, shallow);

  if(!resume.certificates) {
    return null;
  }

  return (
    <Stack tokens={containerStackTokens}>
      {resume.certificates.map(certificate => {
          return (
            <StackItem key={uuidv4()}>
              <Link href={certificate.url}>{certificate.name} - {certificate.issuer} - {certificate.date ? new Date(certificate.date).toLocaleDateString() : ""}</Link>
            </StackItem>
          )
        })}

    </Stack>
  );
}
