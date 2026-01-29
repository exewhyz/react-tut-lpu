import { Link } from "react-router";
import { SignedOut, SignedIn, SignInButton,UserButton } from "@clerk/clerk-react"

const Navbar = (props) => {
  return (
    <div>
      {props.brandName}
      <ul>
        {props?.links?.map((link) => (
          <li key={link?.id}>
            <Link to={link?.url}>{link?.title}</Link>
          </li>
        ))}
      </ul>
      <div>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
};

export default Navbar;
