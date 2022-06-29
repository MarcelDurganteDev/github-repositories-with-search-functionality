import { FC } from 'react';

import { Router } from './router/Router';

export interface IApplicationProps {}

const App: FC<IApplicationProps> = () => {
  return <Router />;
};

export default App;
