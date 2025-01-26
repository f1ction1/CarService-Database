import { useState, useEffect } from 'react';
import Nav from './components/Navigation/Nav';
import TableClients from './components/TableClients/TableClients';
import ClientDetailDisplay from './components/DetailView/ClientDetailDisplay';
import TableWorks from './components/TableWorks/TableWorks';

function App() {
  const [selector, setSelector] = useState(1);
  const [selectedClientId, setSelectedClientId] = useState(null);
  
  function handleOnClickClient(id) {
    setSelectedClientId(id);
    setSelector(2);
  }
  // onClick Client END
  let bodyView = <TableClients onClickClientfunc={handleOnClickClient}/>;
  if(selector === 1) {
    bodyView = <TableClients onClickClientfunc={handleOnClickClient}/>;
  } else if (selector === 2) {
    bodyView = <ClientDetailDisplay selectedClientId={selectedClientId}/>;
  } else if (selector === 3) {
    bodyView = <TableWorks onClickClientfunc={handleOnClickClient}/>;
  }
  return (
    <div className="container-fluid">
      <Nav handleSelector={setSelector}/>
      {bodyView}
    </div>
      
  );
}
/*<TableClients onClickClientfunc={handleOnClickClient}/>
      {onClickClient && <ClientDetailDisplay client={onClickClient}/>} */
export default App;
