import useSiteStore from "@/stores/site";
import { shallow } from "zustand/shallow";

export default function Dev() {
  const resume = useSiteStore((state) => state.resume, shallow);

  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);

  const dev = urlParams.get("dev");

  if (dev) {
    return (
      <div>
        <pre>{JSON.stringify(resume, null, 2)}</pre>
      </div>
    );
  }

  return null;
}
