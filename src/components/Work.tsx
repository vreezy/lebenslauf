// Components
import { Link, Stack, StackItem, Text } from "@fluentui/react";

// Utils
import { v4 as uuidv4 } from "uuid";

// Styles
import { containerStackTokens } from "@/styles/styles";

// Stores
import useSiteStore from "@/stores/site";
import { shallow } from "zustand/shallow";

export default function Work() {
  const resume = useSiteStore((state) => state.resume, shallow);

  if (!resume.work) {
    return null;
  }

  function startDate(str: string | undefined): string {
    if (str) {
      return `${new Date(str).toLocaleDateString()} - `;
    }

    return "";
  }

  function endDate(str: string | undefined): string {
    if (str) {
      return new Date(str).toLocaleDateString();
    }

    return "Bis heute";
  }

  return (
    <Stack tokens={containerStackTokens}>
      {resume.work.map((work) => {
        return (
          <StackItem key={uuidv4()}>
            <Stack tokens={containerStackTokens}>
              <StackItem>
                <Text block>
                  <Link href={work.url}>{work.name}</Link>{" "}
                  {startDate(work.startDate)}
                  {endDate(work.endDate)}
                </Text>
                <Text block>{work.position}</Text>
                <Text block>{work.location}</Text>
              </StackItem>

              <StackItem>
                <Text block>{work.summary}</Text>
                <Text block>{work.description}</Text>
              </StackItem>

              <StackItem>
                <ul>
                  {work.highlights &&
                    work.highlights.map((highlight) => (
                      <li key={uuidv4()}>{highlight}</li>
                    ))}
                </ul>
              </StackItem>
            </Stack>
          </StackItem>
        );
      })}
    </Stack>
  );
}
