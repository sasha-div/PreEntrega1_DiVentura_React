import NavBar from './components/NavBar/indexNavBar';
import ItemListContainer from './components/ItemListContainer/indexItemListContainer';

const App = () => {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting={'¡Bienvenid@s!'} />
    </>
  )
}

export default App;