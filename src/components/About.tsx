
import { containerStackTokens } from "@/styles/styles";
import { Stack, StackItem, Link, Text} from "@fluentui/react";

import resume from "resume/resume.json";
import { v4 as uuidv4 } from 'uuid';

export default function About() {


  // TODO: ICONS
  // https://developer.microsoft.com/en-us/fluentui#/controls/web/activityitem ???
  return (
    <Stack tokens={containerStackTokens}>
      <StackItem>
        <h3>Über mich</h3>
      </StackItem>

      <StackItem>
        <Text block>{resume.basics.location.address}</Text>
        <Text block>{resume.basics.location.countryCode} {resume.basics.location.postalCode} {resume.basics.location.city}</Text>
          
        
      </StackItem>

      <StackItem>
        {resume.basics.email}
      </StackItem>

      <StackItem>
        {resume.basics.phone}
      </StackItem>

      <StackItem>
        {resume.basics.url}
      </StackItem>

      {resume.basics.profiles.map(profile => {
          return (
            <StackItem key={uuidv4()}>
              <Link href={profile.url}>{profile.network} - {profile.username}</Link>
            </StackItem>
          )
        })}

    </Stack>
  );
}
