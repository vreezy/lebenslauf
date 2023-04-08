import Image from "next/image";

// import styles from '@/styles/Home.module.css'
import "bootstrap/dist/css/bootstrap.css";

import { Container } from "react-bootstrap";
import Header from "@/components/Header";
import { Stack, StackItem } from "@fluentui/react";
import About from "@/components/About";
import Certificates from "@/components/Certificates";
import { containerStackTokens } from "@/styles/styles";
import Skills from "@/components/Skills";
import useSiteStore from "@/stores/site";
import { shallow } from "zustand/shallow";
import Loading from "./Loading";

export default function Main() {
  const resume = useSiteStore((state) => state.resume, shallow);
  const isLoading = useSiteStore((state) => state.isLoading, shallow);
  const isError = useSiteStore((state) => state.isError, shallow);

  if (isError) {
    return <>Unknown Error</>;
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <main>
      <Container>
        <Header />
        <Stack horizontal tokens={containerStackTokens}>
          <StackItem grow={1}>
            <About />
            <Certificates />
            <Skills />

            {/* TODO: languages */}
            {/* TODO: interests */}
          </StackItem>
          <StackItem grow={3}>
            right side
            {/* TODO: summary */}
            {/* TODO: work */}
            {/* TODO: volunteer */}
            {/* TODO: education */}
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

        <div>
          <pre>{JSON.stringify(resume, null, 2)}</pre>
        </div>
      </section>
    </main>
  );
}
