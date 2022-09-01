import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div class="navbar px-6">
      <div class="flex-1">
        <Link to="/" class=" text-2xl btn btn-ghost normal-case ">
          Unique Creation Event Management
        </Link>
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal p-0">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-amber-400 rounded-sm  bg-transparent"
                  : "rounded-sm  bg-transparent hover:text-amber-400"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-amber-400 rounded-sm  bg-transparent"
                  : "rounded-sm  bg-transparent hover:text-amber-400"
              }
            >
              About Us
            </NavLink>
          </li>
          <li tabindex="0">
            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive
                  ? "text-amber-400 rounded-sm  bg-transparent"
                  : "rounded-sm  bg-transparent hover:text-amber-400"
              }
            >
              Services
              <svg
                class="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </NavLink>
            <ul class="p-2 bg-base-100">
              <li>
                <NavLink
                  to="/services/decoration"
                  className={({ isActive }) =>
                    isActive
                      ? "text-amber-400 rounded-sm  bg-transparent"
                      : "rounded-sm  bg-transparent hover:text-amber-400"
                  }
                >
                  Decoration
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/services/catering"
                  className={({ isActive }) =>
                    isActive
                      ? "text-amber-400 rounded-sm  bg-transparent"
                      : "rounded-sm  bg-transparent hover:text-amber-400"
                  }
                >
                  Catering
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/services/photography"
                  className={({ isActive }) =>
                    isActive
                      ? "text-amber-400 rounded-sm  bg-transparent"
                      : "rounded-sm  bg-transparent hover:text-amber-400"
                  }
                >
                  Photography
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/services/lighting"
                  className={({ isActive }) =>
                    isActive
                      ? "text-amber-400 rounded-sm  bg-transparent"
                      : "rounded-sm  bg-transparent hover:text-amber-400"
                  }
                >
                  Lighting
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/services/led-system"
                  className={({ isActive }) =>
                    isActive
                      ? "text-amber-400 rounded-sm  bg-transparent"
                      : "rounded-sm  bg-transparent hover:text-amber-400"
                  }
                >
                  LED System
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/services/sound-dj"
                  className={({ isActive }) =>
                    isActive
                      ? "text-amber-400 rounded-sm  bg-transparent"
                      : "rounded-sm  bg-transparent hover:text-amber-400"
                  }
                >
                  Sound & DJ
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/services/appetizer"
                  className={({ isActive }) =>
                    isActive
                      ? "text-amber-400 rounded-sm  bg-transparent"
                      : "rounded-sm  bg-transparent hover:text-amber-400"
                  }
                >
                  Appetizer
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/services/logistic-support"
                  className={({ isActive }) =>
                    isActive
                      ? "text-amber-400 rounded-sm  bg-transparent"
                      : "rounded-sm  bg-transparent hover:text-amber-400"
                  }
                >
                  Logistic Support
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/services/entertainment"
                  className={({ isActive }) =>
                    isActive
                      ? "text-amber-400 rounded-sm  bg-transparent"
                      : "rounded-sm  bg-transparent hover:text-amber-400"
                  }
                >
                  Entertainment
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/services/kids-play-zone"
                  className={({ isActive }) =>
                    isActive
                      ? "text-amber-400 rounded-sm  bg-transparent"
                      : "rounded-sm  bg-transparent hover:text-amber-400"
                  }
                >
                  Kids Play Zone
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/services/vence-arrangement"
                  className={({ isActive }) =>
                    isActive
                      ? "text-amber-400 rounded-sm  bg-transparent"
                      : "rounded-sm  bg-transparent hover:text-amber-400"
                  }
                >
                  Vence Arrangement
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/services/studio-rent"
                  className={({ isActive }) =>
                    isActive
                      ? "text-amber-400 rounded-sm  bg-transparent"
                      : "rounded-sm  bg-transparent hover:text-amber-400"
                  }
                >
                  Studio Rent
                </NavLink>
              </li>
            </ul>
          </li>
          <li tabindex="0">
            <NavLink
              to="/program-we-cover"
              className={({ isActive }) =>
                isActive
                  ? "text-amber-400 rounded-sm  bg-transparent"
                  : "rounded-sm  bg-transparent hover:text-amber-400"
              }
            >
              Program We Cover
              <svg
                class="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </NavLink>
            <ul class="p-2 bg-base-100">
              <li>
                <NavLink
                  to="/program-we-cover/hadli-night"
                  className={({ isActive }) =>
                    isActive
                      ? "text-amber-400 rounded-sm  bg-transparent"
                      : "rounded-sm  bg-transparent hover:text-amber-400"
                  }
                >
                  Haldi Night
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/program-we-cover/mehedi-night"
                  className={({ isActive }) =>
                    isActive
                      ? "text-amber-400 rounded-sm  bg-transparent"
                      : "rounded-sm  bg-transparent hover:text-amber-400"
                  }
                >
                  Mehedi Night
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/program-we-cover/wedding"
                  className={({ isActive }) =>
                    isActive
                      ? "text-amber-400 rounded-sm  bg-transparent"
                      : "rounded-sm  bg-transparent hover:text-amber-400"
                  }
                >
                  Wedding
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/program-we-cover/recaption"
                  className={({ isActive }) =>
                    isActive
                      ? "text-amber-400 rounded-sm  bg-transparent"
                      : "rounded-sm  bg-transparent hover:text-amber-400"
                  }
                >
                  Recaption
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/program-we-cover/anniversary"
                  className={({ isActive }) =>
                    isActive
                      ? "text-amber-400 rounded-sm  bg-transparent"
                      : "rounded-sm  bg-transparent hover:text-amber-400"
                  }
                >
                  Anniversary
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/program-we-cover/corporate"
                  className={({ isActive }) =>
                    isActive
                      ? "text-amber-400 rounded-sm  bg-transparent"
                      : "rounded-sm  bg-transparent hover:text-amber-400"
                  }
                >
                  Corporate
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/program-we-cover/birthday"
                  className={({ isActive }) =>
                    isActive
                      ? "text-amber-400 rounded-sm  bg-transparent"
                      : "rounded-sm  bg-transparent hover:text-amber-400"
                  }
                >
                  Birthday
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/program-we-cover/baby-shower"
                  className={({ isActive }) =>
                    isActive
                      ? "text-amber-400 rounded-sm  bg-transparent"
                      : "rounded-sm  bg-transparent hover:text-amber-400"
                  }
                >
                  Baby Shower
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/program-we-cover/sunnate-khatna"
                  className={({ isActive }) =>
                    isActive
                      ? "text-amber-400 rounded-sm  bg-transparent"
                      : "rounded-sm  bg-transparent hover:text-amber-400"
                  }
                >
                  Sunnate Khatna
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/program-we-cover/home-decor"
                  className={({ isActive }) =>
                    isActive
                      ? "text-amber-400 rounded-sm  bg-transparent"
                      : "rounded-sm  bg-transparent hover:text-amber-400"
                  }
                >
                  Home Decor
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/program-we-cover/occasional-parties"
                  className={({ isActive }) =>
                    isActive
                      ? "text-amber-400 rounded-sm  bg-transparent"
                      : "rounded-sm  bg-transparent hover:text-amber-400"
                  }
                >
                  occasional parties{" "}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/program-we-cover/govt-project"
                  className={({ isActive }) =>
                    isActive
                      ? "text-amber-400 rounded-sm  bg-transparent"
                      : "rounded-sm  bg-transparent hover:text-amber-400"
                  }
                >
                  Govt Project
                </NavLink>
              </li>
            </ul>
          </li>
          <li>
            <NavLink
              to="/enlisted-hall"
              className={({ isActive }) =>
                isActive
                  ? "text-amber-400 rounded-sm  bg-transparent"
                  : "rounded-sm  bg-transparent hover:text-amber-400"
              }
            >
              Enlisted Hall
              <svg
                class="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </NavLink>
            <ul class="p-2 bg-base-100">
              <li>
                <NavLink
                  to="/enlisted-hall/baowa-convention-hall"
                  className={({ isActive }) =>
                    isActive
                      ? "text-amber-400 rounded-sm  bg-transparent"
                      : "rounded-sm  bg-transparent hover:text-amber-400"
                  }
                >
                  Baowa Convention Hall
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/enlisted-hall/tokey-convention-hall"
                  className={({ isActive }) =>
                    isActive
                      ? "text-amber-400 rounded-sm  bg-transparent"
                      : "rounded-sm  bg-transparent hover:text-amber-400"
                  }
                >
                  Tokey Convention Hall
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/enlisted-hall/eon-convention-hall"
                  className={({ isActive }) =>
                    isActive
                      ? "text-amber-400 rounded-sm  bg-transparent"
                      : "rounded-sm  bg-transparent hover:text-amber-400"
                  }
                >
                  Eon Convention Hall
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/enlisted-hall/sena-malancha"
                  className={({ isActive }) =>
                    isActive
                      ? "text-amber-400 rounded-sm  bg-transparent"
                      : "rounded-sm  bg-transparent hover:text-amber-400"
                  }
                >
                  Sena Malancha
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/enlisted-hall/sena-kunjo"
                  className={({ isActive }) =>
                    isActive
                      ? "text-amber-400 rounded-sm  bg-transparent"
                      : "rounded-sm  bg-transparent hover:text-amber-400"
                  }
                >
                  Sena Kunjo
                </NavLink>
              </li>
            </ul>
          </li>
          <li>
            <NavLink
              to="/gallery"
              className={({ isActive }) =>
                isActive
                  ? "text-amber-400 rounded-sm  bg-transparent"
                  : "rounded-sm  bg-transparent hover:text-amber-400"
              }
            >
              Gallery
              <svg
                class="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </NavLink>
            <ul class="p-2 bg-base-100">
              <li>
                <NavLink
                  to="/gallery/stage"
                  className={({ isActive }) =>
                    isActive
                      ? "text-amber-400 rounded-sm  bg-transparent"
                      : "rounded-sm  bg-transparent hover:text-amber-400"
                  }
                >
                  Stage
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/gallery/photo-booth"
                  className={({ isActive }) =>
                    isActive
                      ? "text-amber-400 rounded-sm  bg-transparent"
                      : "rounded-sm  bg-transparent hover:text-amber-400"
                  }
                >
                  Photo Booth
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/gallery/head-table"
                  className={({ isActive }) =>
                    isActive
                      ? "text-amber-400 rounded-sm  bg-transparent"
                      : "rounded-sm  bg-transparent hover:text-amber-400"
                  }
                >
                  Head Table
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/gallery/walkway"
                  className={({ isActive }) =>
                    isActive
                      ? "text-amber-400 rounded-sm  bg-transparent"
                      : "rounded-sm  bg-transparent hover:text-amber-400"
                  }
                >
                  Walkway
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/gallery/tent"
                  className={({ isActive }) =>
                    isActive
                      ? "text-amber-400 rounded-sm  bg-transparent"
                      : "rounded-sm  bg-transparent hover:text-amber-400"
                  }
                >
                  Tent
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/gallery/entry-gate"
                  className={({ isActive }) =>
                    isActive
                      ? "text-amber-400 rounded-sm  bg-transparent"
                      : "rounded-sm  bg-transparent hover:text-amber-400"
                  }
                >
                  Entry Gate
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/gallery/photography"
                  className={({ isActive }) =>
                    isActive
                      ? "text-amber-400 rounded-sm  bg-transparent"
                      : "rounded-sm  bg-transparent hover:text-amber-400"
                  }
                >
                  Photography
                </NavLink>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div class="flex-none">
        <div class="dropdown dropdown-end">
          <label tabindex="0" class="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              class="inline-block w-5 h-5 stroke-current"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabindex="0"
            class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-amber-400 rounded-sm  bg-transparent"
                    : "rounded-sm  bg-transparent hover:text-amber-400"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "text-amber-400 rounded-sm  bg-transparent"
                    : "rounded-sm  bg-transparent hover:text-amber-400"
                }
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  isActive
                    ? "text-amber-400 rounded-sm  bg-transparent"
                    : "rounded-sm  bg-transparent hover:text-amber-400"
                }
              >
                Services
                <svg
                  class="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </NavLink>
              <ul class="p-2 bg-base-100">
                <li>
                  <NavLink
                    to="/services/decoration"
                    className={({ isActive }) =>
                      isActive
                        ? "text-amber-400 rounded-sm  bg-transparent"
                        : "rounded-sm  bg-transparent hover:text-amber-400"
                    }
                  >
                    Decoration
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/services/catering"
                    className={({ isActive }) =>
                      isActive
                        ? "text-amber-400 rounded-sm  bg-transparent"
                        : "rounded-sm  bg-transparent hover:text-amber-400"
                    }
                  >
                    Catering
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/services/photography"
                    className={({ isActive }) =>
                      isActive
                        ? "text-amber-400 rounded-sm  bg-transparent"
                        : "rounded-sm  bg-transparent hover:text-amber-400"
                    }
                  >
                    Photography
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/services/lighting"
                    className={({ isActive }) =>
                      isActive
                        ? "text-amber-400 rounded-sm  bg-transparent"
                        : "rounded-sm  bg-transparent hover:text-amber-400"
                    }
                  >
                    Lighting
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/services/led-system"
                    className={({ isActive }) =>
                      isActive
                        ? "text-amber-400 rounded-sm  bg-transparent"
                        : "rounded-sm  bg-transparent hover:text-amber-400"
                    }
                  >
                    LED System
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/services/sound-dj"
                    className={({ isActive }) =>
                      isActive
                        ? "text-amber-400 rounded-sm  bg-transparent"
                        : "rounded-sm  bg-transparent hover:text-amber-400"
                    }
                  >
                    Sound & DJ
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/services/appetizer"
                    className={({ isActive }) =>
                      isActive
                        ? "text-amber-400 rounded-sm  bg-transparent"
                        : "rounded-sm  bg-transparent hover:text-amber-400"
                    }
                  >
                    Appetizer
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/services/logistic-support"
                    className={({ isActive }) =>
                      isActive
                        ? "text-amber-400 rounded-sm  bg-transparent"
                        : "rounded-sm  bg-transparent hover:text-amber-400"
                    }
                  >
                    Logistic Support
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/services/entertainment"
                    className={({ isActive }) =>
                      isActive
                        ? "text-amber-400 rounded-sm  bg-transparent"
                        : "rounded-sm  bg-transparent hover:text-amber-400"
                    }
                  >
                    Entertainment
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/services/kids-play-zone"
                    className={({ isActive }) =>
                      isActive
                        ? "text-amber-400 rounded-sm  bg-transparent"
                        : "rounded-sm  bg-transparent hover:text-amber-400"
                    }
                  >
                    Kids Play Zone
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/services/vence-arrangement"
                    className={({ isActive }) =>
                      isActive
                        ? "text-amber-400 rounded-sm  bg-transparent"
                        : "rounded-sm  bg-transparent hover:text-amber-400"
                    }
                  >
                    Vence Arrangement
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/services/studio-rent"
                    className={({ isActive }) =>
                      isActive
                        ? "text-amber-400 rounded-sm  bg-transparent"
                        : "rounded-sm  bg-transparent hover:text-amber-400"
                    }
                  >
                    Studio Rent
                  </NavLink>
                </li>
              </ul>
            </li>
            <li>
              <NavLink
                to="/program-we-cover"
                className={({ isActive }) =>
                  isActive
                    ? "text-amber-400 rounded-sm  bg-transparent"
                    : "rounded-sm  bg-transparent hover:text-amber-400"
                }
              >
                Program We Cover
                <svg
                  class="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </NavLink>
              <ul class="p-2 bg-base-100">
                <li>
                  <NavLink
                    to="/program-we-cover/hadli-night"
                    className={({ isActive }) =>
                      isActive
                        ? "text-amber-400 rounded-sm  bg-transparent"
                        : "rounded-sm  bg-transparent hover:text-amber-400"
                    }
                  >
                    Haldi Night
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/program-we-cover/mehedi-night"
                    className={({ isActive }) =>
                      isActive
                        ? "text-amber-400 rounded-sm  bg-transparent"
                        : "rounded-sm  bg-transparent hover:text-amber-400"
                    }
                  >
                    Mehedi Night
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/program-we-cover/wedding"
                    className={({ isActive }) =>
                      isActive
                        ? "text-amber-400 rounded-sm  bg-transparent"
                        : "rounded-sm  bg-transparent hover:text-amber-400"
                    }
                  >
                    Wedding
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/program-we-cover/recaption"
                    className={({ isActive }) =>
                      isActive
                        ? "text-amber-400 rounded-sm  bg-transparent"
                        : "rounded-sm  bg-transparent hover:text-amber-400"
                    }
                  >
                    Recaption
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/program-we-cover/anniversary"
                    className={({ isActive }) =>
                      isActive
                        ? "text-amber-400 rounded-sm  bg-transparent"
                        : "rounded-sm  bg-transparent hover:text-amber-400"
                    }
                  >
                    Anniversary
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/program-we-cover/corporate"
                    className={({ isActive }) =>
                      isActive
                        ? "text-amber-400 rounded-sm  bg-transparent"
                        : "rounded-sm  bg-transparent hover:text-amber-400"
                    }
                  >
                    Corporate
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/program-we-cover/birthday"
                    className={({ isActive }) =>
                      isActive
                        ? "text-amber-400 rounded-sm  bg-transparent"
                        : "rounded-sm  bg-transparent hover:text-amber-400"
                    }
                  >
                    Birthday
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/program-we-cover/baby-shower"
                    className={({ isActive }) =>
                      isActive
                        ? "text-amber-400 rounded-sm  bg-transparent"
                        : "rounded-sm  bg-transparent hover:text-amber-400"
                    }
                  >
                    Baby Shower
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/program-we-cover/sunnate-khatna"
                    className={({ isActive }) =>
                      isActive
                        ? "text-amber-400 rounded-sm  bg-transparent"
                        : "rounded-sm  bg-transparent hover:text-amber-400"
                    }
                  >
                    Sunnate Khatna
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/program-we-cover/home-decor"
                    className={({ isActive }) =>
                      isActive
                        ? "text-amber-400 rounded-sm  bg-transparent"
                        : "rounded-sm  bg-transparent hover:text-amber-400"
                    }
                  >
                    Home Decor
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/program-we-cover/occasional-parties"
                    className={({ isActive }) =>
                      isActive
                        ? "text-amber-400 rounded-sm  bg-transparent"
                        : "rounded-sm  bg-transparent hover:text-amber-400"
                    }
                  >
                    occasional parties{" "}
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/program-we-cover/govt-project"
                    className={({ isActive }) =>
                      isActive
                        ? "text-amber-400 rounded-sm  bg-transparent"
                        : "rounded-sm  bg-transparent hover:text-amber-400"
                    }
                  >
                    Govt Project
                  </NavLink>
                </li>
              </ul>
            </li>
            <li>
              <NavLink
                to="/enlisted-hall"
                className={({ isActive }) =>
                  isActive
                    ? "text-amber-400 rounded-sm  bg-transparent"
                    : "rounded-sm  bg-transparent hover:text-amber-400"
                }
              >
                Enlisted Hall
                <svg
                  class="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </NavLink>
              <ul class="p-2 bg-base-100">
                <li>
                  <NavLink
                    to="/enlisted-hall/baowa-convention-hall"
                    className={({ isActive }) =>
                      isActive
                        ? "text-amber-400 rounded-sm  bg-transparent"
                        : "rounded-sm  bg-transparent hover:text-amber-400"
                    }
                  >
                    Baowa Convention Hall
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/enlisted-hall/tokey-convention-hall"
                    className={({ isActive }) =>
                      isActive
                        ? "text-amber-400 rounded-sm  bg-transparent"
                        : "rounded-sm  bg-transparent hover:text-amber-400"
                    }
                  >
                    Tokey Convention Hall
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/enlisted-hall/eon-convention-hall"
                    className={({ isActive }) =>
                      isActive
                        ? "text-amber-400 rounded-sm  bg-transparent"
                        : "rounded-sm  bg-transparent hover:text-amber-400"
                    }
                  >
                    Eon Convention Hall
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/enlisted-hall/sena-malancha"
                    className={({ isActive }) =>
                      isActive
                        ? "text-amber-400 rounded-sm  bg-transparent"
                        : "rounded-sm  bg-transparent hover:text-amber-400"
                    }
                  >
                    Sena Malancha
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/enlisted-hall/sena-kunjo"
                    className={({ isActive }) =>
                      isActive
                        ? "text-amber-400 rounded-sm  bg-transparent"
                        : "rounded-sm  bg-transparent hover:text-amber-400"
                    }
                  >
                    Sena Kunjo
                  </NavLink>
                </li>
              </ul>
            </li>
            <li>
              <NavLink
                to="/gallery"
                className={({ isActive }) =>
                  isActive
                    ? "text-amber-400 rounded-sm  bg-transparent"
                    : "rounded-sm  bg-transparent hover:text-amber-400"
                }
              >
                Gallery
                <svg
                  class="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </NavLink>
              <ul class="p-2 bg-base-100 ">
                <li>
                  <NavLink
                    to="/gallery/stage"
                    className={({ isActive }) =>
                      isActive
                        ? "text-amber-400 rounded-sm  bg-transparent"
                        : "rounded-sm  bg-transparent hover:text-amber-400"
                    }
                  >
                    Stage
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/gallery/photo-booth"
                    className={({ isActive }) =>
                      isActive
                        ? "text-amber-400 rounded-sm  bg-transparent"
                        : "rounded-sm  bg-transparent hover:text-amber-400"
                    }
                  >
                    Photo Booth
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/gallery/head-table"
                    className={({ isActive }) =>
                      isActive
                        ? "text-amber-400 rounded-sm  bg-transparent"
                        : "rounded-sm  bg-transparent hover:text-amber-400"
                    }
                  >
                    Head Table
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/gallery/walkway"
                    className={({ isActive }) =>
                      isActive
                        ? "text-amber-400 rounded-sm  bg-transparent"
                        : "rounded-sm  bg-transparent hover:text-amber-400"
                    }
                  >
                    Walkway
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/gallery/tent"
                    className={({ isActive }) =>
                      isActive
                        ? "text-amber-400 rounded-sm  bg-transparent"
                        : "rounded-sm  bg-transparent hover:text-amber-400"
                    }
                  >
                    Tent
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/gallery/entry-gate"
                    className={({ isActive }) =>
                      isActive
                        ? "text-amber-400 rounded-sm  bg-transparent"
                        : "rounded-sm  bg-transparent hover:text-amber-400"
                    }
                  >
                    Entry Gate
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/gallery/photography"
                    className={({ isActive }) =>
                      isActive
                        ? "text-amber-400 rounded-sm  bg-transparent"
                        : "rounded-sm  bg-transparent hover:text-amber-400"
                    }
                  >
                    Photography
                  </NavLink>
                </li>
              </ul>
            </li>
            {/* <li>
              <div class="dropdown dropdown-left">
                <label tabindex="10" class="btn m-1">
                  Click
                </label>
                <ul
                  tabindex="10"
                  class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <NavLink to="/item1">Item 1</NavLink>
                  </li>
                  <li>
                    <NavLink to="/item2">Item 2</NavLink>
                  </li>
                </ul>
              </div>
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
