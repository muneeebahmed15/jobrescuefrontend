import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './Components/login'
import Dashboard from './Components/admin/dashboard'
import AnimalRecord from './Components/admin/animalRecord'
import TrainingNotes from './Components/admin/trainingNotes'
import Employees from './Components/admin/employees'
import Setting from './Components/admin/setting'
import LandingPage from './Components/landingPage'
import CreateRecord from './Components/admin/animalRecord/CreateRecord'
import RecordDetail from './Components/admin/animalRecord/RecordDetail'
import AddEmployee from './Components/admin/employees/AddEmployee'
import Admin from './Components/admin'
import EmployeeDetail from './Components/admin/employees/EmployeeDetail'
import Picture from './Components/picture'

const App = () => {
  return (
    <>
    <BrowserRouter>

    <Routes>
              
            <Route path='/picture' element={<Picture/>}/>

            <Route path='/' element={<LandingPage/>}/>

            <Route path='/login' element={<Login/>}/>

            <Route path='/admin' element={<Admin/>}>

            <Route path='/admin/dashboard' element={<Dashboard/>}/>

            <Route path='/admin/animal-records' element={<AnimalRecord/>}/>
            
            <Route path='/admin/animal-records/detail/:id' element={<RecordDetail/>}/>
            
            <Route path='/admin/animal-records/add' element={<CreateRecord/>}/>

            <Route path='/admin/training-notes' element={<TrainingNotes/>}/>

            <Route path='/admin/employees' element={<Employees/>}/>

            <Route path='/admin/employees/add' element={<AddEmployee/>} />

            <Route path='/admin/employees/detail/:id' element={<EmployeeDetail/>} />

            <Route path='/admin/settings' element={<Setting/>}/>

            </Route>


            <Route path='*' element={"Page not found"}/>
    </Routes>
    
    </BrowserRouter>
    </>
  )
}

export default App


