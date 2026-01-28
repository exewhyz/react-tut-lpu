const Navbar = (props) => {
  return (
    <div>
      {props.brandName}
      <ul>
        {props?.links?.map((link) => (
          <li key={link?.id}>
            <a href={link?.url}>{link?.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
