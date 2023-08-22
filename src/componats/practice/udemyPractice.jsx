import './Style.css';
import componantsImage from '../assets/images/img2.png';
import statImage from '../assets/images/img3.png';
import eventsImage from '../assets/images/img4.png';
import Header from '../Header/Header';



const concepts = [
    { 
        title:'componants',
        image: componantsImage,
        description:
        'Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. Components can receive data via props, and they can render dynamic output using JSX.',
 
    },
    {
        title: 'State',
        image: statImage,
        description:
        'Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. Components can receive data via props, and they can render dynamic output using JSX.',
 
    },
    {
        title: 'Events',
        image:eventsImage,
        description:
        'Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. Components can receive data via props, and they can render dynamic output using JSX.',
 
    }
]

const Practice =()=>{



    return(
        <div>
      <Header/>
           <ul id='concepts'>
            <li className='concept'>
               
                <img src={concepts[0].image} className='img-fluid' alt={concepts[0].title} />
                <h2>{concepts[0].title}</h2>
                <p>{concepts[0].description}</p>

            </li>
            <li className='concept'>
               
               <img src={concepts[1].image} className='img-fluid' alt={concepts[1].title} />
               <h2>{concepts[1].title}</h2>
               <p>{concepts[1].description}</p>

           </li>
           <li className='concept'>
               
               <img src={concepts[2].image} className='img-fluid' alt={concepts[2].title} />
               <h2>{concepts[2].title}</h2>
               <p>{concepts[2].description}</p>

           </li>
           </ul>
        </div>
    )
};
export default Practice;

