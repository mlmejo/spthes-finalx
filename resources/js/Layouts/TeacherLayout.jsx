import Sidebar from "@/Components/Sidebar";
import {
  ArrowPathIcon,
  BuildingOfficeIcon,
  CircleStackIcon,
  EyeIcon,
  HomeIcon,
  PlusIcon,
  UserGroupIcon,
} from "@heroicons/react/20/solid";
import Authenticated from "./AuthenticatedLayout";

export default function Teacher({ auth, children }) {
  return (
    <Authenticated user={auth.user}>
      <div className="flex">
        <Sidebar role="Teacher">
          <Sidebar.Item
            href={route("dashboard")}
            active={route().current("dashboard")}
            icon={HomeIcon}
          >
            Dashboard
          </Sidebar.Item>

          <Sidebar.Collapse icon={CircleStackIcon} label="Records Data">
            <Sidebar.Item href="#" icon={UserGroupIcon}>
              Student Accounts
            </Sidebar.Item>
            <Sidebar.Item
              href={route("teachers.registrations.index", auth.teacher.id)}
              active={route().current("teachers.sections.*")}
              icon={BuildingOfficeIcon}
            >
              Sections
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={EyeIcon}>
              View Takers
            </Sidebar.Item>
          </Sidebar.Collapse>

          <Sidebar.Item href="#" icon={PlusIcon}>
            Add Data
          </Sidebar.Item>

          <Sidebar.Item href="#" icon={ArrowPathIcon}>
            Activity Log
          </Sidebar.Item>
        </Sidebar>
        <div className="ml-64 w-full">{children}</div>
      </div>
    </Authenticated>
  );
}
