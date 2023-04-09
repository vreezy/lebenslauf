import useSiteStore from "@/stores/site";
import { shallow } from "zustand/shallow";

export default function Header() {
  const resume = useSiteStore((state) => state.resume, shallow);

  if(!resume.basics) {
    return null;
  }

  return (
    <header>
      <h1>{resume.basics.name}</h1>
      <small>{resume.basics.label}</small>
    </header>
  );
}
