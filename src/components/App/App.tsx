import AppBar from '../AppBar/AppBar';
import PriceList from '../PriceList/PriceList';
import s from './App.module.scss'

function App() {
  return (
    <div className={s.container}>
      <AppBar />
      <PriceList />
    </div>
  );
}
export default App;
