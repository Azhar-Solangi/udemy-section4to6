import keyConceptsImage from '../assets/images/imag1.png';


function Header () {

    return ( <header>
    <img src={keyConceptsImage} className='img-fluid' alt="" />
    <h1>Key React Concepts </h1>
    <p>Selected key React concepts you know about</p>
   </header>
    );
}

export default Header;