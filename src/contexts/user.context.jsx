import { createContext, useState, useEffect } from "react";
import { onAuthStateChangedListner } from "../utils/firebase.utils";

import { createUserDocumentFromAuth } from "../utils/firebase.utils";
export const UserContext = createContext({
	currentUser: null,
	setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState(null);
	const value = { currentUser, setCurrentUser };

	useEffect(() => {
		const unsubcribe = onAuthStateChangedListner((user) => {
			if(user){
			createUserDocumentFromAuth(user);
			}
			setCurrentUser(user);
			console.log("contex");
		});
		console.log("contex2");
		return unsubcribe;
	}, []);
	

	return <UserContext.Provider value={value}> {children}</UserContext.Provider>;
};
