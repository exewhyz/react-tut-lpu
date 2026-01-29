import { Link } from "react-router";

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
    </div>
  );
};

export default Navbar;
