import { BrowserRouter as Router } from 'react-router-dom';
import AdminDashboard from "./pages/AdminDashboard";

// Poppins font automatically apply ho jayega
function App() {
  return (
    <Router>
      <AdminDashboard/>
    </Router>
  );
}

export default App