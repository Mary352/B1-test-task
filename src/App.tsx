import './App.css';
import NavListItem from './components/NavListItem/NavListItem';

export const App = () => {
  return (
    <div className="App">
      <header className="App-header">Jikan</header>
      <div>search</div>
      {/* <nav>Pages navigation</nav> */}
      <nav>
        <ul>
          <NavListItem textContent='Home' />
          <NavListItem textContent='Top' />
        </ul>
      </nav>
      <main>Main</main>
      <footer className="App-footer">© All Rights Reserved</footer>
    </div>
  )
}