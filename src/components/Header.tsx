import resume from "resume/resume.json";

export default function Header() {
  return (
    <>
      <h1>{resume.basics.name}</h1>
      <small>{resume.basics.label}</small>
    </>
  );
}
