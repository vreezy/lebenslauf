
import { Stack, StackItem, Link, Text, IStackTokens} from "@fluentui/react";

import resume from "resume/resume.json";
import { v4 as uuidv4 } from 'uuid';

export default function Certificates() {
  const containerStackTokens: IStackTokens = { childrenGap: 5 };

  return (
    <Stack tokens={containerStackTokens}>
      {resume.certificates.map(certificate => {
          return (
            <StackItem key={uuidv4()}>
              <Link href={certificate.url}>{certificate.name} - {certificate.issuer} - {new Date(certificate.date).toLocaleDateString()}</Link>
            </StackItem>
          )
        })}

    </Stack>
  );
}
