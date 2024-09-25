import s from './Header.module.scss';

const Header: React.FC = () => {
  return (
    <div className="container">
      <header className={s.header}>
        <img
          src={require('../../assets/logo.png')}
          alt="Studio logo"
          className={s.logo}
        />
        <h1 className={s.slogan}>
          Створюємо спогади, які залишаються назавжди
        </h1>
      </header>
    </div>
  );
};

export default Header;
