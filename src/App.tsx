import { useState } from "react";


import Search from "./Components/Header/Search";
import Map from "./Components/Map/Map";

export default function App() {
  const [location, setLocation] = useState<string | undefined>();
  const [latlin, setLatlin] = useState<[number, number]>();

  return (
    <>
      <Search location={location} setLocation={setLocation} setLatlin={setLatlin} latlin={latlin} />
      <Map location={location} latlin={latlin} />
    </>
  );
}
