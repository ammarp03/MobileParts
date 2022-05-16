import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import "./authentications.styles.scss";
const Authentications = () => {
	return (
		<div className="authentications-container">
			<SignInForm />
			<SignUpForm />
		</div>
	);
};

export default Authentications;
