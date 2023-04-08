// Consts
import { RESUME_URL } from "@/config/const";

// Hooks
import { useEffect } from "react";

// Stores
import useSiteStore from "@/stores/site";

// Interfaces
import { ResumeSchema } from "@/models/ResumeSchema";

export default function Data() {
  const setResume = useSiteStore((state) => state.setResume);
  const setLoading = useSiteStore((state) => state.setLoading);
  const setError = useSiteStore((state) => state.setError);

  useEffect(() => {
    async function getResume() {
      try {
        const response = await fetch(RESUME_URL);
        if (response.ok) {
          const resume: ResumeSchema = await response.json();
          setResume(resume);
        }
      } catch (e) {
        console.error(e);
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    getResume();
  }, [setResume, setLoading, setError]);

  return null;
}
