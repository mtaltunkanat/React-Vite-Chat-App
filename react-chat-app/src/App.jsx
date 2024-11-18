import { initializeApp } from "firebase/app"
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

import { useAuthState } from "react-firebase-hooks/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAMDAhiPL7xC8F7KpLgxH8RXVT0Nu_b6VY",
  authDomain: "chat-app-cd456.firebaseapp.com",
  projectId: "chat-app-cd456",
  storageBucket: "chat-app-cd456.firebasestorage.app",
  messagingSenderId: "60135532292",
  appId: "1:60135532292:web:fc1be4e64a90acb9ead251",
  measurementId: "G-TYDZDQBFKV"
};

const app = initializeApp(firebaseConfig)

const auth = getAuth(app)
const db = getFirestore(app)

function App() {
  const [ user ] = useAuthState(auth)
  return (
    <div className="max-w-6xl mx-auto">

      <header className="flex justify-between border-b p-2 mb-4">
        <h1 className="text-2xl">
          Sohbet Uygulamasi
          </h1>
          {user && <SignOut/>}
      </header>

      {
        user ? <p>Hoş Geldiniz!</p> : <SignIn/> 
      }
    </div>
  )
}

function SignIn(){

  function handleClick(){
    const provider = new GoogleAuthProvider()
    signInWithPopup(auth,provider)
  }

  return(
  <div>
    <button 
    onClick={handleClick}
    className="bg-blue-500 p-2 text-white rounded-lg">
      Google ile Giris Yap
    </button>
  </div>
  )
}

    function SignOut(){
      return(
        <button 
        onClick={() => signOut(auth)}
        className="bg-red-500 p-2 text-white rounded-lg">
          Çıkış Yap
        </button>
      )
    }

export default App
