import { ChevronDownIcon } from "@heroicons/react/20/solid";

const Sidebar = ({ role, children }) => {
  return (
    <div
      className="left-0 z-40 h-screen w-64 -translate-x-full transition-transform sm:translate-x-0"
      aria-label="Sidebar"
    >
      <div className="h-full overflow-y-auto bg-white px-3 py-4">
        <h1 className="mb-4 rounded border bg-indigo-900 p-2 text-center text-sm font-medium text-white">
          {role}
        </h1>
        <ul className="space-y-2 text-sm font-medium">{children}</ul>
      </div>
    </div>
  );
};

const Item = ({ href, active, icon, children }) => {
  const Icon = icon;

  return (
    <li>
      <a
        href={href}
        className={
          "group flex items-center rounded-lg p-2 align-middle " +
          `${
            active
              ? "bg-indigo-700 text-white hover:text-gray-900"
              : "text-gray-900 hover:bg-indigo-700 hover:text-white"
          }`
        }
      >
        <Icon
          className={
            "h-5 w-5 group-hover:text-white " +
            `${active ? "text-white" : "text-gray-500"}`
          }
        />
        <span className="ml-3">{children}</span>
      </a>
    </li>
  );
};

const Collapse = ({ icon, label, children }) => {
  const Icon = icon;

  return (
    <>
      <li className="group flex flex-wrap items-center rounded-lg p-2 align-middle text-gray-900 hover:bg-indigo-700 hover:text-white">
        <Icon className="h-5 w-5 text-gray-500 group-hover:text-white" />
        <span className="ml-3">{label}</span>
        <ChevronDownIcon className="ml-auto h-5 w-5 text-gray-500 group-hover:text-white" />
      </li>
      <ul className="sidebar-collapse space-y-2 text-sm font-medium text-gray-900">
        {children}
      </ul>
    </>
  );
};

Sidebar.Item = Item;
Sidebar.Collapse = Collapse;

export default Sidebar;
