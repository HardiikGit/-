function NavBar() {
 return (
  <div className="NavigationBar hidden lg:flex">
   <div className="container mx-auto px-3">
    <div className="NavBar flex justify-between items-center py-5">
     <div className="logo text-base">Hardik .</div>
     <div className="Nav-Items">
      <ul className="flex items-center justify-end gap-10">
       <li>
        <a href="#about" className="text-sm font-medium">About</a>
       </li>
       <li>
        <a href="#" className="text-sm font-medium">Projects</a>
       </li>
       <li>
        <a href="#" className="text-sm font-medium">Blog</a>
       </li>
       <li>
        <a href="#" className="text-sm font-medium">Contact</a>
       </li>
       <li><button></button></li>
      </ul>
     </div>
    </div>
   </div>
  </div>

 )
}

export default NavBar;