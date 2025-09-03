// components/Footer/Footer.js
'use client';
import Image from 'next/image';
import Link from 'next/link';

const footerLinks = {
  account: {
    title: 'My Account',
    links: ['Shoping Cart', 'Wishlist', 'Checkout', 'My Account']
  },
  helps: {
    title: 'Helps',
    links: ['Shipping Info', 'Returns', 'Privacy Policy', 'Terms & Conditions']
  },
  proxy: {
    title: 'Proxy',
    links: ['About Us', 'Contact Us', 'Blog', 'FAQ']
  },
  categories: {
    title: 'Categories',
    links: ['Fruits', 'Vegetables', 'Dairy', 'Meat']
  }
};

const socials = [
  { 
    name: 'Facebook', 
    icon: '/images/icons/facebook.svg', 
    active: true,
    defaultBg: 'bg-[#00B207]'
  },
  { 
    name: 'Twitter', 
    icon: '/images/icons/twitter.svg', 
    active: false 
  },
  { 
    name: 'Pinterest', 
    icon: '/images/icons/pinterest.svg', 
    active: true 
  },
  { 
    name: 'Instagram', 
    icon: '/images/icons/instagram (2).svg', 
    active: true 
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#F2F2F2] w-full z-10 relative">

      {/* Слой 1: Форма подписки */}
      <section className="py-10 bg-white relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border border-[#E6E6E6] bg-white rounded-lg p-8 flex flex-col md:flex-row justify-between items-center">
            
            <div className="max-w-[448px] mb-6 md:mb-0">
              <h3 className="text-[24px] font-semibold leading-[150%] text-[#1A1A1A] mb-1">
                Subscribe our Newsletter
              </h3>
              <p className="text-[14px] leading-[150%] text-[#999999]">
                Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. 
                Phasellus imperdiet elit eu magna.
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
              <div className="relative w-full md:w-[536px]">
                <input
                  type="email"
                  id="footer-email"
                  name="email"
                  placeholder="Your email address"
                  autoComplete="email"
                  className="w-full h-[52px] pl-6 pr-[120px] rounded-full border border-[#E6E6E6] focus:outline-none focus:ring-2 focus:ring-[#00B207]"
                />
                <button className="absolute right-1 top-1 h-[44px] px-6 bg-[#00B207] text-white font-semibold rounded-full hover:bg-[#038a05] transition-colors">
                  Subscribe
                </button>
              </div>

              {/* Социальные иконки */}
              <div className="flex gap-2">
                {socials.map((social) => (
                  <a 
                    key={social.name}
                    href="#"
                    className={`
                      w-10 h-10 rounded-full flex items-center justify-center
                      ${social.defaultBg || 'bg-transparent'}
                      ${social.active ? 'hover:bg-[#00B207]' : ''}
                      transition-colors duration-200
                    `}
                  >
                    <div className="relative w-[18px] h-[18px]">
                      <Image 
                        src={social.icon} 
                        alt={social.name}
                        width={18}
                        height={18}
                        style={{ width: '18px', height: 'auto' }}
                        className="object-contain"
                      />
                    </div>
                  </a>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Слой 2: Основное меню */}
      <section className="py-10 bg-[#1A1A1A] relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-[112px]">
            
            {/* Company Section - слева */}
            <div className="w-full md:w-[336px] flex flex-col gap-4">
            <div className="flex items-center gap-2 w-[183px] h-[38px] relative">
  <Image 
    src="/images/icons/logo.svg"
    alt="Company Logo"
    fill
    style={{ objectFit: 'contain' }}
  />
</div>
              <p className="text-[14px] leading-[150%] text-[#808080]">
                Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis dui, 
                eget bibendum magna congue nec.
              </p>
              <div className="flex items-center gap-4">
                <button className="w-[103px] h-[33px] bg-[#1A1A1A] shadow-[0_1.5px_0_0_#20B526] flex items-center justify-center text-white text-[14px]">
                  Google Play
                </button>
                <span className="text-[#808080]">or</span>
                <button className="w-[103px] h-[33px] bg-[#1A1A1A] shadow-[0_1.5px_0_0_#20B526] flex items-center justify-center text-white text-[14px]">
                  App Store
                </button>
              </div>
            </div>

            {/* Навигационные секции - справа */}
            <div className="flex-1 flex flex-col md:flex-row">
              {Object.entries(footerLinks).map(([key, section]) => (
                <div 
                  key={key} 
                  className="flex flex-col gap-5 min-w-[95px] mr-40 last:mr-0"
                >
                  <h4 className="text-white text-[16px] font-medium leading-[150%]">
                    {section.title}
                  </h4>
                  <div className="flex flex-col gap-3">
                    {section.links.map((link) => (
                      <Link 
                        href="#" 
                        key={link}
                        className="text-[#999999] text-[14px] hover:text-white transition-colors"
                      >
                        {link}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Слой 3: Копирайт и методы оплаты */}
      <div className="bg-[#1A1A1A] border-t border-[#333] py-10 relative">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-[#666666] text-sm">
            © {new Date().getFullYear()} Ecobazar eCommerce © 2021. All Rights Reserved
          </div>
          
          <div className="flex gap-3 h-8">
            {['applePay', 'visa', 'discover', 'mastercard', 'cart'].map((payment) => (
              <div key={payment} className="relative w-10 h-8">
                <Image 
                  src={`/images/icons/${payment}.svg`} 
                  alt={payment}
                  fill
                  sizes="40px"
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

    </footer>
  );
}
