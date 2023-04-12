
// Stores
import useSiteStore from "@/stores/site";
import { shallow } from "zustand/shallow";

export default function Title() {
  const resume = useSiteStore((state) => state.resume, shallow);

  if (!resume.basics) {
    return null;
  }

  return (
    <header style={{ margin: "20px 0" }}>
      <h2>Lebenslauf - {resume.basics.name}</h2>
    </header>
  )
}