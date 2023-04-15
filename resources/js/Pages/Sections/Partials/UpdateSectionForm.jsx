import AcademicLevelSelect from "@/Components/AcademicLevelSelect";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { useForm } from "@inertiajs/react";
import { useContext, useState } from "react";
import SectionContext from "../SectionContext";

export default function UpdateSectionForm() {
  const section = useContext(SectionContext);

  const { data, setData, patch, processing, errors } = useForm({
    name: section.name,
    academic_level_id: section.academic_level.id,
  });

  const [selected, setSelected] = useState({
    value: section.academic_level.id,
    label: section.academic_level.name,
  });

  const change = (option) => {
    setData("academic_level_id", option.value);
    setSelected(option);
  };

  return (
    <section>
      <header>
        <h2 className="text-lg font-medium text-gray-900">
          Update Section Information
        </h2>
      </header>

      <form className="mt-4 space-y-4">
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

          <AcademicLevelSelect value={selected} onChange={change} />

          <InputError className="mt-2" message={errors.academic_level_id} />
        </div>

        <PrimaryButton disabled={processing}>Save</PrimaryButton>
      </form>
    </section>
  );
}
