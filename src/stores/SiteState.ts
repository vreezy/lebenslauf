import { ResumeSchema } from "@/models/ResumeSchema";

export interface InitialSiteState {
   isLoading: boolean;
   isError: boolean;
   resume: ResumeSchema;
   pdfRef: any;
}

export interface SiteState extends InitialSiteState{
  setLoading: (bool: boolean) => void
  setError: (bool: boolean) => void
  setResume: (resume: ResumeSchema) => void
  setPdfRef: (pdfRef: any) => void
  reset: () => void;
}
