import React, { useState, useContext, useEffect } from 'react';
import Header from '../../../components/Header';
import './SignUp.css';
import axios from 'axios';
import { User } from '../context/UserContext';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const [username, setusername] = useState('');
  const [password, setPassword] = useState('');
  const [Err, setErr] = useState(false);
  const [Correct, setCorrect] =useState(false);
  const [enter, setEnter] = useState(false);
  const [selectedGuid, setSelectedGuid] = useState('');
  const [Guid, setGuid] = useState([]);
  
  const nav = useNavigate();

  const user = useContext(User);

  useEffect(() => {
    // فحص وجود accessToken في localStorage
    const storedToken = localStorage.getItem('accessToken');
    if (storedToken) {
      // إعادة تسجيل المستخدم باستخدام accessToken المخزن
      user.setAuth({ token: storedToken });
      // توجيه المستخدم إلى صفحة dashboard أو أي صفحة تسجيل الدخول الخاصة بك
      nav('/dashboard');
    }
  }, []); // أضف مصفوفة تابعية فارغة
  
  

  const handleGuidSelect = (e) => {
    setSelectedGuid(e.target.value);
  };

  const fetchBranchGuids = async () => {
    try {
      const response = await axios.post('http://5.182.17.33:6060/api/Auth/login1', {
        username: username,
        password: password,
      });

      const branches = response.data.data;
      const branchGuids = branches.map((branch) => branch.branch_guid);
      setGuid(branchGuids);
      setCorrect(true)
      setEnter(false)
      setErr(false)

    } catch (err) {
      if (err.response.status === 400) {
        setErr(true);
      }
    }
    setEnter(true);

  };
  
  const sendLogin2Data = async () => {
    try {
      const url = `http://5.182.17.33:6060/api/Auth/login2?branchGuid=${selectedGuid}`;
      const res = await axios.post(url, {
        username: username,
        password: password,
      });
  
      const token = res.data.data.accessToken;
      user.setAuth({ token });
  
      // تخزين accessToken في localStorage
      localStorage.setItem('accessToken', token);
  
      // تأخير التنقل بضعة ميلي ثواني
      setTimeout(() => {
        nav('/dashboard');
      }, 2000); // تأخير لمدة ثانية واحدة
    } catch (err) {
      console.log(err);
      if (err.response.status === 400) {
        setErr(true);
      }
      setEnter(true);
    }
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    setEnter(true);
    if (selectedGuid) {
      sendLogin2Data();
    } else {
      fetchBranchGuids();
    }
  };

  return (
    <>

      <Header />
      <div className="video-background">
   <video autoPlay loop muted>
      <source src={require('../../../assets/vedio.mp4')} type="video/mp4" />
    </video>
      <div className="form-container">
        <form action="" onSubmit={handleSubmit}>
          <label htmlFor="username"> Username:</label>
          <input
            id="username"
            type="text"
            placeholder="username"
            value={username}
            onChange={(e) => setusername(e.target.value)}
          />
          {enter && username === '' &&<p className='error-message'>Username Can't be Empty</p>}
          <label htmlFor="password"> Password:</label>
          <input
            id="password"
            type="password"
            placeholder="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {enter && password ==='' && (<p className='error-message'> Password Can't be Empty</p>)}

          {enter && (
  <p className='error-message'>
    {username !== '' && password !== '' && Err
      ? 'Username Or Password Not Correct'
      : ''}
  </p>
)}
          {Correct && (<p style={{color:'green'}}>Correct</p>)}
          {Guid.length > 0 && (
            <div>
              <select onChange={handleGuidSelect} value={selectedGuid} className='select'>
                <option value="">SELECT GUID</option>
                {Guid.map((guid) => (
                  <option key={guid} value={guid}>
                    {guid}
                  </option>
                ))}
              </select>
            </div>
          )}
          <button>Log in</button>
          <br />
        </form>
        
      </div>
      </div>
    </>
  );
}

export default Login;
