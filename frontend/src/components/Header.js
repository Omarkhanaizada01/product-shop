"use client";
import Link from "next/link";
import { FiMapPin, FiChevronDown, FiCheck, FiHeart, FiShoppingBag, FiSearch, FiMenu, FiX } from "react-icons/fi";
import { useState, useEffect, useContext } from "react";
import Image from "next/image";
import { AuthContext } from "../context/AuthContext";
import ShoppingCartModal from "./modals/ShoppingCartModal";// 👈 добавили импорт

export default function Header() {
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isCurrencyOpen, setIsCurrencyOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("Eng");
  const [selectedCurrency, setSelectedCurrency] = useState("USD");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false); // 👈 состояние корзины

  const { user, logout } = useContext(AuthContext);

  // Тестовые товары (позже заменишь на реальные данные)
  const cartItems = [
    {
      name: "Fresh Indian Orange",
      image: "/images/products/orange.jpg",
      price: 12.0,
      quantity: 2,
    },
    {
      name: "Organic Apple",
      image: "/images/products/apple.jpg",
      price: 8.5,
      quantity: 1,
    },
  ];

  const languages = [
    { code: "Eng", name: "English" },
    { code: "Fra", name: "Français" },
    { code: "Esp", name: "Español" },
  ];

  const currencies = [
    { code: "USD", name: "US Dollar" },
    { code: "EUR", name: "Euro" },
    { code: "GBP", name: "British Pound" },
  ];

  const nav = [
    { id: "home", name: "Home", link: "/" },
    { id: "shop", name: "Shop", link: "/shop" },
    { id: "pages", name: "Pages", link: "/" },
    { id: "blog", name: "Blog", link: "/" },
    { id: "about", name: "About", link: "about" },
    { id: "contactUs", name: "Contact Us", link: "/" },
  ];

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest(".language-dropdown") && !e.target.closest(".currency-dropdown")) {
        setIsLanguageOpen(false);
        setIsCurrencyOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="w-full bg-white shadow-[0_1px_0_0_#E5E5E5] z-50">
      {/* Top Bar */}
      <div className="container mx-auto h-[42px] flex justify-between items-center px-4 text-sm">
        <div className="flex items-center gap-2 max-w-[315px] overflow-hidden text-[12px] text-[#666666]">
          <FiMapPin className="min-w-[16px] shrink-0" />
          <span className="truncate">Store Location: Lincoln - 344, Illinois, Chicago, USA</span>
        </div>

        <div className="hidden md:flex items-center gap-5">
          {/* Language */}
          <div className="relative language-dropdown">
            <button
              onClick={() => setIsLanguageOpen(!isLanguageOpen)}
              className="flex items-center gap-1 hover:text-green-600 transition-colors"
            >
              {selectedLanguage}
              <FiChevronDown className="w-3 h-3" />
            </button>
            {isLanguageOpen && (
              <div className="absolute top-full left-0 mt-1 w-40 bg-white border border-gray-200 rounded-md shadow-lg z-20">
                {languages.map((lang) => (
                  <div
                    key={lang.code}
                    onClick={() => setSelectedLanguage(lang.code)}
                    className="px-4 py-2 hover:bg-gray-50 flex items-center justify-between cursor-pointer"
                  >
                    <span>{lang.name}</span>
                    {selectedLanguage === lang.code && <FiCheck className="text-green-600" />}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Currency */}
          <div className="relative currency-dropdown">
            <button
              onClick={() => setIsCurrencyOpen(!isCurrencyOpen)}
              className="flex items-center gap-1 hover:text-green-600 transition-colors"
            >
              {selectedCurrency}
              <FiChevronDown className="w-3 h-3" />
            </button>
            {isCurrencyOpen && (
              <div className="absolute top-full left-0 mt-1 w-40 bg-white border border-gray-200 rounded-md shadow-lg z-20">
                {currencies.map((curr) => (
                  <div
                    key={curr.code}
                    onClick={() => setSelectedCurrency(curr.code)}
                    className="px-4 py-2 hover:bg-gray-50 flex items-center justify-between cursor-pointer"
                  >
                    <span>{curr.name}</span>
                    {selectedCurrency === curr.code && <FiCheck className="text-green-600" />}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Auth Links */}
          <div className="flex items-center gap-2">
            {!user ? (
              <>
                <a href="/login" className="font-semibold hover:underline">Sign In</a>
                <span className="text-gray-400">/</span>
                <a href="/register" className="font-semibold hover:underline">Sign Up</a>
              </>
            ) : (
              <>
                <span className="font-semibold">Hello, {user.name}</span>
                {user.role === "ADMIN" && (
                  <Link href="/admin" className="ml-4 font-semibold text-green-600 hover:underline">
                    Admin Panel
                  </Link>
                )}
                {/* 👇 кнопка выхода */}
                <button
                  onClick={logout}
                  className="ml-4 px-3 py-1 rounded bg-green-600 text-white hover:bg-green-700"
                >
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Middle Bar */}
      <div className="container mx-auto h-[93px] flex items-center justify-between px-4">
        {/* Logo */}
        <div className="relative w-[150px] h-[30px] sm:w-[183px] sm:h-[38px]">
          <Image 
            src="/images/icons/logo.svg" 
            alt="Logo" 
            fill
            style={{ objectFit: "contain" }}
          />
        </div>

        {/* Search (desktop only) */}
        <div className="hidden lg:flex w-full max-w-[498px] h-[45px] items-center border border-[#E6E6E6] rounded-[6px] overflow-hidden relative">
          <div className="absolute left-4 h-full flex items-center justify-center pointer-events-none">
            <FiSearch className="w-5 h-5 text-[#808080]" />
          </div>
          <input
            type="search"
            id="site-search"
            name="q"
            placeholder="Search"
            autoComplete="off"
            className="w-full h-full pl-12 pr-4 text-[15px] text-[#808080] focus:outline-none"
          />
          <button className="h-full px-6 bg-[#00B207] text-white hover:bg-[#00B207]/90 transition-colors whitespace-nowrap">
            <span className="text-[14px] font-semibold">Search</span>
          </button>
        </div>

         {/* Icons + Burger */}
         <div className="flex items-center gap-4">
          {/* 👉 Сделали Heart ссылкой на wishlist */}
          <Link href="/wishlist">
            <FiHeart className="w-[28px] h-[28px] text-gray-600 hover:text-green-600 transition-colors hidden sm:block cursor-pointer" />
          </Link>

          {/* Корзина */}
          <div className="relative">
            <button onClick={() => setIsCartOpen(true)}>
              <FiShoppingBag className="w-[30px] h-[30px] text-gray-600 hover:text-green-600 transition-colors" />
            </button>
            {cartItems.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-green-600 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                {cartItems.length}
              </span>
            )}
          </div>

          <div className="hidden md:flex flex-col">
            <span className="text-[11px] text-[#4D4D4D]">Shopping cart:</span>
            <span className="text-[14px] font-medium text-[#1A1A1A]">${cartItems.reduce((s, i) => s + i.price * i.quantity, 0).toFixed(2)}</span>
          </div>

          {/* Burger */}
          <button 
            className="lg:hidden text-2xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>
      

      {/* Bottom Nav */}
      <nav className="bg-[#333333]">
        <div className="container mx-auto h-[60px] hidden lg:flex justify-between items-center px-4">
          <div className="flex items-center gap-8">
            {nav.map((item) => (
              <a 
                key={item.id} 
                href={item.link} 
                className="flex items-center gap-1 text-[#999999] hover:text-white transition-colors text-[14px] font-medium"
              >
                {item.name}
                <Image 
                  src="/images/icons/ChevronDown.png"
                  alt="Arrow" 
                  width={16}
                  height={16} 
                />
              </a>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <Image src="/images/icons/PhoneCall.png" alt="Phone" width={28} height={28}/>
            <span className="text-[#999999] hover:text-white transition-colors text-[14px] font-medium">
              +123 (456) 7890
            </span>
          </div>
        </div>

        {/* Mobile Nav + Search */}
        {isMenuOpen && (
          <div className="lg:hidden bg-[#333333] flex flex-col px-4 py-4 gap-4">
            {nav.map((item) => (
              <a key={item.id} href={item.link} className="text-[#999999] hover:text-white transition-colors text-[16px] font-medium">
                {item.name}
              </a>
            ))}

            {/* Поиск для мобильного */}
            <div className="mt-4 w-full flex items-center border border-[#E6E6E6] rounded-[6px] overflow-hidden relative bg-white">
              <div className="absolute left-4 h-full flex items-center justify-center pointer-events-none">
                <FiSearch className="w-5 h-5 text-[#808080]" />
              </div>
              <input
                type="search"
                id="mobile-search"         
                name="q"     
                placeholder="Search"
                className="w-full h-[45px] pl-12 pr-4 text-[15px] text-[#808080] focus:outline-none"
              />
              <button className="h-[45px] px-4 bg-[#00B207] text-white hover:bg-[#00B207]/90 transition-colors">
                <span className="text-[14px] font-semibold">Search</span>
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* 👉 Модалка корзины */}
      <ShoppingCartModal 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        cartItems={cartItems} 
      />
    </header>
  );
}
