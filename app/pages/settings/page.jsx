import ProtectedRoute from "@/components/ProtectedRoute";

const settingPage = () => {
  return (
    <ProtectedRoute allowedRoles={["Admin"]}>
      <div>settings</div>
    </ProtectedRoute>
  );
};

export default settingPage;
