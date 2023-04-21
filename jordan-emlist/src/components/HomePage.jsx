import React from 'react'
import Header from './Header'
import SearchBar from './SearchBar'
import EmployeeList from './EmployeeList'

function HomePage(props) {
  return (
    <div className="hpage">
    <div className='employeeSection'>
      <Header passedProp={props.yourTitle}/>
      <h2 className='employeeDirectory'>Employee Directory</h2>
    </div>
      
      <SearchBar />
      <div className='employeeList'>
      <EmployeeList workers={props.staff}/>
    </div>
    </div>
  )
}
export default HomePage