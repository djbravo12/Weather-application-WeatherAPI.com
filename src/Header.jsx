import Search from './Components/Search'

const Header = () => {

  return <header className="bg-black flex justify-between items-center px-4 py-2.5 border-b border-red-600 font-RobotoMono lg:h-[10vh]">
    <h1 className="text-xl font-medium">Weather.app</h1>
    <Search />
  </header>
}

export default Header