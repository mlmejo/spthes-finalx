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

  const { data, setData, post, processing, errors } = useForm({
    registration_id: 0,
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

  const studentChange = (option) => {
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
    setData("registration_id", option.value);
    setSelectedRegistration(option);
  };

  const submit = (e) => {
    e.preventDefault();

    post(route("sections.students.store", section));
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
