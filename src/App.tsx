import React, { useState, FormEvent } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App: React.FC = () => {
  const [prompt, setPrompt] = useState<string>('');
  const [warningMessage, setWarningMessage] = useState<string>('');
  const [confirmationMessage, setConfirmationMessage] = useState<string>('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (prompt.trim() === '') {
      setWarningMessage('Please enter a prompt.');
      setConfirmationMessage('');
    } else {
      setWarningMessage('');
      setConfirmationMessage('Your prompt has been submitted!');
      setPrompt('');
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="text-center bg-light p-5 rounded shadow">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Enter your prompt here"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        {warningMessage && <p className="text-danger mt-2">{warningMessage}</p>}
        {confirmationMessage && <p className="text-success mt-2">{confirmationMessage}</p>}
      </div>
    </div>
  );
}

export default App;
