import { StatusBar } from 'expo-status-bar';
import Header from './src/components/Header';
import Cards from './src/components/Cards';

export default function App() {
  return (
    <>
      <StatusBar hidden={true}/>
      <Header/>
    </>
  );
}
