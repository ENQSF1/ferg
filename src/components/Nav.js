import { Fragment, useEffect, useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import Link from "next/link";

const navigation = [
  { name: "INICIO", href: "/", current: false },
  { name: "HISTORIA", href: "/historia", current: false },
  { name: "BLOG", href: "/blog", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const [fixedNav, setFixedNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const navHeight = document.querySelector("nav").offsetHeight;
      if (scrollPosition > navHeight) {
        setFixedNav(true);
      } else {
        setFixedNav(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Disclosure
        as="nav"
        className={`bg-black w-full z-10 transition duration-300 ease-in-out ${
          fixedNav ? "fixed top-0 left-0" : ""
        }`}
      >
        {({ open }) => (
          <div className="bg-gray-800 w-full">
            <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center h-16">
                <div className="item justify-center items-center">
                  <img
                    className="h-14 w-12 bg-red-200"
                    src="./images/logo.jpg"
                    alt="Logo"
                  />
                </div>

                <div className="hidden md:flex items-center space-x-4 ml-auto">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      target={item.target}
                      rel={item.enterFrom}
                      className={classNames(
                        item.current
                          ? "bg-gray-900 text-white"
                          : "text-white hover:text-yellow-400",
                        "py-2 rounded-md text-sm font-medium"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="hidden md:block">
                  <button
                    type="button"
                    className="bg-gray-800 p-1 rounded-full text-yellow-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  >
                    {/* Icono para perfil */}
                  </button>
                </div>
                <div className="-mr-2 md:hidden">
                  {/* Botón para menú móvil */}
                  <Disclosure.Button className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                    <span className="sr-only">Abrir menú principal</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>
            <Disclosure.Panel className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "bg-gray-900 text-white"
                        : " text-white hover:bg-gray-700 hover:text-white",
                      "block px-3 py-2 rounded-md text-base font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
              <div className="pt-4 pb-3 border-t border-gray-700">
                <div className="flex items-center px-5">
                  <div className="flex-shrink-0"></div>
                  <div className="ml-3"></div>
                  <button
                    type="button"
                    className="ml-auto bg-gray-800 flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  ></button>
                </div>
              </div>
            </Disclosure.Panel>
          </div>
        )}
      </Disclosure>
    </>
  );
}
