import { isIsoDate } from "@/utils/isISODate";


interface DateStringProps {
  dateString: string | undefined;
  type: "start" | "end"
}

export default function DateField(props: DateStringProps) {
  if (props.dateString && isIsoDate(props.dateString)) {
    return <>{new Date(props.dateString).toLocaleDateString()}</>;
  }

  if (props.type === "end") {
    return <>heute</>
  }

  return null;
}


