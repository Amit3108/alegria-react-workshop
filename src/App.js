
import ClassComp from './ClassComp';
import FunctionalComp from './FunctionalComp';

function App() {
  return (
    <div>
      <FunctionalComp name="Amit Naik" date={new Date()}/>
      <hr/>
      <ClassComp />
    </div>
  );
}

export default App;
