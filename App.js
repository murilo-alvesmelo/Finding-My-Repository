import { StatusBar } from 'expo-status-bar';
import Cards from './src/components/Cards';
import Home from './src/components/Home';
import Nagivation from './src/Navigation';
import { LogBox } from 'react-native';

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

export default function App() {
  return (
    <>
      <StatusBar hidden={true}/>
      <Nagivation/>
    </>
  );
}
