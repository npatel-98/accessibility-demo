const Dropdown = ({ submenus,dropdown }) => {
    return (
      <ul className={`${dropdown ? "block" : " hidden"}`}>
        {submenus.map((submenu, index) => (
          <li key={index} className="">
            <a href={submenu.url}>{submenu.title}</a>
          </li>
        ))}
      </ul>
    );
  };
  
  export default Dropdown;