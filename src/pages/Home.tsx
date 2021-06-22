import illustrationMedia from 'assets/media/illustration.svg';
import logoImg from '../assets/images/logo.svg'

export function Home() {
  return (
    <div>
      <aside>
        <img src={illustrationImg} alt="Illustration for questions and answers" />
        <strong>Create live Q&amp;A rooms</strong>
        <p>Answer questions from your audience in real time</p>
      </aside>
      <main>
        <div>
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