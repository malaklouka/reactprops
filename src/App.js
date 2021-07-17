import './App.css';
import Profile from './Profile/Profile.js'

function App() {
  
  function handleName(fullName) {
    alert(`Hello It's me ${fullName}`);
  };
  return (  
    <>
      <Profile
        fullName="Malak Nakaa"
        bio="Student at ISIMM"
        profession="Software Engineer"
        handleName={handleName} />
    </>
  );
}

export default App;