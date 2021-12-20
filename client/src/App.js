import AppRouter from "./components/routers/AppRouter";
import './App.css';
import AuthProvider from "./components/auth/AuthProvider";

function App() {
  return (
      <>
        <AuthProvider >
          <AppRouter />
        </AuthProvider>
      </>
  );
}

export default App;
