import axios from "axios";
import { useEffect, useState } from "react";
import Select from "react-tailwindcss-select";

export default function RegistrationSelect(props) {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    axios
      .get(route("api.sections.registrations.index", props.section.id))
      .then((response) => {
        setOptions(
          response.data.registrations.map((registration) => {
            return {
              value: registration.id,
              label: registration.teacher.user.name,
            };
          })
        );
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <Select
      {...props}
      options={options}
      isSearchable={true}
      placeholder="Select Teacher"
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
  );
}
