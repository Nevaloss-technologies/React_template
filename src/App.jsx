import { RouterProvider } from 'react-router-dom';

// Project imports
import router from 'routes';
import ThemeCustomization from 'themes';
import ScrollTop from 'components/ScrollTop';

// ==============================|| APP - THEME, ROUTER, LOCAL ||============================== //

export default function App() {
  const apiUrl = import.meta.env.VITE_PUBLIC_URL;
  const appVersion = import.meta.env.VITE_APP_VERSION;

  console.log('API URL:', apiUrl);
  console.log('App Version:', appVersion);

  return (
    <ThemeCustomization>
      <ScrollTop>
        <RouterProvider router={router} />
      </ScrollTop>
    </ThemeCustomization>
  );
}
