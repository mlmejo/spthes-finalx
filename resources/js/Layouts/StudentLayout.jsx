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

export default function Student({ auth, children }) {
  return (
    <Authenticated user={auth.user}>
      <div className="flex">
        <Sidebar role="Student">
          <Sidebar.Item href={route("dashboard")} icon={HomeIcon}>
            Dashboard
          </Sidebar.Item>

          <Sidebar.Collapse icon={CircleStackIcon} label="Data">
            <Sidebar.Item href="#" icon={UserGroupIcon}>
              Accounts
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={BuildingOfficeIcon}>
              Sections
            </Sidebar.Item>
          </Sidebar.Collapse>

          <Sidebar.Collapse icon={PencilSquareIcon} label="Create">
            <Sidebar.Item href="#" icon={UserGroupIcon}>
              Accounts
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={BuildingOfficeIcon}>
              Sections
            </Sidebar.Item>
          </Sidebar.Collapse>

          <Sidebar.Item href="#" icon={ArrowPathIcon}>
            Activity Log
          </Sidebar.Item>
        </Sidebar>
        <div className="w-full">{children}</div>
      </div>
    </Authenticated>
  );
}
