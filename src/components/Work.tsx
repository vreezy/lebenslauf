// Components
import { Stack, StackItem, Text } from "@fluentui/react";
import Top from "./Top";
import DateField from "./DateField";
import List from "./List";

// Utils
import { v4 as uuidv4 } from "uuid";

// Styles
import { containerStackTokens } from "@/styles/styles";

// Stores
import useSiteStore from "@/stores/site";
import { shallow } from "zustand/shallow";
import TopLink from "./TopLink";

export default function Work() {
  const resume = useSiteStore((state) => state.resume, shallow);

  if (!resume.work) {
    return null;
  }

  return (
    <section>
      <Stack tokens={containerStackTokens}>
        <header>
          <StackItem>
            <Top>Berufserfahrung</Top>
          </StackItem>
        </header>
        {resume.work.map((work) => {
          return (
            <article key={uuidv4()}>
              <StackItem style={{marginBottom: "14px"}}>
                <Stack tokens={containerStackTokens}>
                  <header>
                    <StackItem>
                      <Stack horizontal horizontalAlign="space-between">
                        <StackItem>
                          <TopLink href={work.url} title={work.name} aria-label={work.name}>{work.name}</TopLink>
                        </StackItem>
                        <StackItem >
                          <Text block>
                            <DateField
                              dateString={work.startDate}
                              type="start"
                            />
                            {" - "}
                            <DateField dateString={work.endDate} type="end" />
                          </Text>
                          <Text block>{work.location}</Text>
                        </StackItem>
                      </Stack>
                    </StackItem>
                  </header>
                  <section>
                    <StackItem>
                      <Stack horizontal horizontalAlign="space-between">
                        <StackItem>
                          <Text block>{work.position}</Text>
                        </StackItem>
                        <StackItem>
                   
                        </StackItem>
                      </Stack>
                    </StackItem>
                  </section>
                  <section>
                    <StackItem>
                      <Text block>{work.summary}</Text>
                      <Text block>{work.description}</Text>
                    </StackItem>
                  </section>
                  <section>
                    <StackItem>
                      <List>{work.highlights}</List>
                    </StackItem>
                  </section>
                </Stack>
              </StackItem>
            </article>
          );
        })}
      </Stack>
    </section>
  );
}
