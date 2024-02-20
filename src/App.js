import { Provider } from 'react-redux';
import { ThemeProvider } from './hooks/theme';
import Dashboard from './modules/dashboard';
import store from './store/setup';

function App() {

  return (
    <Provider store={store}>
      <ThemeProvider>
        <Dashboard />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
