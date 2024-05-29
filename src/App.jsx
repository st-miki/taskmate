import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './app/store';
import Layout from './layout/Layout/Layout';
import LoginPage from './Pages/LoginPage';
import SignupPage from './Pages/SignupPage';
import OverviewPage from './Pages/OverviewPage';
import TasklistPage from './Pages/TaskListPage';
import NotificationsPage from './Pages/NotificationsPage';
import SettingsPage from './Pages/SettingsPage';
import OrganizationPage from './Pages/OrganizationPage';

const App = () => {
 return (
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/*" element={<Layout />}>
          <Route index element={<OverviewPage />} />
          <Route path="tasklist" element={<TasklistPage />} />
          <Route path="notifications" element={<NotificationsPage />} />
          <Route path="settings" element={<SettingsPage />} />
          <Route path="organization/org1" element={<OrganizationPage orgId="org1" />} />
          <Route path="organization/org2" element={<OrganizationPage orgId="org2" />} />
        </Route>
      </Routes>
    </Router>
  </Provider>
 );
};

export default App;
