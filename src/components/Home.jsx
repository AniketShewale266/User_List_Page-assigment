import React, { useState } from "react";
import Header from "./Header";
import UserList from "./UserList";

function Home() {
    const [query, setQuery] = useState("");
  return (
    <>
      <main>
        <Header setQuery={setQuery} />

        <UserList query={query} />
      </main>
    </>
  );
}

export default Home;
