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

  const [teachers, setTeachers] = useState([]);

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

    post(route("sections.teachers.store", section));
  };

  return (
    <section>
      <header>
        <h2 className="text-lg font-medium text-gray-900">Assign Student</h2>
      </header>

      <form className="mt-4 space-y-4">
        <div className="max-w-xl">
          <InputLabel value="Section Teachers" />

          <RegistrationSelect section={section} />

          <InputError className="mt-2" />
        </div>

        <div className="mt-4 max-w-xl">
          <InputLabel value="Students" />

          <InputError className="mt-2" />
        </div>

        <PrimaryButton disabled={processing}>Save</PrimaryButton>
      </form>
    </section>
  );
}
