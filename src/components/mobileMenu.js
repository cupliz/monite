const MobileMenu = () => {
  return (
    <div id="mobile-menu">
      <ul>
        <li>
          <div className="mm-search">
            <form id="search1" name="search">
              <div className="input-group">
                <div className="input-group-btn">
                  <button className="btn btn-default" type="submit"><i className="fa fa-search"></i> </button>
                </div>
                <input type="text" className="form-control simple" placeholder="Search ..." name="srch-term" id="srch-term" />
              </div>
            </form>
          </div>
        </li>
        <li> <a href="#index-2">Home</a>
          <ul>
            <li><a href="#index-2">Home Version 1</a></li>
            <li><a href="#index">Home Version 2</a></li>
          </ul>
        </li>
        <li> <a href="##">Pages</a>
          <ul>
            <li><a href="#grid">Grid</a> </li>
            <li> <a href="#list">List</a> </li>
            <li> <a href="#product_detail">Product Detail</a> </li>
            <li> <a href="#shopping_cart">Shopping Cart</a> </li>
            <li><a href="#checkout">Checkout</a> </li>
            <li> <a href="#wishlist">Wishlist</a> </li>
            <li> <a href="#dashboard">Dashboard</a> </li>
            <li> <a href="#multiple_addresses">Multiple Addresses</a> </li>
            <li> <a href="#about_us">About us</a> </li>
            <li> <a href="#blog">Blog</a>
              <ul>
                <li><a href="#blog-detail">Blog Detail</a> </li>
              </ul>
            </li>
            <li><a href="#contact_us">Contact us</a> </li>
            <li><a href="#404error">404 Error Page</a> </li>
          </ul>
        </li>
        <li> <a href="##">Women</a>
          <ul>
            <li> <a href="##" className="">Stylish Bag</a>
              <ul>
                <li> <a href="#grid" className="">Clutch Handbags</a> </li>
                <li> <a href="#grid" className="">Diaper Bags</a> </li>
                <li> <a href="#grid" className="">Bags</a> </li>
                <li> <a href="#grid" className="">Hobo handbags</a> </li>
              </ul>
            </li>
            <li> <a href="#grid">Material Bag</a>
              <ul>
                <li> <a href="#grid">Beaded Handbags</a> </li>
                <li> <a href="#grid">Fabric Handbags</a> </li>
                <li> <a href="#grid">Handbags</a> </li>
                <li> <a href="#grid">Leather Handbags</a> </li>
              </ul>
            </li>
            <li> <a href="#grid">Shoes</a>
              <ul>
                <li> <a href="#grid">Flat Shoes</a> </li>
                <li> <a href="#grid">Flat Sandals</a> </li>
                <li> <a href="#grid">Boots</a> </li>
                <li> <a href="#grid">Heels</a> </li>
              </ul>
            </li>
            <li> <a href="#grid">Jwellery</a>
              <ul>
                <li> <a href="#grid">Bracelets</a> </li>
                <li> <a href="#grid">Necklaces &amp; Pendent</a> </li>
                <li> <a href="#grid">Pendants</a> </li>
                <li> <a href="#grid">Pins &amp; Brooches</a> </li>
              </ul>
            </li>
            <li> <a href="#grid">Dresses</a>
              <ul>
                <li> <a href="#grid">Casual Dresses</a> </li>
                <li> <a href="#grid">Evening</a> </li>
                <li> <a href="#grid">Designer</a> </li>
                <li> <a href="#grid">Party</a> </li>
              </ul>
            </li>
            <li> <a href="#grid">Swimwear</a>
              <ul>
                <li> <a href="#grid">Swimsuits</a> </li>
                <li> <a href="#grid">Beach Clothing</a> </li>
                <li> <a href="#grid">Clothing</a> </li>
                <li> <a href="#grid">Bikinis</a> </li>
              </ul>
            </li>
          </ul>
        </li>
        <li> <a href="#grid">Men</a>
          <ul>
            <li> <a href="#grid" className="">Shoes</a>
              <ul className="level1">
                <li className="level2 nav-6-1-1"><a href="#grid">Sport Shoes</a> </li>
                <li className="level2 nav-6-1-1"><a href="#grid">Casual Shoes</a> </li>
                <li className="level2 nav-6-1-1"><a href="#grid">Leather Shoes</a> </li>
                <li className="level2 nav-6-1-1"><a href="#grid">canvas shoes</a> </li>
              </ul>
            </li>
            <li> <a href="#grid">Dresses</a>
              <ul className="level1">
                <li className="level2 nav-6-1-1"><a href="#grid">Casual Dresses</a> </li>
                <li className="level2 nav-6-1-1"><a href="#grid">Evening</a> </li>
                <li className="level2 nav-6-1-1"><a href="#grid">Designer</a> </li>
                <li className="level2 nav-6-1-1"><a href="#grid">Party</a> </li>
              </ul>
            </li>
            <li> <a href="#grid">Jackets</a>
              <ul className="level1">
                <li className="level2 nav-6-1-1"><a href="#grid">Coats</a> </li>
                <li className="level2 nav-6-1-1"><a href="#grid">Formal Jackets</a> </li>
                <li className="level2 nav-6-1-1"><a href="#grid">Leather Jackets</a> </li>
                <li className="level2 nav-6-1-1"><a href="#grid">Blazers</a> </li>
              </ul>
            </li>
            <li> <a href="##">Watches</a>
              <ul className="level1">
                <li className="level2 nav-6-1-1"><a href="#grid">Fasttrack</a> </li>
                <li className="level2 nav-6-1-1"><a href="#grid">Casio</a> </li>
                <li className="level2 nav-6-1-1"><a href="#grid">Titan</a> </li>
                <li className="level2 nav-6-1-1"><a href="#grid">Tommy-Hilfiger</a> </li>
              </ul>
            </li>
            <li> <a href="#grid">Sunglasses</a>
              <ul className="level1">
                <li className="level2 nav-6-1-1"><a href="#grid">Ray Ban</a> </li>
                <li className="level2 nav-6-1-1"><a href="#grid">Fasttrack</a> </li>
                <li className="level2 nav-6-1-1"><a href="#grid">Police</a> </li>
                <li className="level2 nav-6-1-1"><a href="#grid">Oakley</a> </li>
              </ul>
            </li>
            <li> <a href="#grid">Accesories</a>
              <ul className="level1">
                <li className="level2 nav-6-1-1"><a href="#grid">Backpacks</a> </li>
                <li className="level2 nav-6-1-1"><a href="#grid">Wallets</a> </li>
                <li className="level2 nav-6-1-1"><a href="#grid">Laptops Bags</a> </li>
                <li className="level2 nav-6-1-1"><a href="#grid">Belts</a> </li>
              </ul>
            </li>
          </ul>
        </li>
        <li> <a href="#grid">Electronics</a>
          <ul>
            <li> <a href="#grid"><span>Mobiles</span></a>
              <ul>
                <li> <a href="#grid"><span>Samsung</span></a> </li>
                <li> <a href="#grid"><span>Nokia</span></a> </li>
                <li> <a href="#grid"><span>IPhone</span></a> </li>
                <li> <a href="#grid"><span>Sony</span></a> </li>
              </ul>
            </li>
            <li> <a href="#grid" className=""><span>Accesories</span></a>
              <ul>
                <li> <a href="#grid"><span>Mobile Memory Cards</span></a> </li>
                <li> <a href="#grid"><span>Cases &amp; Covers</span></a> </li>
                <li> <a href="#grid"><span>Mobile Headphones</span></a> </li>
                <li> <a href="#grid"><span>Bluetooth Headsets</span></a> </li>
              </ul>
            </li>
            <li> <a href="#grid"><span>Cameras</span></a>
              <ul>
                <li> <a href="#grid"><span>Camcorders</span></a> </li>
                <li> <a href="#grid"><span>Point &amp; Shoot</span></a> </li>
                <li> <a href="#grid"><span>Digital SLR</span></a> </li>
                <li> <a href="#grid"><span>Camera Accesories</span></a> </li>
              </ul>
            </li>
            <li> <a href="#grid"><span>Audio &amp; Video</span></a>
              <ul>
                <li> <a href="#grid"><span>MP3 Players</span></a> </li>
                <li> <a href="#grid"><span>IPods</span></a> </li>
                <li> <a href="#grid"><span>Speakers</span></a> </li>
                <li> <a href="#grid"><span>Video Players</span></a> </li>
              </ul>
            </li>
            <li> <a href="#grid"><span>Computer</span></a>
              <ul>
                <li> <a href="#grid"><span>External Hard Disk</span></a> </li>
                <li> <a href="#grid"><span>Pendrives</span></a> </li>
                <li> <a href="#grid"><span>Headphones</span></a> </li>
                <li> <a href="#grid"><span>PC Components</span></a> </li>
              </ul>
            </li>
            <li> <a href="#grid"><span>Appliances</span></a>
              <ul>
                <li> <a href="#grid"><span>Vaccum Cleaners</span></a> </li>
                <li> <a href="#grid"><span>Indoor Lighting</span></a> </li>
                <li> <a href="#grid"><span>Kitchen Tools</span></a> </li>
                <li> <a href="#grid"><span>Water Purifier</span></a> </li>
              </ul>
            </li>
          </ul>
        </li>
        <li> <a href="#grid">Furniture</a>
          <ul>
            <li> <a href="#grid">Living Room</a>
              <ul>
                <li> <a href="#grid">Racks &amp; Cabinets</a> </li>
                <li> <a href="#grid">Sofas</a> </li>
                <li> <a href="#grid">Chairs</a> </li>
                <li> <a href="#grid">Tables</a> </li>
              </ul>
            </li>
            <li> <a href="#grid" className="">Dining &amp; Bar</a>
              <ul>
                <li> <a href="#grid">Dining Table Sets</a> </li>
                <li> <a href="#grid">Serving Trolleys</a> </li>
                <li> <a href="#grid">Bar Counters</a> </li>
                <li> <a href="#grid">Dining Cabinets</a> </li>
              </ul>
            </li>
            <li> <a href="#grid">Bedroom</a>
              <ul>
                <li> <a href="#grid">Beds</a> </li>
                <li> <a href="#grid">Chest of Drawers</a> </li>
                <li> <a href="#grid">Wardrobes &amp; Almirahs</a> </li>
                <li> <a href="#grid">Nightstands</a> </li>
              </ul>
            </li>
            <li> <a href="#grid">Kitchen</a>
              <ul>
                <li> <a href="#grid">Kitchen Racks</a> </li>
                <li> <a href="#grid">Kitchen Fillings</a> </li>
                <li> <a href="#grid">Wall Units</a> </li>
                <li> <a href="#grid">Benches &amp; Stools</a> </li>
              </ul>
            </li>
          </ul>



        </li>
        <li><a href="#grid">Kids</a> </li>
        <li><a href="#contact-us">Contact Us</a> </li>
      </ul>
      <div className="top-links">
        <ul className="links">
          <li><a title="My Account" href="#login">My Account</a> </li>
          <li><a title="Wishlist" href="#wishlist">Wishlist</a> </li>
          <li><a title="Checkout" href="#checkout">Checkout</a> </li>
          <li><a title="Blog" href="#blog"><span>Blog</span></a> </li>
          <li className="last"><a title="Login" href="#login"><span>Login</span></a> </li>
        </ul>
      </div>
    </div>
  )
}

export default MobileMenu