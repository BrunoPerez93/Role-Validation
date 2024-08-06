import ProtectedRoute from '@/components/ProtectedRoute'

const contactPage = () => {
  return (
    <ProtectedRoute allowedRoles={["Client"]}>
      <div>reports</div>
    </ProtectedRoute>
  )
}

export default contactPage
