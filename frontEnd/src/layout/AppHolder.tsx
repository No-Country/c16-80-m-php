import Header from '../components/header';
import Footer from '../components/footer';
import { Outlet } from 'react-router-dom';

function AppHolder({children}) {
  return (
    <>
      <Header></Header>
        {children || <Outlet />}
      <Footer></Footer>
    </>
  )
}

export default AppHolder