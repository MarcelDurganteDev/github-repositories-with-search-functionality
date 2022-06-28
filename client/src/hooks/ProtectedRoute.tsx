import { FC, useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { UserContext } from '../store/contexts/UserContext'

export const ProtectedRoute: FC = () => {

  const { isLoggedIn } = useContext( UserContext );

  if ( !isLoggedIn ) {
    return <Navigate  to='/login' replace/>
  }

  return ( <Outlet /> )

}
