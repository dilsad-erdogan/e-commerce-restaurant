import { MdDomain, MdTableBar, MdFastfood } from "react-icons/md";
import { BiCategoryAlt } from "react-icons/bi";
import { GrDocumentUser } from "react-icons/gr";
import { FaUser } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const menuItems = [
    {
        title: "Main",
        list: [
            {
                title: "Dashboard",
                path: "/admin",
                icon: <MdDomain />
            }
        ]
    },
    {
        title: "Lists",
        list: [
            {
                title: "Categorie",
                path: "/categorie",
                icon: <BiCategoryAlt />
            },
            {
                title: "Product",
                path: "/product",
                icon: <MdFastfood  />
            },
            {
                title: "Role",
                path: "/role",
                icon: <GrDocumentUser />
            },
            {
                title: "User",
                path: "/user",
                icon: <FaUser />
            },
            {
                title: "Table",
                path: "/table",
                icon: <MdTableBar  />
            }
        ]
    },
    {
        title: "Management",
        list: [
            {
                title: "Table",
                path: "/table-management",
                icon: <MdTableBar  />
            }
        ]
    }
]

const Sidebar = () => {
    const navigate = useNavigate();
    const pathname = window.location.pathname;
    
    const handleClick = (data) => {
        navigate(data);
    };

  return (
    <div className="border-r border-white min-h-screen text-white p-5">
        <div className="pl-3">
            <ul>
                {menuItems.map((item) => (
                    <li key={item.title} className="items-center p-1 cursor-pointer">
                        <p className="text-sm font-bold my-4">{item.title}</p>
                        {item.list.map((data) => (
                            <div key={data.title} onClick={() => handleClick(data.path)} className={`${'text-lg p-3 flex items-center gap-2 m-1 rounded-xl'} ${pathname === data.path && 'font-bold text-xl'}`}>
                                {data.icon}
                                {data.title}
                            </div>
                        ))}
                    </li>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default Sidebar