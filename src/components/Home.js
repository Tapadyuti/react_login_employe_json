import { useNavigate } from 'react-router-dom';
import '../styles/home.css';


const Home = () => {

  const navigate = useNavigate();
  return (
    <div className='vh-80'>
      <button className='aniButton' onClick={()=>navigate('/login')}>Click on Login</button>
    </div>
  )
}

export default Home