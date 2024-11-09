import NavBar from "@/components/navbar/NavBar";

export default function Home() {
  return (
    <>
      {/* header is included inside navbar */}
      <NavBar />
      <main className="flex flex-col h-fit">
        {/* <div className="h-full bg-red-400">main content</div> */}
      </main>
      {/* <footer>footer section</footer> */}
    </>
  );
}
