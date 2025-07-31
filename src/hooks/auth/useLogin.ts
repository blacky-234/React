import { useState } from 'react';
import AxiosClient from 'api/axiosconnection';

export function useLogin() {
  console.log("what is use state called");
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checked, setChecked] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const api = new AxiosClient('json');
    try {
      const response = await api.post('/auth/login', {
        email,
        password,
      });
      console.log('Success:', response.data);
      alert(response.data.message);
    } catch (error: any) {
      console.error('Login failed:', error.response?.data || error.message);
      alert(error.response?.data?.message || 'Login failed');
    }
  };

  return {
    email,
    password,
    checked,
    setEmail,
    setPassword,
    setChecked,
    handleSubmit,
  };
}
