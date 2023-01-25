import { Header } from "@/components/Header";
import { Heading } from "@/components/Heading";
import { HomeContainer } from "@/components/Home";
import { LinkButton } from "@/components/LinkButton";
import { Main } from "@/components/Main";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Gustavo Souza | Home</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <Header />
        <HomeContainer>
          <div>
            <Heading size="6xl">
              Creative, UI/UX Designer and Developer{" "}
            </Heading>
          </div>
          <LinkButton>My Works</LinkButton>
        </HomeContainer>
      </Main>
    </>
  );
}
