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
          <Sidebar.Item
            href={route("dashboard")}
            active={route().current("dashboard")}
            icon={HomeIcon}
          >
            Dashboard
          </Sidebar.Item>
        </Sidebar>
        <div className="w-full md:ml-64 md:mt-16">{children}</div>
      </div>
    </Authenticated>
  );
}
