import React from 'react';
import profiles from '../fakeData';



console.log(profiles);

const ProfileCard = ({image, name, title, description}) => {
  return (

    <div style = {{ 
      backgroundColor: 'white', 
      display: 'flex', 
      flexDirection: 'column', 
      margin: 10, 
      padding: 3, 
      borderRadius: 15
      }}>

      <div style = {{ display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>

        <img 
          src = {image}
          alt = ''
          height = '200px'
          style = {{borderRadius: 10 }}
      
        />
        <div style = {{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
           <h2 style = {{ marginLeft: '10px'}}>{name}</h2>
           <h2 style = {{ marginLeft: '10px'}}>{title}</h2>
        </div>
      
      </div>

      <div style = {{display: 'flex', justifyContent: 'center'}}>

          <p style = {{ fontSize: '25px', padding: 5}}>{description}</p>

      </div>

    </div>

  )
};

export default ProfileCard;
