import { BrowserRouter, Routes, Route} from 'react-router-dom'
import React from 'react'
import UserList from '../components/UserList'
import AddUser from '../components/AddUser'
import EditUser from '../components/EditUser'

export default function Content() {
  return (
    <div className="content-wrapper">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserList/>} />
          <Route path="add" element={<AddUser/>} />
          <Route path="edit/:id" element={<EditUser/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
