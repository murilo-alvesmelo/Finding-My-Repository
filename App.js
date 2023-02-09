import { StatusBar } from 'expo-status-bar';
import Cards from './src/components/Cards';
import Home from './src/components/Home';

export default function App() {
  return (
    <>
      <StatusBar hidden={true}/>
      <Home/>
    </>
  );
}
