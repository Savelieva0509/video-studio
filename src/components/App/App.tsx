import Header from '../Header/Header';
import PriceList from '../PriceList/PriceList';
import s from './App.module.scss';

function App() {
  return (
    <div className={s.container}>
      <Header />
      <PriceList />
    </div>
  );
}
export default App;
