import AdminLayout from "@/Layouts/AdminLayout";
import { Head } from "@inertiajs/react";

export default function index({ auth, teachers }) {
  return (
    <AdminLayout auth={auth}>
      <Head title="Teacher Accounts" />

      <div className="py-6">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="bg-white p-4 shadow sm:rounded-lg sm:p-8">
            <header>
              <div className="mb-4 border-b border-gray-200 text-center text-sm font-medium text-gray-800">
                <ul className="-mb-px flex flex-wrap">
                  <li class="mr-2">
                    <a
                      href={route("students.index")}
                      class={
                        "inline-block rounded-t-lg border-b-2 border-transparent p-2 hover:border-indigo-300 hover:text-indigo-600 " +
                        `${
                          route().current("students.index")
                            ? "border-indigo-300 text-indigo-600"
                            : ""
                        }`
                      }
                    >
                      Students
                    </a>
                  </li>
                  <li class="mr-2">
                    <a
                      href={route("teachers.index")}
                      class={
                        "inline-block rounded-t-lg border-b-2 border-transparent p-2 hover:border-indigo-300 hover:text-indigo-600 " +
                        `${
                          route().current("teachers.index")
                            ? "border-indigo-300 text-indigo-600"
                            : ""
                        }`
                      }
                    >
                      Teachers
                    </a>
                  </li>
                </ul>
              </div>

              <h2 className="text-lg font-medium text-gray-900">
                Teacher Account List
              </h2>
            </header>

            <div className="relatvie max-w-2xl overflow-x-auto pt-4 sm:rounded-lg">
              <table className="w-full text-left text-sm text-gray-500">
                <thead className="bg-gray-50 text-xs uppercase text-gray-700">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      ID
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Name
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Email
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Action
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {teachers.length === 0 && (
                    <tr className="whitespace-nowrap px-6 py-4 font-medium text-gray-900">
                      <td colSpan={4} className="px-6 py-4 text-gray-500">
                        No data available in table.
                      </td>
                    </tr>
                  )}

                  {teachers.map((teacher) => {
                    return (
                      <tr
                        key={teacher.id}
                        className="whitespace-nowrap px-6 py-4 font-medium text-gray-900"
                      >
                        <th
                          scope="col"
                          className="whitespace-nowrap px-6 py-4 font-medium text-gray-900"
                        >
                          {teacher.id}
                        </th>
                        <td className="px-6 py-4 text-gray-500">
                          {teacher.user.name}
                        </td>
                        <td className="px-6 py-4 text-gray-500">
                          {teacher.user.email}
                        </td>
                        <td className="px-6 py-4 text-gray-500">
                          <a
                            href={route("teachers.edit", teacher.id)}
                            className="font-medium text-indigo-600 hover:underline"
                          >
                            Edit
                          </a>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
