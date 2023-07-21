/* eslint-disable array-callback-return */
import Card from '../Card/Card';
import { CardsContainer } from './styledComponents';

export default function Cards({characters}) {

   return (
            <CardsContainer>
                  {characters.map(({name, species, gender, image}) => {
                     return (

                     <Card 
                     name = {name}                    //name={character.name}
                     species = {species}              //species={character.species}
                     gender = {gender}                //gender ={character.gender}
                     image = {image}
                     onClose={() => window.alert('Emulamos que se cierra la card')}
                     
                     />
                     );
                   })}
               </CardsContainer>
   )
}


