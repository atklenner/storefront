import { FaCheck, FaLock } from "react-icons/fa";

export default function Signup() {
  return (
    <div className="container">
      <div className="columns is-mobile">
        <div className="card column is-one-fifth is-offset-two-fifths">
          <div className="field">
            <p className="control has-icons-left has-icons-right">
              <input className="input" type="email" placeholder="Email" />
              <span className="icon is-small is-left">
                <i className="fas fa-envelope"></i>
              </span>
              <span className="icon is-small is-right">
                <FaCheck />
              </span>
            </p>
          </div>
          <div className="field">
            <p className="control has-icons-left">
              <input className="input" type="password" placeholder="Password" />
              <span className="icon is-small is-left">
                <FaLock />
              </span>
            </p>
          </div>
          <div className="field">
            <p className="control">
              <button className="button is-primary is-fullwidth">
                Sign Up
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
