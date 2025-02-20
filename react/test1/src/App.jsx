
import './App.css'
import Demo from './props'
import Props from './props'
import Event from './event'
import D_element from './D_element'
import Fruits from './map'
import Students from './student'
import Facultys from './faculty'
import Products from './product'
import Faculty_table from './faculty_details'
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Navbar from './Navbar'
import Layout from './Layout'
import Student_table from './student_table'
import Student_card from './student_card'
import Our_student_deatails from './home'
import Test from './usestate'
import Name from './usestate2'
import Username from './usestate2'
import UseEffect from './useeffect1'
import Useeffect2 from './useeffect2'
import Calculator from './calculater'

function App() {

  return (
  <>
{/* 
   <Demo name="John" />
   <Event/>
   <D_element Isdisplay={true} /> */}
   {/* <Fruits/> */}
   {/* <Students/> */}
    {/* <Facultys/> */}
    {/* <Products/> */}
    {/* <Faculty_table/> */}
    {/* <Student_table /> */}

     {/* <BrowserRouter>
     <Routes>
       <Route path='/' element={<Layout/>}>
       <Route path='/student_table' element={<Student_table/>}/>
       <Route path='/student_card' element={<Student_card/>}/>
       <Route path='/home' element={<Our_student_deatails/>}/>
       </Route>
     </Routes>
     </BrowserRouter> */}
     {/* <Test/> */}
     {/* <Username/> */}
     {/* <UseEffect /> */}
     {/* <Useeffect2/> */}
     <Calculator/>
     
   </>
  )
  
}

export default App
