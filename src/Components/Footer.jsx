const Footer = () => {
  return <footer className='text-center bg-black text-white text-black lg:h-[10vh] border-t p-4'>
    <div className="container grid grid-cols-1 gap-2 justify-items-center md:grid-cols-3  md:justify-items-stretch px-4 ">
      <p className="order-last md:col-start-2 md:row-start-1 md:row-end-2 md:col-end-3 md:justify-self-center text-3xl">Weather.<span className="text-[#E74C3C]">app</span></p>
      <div className="order-first md:col-start-3 md:col-end-4 md:justify-self-end flex items-stretch justify-between gap-2">
        <a href="https://www.weatherapi.com/" target="_blank" className="bg-[#FFBF00] rounded px-1 py-1.5 md:px-1.5 md:py-2">API website</a>
        <a href="#" className="bg-white text-black rounded px-1 py-1.5 md:px-1.5  md:py-2">Source code</a>
        <a href="https://github.com/djbravo12" target="_blank" className="bg-[#58D68D] rounded px-1 py-1.5 md:px-1.5 md:py-2">created by</a>
      </div>
    </div>
  </footer>
}

export default Footer