import React, { useContext, useState } from "react";
import { FirebaseContext } from "../context/firebase";
import { SelectProfileContainer } from "./profiles";

export const BrowseContainer = ({ slides }) => {
  const [profile, setProfile] = useState({});
  const { firebase } = useContext(FirebaseContext);
  const user = firebase.auth().currentUser || {};
  console.log(user);

  return <SelectProfileContainer user={user} setProfile={setProfile} />;
};
