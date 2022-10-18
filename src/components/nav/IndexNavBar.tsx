import Link from "next/link";
import React from "react";



const navList = [
  {
    link: '/',
    text: 'AI创作'
  },
  {
    link: '/art',
    text: '艺术馆'
  },
  {
    link: '/',
    text: '关于我们'
  },
]
export default function IndexNavBar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  return (
    <>
      <nav className="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-black shadow text-white">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link href="/">
              <a
                className=" text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
                href="#pablo"
              >
                NextJS
              </a>
            </Link>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center lg:bg-opacity-0 lg:shadow-none" +
              (navbarOpen ? " block" : " hidden") +
              (navbarOpen ? " bg-black" : " bg-white")
            }
            id="example-navbar-warning"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              {
                navList.map((item, index) => {
                  return <li key={index} className="flex items-center">
                    <Link className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold" href={item.link}>
                      <span className="inline-block ml-2">{item.text}</span>
                    </Link>
                  </li>
                })
              }
              <li className="flex items-center">
                <a href="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold">
                  <span className="inline-block ml-2">登陆/注册</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
