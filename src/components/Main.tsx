// Components
import { IStackTokens, Separator, Stack, StackItem } from "@fluentui/react";
import { Container } from "react-bootstrap";
import Header from "@/components/Header";
import About from "@/components/About";
import Certificates from "@/components/Certificates";
import Skills from "@/components/Skills";
import Loading from "./Loading";
import Interests from "./Interests";
import Languages from "./Languages";
import Summary from "./Summary";
import Work from "./Work";

// import Image from "next/image";

// Stores
import useSiteStore from "@/stores/site";
import { shallow } from "zustand/shallow";

// Styles
// import styles from '@/styles/Home.module.css'
import "bootstrap/dist/css/bootstrap.css";
import { containerStackTokens } from "@/styles/styles";
import Volunteer from "./Volunteer";
import Education from "./Education";

export default function Main() {
  const isLoading = useSiteStore((state) => state.isLoading, shallow);
  const isError = useSiteStore((state) => state.isError, shallow);

  if (isError) {
    return (
      <main>
        <Container>
          Unknown Error
        </Container>
      </main>
    );
  }

  if (isLoading) {
    return (
      <main>
        <Container>
          <Loading />
        </Container>
      </main>
    );
  }

  const mainTokens: IStackTokens = {
    childrenGap: 20,
  }

  return (
    <main>
      <Container>
        <Header />
        <Stack horizontal tokens={mainTokens}>
          <StackItem grow={2}>
            <Stack tokens={mainTokens}>
              <About />
              <Certificates />
              <Skills />
              <Languages />
              <Interests />
            </Stack>  
          </StackItem>
          <StackItem grow={3} style={{marginLeft: "2rem"}} >
            <Stack tokens={mainTokens}>
              <Summary />
              <Work />
              <Volunteer />
              <Education />
            </Stack>    
          </StackItem>
        </Stack>
      </Container>
      <section className={"container"}>
        {/* <Image
        src="/vercel.svg"
        alt="Vercel Logo"
        className={styles.vercelLogo}
        width={100}
        height={24}
        priority
      /> */}


      </section>
    </main>
  );
}
