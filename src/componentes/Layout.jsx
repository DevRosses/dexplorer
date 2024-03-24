import Header from '../componentes/Header'
import Footer from '../componentes/Footer'



function Layout(props) {
    const { children } =  props; 
    return ( <>
    <Header></Header>
    { children }
    <Footer></Footer>
    </> );
}

export default Layout;