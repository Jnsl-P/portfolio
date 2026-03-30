import "../styles/NavBar.css";

export default function NavigationBar() {
  return (
    <>
      <div className="nav-main-container" style={{ width: 80 }}>
        <nav className="navbar  navbar-expand-md  nav-med"  data-bs-theme="dark">
          <div className="nav-bar-container justify-content-center d-flex">
            <div className=" d-flex flex-row flex-md-row-reverse justify-content-between px-3 py-md-3 overflow-y-auto gap nav-bar-content">
              {/* NAME  */}
              <a className="navbar-brand my-auto mx-md-auto d-flex" href="/">
                Jansel Pinguel
              </a>
              {/* BURGER */}
              <button
                className="navbar-toggler border-0 rounded-0 shadow-none"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#nav-canvas"
                aria-controls="offcanvasDarkNavbar"
                aria-label="Toggle navigation">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  className="bi bi-list"
                  viewBox="0 0 16 16">
                  <path
                    fillRule="evenodd"
                    d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
                  />
                </svg>
              </button>
              {/* CANVAS */}

              <div
                className=" offcanvas offcanvas-end bg-black mt-3 canvas "
                tabIndex="-1"
                id="nav-canvas"
                aria-labelledby="offcanvasDarkNavbarLabel">
                <div className="offcanvas-header mt-3 me-3">
                  <button
                    type="button"
                    className="btn-close btn-close-white shadow-none z-3"
                    data-bs-dismiss="offcanvas"
                    // data-bs-target="#offcanvasDarkNavbar"
                    aria-label="Close"></button>
                </div>
                <div className="offcanvas-body ">
                  <ul id="navbar-nav" className="navbar-nav justify-content-center align-items-center justify-content-md-end align-items-md-start flex-grow-1 flex-md-row-reverse p-md-0 m-md-0 gap-4 gap-md-2">
                    <li
                      className="nav-item"
                      data-bs-dismiss="offcanvas"
                      aria-label="Close">
                      <a
                        className={`nav-link`}
                        aria-current="page"
                        href="#about">
                        ABOUT
                      </a>
                    </li>
                    <li
                      className="nav-item"
                      data-bs-dismiss="offcanvas"
                      aria-label="Close">
                      <a className={`nav-link`} href="#skills">
                        SKILLS
                      </a>
                    </li>
                    <li
                      className="nav-item"
                      data-bs-dismiss="offcanvas"
                      aria-label="Close">
                      <a className={`nav-link`} href="#projects">
                        PROJECTS
                      </a>
                    </li>
                    <li
                      className="nav-item"
                      data-bs-dismiss="offcanvas"
                      aria-label="Close">
                      <a className={`nav-link`} href="#contacts">
                        CONTACT
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
