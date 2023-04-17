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
        </Sidebar>
        <div className="ml-64 w-full">{children}</div>
      </div>
    </Authenticated>
  );
}
