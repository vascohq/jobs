import { logo } from "./App.module.css";
import vascoLogo from "./assets/vasco.svg";
import OrganizationTargetsPage from "./pages/OrganizationTargetsPage";

function App() {
  return (
    <>
      <header>
        <img src={vascoLogo} className={logo} alt="Vasco logo" />
        <h1>Vasco Frontend Challenge</h1>
      </header>
      <main>
        <OrganizationTargetsPage />
      </main>
    </>
  );
}

export default App;
