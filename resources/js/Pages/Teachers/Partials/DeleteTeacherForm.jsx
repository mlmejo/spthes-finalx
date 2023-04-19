import DangerButton from "@/Components/DangerButton";
import Modal from "@/Components/Modal";
import SecondaryButton from "@/Components/SecondaryButton";
import { useForm } from "@inertiajs/react";
import { useContext, useState } from "react";

export default function DeleteTeacherForm({ teacher }) {

  const [confirmingTeacherDeletion, setConfirmTeacherDeletion] =
    useState(false);

  const { data, setData, delete: destroy, processing } = useForm();

  const confirmTeacherDeletion = () => {
    setConfirmTeacherDeletion(true);
  };

  const deleteTeacher = (e) => {
    e.preventDefault();

    destroy(route("teachers.destroy", teacher.id), {
      onSuccess: () => closeModal(),
    });
  };

  const closeModal = () => {
    setConfirmTeacherDeletion(false);
  };

  return (
    <teacher className="space-y-6">
      <header>
        <h2 className="text-lg font-medium text-gray-900">Delete Teacher</h2>

        <p className="mt-1 text-sm text-gray-600">
          Deleting this teacher will result in the permanent loss of data.
        </p>
      </header>

      <DangerButton onClick={confirmTeacherDeletion}>
        Delete Teacher
      </DangerButton>

      <Modal show={confirmingTeacherDeletion} onClose={closeModal}>
        <form onSubmit={deleteTeacher} className="p-6">
          <h2 className="text-lg-font-medium-text-gray-900">
            Are you sure you want to delete this teacher?
          </h2>

          <p className="mt-1 text-sm text-gray-600">
            Deleting this teacher will result in the permanent loss of data.
          </p>

          <div className="mt-6 flex justify-end">
            <SecondaryButton onClick={closeModal}>Cancel</SecondaryButton>

            <DangerButton className="ml-3" disabled={processing}>
              Delete Teacher
            </DangerButton>
          </div>
        </form>
      </Modal>
    </teacher>
  );
}
