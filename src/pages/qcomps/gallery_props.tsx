interface Awards {
  awardCt: number;
  awards: string[];
}
interface ProfileProps{
  name : string;
  imageId: string;
  profession : string;
  awards: Awards;
  discovered : string;
  size?: number;
}
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
      {/* <section className="profile">
        <h2>Maria Skłodowska-Curie</h2>
        <img
          className="avatar"
          src='https://i.imgur.com/szV5sdGs.jpg'
          alt="Maria Skłodowska-Curie"
          width={70}
          height={70}
        />
        <ul>
          <li>
            <b>Profession: </b>
            physicist and chemist
          </li>
          <li>
            <b>Awards: 4 </b>
            (Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)
          </li>
          <li>
            <b>Discovered: </b>
            polonium (element)
          </li>
        </ul>
      </section> */}
      {/* <section className="profile">
        <h2>Katsuko Saruhashi</h2>
        <img
          className="avatar"
          src='https://i.imgur.com/YfeOqp2s.jpg'
          alt="Katsuko Saruhashi"
          width={70}
          height={70}
        />
        <ul>
          <li>
            <b>Profession: </b>
            geochemist
          </li>
          <li>
            <b>Awards: 2 </b>
            (Miyake Prize for geochemistry, Tanaka Prize)
          </li>
          <li>
            <b>Discovered: </b>
            a method for measuring carbon dioxide in seawater
          </li>
        </ul>
      </section> */}
    </div>
  );
}
