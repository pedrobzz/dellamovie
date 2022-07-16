/* eslint-disable @typescript-eslint/no-unused-vars */
import { getAuth, signInWithPopup, GithubAuthProvider } from "firebase/auth";
import { useContext } from "react";
import { useRouter } from "next/router";
import AuthContext from "../../common/context/authContext";

const provider = new GithubAuthProvider();

const Login = (): JSX.Element => {
  const { user } = useContext(AuthContext);
  const router = useRouter();
  const auth = getAuth();

  const handleLogin = () => {
    signInWithPopup(auth, provider)
      .then(result => {
        // This gives you a GitHub Access Token. You can use it to access the GitHub API.
        const credential = GithubAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
      })
      .catch(error => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GithubAuthProvider.credentialFromError(error);
        // ...
      });
  };
  if (user) {
    router.push("/profile");
  }
  return (
    <div className="wrapper">
      <section className="auth-sidebar">
        <img src="bg-01-top.png" className="img-bg img-01" />
        <img src="bg-01-bottom.png" className="img-bg img-02" />
        <div className="auth-sidebar-content">
          <header>
            <a href="#/" className="brand-logo" title="company">
              <span className="logo"></span>
              Brand
            </a>
          </header>
          <div>
            <h1 className="text-hide">
              Enter your account and discover new experiences
            </h1>
            <h4>You do not have an account?</h4>
            <button type="button" className="btn btn-dark">
              Create acoount here
            </button>
          </div>
          <p style={{ fontWeight: "700" }}>© 2022 Company</p>
        </div>
      </section>
      <section className="content">
        <header>
          <a href="#/" className="brand-logo" title="company">
            <span className="logo"></span>
            Brand
          </a>
          <p>
            Not a member? <a href="#/">Sign up now</a>
          </p>
        </header>
        <main>
          <div className="auth-content">
            <h2>Sign in to account</h2>
            <h4>Sign up or log in to place the order,no password require!</h4>
            <form method="post" className="form-vertical">
              <div className="form-group">
                <input
                  className="form-control"
                  type="text"
                  name="email"
                  placeholder="example@email.com"
                />
              </div>
              <button type="button" className="btn btn-dark">
                Confirm with email
              </button>
              <div className="separator">
                <span></span>
                <span className="text">Or</span>
                <span></span>
              </div>
              <button
                onClick={handleLogin}
                type="button"
                className="btn btn-google"
              >
                <span className="google-logo">
                  <svg
                    width="24px"
                    height="24px"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="#EA4335 "
                      d="M5.26620003,9.76452941 C6.19878754,6.93863203 8.85444915,4.90909091 12,4.90909091 C13.6909091,4.90909091 15.2181818,5.50909091 16.4181818,6.49090909 L19.9090909,3 C17.7818182,1.14545455 15.0545455,0 12,0 C7.27006974,0 3.1977497,2.69829785 1.23999023,6.65002441 L5.26620003,9.76452941 Z"
                    />
                    <path
                      fill="#34A853"
                      d="M16.0407269,18.0125889 C14.9509167,18.7163016 13.5660892,19.0909091 12,19.0909091 C8.86648613,19.0909091 6.21911939,17.076871 5.27698177,14.2678769 L1.23746264,17.3349879 C3.19279051,21.2936293 7.26500293,24 12,24 C14.9328362,24 17.7353462,22.9573905 19.834192,20.9995801 L16.0407269,18.0125889 Z"
                    />
                    <path
                      fill="#4A90E2"
                      d="M19.834192,20.9995801 C22.0291676,18.9520994 23.4545455,15.903663 23.4545455,12 C23.4545455,11.2909091 23.3454545,10.5272727 23.1818182,9.81818182 L12,9.81818182 L12,14.4545455 L18.4363636,14.4545455 C18.1187732,16.013626 17.2662994,17.2212117 16.0407269,18.0125889 L19.834192,20.9995801 Z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.27698177,14.2678769 C5.03832634,13.556323 4.90909091,12.7937589 4.90909091,12 C4.90909091,11.2182781 5.03443647,10.4668121 5.26620003,9.76452941 L1.23999023,6.65002441 C0.43658717,8.26043162 0,10.0753848 0,12 C0,13.9195484 0.444780743,15.7301709 1.23746264,17.3349879 L5.27698177,14.2678769 Z"
                    />
                  </svg>
                </span>
                <span>Sign in with GitHub</span>
              </button>
            </form>
          </div>
        </main>
      </section>
      <script src="script.js"></script>
    </div>
  );
};

export default Login;
