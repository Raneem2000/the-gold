import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router} from 'react-router-dom'
import './index.css';
import App from './App';
import UserProvider from './Pages/Website/context/UserContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
        <UserProvider>
        <App />
        </UserProvider>
    </Router>
    );
