import React from 'react'
import Card from './components/card'
import Navbar from './components/navbar'
const App = () => {
  return (
    <div className='app-wrapper'>
    {/* <Navbar /> */}
    < Card user='UX-Designer' age={23} company='Google' date='2023-01-01' time='full-time' time2='flexible'/>
    < Card user='Front-end Developer' age={21} company='Microsoft' date='2023-01-02' time='part-time' time2='flexible'/>
    < Card user='Backend Developer' age={25} company='Amazon' date='2023-01-03' time='part-time' time2='flexible'/>
    </div>
  )
}

export default App
