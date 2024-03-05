import './App.css';
import { Targets } from './components/features/targets';
import { Hero } from './components/features/hero';
import { Layout } from './components/layouts/basic-layout';

function App() {
  return (
    <Layout>
      <Hero />
      <Targets />
    </Layout>
  );
}

export default App;
