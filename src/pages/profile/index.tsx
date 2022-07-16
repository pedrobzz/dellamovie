import React, { useEffect } from "react";
import { useContext } from "react";
import router from "next/router";
import AuthContext from "../../common/context/authContext";
import Link from "next/link";

const Profile: React.FC = (): JSX.Element => {
  const { user, logout } = useContext(AuthContext);
  useEffect(() => {
    if (!user) {
      router?.push("/login");
    }
  }, [user]);
  if (!user) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h1> Hello, Low Profile!</h1>
      <h2>Name: {user.displayName}</h2>
      <Link href="/login">
        <a
          onClick={() => {
            logout();
          }}
        >
          Logout
        </a>
      </Link>
    </div>
  );
};

export default Profile;
