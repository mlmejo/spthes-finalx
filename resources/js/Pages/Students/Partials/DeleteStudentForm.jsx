import DangerButton from "@/Components/DangerButton";
import Modal from "@/Components/Modal";
import SecondaryButton from "@/Components/SecondaryButton";
import { useForm } from "@inertiajs/react";
import { useContext, useState } from "react";

export default function DeleteStudentForm({ student }) {

  const [confirmingStudentDeletion, setConfirmStudentDeletion] =
    useState(false);

  const { data, setData, delete: destroy, processing } = useForm();

  const confirmStudentDeletion = () => {
    setConfirmStudentDeletion(true);
  };

  const deleteStudent = (e) => {
    e.preventDefault();

    destroy(route("students.destroy", student.id), {
      onSuccess: () => closeModal(),
    });
  };

  const closeModal = () => {
    setConfirmStudentDeletion(false);
  };

  return (
    <student className="space-y-6">
      <header>
        <h2 className="text-lg font-medium text-gray-900">Delete Student</h2>

        <p className="mt-1 text-sm text-gray-600">
          Deleting this student will result in the permanent loss of data.
        </p>
      </header>

      <DangerButton onClick={confirmStudentDeletion}>
        Delete Student
      </DangerButton>

      <Modal show={confirmingStudentDeletion} onClose={closeModal}>
        <form onSubmit={deleteStudent} className="p-6">
          <h2 className="text-lg-font-medium-text-gray-900">
            Are you sure you want to delete this student?
          </h2>

          <p className="mt-1 text-sm text-gray-600">
            Deleting this student will result in the permanent loss of data.
          </p>

          <div className="mt-6 flex justify-end">
            <SecondaryButton onClick={closeModal}>Cancel</SecondaryButton>

            <DangerButton className="ml-3" disabled={processing}>
              Delete Student
            </DangerButton>
          </div>
        </form>
      </Modal>
    </student>
  );
}
