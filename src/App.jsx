import { useState } from 'react';
import Header from './components/Header';
import Orgs from './components/Orgs';
import AddOrgs from './components/AddOrgs';

const App = () => {
  const [orgs, setOrgs] = useState([
    { id: 0, text: 'Allied School' },
    { id: 1, text: 'Riphah International College' },
    { id: 2, text: 'University of Engineering' },
  ]);

  const linkClicked = (e) => {
    console.log(e + ' is Clicked');
  };

  // Delete the Task
  const deleteOrg = (id) => {
    setOrgs(
      orgs.filter((org) => {
        return org.id !== id;
      })
    );
  };

  // Add the new tasks
  const addOrgs = (org) => {
    const id = Math.floor(Math.random() * 10000);
    const newOrg = { id, ...org };
    setOrgs([...orgs, newOrg]);
  };
  return (
    <>
      <Header onClick={linkClicked} />
      <AddOrgs onAdd={addOrgs} />
      <Orgs orgs={orgs} onDelete={deleteOrg} />
    </>
  );
};

export default App;
