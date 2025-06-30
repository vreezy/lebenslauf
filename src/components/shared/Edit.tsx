  
import { Panel, PanelType, PrimaryButton, TextField } from "@fluentui/react";
// Stores
import { shallow } from "zustand/shallow";
import useSiteStore from "../../stores/site";

export default function Edit() {
  
  const setResume = useSiteStore((state) => state.setResume);
  const setEditIsOpen = useSiteStore((state) => state.SetEditIsOpen);
  const resume = useSiteStore((state) => state.resume, shallow);
  const editIsOpen = useSiteStore((state) => state.editIsOpen, shallow);

  function handleNewValue(event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, newValue?: string) {
    const obj = JSON.parse(newValue ?? "")
    setResume(obj ?? "")
  }

  const prettyResume = JSON.stringify(resume, null, 2)

  return (
    <Panel
      isOpen={editIsOpen}
      onDismiss={() => setEditIsOpen(false)}
      type={PanelType.extraLarge}
      // customWidth={panelType === PanelType.custom || panelType === PanelType.customNear ? '888px' : undefined}
      closeButtonAriaLabel="Close"
      headerText="Edit"
    >
      
    <TextField label="Resume" multiline autoAdjustHeight value={prettyResume} onChange={handleNewValue}/>

    <PrimaryButton onClick={() => setEditIsOpen(false)}>Schließen</PrimaryButton>
      
    </Panel>
  )
}