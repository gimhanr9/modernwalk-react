import { ThemeProvider } from '@mui/material/styles';
import { Theme } from './utils/Theme';
import { Routes, Route } from 'react-router-dom';
import { routes } from './routes';
import Layout from './components/layout';

const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <div className='App'>
        <Routes exact>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={<Layout>{route.component}</Layout>}
            />
          ))}
        </Routes>
      </div>
    </ThemeProvider>
  );
};

export default App;
