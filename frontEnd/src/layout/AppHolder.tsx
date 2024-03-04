import Header from '../components/header';
import Footer from '../components/footer';
import { Outlet } from 'react-router-dom';

interface AppHolderProps {
  children: React.ReactNode; // Specifies children can be any React Node
}

function AppHolder({children}:AppHolderProps) {
  return (
    <>
      <Header></Header>
        {children || <Outlet />}
      <Footer></Footer>
    </>
  )
}

export default AppHolder