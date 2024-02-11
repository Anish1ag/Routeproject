import "./login.css";
import { AiFillFacebook } from "react-icons/ai";

function Login() {
  return (
    <div className="logintop">
      <div className="instagram">
        <div className="insta">
          <img src="phone.png" alt="" height={"540px"} width={"416px"} />
        </div>
        <div className="second">
          <img src="second.jpg" alt="" height={"372px"} width={"110px"} />
        </div>
        <div className="cover">
          <img src="cover.png" alt="" height={"474px"} width={"525px"} />
        </div>
      </div>
      <div className="wrap-login">
        <div className="loginpage">
          <br />
          <h2
            style={{
              fontFamily: "cursive",
              fontSize: "2em",
              textAlign: "center",
            }}
          >
            AG
          </h2>

          <br />
          <input type="text" placeholder="Phone number,username, or email" />
          <input type="password" placeholder="Password" />
          <br />
          <button>Log in</button>
          <div className="or" style={{ marginTop: "7px" }}>
            ─────────&nbsp; OR &nbsp;─────────
          </div>
          <div className="facebook">
            <AiFillFacebook />
            &nbsp; Log in with Facebook
          </div>
          <div className="fpass">Forgot password?</div>
        </div>
        <div className="signup">
          Don't have an account?<p>Sign up</p>
        </div>
      </div>
    </div>
  );
}

export default Login;
