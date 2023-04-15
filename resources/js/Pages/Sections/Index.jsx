import AdminLayout from "@/Layouts/AdminLayout";
import { Head, Link } from "@inertiajs/react";

export default function Index({ auth, sections }) {
  return (
    <AdminLayout auth={auth}>
      <Head title="Sections" />

      <div className="py-6">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="bg-white p-4 shadow sm:rounded-lg sm:p-8">
            <header>
              <h2 className="text-lg font-medium text-gray-900">
                Section List
              </h2>
            </header>

            <div className="relative max-w-2xl overflow-x-auto pt-4 sm:rounded-lg">
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
                      Academic Level
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Action
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {sections.length === 0 && (
                    <tr className="whitespace-nowrap px-6 py-4 font-medium text-gray-900">
                      <td colSpan={4} className="px-6 py-4 text-gray-500">
                        No data available in table.
                      </td>
                    </tr>
                  )}

                  {sections.map((section) => {
                    return (
                      <tr
                        key={section.id}
                        className="whitespace-nowrap px-6 py-4 font-medium text-gray-900"
                      >
                        <th
                          scope="col"
                          className="whitespace-nowrap px-6 py-4 font-medium text-gray-900"
                        >
                          {section.id}
                        </th>
                        <td className="px-6 py-4 text-gray-500">
                          {section.name}
                        </td>
                        <td className="px-6 py-4 text-gray-500">
                          {section.academic_level.name}
                        </td>
                        <td className="px-6 py-4 text-gray-500">
                          <a
                            href={route("sections.edit", section.id)}
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
