// Components
import {
  Stack,
  StackItem,
  DefaultButton,
  IButtonStyles,
  Text,
} from "@fluentui/react";
import Top from "./Top";
import DateField from "./DateField";

// Styles
import { containerStackTokens } from "@/styles/styles";

// Utiles
import { v4 as uuidv4 } from "uuid";

// Stores
import useSiteStore from "@/stores/site";
import { shallow } from "zustand/shallow";

export default function Certificates() {
  const resume = useSiteStore((state) => state.resume, shallow);

  if (!resume.certificates) {
    return null;
  }

  const buttonStyles: IButtonStyles = {
    root: {
      display: "flex", // stretch width 100%
      height: "unset",
      textAlign: "unset"
    },
    textContainer: {
      padding: "5px",
    },
  };

  return (
    <section>
      <Stack tokens={containerStackTokens}>
        <header>
          <StackItem>
            <Top iconName="Certificate">Zertifikate</Top>
          </StackItem>
        </header>

        <StackItem>
          <Stack tokens={{ childrenGap: 15 }}>
            {resume.certificates.map((certificate) => {
              return (
                <article key={uuidv4()}>
                  <StackItem>
                    <DefaultButton
                      href={certificate.url}
                      target="_blank"
                      styles={buttonStyles}
                    >
                      {certificate.name}
                    </DefaultButton>
                    <Text block dir="rtl" style={{ fontStyle: "italic" }}>
                      {certificate.issuer}
                      {certificate.date && (
                        <>
                          {" - "}
                          <DateField
                            dateString={certificate.date}
                            type={"start"}
                          />
                        </>
                      )}
                    </Text>
                  </StackItem>
                </article>
              );
            })}
          </Stack>
        </StackItem>
      </Stack>
    </section>
  );
}
