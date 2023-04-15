import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import AdminLayout from "@/Layouts/AdminLayout";
import { Head, useForm } from "@inertiajs/react";
import axios from "axios";
import { useEffect, useState } from "react";
import Select from "react-tailwindcss-select";

export default function Create({ auth }) {
  const { data, setData, post, processing, errors } = useForm({
    name: "",
    academic_level_id: "",
  });

  const [options, setOptions] = useState([]);
  const [selected, setSelected] = useState(null);

  const change = (option) => {
    setData("academic_level_id", option.value);
    setSelected(option);
  };

  const submit = (e) => {
    e.preventDefault();

    post(route("sections.store"));
  };

  useEffect(() => {
    axios
      .get(route("api.academic_levels.index"))
      .then((response) => {
        setOptions([
          {
            label: "Junior High",
            options: response.data.jhs.map((item) => {
              return {
                value: item.id,
                label: item.name,
              };
            }),
          },
          {
            label: "Senior High School",
            options: response.data.shs.map((item) => {
              return {
                value: item.id,
                label: item.name,
              };
            }),
          },
          {
            label: "College",
            options: response.data.college.map((item) => {
              return {
                value: item.id,
                label: item.name,
              };
            }),
          },
        ]);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <AdminLayout auth={auth}>
      <Head title="Create Section" />

      <div className="py-6">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="bg-white p-4 shadow sm:rounded-lg sm:p-8">
            <header>
              <h2 className="text-lg font-medium text-gray-900">
                Create Section
              </h2>
            </header>
            <form onSubmit={submit} className="mt-4 space-y-4">
              <div className="max-w-xl">
                <InputLabel htmlFor="name" value="Name" />

                <TextInput
                  id="name"
                  name="name"
                  className="mt-1 block w-full"
                  value={data.name}
                  onChange={(e) => setData("name", e.target.value)}
                  required
                  isFocused
                />

                <InputError className="mt-2" message={errors.name} />
              </div>

              <div className="max-w-xl">
                <InputLabel value="Academic Level" />

                <Select
                  value={selected}
                  onChange={change}
                  options={options}
                  isSearchable={true}
                  placeholder="Select Academic Level"
                  classNames={{
                    menuButton: ({ isDisabled }) =>
                      `flex mt-1 py-0.5 text-gray-500 border border-gray-300 rounded shadow-sm transition-all duration-300 focus:outline-none ${
                        isDisabled
                          ? "bg-gray-200"
                          : "bg-white hover:border-gray-400 focus:border-indigo-500 focus:ring focus:ring-indigo-500/20"
                      }`,
                    menu: "absolute z-10 w-full bg-white shadow-lg border rounded py-1 mt-1.5 text-gray-700",
                    listItem: ({ isSelected }) =>
                      `block transition duration-200 px-2 text-sm py-2 cursor-pointer select-none truncate rounded ${
                        isSelected
                          ? `text-white bg-indigo-500`
                          : `text-gray-500 hover:bg-indigo-100 hover:text-indigo-500`
                      }`,
                  }}
                />

                <InputError className="mt-2" message={errors.section} />
              </div>

              <PrimaryButton disabled={processing}>Create</PrimaryButton>
            </form>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
