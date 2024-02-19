import MobileLayer from './components/MobileLayer';
import { ThemeProvider } from './hooks/theme';
import Home from './modules/home';
import Dashboard from './modules/dashboard';

function App() {

  return (
    <ThemeProvider>
      <Dashboard>

      </Dashboard>
    </ThemeProvider>
  );
}

export default App;
