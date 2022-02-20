import './App.css'
import { useState , useEffect } from 'react';
import MyButton from './components/MyButton';
import ProfileCard from './components/ProfileCard';
import profiles from './fakeData';

function App() {
  const [count, setCount] = useState(20);
  
  let myAge = 20;
  console.log(myAge);

  const [fullname, setFullname] = useState('WAITING FOR DATA')


  /*

  const getRandomProfilePicture = async () => {

      const response = await fetch('https://randomuser.me/api')
      const data = await response.json()
      setFullName(data.results[0].name.first + ' ' + data.results[0].name.last)
      return data.results[0].picture.large


  }

  */

  //let fullname = ''

  const getRandomName = async () => {

    const response = await fetch('https://randomuser.me/api')
    const data = await response.json()
    setFullName(data.results[0].name.first + ' ' + data.results[0].name.last)
    return fullname

}


  useEffect(() => {
    getRandomName()
    }, [])
        


  //getRandomProfilePicture()
 



  return (
  
    <div>
      <h2 style = {{ color: 'red'}}> {count}</h2>
      
      <button onClick = {() => setCount(count + 1)}> + </button>
      <button onClick = {() => setCount(count - 1)}> - </button>
      <MyButton title =  'Buy' color = 'red'/>
      <MyButton title =  'Sell' color = 'green'/>
      
      {/* D */}
      {profiles.map(profile => (
        
          <ProfileCard 
              
          //gets random image from Robohash
              image = {`https://robohash.org/${Math.random()}.png`}
              title = {profile.title}
              name = {fullname}
              description = {profile.description}

          />

        ))}


    </div>
  )
  


}

export default App;
