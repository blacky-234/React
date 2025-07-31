import React from 'react';
import 'assets/css/loginform/login.css';

type LoginFormProps = {
  email: string;
  password: string;
  checked: boolean;
  onEmailChange: (val: string) => void;
  onPasswordChange: (val: string) => void;
  onCheckedChange: (val: boolean) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

function LoginForm({
  email,
  password,
  checked,
  onEmailChange,
  onPasswordChange,
  onCheckedChange,
  onSubmit,
}: LoginFormProps){
  return (
    <div className="bg-orchid">
      <div className="d-flex justify-content-center align-items-center min-vh-100 w-100">
        <div className="form-w">
          <form onSubmit={onSubmit}>
            <div className="form-group">
              <label>Email address</label>
              <input
                type="email"
                className="form-control mt-1"
                value={email}
                onChange={(e) => onEmailChange(e.target.value)}
                required
              />
            </div>

            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1"
                value={password}
                onChange={(e) => onPasswordChange(e.target.value)}
                required
              />
            </div>

            <div className="form-check mt-3">
              <input
                type="checkbox"
                className="form-check-input"
                checked={checked}
                onChange={(e) => onCheckedChange(e.target.checked)}
              />
              <label className="form-check-label">Check me out</label>
            </div>

            <button type="submit" className="btn btn-primary mt-4">
              Submit
            </button>
          </form>
        </div>
        
      </div>
    </div>
  );
}

export default LoginForm;