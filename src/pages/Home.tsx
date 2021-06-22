/* eslint-disable @typescript-eslint/no-unused-vars */
import illustrationImg from '../assets/illustration.svg';
import { useHistory } from 'react-router-dom'

import logoImg from '../assets/logo.svg'
import googleIconImg from '../assets/google-icon.svg'
import '../styles/auth.scss'
import { Button } from '../components/Button'
import { auth, database, firebaseProvider } from '../services/firebase'

export function Home() {

    const history = useHistory(

    )

    function handleCreteRoom(){
        const provider = new firebaseProvider.auth.GithubAuthProvider();

        auth.signInWithPopup(provider).then(result => {
            console.log(result)
        })

  
        //history.push('/rooms/new')
    }


  return (
    <div id="page-auth">
      <aside>
        <img src={illustrationImg} alt="Illustration for questions and answers" />
        <strong>Create live Q&amp;A rooms</strong>
        <p>Answer questions from your audience in real time</p>
      </aside>
      <main>
        <div className="main-content">
          <img src={logoImg} alt="Letmeask" />
          <button>
            <img src={googleIconImg} alt="Google logo" />
              Create your room with Google
          </button>
          <div>or get in a room</div>
          <form>
            <input 
              type="text"
              placeholder= "type the room code" 
            />
            <button type="submit">Enter a room</button>
          </form>
        </div>
      </main>
    </div>
  )
}