import './App.css';
import { AppProvider } from './providers/app';
import { AppRoutes } from './routes';

function App() {
  return (
    <AppProvider>
      <AppRoutes></AppRoutes>
    </AppProvider>
  );
}

export default App;
