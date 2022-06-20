import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '~/store';

import App from '~/App';
import GlobalStyles from '~/components/GlobalStyles';
import AuthProvider from '~/auth/provider';

createRoot(document.getElementById('app-root')!).render(
  <Provider store={store}>
    <BrowserRouter>
      <GlobalStyles>
        <AuthProvider>
          <App />
        </AuthProvider>
      </GlobalStyles>
    </BrowserRouter>
  </Provider>
);
