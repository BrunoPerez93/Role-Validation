import ProtectedRoute from "@/components/ProtectedRoute";


const userPage = () => {
  return (
    <ProtectedRoute allowedRoles={["Admin"]}>
      <div>users</div>
    </ProtectedRoute>
  );
};

export default userPage;
