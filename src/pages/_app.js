import PropTypes from 'prop-types';
import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ToDoList from '../components/ToDoList.jsx';

function App({ Component, pageProps }) {
  return (
    <>
      <ToDoList />
      <Component {...pageProps} />
    </>
  );
}

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object,
};

export default App;
