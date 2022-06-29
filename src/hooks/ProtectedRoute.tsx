import { FC } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

export const ProtectedRoute: FC = () => {


  // if ( !isLoggedIn ) {
  //   return <Navigate  to='/login' replace/>
  // }

  return ( <Outlet /> )

}
