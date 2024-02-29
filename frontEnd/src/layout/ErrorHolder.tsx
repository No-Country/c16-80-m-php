import { useRouteError } from 'react-router-dom';
import { errorParser } from '../utils/ErrorParser.js';
import AppHolder from './AppHolder';
import Error from '../assets/error.png';

function ErrorHolder({ children }) {
  // TODO: Handle Error Process
  const errorRouter = useRouteError() as { status: number };

  return (
    <AppHolder>
      <div className="error-container mt-[35px] mb-[35px] text-center">
        <div className="error-image">
          <img
            src={Error}
            alt="Error"
            className="w-[100px] mx-auto"
          />
        </div>
        <div className="error-message-container text-center mt-[25px] max-w-[600px] mx-auto text-[#402751]">
          {children || <p>{errorParser(errorRouter.status)}</p>}
        </div>
      </div>
    </AppHolder>
  );
}

export default ErrorHolder;
