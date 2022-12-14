import React from 'react'
import { NavLink } from 'react-router-dom';
import Jumbotron from '../../components/card/Jumbotron'
import UserNav from '../../components/nav/UserNav';
import { useAuth } from '../../context/auth'

const Dashboard = () => {
  const [auth, setAuth] = useAuth();
  return (
    <>
      <Jumbotron title={`Hello ${auth?.user?.name}`} subTitle="User Dashboard" />
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-3'>
            <UserNav />
          </div>
          <div className='col-md-9'>
            <ul className='list-group'>
              <li className='list-group-item'>{auth?.user?.name}</li>
              <li className='list-group-item'>{auth?.user?.email}</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard