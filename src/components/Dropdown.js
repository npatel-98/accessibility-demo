import className from 'classnames';

const Dropdown = ({ submenus,dropdown ,vv}) => {

    return (
      <ul 
        className={ className ( 'dropdown-menu absolute top-1/10 bg-white pt-1', {
          'hidden': !dropdown,
          'block rounded-lg p-2 shadow-xl shadow-stone-700 border-2 border-white-600 divide-y divide-slate-200': dropdown,
        })}
        ref={vv}
      >
        {submenus.map((submenu, index) => (
          <li key={index} className="rounded-t py-2 px-4 block whitespace-no-wrap hover:bg-gray-100 focus:bg-gray-100 hover:text-indigo-500 focus:text-indigo-500">
            <a href={submenu.url} className="hover:bg-gray-100 hover:text-indigo-500 focus:text-indigo-500 focus:bg-gray-100">{submenu.title}</a>
          </li>
        ))}
      </ul>
    );
  };
  
  export default Dropdown;