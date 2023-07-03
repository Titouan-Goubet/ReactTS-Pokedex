import ReactDOM from 'react-dom/client';
import './styles/index.css';
import { Provider } from 'react-redux';
import MainRouter from './router';
import store from './store';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <MainRouter />
  </Provider>
);
