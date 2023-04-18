import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import { useForm } from "@inertiajs/react";
import { useContext, useEffect, useState } from "react";
import SectionContext from "../SectionContext";
import RegistrationSelect from "@/Components/RegistrationSelect";
import StudentSelect from "@/Components/StudentSelect";

export default function StudentSelectionForm() {
  const section = useContext(SectionContext);

  const { setData, post, processing } = useForm({
    student_ids: [],
  });

  const [students, setStudents] = useState([]);

  const [selectedRegistration, setSelectedRegistration] = useState(null);

  const [selectedStudent, setSelectedStudent] = useState(null);

  useEffect(() => {
    setData(
      "student_ids",
      students.map((student) => {
        return student.id;
      })
    );
  }, [students]);

  useEffect(() => {
    if (selectedRegistration === null) return;

    axios
      .get(route("registrations.students.index", selectedRegistration.value))
      .then((response) => {
        setStudents([
          ...response.data.students.map((student) => {
            return { id: student.id, name: student.user.name };
          }),
        ]);
      })
      .catch((error) => console.error(error));
  }, [selectedRegistration]);

  const studentChange = (option) => {
    setSelectedStudent(option);

    const exists = students.some((student) => student.id === option.value);

    if (exists) return;

    setStudents([
      ...students,
      {
        id: option.value,
        name: option.label,
      },
    ]);
  };

  const registrationChange = (option) => {
    setSelectedRegistration(option);
  };

  const submit = (e) => {
    e.preventDefault();

    post(route("registrations.students.store", selectedRegistration.value));
  };

  return (
    <section>
      <header>
        <h2 className="text-lg font-medium text-gray-900">Assign Student</h2>
      </header>

      <form onSubmit={submit} className="mt-4 space-y-4">
        <div className="max-w-xl">
          <InputLabel value="Section Teachers" />

          <RegistrationSelect
            section={section}
            value={selectedRegistration}
            onChange={registrationChange}
          />

          <InputError className="mt-2" />
        </div>

        {students ? (
          <div className="mt-4">
            {students.map((student) => {
              return (
                <span
                  key={student.id}
                  className="mr-2 inline-flex items-center rounded bg-gray-800 px-2 py-1 text-sm font-medium text-white"
                >
                  {student.name}
                  <button
                    type="button"
                    onClick={() => {
                      setStudents(
                        students.filter(({ id }) => {
                          student.id !== id;
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
                    <span className="sr-only">Remove Student</span>
                  </button>
                </span>
              );
            })}
          </div>
        ) : (
          <></>
        )}

        <div className="mt-4 max-w-xl">
          <InputLabel value="Students" />

          <StudentSelect value={selectedStudent} onChange={studentChange} />

          <InputError className="mt-2" />
        </div>

        <PrimaryButton disabled={processing}>Save</PrimaryButton>
      </form>
    </section>
  );
}
