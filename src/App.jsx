import Header from './components/Header';
import Tasks from './components/Tasks';

const App = () => {
  const linkClicked = (e) => {
    console.log(e + ' is Clicked');
  };
  return (
    <>
      <Header onClick={linkClicked} />
      <Tasks />
    </>
  );
};

export default App;
