import { createRoot } from 'react-dom/client';
import App from '~/App';
import GlobalStyles from '~/components/GlobalStyles';

const root = createRoot(document.getElementById('app-root')!);
root.render(
  <GlobalStyles>
    <App />
  </GlobalStyles>
);
