import {createRoot} from 'react-dom/client';
import './index.css';
import App from './components/App';

const el = document.getElementById('root') as HTMLElement;
const root =createRoot(el)
root.render(<App />)