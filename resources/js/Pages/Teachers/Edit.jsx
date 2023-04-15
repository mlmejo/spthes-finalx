import AdminLayout from "@/Layouts/AdminLayout";
import { Head, useForm } from "@inertiajs/react";

export default function Edit({ auth, teacher }) {
  const { data, setData, patch, processing, errors } = useForm({
    name: teacher.name,
    email: teacher.email,
  });

  return (
    <AdminLayout auth={auth}>
      <Head title="Edit Teacher Information" />
    </AdminLayout>
  );
}
