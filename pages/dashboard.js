import Head from "next/head";
import { AppBar, Box, Container, Typography } from "@mui/material";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Main PAGE</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container maxWidth="xl">
         
        <Typography variant="h5">Tests</Typography>
      </Container>
    </div>
  );
}
