import { ResumeSchema } from "@/models/ResumeSchema";

export interface InitialSiteState {
   isLoading: boolean;
   isError: boolean;
   resume: ResumeSchema;
   pdfRef: any;
   editIsOpen: boolean;
}

export interface SiteState extends InitialSiteState{
  setLoading: (bool: boolean) => void
  setError: (bool: boolean) => void
  setResume: (resume: ResumeSchema) => void
  setPdfRef: (pdfRef: any) => void
  SetEditIsOpen: (bool: boolean) => void;
  reset: () => void;
}
