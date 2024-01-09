// import React, { useState, useEffect } from 'react';

// function Nav() {

//   const [show, handleshow] = useState(false)

//   useEffect(() => {
//     window.addEventListener("scroll", () => {
//       if (window.scrollY > 100) {
//         handleshow(true)
//       } else handleshow(false);
//     });
//     return () => {
//       window.removeEventListener("scroll")
//     }
//   }, []);


//   return (
//     <div className='nav'>
//          <img
//         className="nav__logo"
//         src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/250px-Netflix_2015_logo.svg.png"
//         alt="Netflix Logo"
//       />

//         <img
//         className="nav__avatar"
//         src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png"
//         alt="Netflix Logo"
//       />
//     </div>

//   )
// }

// export default Nav

import React, { useState, useEffect } from 'react';
import search_icon from '../src/search.png';

function Nav() {
  
  
    // const [show, handleshow] = useState(false)
  
    // useEffect(() => {
    //   window.addEventListener("scroll", () => {
    //     if (window.scrollY > 100) {
    //       handleshow(true)
    //     } else handleshow(false);
    //   });
    //   return () => {
    //     window.removeEventListener("scroll")
    //   }
    // }, []);
    
  const [show, handleshow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        handleshow(true);
      } else {
        handleshow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // return (
  //   <div className='{`nav ${show && "nav__black"}`}'>
  //     <img
  //       className="nav__logo"
  //       src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/250px-Netflix_2015_logo.svg.png"
  //       alt="Netflix Logo"
  //     />

  //     <img
  //       className="nav__avatar"
  //       src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png"
  //       alt="Netflix Logo"
  //     />
  //   </div>
  // );

  return (
    <div className={`nav ${show && "nav__black"}`}>

      <img
        className="nav__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/250px-Netflix_2015_logo.svg.png"
        alt="Netflix Logo"
      />

      <img
        className="nav__avatar"
        src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png"
        alt="Avatar"
      />

      <div className='navbar'>
          <h4 style={{ color: 'white', padding: '10px' }}>
              Home&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TV Shows&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Movies&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;New & Popular&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;My List&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Browse by Languages
          </h4>
      </div>

      {/* <div className="navbar2" >
                <button className="navbar2">Home</button>
                <button className="navbar2">TV Shows</button>
                <button className="navbar2">Movies</button>
                <button className="navbar2">New & Popular</button>
                <button className="navbar2">My List</button>
                <button className="navbar2">Browse by Languages</button>
      </div> */}

        <img className='search' src={search_icon} alt='search icon' />

    </div>
    
  );
  
}

export default Nav;

