
import Homepage from './components/HomePage'
import EmployeePage from './components/EmployeePage'
import titles from './models/titles';
import workers from './models/workers';
// import EmployeeList from './components/EmployeeList'
// import Header from './components/Header'
// import SearchBar from './components/SearchBar'
// import EmployeeListItem from './components/EmployeeListItem'
function App() {
  return (
    <div className="App">
      <div className="mainContainer">
        <Homepage staff={workers} yourTitle={titles.homepage}/>
        <EmployeePage staff={workers} yourTitle={titles.epage}/>
      </div>
{/*       
      <EmployeeList />
      <Header />
      <SearchBar />
      <EmployeeListItem /> */}
    </div>
  );
}
export default App;