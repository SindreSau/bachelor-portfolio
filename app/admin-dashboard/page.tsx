import { PageLayout } from '@/components/ui/page-layout';
import Image from 'next/image';
import {
  LayoutDashboard,
  Layers,
  Users,
  Zap,
  Cog,
  FileText,
  RefreshCw,
  Shield,
  Palette,
  ListChecks,
} from 'lucide-react';

const AdminDashboardPage = () => {
  return (
    <PageLayout>
      <section className="space-y-8 py-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
            Admin Dashboard
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            A comprehensive overview of the administrative interface designed
            for efficient application management, review, and collaboration.
          </p>
        </div>

        <h2 className="flex items-center text-3xl font-bold tracking-tight">
          <LayoutDashboard className="mr-3 h-7 w-7" /> Overview
        </h2>
        <div className="space-y-4 pl-10">
          <h3 className="flex items-center text-2xl font-semibold">
            <Layers className="mr-2 h-6 w-6" /> Handling applications
          </h3>
          <p>
            The Admin Dashboard is built around a clear information hierarchy,
            prioritizing the most critical data for administrators. The primary
            view is a comprehensive table listing all applications. From this
            overview, administrators can navigate to a detailed view for each
            application, providing an in-depth look at all submitted materials,
            reviews, and comments.
          </p>
          <div className="space-y-6 my-4">
            <div>
              <h4 className="text-lg font-medium mb-2 text-center">
                Application Overview Table
              </h4>
              <Image
                src="/images/admin_dashboard/dashboard-application-table-view.png"
                alt="Dashboard Application Table Page - Overview of all applications"
                width={3756}
                height={2520}
                quality={30}
                priority
                className="rounded-lg shadow-md"
              />
              <p className="text-sm text-muted-foreground mt-2 text-center">
                The main dashboard view, providing a sortable and filterable
                table of all submitted applications.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-medium mb-2 text-center">
                Detailed Application View
              </h4>
              <Image
                src="/images/admin_dashboard/application-details-page.png"
                alt="Application Details Page - In-depth view of a single application"
                width={3752}
                height={2516}
                quality={30}
                loading="lazy"
                className="rounded-lg shadow-md"
              />
              <p className="text-sm text-muted-foreground mt-2 text-center">
                Accessible from the table, this page shows all information for a
                specific application, including documents, ratings, and
                comments.
              </p>
            </div>
          </div>

          <h3 className="flex items-center text-2xl font-semibold mt-8">
            <ListChecks className="mr-2 h-6 w-6" /> Managing tasks
          </h3>
          <p>
            Beyond application review, the dashboard provides tools for managing
            the available bachelor tasks. Administrators can create new tasks,
            specify requirements (like group size and deadline for applicants),
            and publish them to the student-facing portal.
          </p>
          <div className="my-4">
            <h4 className="text-lg font-medium mb-2 text-center">
              Task Creation & Management
            </h4>
            <Image
              src="/images/admin_dashboard/task-creating-page.png"
              alt="Task Management Page - Creating and defining bachelor project tasks"
              width={1544}
              height={1391}
              quality={30}
              loading="lazy"
              className="rounded-lg shadow-md"
            />
            <p className="text-sm text-muted-foreground mt-2 text-center">
              Administrators can easily create, edit, and manage bachelor
              project tasks that will be displayed on the application portal.
            </p>
          </div>
        </div>

        <h2 className="flex items-center text-3xl font-bold tracking-tight">
          <Users className="mr-3 h-7 w-7" /> Collaboration Features
        </h2>
        <div className="space-y-4 pl-10">
          <p>
            Effective collaboration is key to a successful review process. The
            dashboard incorporates several features to facilitate teamwork:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <strong>Rating System:</strong> A simple rating system, with
              thumbs down, thumbs up and a bonus star, allows for quick,
              standardized review of applications.
            </li>
            <li>
              <strong>Internal Comments:</strong> Team members can leave
              comments directly on an application, helping facilitate internal
              discussions and knowledge sharing right where it&apos;s needed.
            </li>
            <li>
              <strong>Status Tracking:</strong> A clear workflow with statuses
              like &ldquo;New,&rdquo; &ldquo;In Progress,&rdquo;
              &ldquo;Reviewed,&rdquo; and &ldquo;Completed&rdquo; ensures
              everyone is aware of an application&apos;s current stage.
            </li>
            <li>
              <strong>Multi-reviewer Support:</strong> The system shows who has
              reviewed or is currently reviewing an application, preventing
              duplicate effort and providing transparency.
            </li>
          </ul>
          <div className="my-4">
            <Image
              src="/images/admin_dashboard/hover-shows-reviewer.png"
              alt="Hover shows reviewer"
              width={638}
              height={582}
              quality={30}
              loading="lazy"
              className="rounded-lg shadow-md mx-auto max-w-sm"
            />
          </div>
        </div>

        <h2 className="flex items-center text-3xl font-bold tracking-tight">
          <Zap className="mr-3 h-7 w-7" /> Efficiency Through Design
        </h2>
        <div className="space-y-4 pl-10">
          <p>The dashboard is designed to maximize administrator efficiency:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <strong>Filtering:</strong> Filtering options allow administrators
              to quickly find applications based on university, status,
              applicant name or status.
            </li>
            <li>
              <strong>Sortable Everything:</strong> All columns in the main
              application table are sortable, allowing administrators to
              organize the data according to their needs.
            </li>
            <li>
              <strong>Bulk Actions:</strong> Applications can be deleted
              individually or in bulk.
            </li>
            <li>
              <strong>Keyboard Shortcuts:</strong> Power users can navigate and
              perform common actions using keyboard shortcuts, speeding up their
              workflow.
            </li>
          </ul>
        </div>

        <h2 className="flex items-center text-3xl font-bold tracking-tight">
          <Cog className="mr-3 h-7 w-7" /> Technical Decisions That Matter to
          Users
        </h2>
        <div className="space-y-6 pl-10">
          <div>
            <h3 className="flex items-center text-2xl font-semibold">
              <FileText className="mr-2 h-6 w-6" /> File Handling
            </h3>
            <p className="mt-2">
              Dealing with application documents is a core part of the workflow,
              and we&apos;ve made it as seamless as possible:
            </p>
            <ul className="list-disc space-y-2 pl-5 mt-2">
              <li>
                <strong>Browser Previews:</strong> PDFs can be previewed
                directly in the browser, eliminating the need to download files
                just to view their content.
              </li>
              <li>
                <strong>Direct Downloads:</strong> If a local copy is needed,
                files can be downloaded.
              </li>
              <li>
                <strong>Secure Storage:</strong> All uploaded files are securely
                stored in Azure Blob Storage, ensuring data integrity and
                reliability, rather than being scattered across emails or local
                drives.
              </li>
            </ul>
          </div>
          <div>
            <h3 className="flex items-center text-2xl font-semibold">
              <RefreshCw className="mr-2 h-6 w-6" /> Real-time Updates
            </h3>
            <p className="mt-2">
              The dashboard is designed to be a dynamic and responsive tool:
            </p>
            <ul className="list-disc space-y-2 pl-5 mt-2">
              <li>
                <strong>Live Data:</strong> The dashboard always reflects the
                latest application data and statuses without manual
                intervention.
              </li>
              <li>
                <strong>Instant Feedback:</strong> Actions performed by
                administrators, such as updating a status or adding a comment,
                provide immediate visual feedback through toasts and interface
                updates.
              </li>
              <li>
                <strong>No Refresh Needed:</strong> Thanks to Next.js&apos;s
                &apos;revalidate&apos; feature, the dashboard updates
                automatically without requiring a full page refresh, ensuring a
                smooth user experience.
              </li>
            </ul>
          </div>
        </div>

        <h2 className="flex items-center text-3xl font-bold tracking-tight">
          <Shield className="mr-3 h-7 w-7" /> Security by Design
        </h2>
        <div className="space-y-4 pl-10">
          <p>
            Security was an important consideration in the development of the
            Admin Dashboard:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <strong>Invitation-Only Access:</strong> Administrators cannot
              self-register; they must be invited by an existing
              super-administrator, ensuring controlled access.
            </li>
            <li>
              <strong>Audit Trails:</strong> Every significant action taken
              within the dashboard is logged, providing a comprehensive audit
              trail of who did what and when.
            </li>
            <li>
              <strong>Data Protection (GDPR):</strong> The system is built with
              GDPR compliance in mind, collecting only the minimal necessary
              data, having consent management, and ways of data deletion.
            </li>
          </ul>
        </div>

        <h2 className="flex items-center text-3xl font-bold tracking-tight">
          <Palette className="mr-3 h-7 w-7" /> Esthetics and Usability
        </h2>
        <div className="space-y-4 pl-10">
          <p>
            Aesthetics and usability go hand-in-hand to create a pleasant and
            effective user experience:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <strong>Multiple Theme Options:</strong> Recognizing diverse user
              preferences, the dashboard offers six theme options, including
              popular light and dark modes. Easily extensible and customizable,
              as we <em>base all styling on CSS variables</em>.
            </li>
            <li>
              <strong>Responsive Design:</strong> The interface is fully
              responsive, providing a consistent and optimized experience across
              laptops, tablets, and other devices.
            </li>
            <li>
              <strong>Consistent Icons:</strong> A carefully chosen set of icons
              is used throughout the application, providing clear visual cues
              that are easy to understand at a glance.
            </li>
          </ul>
          <div className="my-4">
            <Image
              src="/images/admin_dashboard/admin-dashboard-themes.png"
              alt="Admin Dashboard Themes"
              width={1888}
              height={1270}
              quality={30}
              loading="lazy"
              className="rounded-lg shadow-md mx-auto"
            />
            <p className="text-sm text-muted-foreground mt-2 text-center">
              The dashboard offers multiple themes to suit user preferences.
            </p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default AdminDashboardPage;
