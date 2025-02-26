import Navbar from "@/components/Navbar";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Accueil | Next.js Project</title>
      </Head>
      <Navbar />
      <main className="container mx-auto mt-10">
        <h1 className="text-3xl font-bold">Bienvenue sur notre site</h1>
      </main>
    </>
  );
}