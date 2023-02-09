import { StatusBar } from 'expo-status-bar';
import Cards from './src/components/Cards';
import Home from './src/components/Home';
import Nagivation from './src/Navigation';

export default function App() {
  return (
    <>
      <StatusBar hidden={true}/>
      <Nagivation/>
    </>
  );
}
