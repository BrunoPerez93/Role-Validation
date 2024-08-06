import ProtectedRoute from "@/components/ProtectedRoute";

const reportPage = () => {
  return (
    <ProtectedRoute allowedRoles={["Admin"]}>
      <div>reports</div>
    </ProtectedRoute>
  );
};

export default reportPage;
