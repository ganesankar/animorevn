import { createRoot } from 'react-dom/client';
import App from '~/App';
import GlobalStyles from '~/components/GlobalStyles';

createRoot(document.getElementById('app-root')!).render(
  <GlobalStyles>
    <App />
  </GlobalStyles>
);
