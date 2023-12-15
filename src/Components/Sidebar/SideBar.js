import React from 'react'
import Logo from '../Images/LOGO.png'
import './SideBar.css'
// import Category from '../Images/Category.png'
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
// import orders from '../Images/Bag.png'
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
// import customers from '../Images/2 User.png'
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
// import folder from '../Images/Folder.png'
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
// import trans from '../Images/Transection.png'
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
// import setting from '../Images/Setting.png'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import logout from '../Images/Logout.png'

function SideBar() {
    return (
        
            <div className='container-fluid '>
                <div className='row'>
                    <div className=' col-auto col-md-2 min-vh-100 d-flex justify-contect-between flex-column SideBar-main'>
                        <div>
                            <a className='text-decoration-none text-white  d-flex align-itemcenter ms-3 mt-2'>
                                <span className='ms-1 fs-4'><img src={Logo} alt='#' className='Logo'/></span>
                            </a>
                            
                            <ul className='nav nav-pills flex-column mt-sm-0'>
                                <li className='nav-item  fs-4 my-1 py-2 py-sm-0'>
                                    <a href='#' className='nav-link  fs-5' aria-current="page">
                                        {/* <img src={Category} alt='#'/> */}
                                        <GridViewRoundedIcon/>
                                        <span className='ms-3 d-none d-sm-inline'>Dashboard</span>
                                    </a>
                                </li>
                                <li className='nav-item  fs-4 my-1 py-2 py-sm-0'>
                                    <a href='#' className='nav-link  fs-5' aria-current="page">
                                        {/* <img src={orders} alt='#'/> */}
                                        <ShoppingBagOutlinedIcon/>
                                        <span className='ms-3 d-none d-sm-inline'>Orders</span>
                                    </a>
                                </li>
                                <li className='nav-item fs-4 my-1 py-2 py-sm-0'>
                                    <a href='#' className='nav-link  fs-5' aria-current="page">
                                        {/* <img src={customers} alt='#'/> */}
                                        <PeopleAltOutlinedIcon/>
                                        <span className='ms-3 d-none d-sm-inline'>Customers</span>
                                    </a>
                                </li>
                                <li className='nav-item fs-4 my-1 py-2 py-sm-0'>
                                    <a href='#' className='nav-link  fs-5' aria-current="page">
                                        {/* <img src={folder} alt='#'/> */}
                                        <FolderOutlinedIcon/>
                                        <span className='ms-3 d-none d-sm-inline'>Category</span>
                                    </a>
                                </li>
                                <li className='nav-item fs-4 my-1 py-2 py-sm-0'>
                                    <a href='#' className='nav-link  fs-5' aria-current="page">
                                        {/* <img src={trans} alt='#'/> */}
                                        <ArticleOutlinedIcon/>
                                        <span className='ms-3 d-none d-sm-inline'>Transactions</span>
                                    </a>
                                </li>
                                <li className='nav-item fs-4 my-1 py-2 py-sm-0'>
                                    <a href='#' className='nav-link  fs-5' aria-current="page">
                                        {/* <img src={setting} alt='#'/> */}
                                        <SettingsOutlinedIcon/>
                                        <span className='ms-3 d-none d-sm-inline'>Setting</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className='logout'>
                        <img src={logout}/>
                        <p>Logout</p>
                        </div>
                    </div>
                </div>

            </div>
      

    )
}

export default SideBar