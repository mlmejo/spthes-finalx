import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TeacherSelect from "@/Components/TeacherSelect";
import { useForm } from "@inertiajs/react";
import { useContext, useEffect, useState } from "react";
import SectionContext from "../SectionContext";

export default function TeacherSelectionForm() {
  const section = useContext(SectionContext);

  const { setData, post, processing, errors, reset } = useForm({
    teacher_ids: [],
  });

  const [teachers, setTeachers] = useState([
    ...section.registrations.map((registration) => {
      return {
        id: registration.teacher.id,
        name: registration.teacher.user.name,
      };
    }),
  ]);

  useEffect(() => {
    setData(
      "teacher_ids",
      teachers.map((teacher) => {
        return teacher.id;
      })
    );
  }, [teachers]);

  const change = (option) => {
    const exists = teachers.some((teacher) => teacher.id === option.value);

    if (exists) return;

    setTeachers([
      ...teachers,
      {
        id: option.value,
        name: option.label,
      },
    ]);
  };

  const submit = (e) => {
    e.preventDefault();

    post(route("sections.teachers.store", section), {
      onSuccess: () => reset(),
    });
  };

  return (
    <section>
      <header>
        <h2 className="text-lg font-medium text-gray-900">Assign Teachers</h2>
      </header>

      {teachers ? (
        <div className="mt-4">
          {teachers.map((teacher) => {
            return (
              <span
                key={teacher.id}
                className="mr-2 inline-flex items-center rounded bg-gray-800 px-2 py-1 text-sm font-medium text-white"
              >
                {teacher.name}
                <button
                  type="button"
                  onClick={() => {
                    setTeachers(
                      teachers.filter(({ id }) => {
                        teacher.id !== id;
                      })
                    );
                  }}
                  className="ml-2 inline-flex items-center rounded-sm bg-transparent p-0.5 text-sm text-gray-400 hover:bg-white hover:text-gray-900"
                >
                  <svg
                    aria-hidden="true"
                    className="h-3.5 w-3.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="sr-only">Remove Teacher</span>
                </button>
              </span>
            );
          })}
        </div>
      ) : (
        <></>
      )}

      <form onSubmit={submit} className="mt-4 space-y-4">
        <div className="max-w-xl">
          <InputLabel value="Teachers" />

          <TeacherSelect value={null} onChange={change} />

          <InputError className="mt-2" message={errors.teacher_ids} />
        </div>

        <PrimaryButton disabled={processing}>Save</PrimaryButton>
      </form>
    </section>
  );
}
