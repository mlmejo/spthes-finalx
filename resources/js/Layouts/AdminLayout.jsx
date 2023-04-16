import Sidebar from "@/Components/Sidebar";
import {
  BuildingOfficeIcon,
  CircleStackIcon,
  HomeIcon,
  PencilSquareIcon,
  UserGroupIcon,
  ArrowPathIcon,
} from "@heroicons/react/20/solid";
import Authenticated from "./AuthenticatedLayout";

export default function Admin({ auth, children }) {
  const role = auth.user.role;

  return (
    <Authenticated user={auth.user}>
      <div className="md:flex">
        <Sidebar role="Administrator">
          <Sidebar.Item
            href={route("dashboard")}
            active={route().current("dashboard")}
            icon={HomeIcon}
          >
            Dashboard
          </Sidebar.Item>

          <Sidebar.Collapse icon={CircleStackIcon} label="Data">
            <Sidebar.Item href={route("students.index")} icon={UserGroupIcon}>
              Accounts
            </Sidebar.Item>
            <Sidebar.Item
              href={route("sections.index")}
              active={route().current("sections.index")}
              icon={BuildingOfficeIcon}
            >
              Sections
            </Sidebar.Item>
          </Sidebar.Collapse>

          <Sidebar.Collapse icon={PencilSquareIcon} label="Create">
            <Sidebar.Item
              href={route("students.create")}
              active={
                route().current("students.create") ||
                route().current("teachers.create")
              }
              icon={UserGroupIcon}
            >
              Accounts
            </Sidebar.Item>
            <Sidebar.Item
              href={route("sections.create")}
              active={route().current("sections.create")}
              icon={BuildingOfficeIcon}
            >
              Sections
            </Sidebar.Item>
          </Sidebar.Collapse>

          <Sidebar.Item href="#" icon={ArrowPathIcon}>
            Activity Log
          </Sidebar.Item>
        </Sidebar>
        <div className="w-full md:ml-64 ">{children}</div>
      </div>
    </Authenticated>
  );
}
