import Image from 'next/image';
import { PageLayout } from '@/components/ui/page-layout';
import {
  Users2,
  Lightbulb,
  Brain,
  Copy,
  ShieldCheck,
  Route,
  Target,
  Workflow,
  Zap,
  GaugeCircle,
  Accessibility,
  Smartphone,
  FileUp,
  FileText,
  MessageSquare,
  HelpCircle,
  IterationCcw,
  Rocket,
  GraduationCap,
  School,
  PlayCircle,
} from 'lucide-react';
import Link from 'next/link';

const ApplicationPortalPage = () => {
  return (
    <PageLayout>
      <section className="space-y-8 py-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
            Application Portal
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            A public-facing web application optimized for user experience,
            performance, and accessibility, designed to guide applicants through
            a streamlined application process.
          </p>
        </div>

        <h2 className="flex items-center text-3xl font-bold tracking-tight">
          <Users2 className="mr-3 h-7 w-7" /> Student-First Experience: Solving
          the &quot;Email Problem&quot;
        </h2>
        <div className="space-y-4 pl-10">
          <p>
            <strong>The Email Problem:</strong> Students used to send scattered
            emails with attachments, never knowing if Accenture received them.
          </p>
          <p>
            <strong>Our Solution:</strong> One clear form, instant confirmation,
            and a professional experience that reflects well on Accenture.
          </p>
          <p>
            <strong>Real Impact:</strong> From &quot;Did they get my
            email?&quot; to &quot;Application submitted successfully!&quot;
          </p>
          <div className="my-4">
            <p className="text-center">
              <Link
                href="/video-overview"
                className="text-primary hover:underline flex items-center justify-center"
              >
                <PlayCircle className="mr-2 inline-block h-5 w-5" />
                <span>
                  Watch a video preview of the application portal in action.
                </span>
              </Link>
            </p>
          </div>
        </div>

        <h2 className="flex items-center text-3xl font-bold tracking-tight">
          <Lightbulb className="mr-3 h-7 w-7" /> Core Principles
        </h2>
        <div className="space-y-4 pl-10">
          <h3 className="flex items-center text-2xl font-semibold">
            <Brain className="mr-2 h-6 w-6" /> Reducing Cognitive Load
          </h3>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <strong>Progressive Disclosure:</strong> Start with one student,
              add more as needed (don&apos;t overwhelm with 5 empty forms).
            </li>
            <li>
              <strong>Smart Defaults:</strong> First student becomes group
              leader automatically (but you can change it).
            </li>
            <li>
              <strong>Visual Hierarchy:</strong> Clear sections that guide you
              through step-by-step.
            </li>
          </ul>

          <h3 className="flex items-center text-2xl font-semibold mt-6">
            <Copy className="mr-2 h-6 w-6" /> Familiar Patterns
          </h3>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <strong>Job Application Flow:</strong> Borrowed UX from platforms
              like Teamtailor that students already know.
            </li>
            <li>
              <strong>Summary Page:</strong> Summary page before final
              submission.
            </li>
            <li>
              <strong>Allowing Expressiveness:</strong> Rich text editor with
              formatting options and shortcuts students expect.
            </li>
          </ul>

          <h3 className="flex items-center text-2xl font-semibold mt-6">
            <ShieldCheck className="mr-2 h-6 w-6" /> Error Prevention & Recovery
          </h3>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <strong>Session Storage:</strong> Your work is saved automatically
              - refresh won&apos;t lose everything.
            </li>
            <li>
              <strong>Real-time Validation:</strong> Red borders and helpful
              messages before you submit.
            </li>
            <li>
              <strong>Clear Requirements:</strong> Red asterisks show
              what&apos;s required, descriptions explain what we need.
            </li>
          </ul>
          <div className="my-4">
            <Image
              src="/images/application_portal/form-is-dynamic-and-validation.png"
              alt="Application form showing dynamic fields and real-time validation"
              width={1024}
              height={929}
              quality={30}
              loading="lazy"
              className="rounded-lg shadow-md"
            />
          </div>
        </div>

        <h2 className="flex items-center text-3xl font-bold tracking-tight">
          <Route className="mr-3 h-7 w-7" /> User Journey Optimizations
        </h2>
        <div className="space-y-4 pl-10">
          <h3 className="flex items-center text-2xl font-semibold">
            <Target className="mr-2 h-6 w-6" /> Landing Page Strategy
          </h3>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <strong>Engage the Students:</strong> Some marketing stuff is
              nice, but allow the students to skip it by clicking "Apply Now" at
              the top.
            </li>
            <li>
              <strong>Task Previews:</strong> Rich text descriptions with a
              clear picture of what you&apos;re applying for.
            </li>
            <li>
              <strong>Group Size Guidance:</strong> &quot;3-5 students
              recommended&quot; sets expectations early.
            </li>
          </ul>
          <div className="my-4">
            <Image
              src="/images/application_portal/landing-page-task-selection.png"
              alt="Landing page with clear task selection for applicants"
              width={1445}
              height={1100}
              quality={30}
              loading="lazy"
              className="rounded-lg shadow-md"
            />
          </div>
          <h3 className="flex items-center text-2xl font-semibold mt-6">
            <Workflow className="mr-2 h-6 w-6" /> Form Flow Design
          </h3>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <strong>Pre-selected Tasks:</strong> URL magic means clicking
              &quot;Apply&quot; pre-fills the right task.
            </li>
            <li>
              <strong>Dynamic Groups:</strong> Add/remove students without
              breaking the flow.
            </li>
            <li>
              <strong>Drag-and-Drop Priorities:</strong> Visual task reordering
              that actually feels good to use.
            </li>
            <li>
              <strong>File Upload Feedback:</strong> Clear progress indicators
              and format validation.
            </li>
          </ul>
          <div className="my-4">
            <Image
              src="/images/application_portal/application-form.png"
              alt="Application form layout and structure"
              width={1496}
              height={1393}
              quality={30}
              loading="lazy"
              className="rounded-lg shadow-md"
            />
          </div>
        </div>

        <h2 className="flex items-center text-3xl font-bold tracking-tight">
          <Zap className="mr-3 h-7 w-7" /> Smart Form Features & Technical
          Excellence
        </h2>
        <div className="space-y-4 pl-10">
          <h3 className="flex items-center text-2xl font-semibold">
            <GaugeCircle className="mr-2 h-6 w-6" /> Performance First
          </h3>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <strong>Instant Loading:</strong> Critical content loads
              immediately, heavy components (rich text editor) load in
              background.
            </li>
            <li>
              <strong>100% PageSpeed Score:</strong> Because slow forms make
              people give up.
            </li>
          </ul>
          <h3 className="flex items-center text-2xl font-semibold mt-6">
            <Accessibility className="mr-2 h-6 w-6" /> Accessibility Excellence
          </h3>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <strong>100 PageSpeed Insights score on accessibility.</strong>
            </li>
            <li>
              <strong>Keyboard Navigation:</strong> Complete form without
              touching mouse.
            </li>
            <li>
              <strong>High Contrast:</strong> Text that&apos;s readable for
              everyone.
            </li>
            <li>
              <strong>Semantic HTML:</strong> Proper heading structure for
              navigation.
            </li>
          </ul>
          <h3 className="flex items-center text-2xl font-semibold mt-6">
            <Smartphone className="mr-2 h-6 w-6" /> Mobile-Friendly Design
          </h3>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <strong>Responsive Forms:</strong> Works perfectly on phones and
              tablets.
            </li>
            <li>
              <strong>Auto-sizing Text Areas:</strong> Rich text editor grows
              with your content - using a brand new feature in CSS (with
              fallback of course).
            </li>
          </ul>
          <h3 className="flex items-center text-2xl font-semibold mt-6">
            <FileUp className="mr-2 h-6 w-6" /> File Handling
          </h3>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <strong>PDF Previews:</strong> Click uploaded files to verify you
              picked the right one.
            </li>
            <li>
              <strong>Format Validation:</strong> Only accept what Accenture can
              actually use.
            </li>
            <li>
              <strong>Size Limits:</strong> Clear feedback before upload fails.
            </li>
          </ul>
          <h3 className="flex items-center text-2xl font-semibold mt-6">
            <FileText className="mr-2 h-6 w-6" /> Rich Text Editor
          </h3>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <strong>2500 Character Limit:</strong> With live counter so you
              know where you stand.
            </li>
            <li>
              <strong>Keyboard Shortcuts:</strong> Ctrl+B for bold, etc. - works
              like Word.
            </li>
            <li>
              <strong>Formatting Options:</strong> Headers, lists, emphasis -
              make your cover letter stand out.
            </li>
            <li>
              <strong>Auto-save:</strong> No losing your carefully crafted cover
              letter.
            </li>
          </ul>
          <div className="my-4">
            <Image
              src="/images/application_portal/advanced-rich-text-with-auto-resizing.png"
              alt="Advanced rich text editor with auto-resizing feature"
              width={1192}
              height={797}
              quality={30}
              loading="lazy"
              className="rounded-lg shadow-md"
            />
          </div>
        </div>

        <h2 className="flex items-center text-3xl font-bold tracking-tight">
          <MessageSquare className="mr-3 h-7 w-7" /> Lessons from User Testing
        </h2>
        <div className="space-y-4 pl-10">
          <h3 className="flex items-center text-2xl font-semibold">
            <HelpCircle className="mr-2 h-6 w-6" /> What Students Asked For
          </h3>
          <ul className="list-disc space-y-2 pl-5">
            <li>Better heading hierarchy, and structure in general</li>
            <li>
              More detailed descriptions of what to include in cover letters.
            </li>
            <li>
              Flexibility in choosing group leader (originally, it was always
              set to be the first person).
            </li>
            <li>Preview functionality for uploaded documents.</li>
          </ul>
          <h3 className="flex items-center text-2xl font-semibold mt-6">
            <IterationCcw className="mr-2 h-6 w-6" /> Iterative Improvements
          </h3>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              Multiple Design Alternatives: Tested different layouts with
              wireframes to find what worked best.
            </li>
            <li>
              Think-Aloud Sessions: Watched students actually use the form.
            </li>
            <li>
              Feedback Integration: Real changes based on real student
              confusion.
            </li>
          </ul>
        </div>

        <h2 className="flex items-center text-3xl font-bold tracking-tight">
          <Rocket className="mr-3 h-7 w-7" /> Real-World Impact
        </h2>
        <div className="space-y-4 pl-10">
          <h3 className="flex items-center text-2xl font-semibold">
            <GraduationCap className="mr-2 h-6 w-6" /> For Students
          </h3>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              Professional application experience that builds confidence in
              Accenture.
            </li>
            <li>Clear process with immediate feedback.</li>
            <li>No more &quot;Did my email get lost?&quot; anxiety.</li>
          </ul>
          <h3 className="flex items-center text-2xl font-semibold mt-6">
            <School className="mr-2 h-6 w-6" /> For Universities
          </h3>
          <ul className="list-disc space-y-2 pl-5">
            <li>Easy to share direct links to application portal.</li>
            <li>
              Students can apply independently without university admin
              overhead.
            </li>
            <li>Professional reflection on the partnership.</li>
          </ul>
        </div>
      </section>
    </PageLayout>
  );
};

export default ApplicationPortalPage;
