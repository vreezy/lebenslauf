// Components
import { Stack, StackItem, Text} from "@fluentui/react";

// Utils
import { v4 as uuidv4 } from 'uuid';

// Styles
import { containerStackTokens } from "@/styles/styles";

// Stores
import useSiteStore from "@/stores/site";
import { shallow } from "zustand/shallow";

export default function Languages() {
  const resume = useSiteStore((state) => state.resume, shallow);

  if(!resume.languages) {
    return null;
  }

  return (
    <Stack tokens={containerStackTokens}>
      {resume.languages.map(language => {
          return (
            <StackItem key={uuidv4()}>
              <Text block>{language.language} - {language.fluency}</Text>
            </StackItem>
          )
        })}

    </Stack>
  );
}
