import { create } from "zustand";
import { devtools } from "zustand/middleware";

import { InitialSiteState, SiteState } from "./SiteState";

const initialSiteState: InitialSiteState = {
   isLoading: true,
   isError: false,
   resume: {}
}

const useSiteStore = create<SiteState>()(
  devtools(
    (set, get) => ({
      ...initialSiteState,
      setLoading: (bool) => set(() => ({ isLoading: bool })),
      setError: (bool) => set(() => ({ isError: bool })),
      setResume: (resume) => set(() => ({ resume })),
      reset: () => set({ ...initialSiteState }),
    }),
    {
      name: "site-storage",
    }
  )
);

export default useSiteStore;
