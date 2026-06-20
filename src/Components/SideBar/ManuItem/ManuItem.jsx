import { NavLink } from 'react-router'

const MenuItem = ({ label, address }) => {
  return (
    <NavLink
      to={address}
      end
      className={({ isActive }) =>
        `flex items-center px-4 py-2.5 my-1 transition-all duration-200 transform rounded-xl text-[14px] font-medium border-b border-gray-50 last:border-0 hover:bg-teal-50 hover:text-teal-700 ${
          isActive 
            ? 'bg-teal-50 text-teal-700 border-teal-100 font-semibold' 
            : 'text-teal-600'
        }`
      }
    >
      <span>{label}</span>
    </NavLink>
  )
}

export default MenuItem;
