

import { ProfileProps } from "@/types/profile";

function Profile({name, imageId , profession , awards, discovered, size = 70} : ProfileProps){
  return (
    <section className="profile">
      <h2>{name}</h2>
      <img
        className="avatar"
        src={'https://i.imgur.com/' + imageId + 's.jpg'}
        alt={name}
        width={size}
        height={size}
      />
      <ul>
        <li>
          <b>Profession: </b>
          {profession}
        </li>
        <li>
          <b>Awards: {awards.awardCt} </b>
          ({awards.awards.join(', ')})
        </li>
        <li>
          <b>Discovered: </b>
          {discovered}
        </li>
      </ul>
      </section>
  )
  
}

export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Profile name="Maria Skłodowska-Curie" imageId="szV5sdG" profession="physicist and chemist" awards={{awardCt: 4, awards: ['Nobel Prize in Physics', 
        'Nobel Prize in Chemistry', ' Davy Medal', 'Matteucci Medal' ]}} discovered="polonium (element)" />  
      <Profile name="Katsuko Saruhashi" imageId="YfeOqp2s" profession="geochemist" awards={{awardCt: 2, awards: ['Miyake Prize for geochemistry', 
        'Tanaka Prize']}} discovered="a method for measuring carbon dioxide in seawater" />
    </div>
  );
}
