import { FC } from 'react'

import { footerLinks } from '../constants'

interface FooterProps {}

const Footer: FC<FooterProps> = () => {
  return (
    <footer className="ms:px-10 p-5">
      <div className="screen-max-width">
        <div>
          <p className="text-xs font-semibold text-gray">
            More ways to shop:
            <span className="text-blue underline"> Find an Apple store </span>
            or
            <span className="text-blue underline"> other retailer </span>
            near you.
          </p>
          <p className="text-xs font-semibold text-gray">Or call 000800-040-1968</p>
        </div>

        <div className="my-5 h-px w-full bg-neutral-700" />

        <div className="flex flex-col justify-between md:flex-row md:items-center">
          <p className="text-xs font-semibold text-gray">Copyright @ 2024 Apple Inc. All rights reserved.</p>
          <div className="flex flex-wrap">
            {footerLinks.map((link, i) => (
              <button className="flex cursor-pointer text-xs font-semibold text-gray" key={link}>
                {link}
                {i !== footerLinks.length - 1 && <span className="mx-2"> | </span>}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
