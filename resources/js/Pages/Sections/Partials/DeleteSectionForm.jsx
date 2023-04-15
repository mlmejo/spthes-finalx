import DangerButton from "@/Components/DangerButton";
import Modal from "@/Components/Modal";
import SecondaryButton from "@/Components/SecondaryButton";
import { useForm } from "@inertiajs/react";
import { useContext, useState } from "react";
import SectionContext from "../SectionContext";

export default function DeleteSectionForm() {
  const section = useContext(SectionContext);

  const [confirmingSectionDeletion, setConfirmSectionDeletion] =
    useState(false);

  const { data, setData, delete: destroy, processing } = useForm();

  const confirmSectionDeletion = () => {
    setConfirmSectionDeletion(true);
  };

  const deleteSection = (e) => {
    e.preventDefault();

    destroy(route("sections.destroy", section.id), {
      onSuccess: () => closeModal(),
    });
  };

  const closeModal = () => {
    setConfirmSectionDeletion(false);
  };

  return (
    <section className="space-y-6">
      <header>
        <h2 className="text-lg font-medium text-gray-900">Delete Section</h2>
      </header>

      <DangerButton onClick={confirmSectionDeletion}>
        Delete Section
      </DangerButton>

      <Modal show={confirmingSectionDeletion} onClose={closeModal}>
        <form onSubmit={deleteSection} className="p-6">
          <h2 className="text-lg-font-medium-text-gray-900">
            Are you sure you want to delete this section?
          </h2>

          <div className="mt-6 flex justify-end">
            <SecondaryButton onClick={closeModal}>Cancel</SecondaryButton>

            <DangerButton className="ml-3" disabled={processing}>
              Delete Section
            </DangerButton>
          </div>
        </form>
      </Modal>
    </section>
  );
}
