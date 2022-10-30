import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CreateDestiny } from '../Pages/CreateDestiny';

import { ViewDestinations } from '../Pages/ViewDestinys';

const AppRoute = () => {
  return (
    <Router>
      <Routes>
        <Route path="/create" element={<CreateDestiny />} />
        <Route path="/" element={<ViewDestinations />} />
      </Routes>
    </Router>
  )
};

export default AppRoute
