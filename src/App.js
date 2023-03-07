function App() {
  return (
    <div className="App">
      <Job salary="12000$" position="Senior SDE" company="Amazon" />
      <hr />
      <Job salary="15000$" position="Project Manager" company="Google" />
      <hr />
      <Job salary="10000$" position="Junior SDE" company="Netflix" />
      <hr />
    </div>
  );
}

const Job = (props) => {
  return (
    <div>
      <h1>{props.salary}</h1>
      <h2>{props.position}</h2>
      <h2>{props.company}</h2>
    </div>
  );
};
export default App;
