import Layout from "./components/Layout";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import Stock from "./pages/Stock";

function App() {
  return (
    <div className="min-h-screen">
      <Layout>
        {/* <Dashboard /> */}
        <Stock />
      </Layout>
    </div>
  );
}

export default App;
