export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Bachelor project - Streamlining Accenture&apos;s Bachelor Thesis
        Application Management
      </h1>
      <p className="mb-4">{`In our bachelor thesis, we developed a two-part web application system for Accenture to streamline their bachelor thesis application process. We created a student-facing application portal and an administrative dashboard that centralizes application management. We transformed a previously manual process involving emails and file transfers into an efficient digital workflow. We implemented our solution using Next.js, TypeScript, and Tailwind CSS, following Agile methodologies including Epics and Scrum. Throughout our development process, we conducted user testing, ensured accessibility compliance, and established a polyrepo architecture that maintained separation of concerns while facilitating secure handling of student information.`}</p>
    </section>
  );
}
