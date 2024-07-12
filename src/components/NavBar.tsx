import { FC } from 'react'

import { navLists } from '../constants'
import { appleImg, bagImg, searchImg } from '../utils'

interface NavBarProps {}

const NavBar: FC<NavBarProps> = () => {
  return (
    <header className="flex w-full items-center justify-between gap-5 p-5 sm:px-10">
      <nav className="screen-max-width flex w-full justify-between gap-5">
        <img className="cursor-pointer" src={appleImg} alt="Apple" width={14} height={18} />

        <div className="flex flex-1 items-center justify-center max-sm:hidden">
          {navLists.map((nav) => (
            <span className="cursor-pointer px-5 text-sm text-gray transition-all hover:text-white" key={nav}>
              {nav}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-7 max-sm:flex-1 max-sm:justify-end">
          <img className="cursor-pointer" src={searchImg} alt="search" width={18} height={18} />
          <img className="cursor-pointer" src={bagImg} alt="nag" width={18} height={18} />
        </div>
      </nav>
    </header>
  )
}

export default NavBar
