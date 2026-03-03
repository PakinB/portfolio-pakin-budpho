import React, { useState } from 'react'
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel
} from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { HomeIcon } from '@heroicons/react/24/solid'

const navigation = [
  { name: 'About', href: '#About' },
  { name: 'Projects', href: '#Projects' },
  { name: 'Skills', href: '#Skills' },
  { name: 'Contact', href: '#Contact' },
]

export default function Navbar() {

  const [active, setActive] = useState('About')

  return (
    <Disclosure as="nav" className="fixed w-full z-50 bg-white/10 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">


          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <DisclosureButton className="group inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white">
              <Bars3Icon className="block size-6 group-data-open:hidden" />
              <XMarkIcon className="hidden size-6 group-data-open:block" />
            </DisclosureButton>
          </div>


          <div className="flex flex-1 items-center justify-center sm:justify-start">
            <HomeIcon className="h-8 w-8 text-white hover:text-indigo-600 transition" />


            <div className="hidden sm:ml-auto sm:block">
              <div className="flex space-x-4">

                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setActive(item.name)}
                    className={`rounded-md px-3 py-2 text-sm font-bold transition-all duration-300
                      ${
                        active === item.name
                          ? 'bg-gray-800 text-white'
                          : 'text-gray-300 hover:bg-white/5 hover:text-white'
                      }`}
                  >
                    {item.name}
                  </a>
                ))}

              </div>
            </div>
          </div>
        </div>
      </div>


      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              onClick={() => setActive(item.name)}
              className={`block rounded-md px-3 py-2 text-base font-medium transition-all duration-300
                ${
                  active === item.name
                    ? 'bg-gray-900 text-white'
                    : 'text-gray-300 hover:bg-white/5 hover:text-white'
                }`}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}
