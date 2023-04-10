import { jsPDF } from "jspdf";

// Stores
import useSiteStore from "@/stores/site";
import { shallow } from "zustand/shallow";

export default function PDF() {

  const pdfRef = useSiteStore((state) => state.pdfRef, shallow);

  if(pdfRef.current) {
    const doc = new jsPDF({
      orientation: "p",
      unit: "mm",
      format: "a4"
    });
    
    const content = pdfRef.current;

    doc.html(content);

  //   doc.html(content, {
  //     callback: function (doc) {
  //         doc.save('sample.pdf');
  //     }
  // });


    doc.save("lebenslauf.pdf");
  
  }


  return null

}