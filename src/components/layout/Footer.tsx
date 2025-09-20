import Image from 'next/image'
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaFacebookF, FaInstagram, FaTwitter, FaPinterestP, FaYoutube } from 'react-icons/fa'

export default function Footer() {
    return (
        <>
            <footer className="bg-[#1a1a1a] text-white py-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                        <div className="">
                            <Image
                                src="/Logo/footerLogo.png"
                                alt="logo"
                                width={200}
                                height={100}
                                className="mb-4"
                            />
                            <div className="space-y-3 text-sm">
                                <p className="flex items-center gap-2">
                                    <FaMapMarkerAlt className="text-[#84BD38]" />
                                    Witteweg 45 1431GZ Aalsmeer
                                </p>
                                <p className="flex items-center gap-2">
                                    <FaEnvelope className="text-[#84BD38]" />
                                    info@gmail.com
                                </p>
                                <p className="flex items-center gap-2">
                                    <FaPhone className="text-[#84BD38]" />
                                    0123456789
                                </p>
                            </div>

                            {/* Social Media Icons */}
                            <div className="flex gap-4 mt-4">
                                <a
                                    href="#"
                                    className="hover:text-[#84BD38]"
                                >
                                    <FaFacebookF />
                                </a>
                                <a
                                    href="#"
                                    className="hover:text-[#84BD38]"
                                >
                                    <FaInstagram />
                                </a>
                                <a
                                    href="#"
                                    className="hover:text-[#84BD38]"
                                >
                                    <FaTwitter />
                                </a>
                                <a
                                    href="#"
                                    className="hover:text-[#84BD38]"
                                >
                                    <FaPinterestP />
                                </a>
                                <a
                                    href="#"
                                    className="hover:text-[#84BD38]"
                                >
                                    <FaYoutube />
                                </a>
                            </div>
                        </div>

                        {/* info 1 */}
                        <div>
                            <h2 className="text-[#84BD38] font-semibold mb-3">Bestelinformatie</h2>
                            <ul className="space-y-2 text-sm">
                                <li>
                                    <a
                                        href="#"
                                        className="hover:text-[#84BD38]"
                                    >
                                        Ruilen & Retourneren
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="hover:text-[#84BD38]"
                                    >
                                        Verzending & Betaling
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="hover:text-[#84BD38]"
                                    >
                                        Vragen & Antwoorden
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* info 2 */}
                        <div>
                            <h2 className="text-[#84BD38] font-semibold mb-3">Handige info</h2>
                            <ul className="space-y-2 text-sm">
                                <li>
                                    <a
                                        href="#"
                                        className="hover:text-[#84BD38]"
                                    >
                                        Mijn account
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="hover:text-[#84BD38]"
                                    >
                                        Onderhoud
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="hover:text-[#84BD38]"
                                    >
                                        Winkel
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* info 3 */}
                        <div>
                            <h2 className="text-[#84BD38] font-semibold mb-3">Bestelinformatie</h2>
                            <ul className="space-y-2 text-sm">
                                <li>
                                    <a
                                        href="#"
                                        className="hover:text-[#84BD38]"
                                    >
                                        Ruilen & Retourneren
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="hover:text-[#84BD38]"
                                    >
                                        Verzending & Betaling
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="hover:text-[#84BD38]"
                                    >
                                        Vragen & Antwoorden
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="hover:text-[#84BD38]"
                                    >
                                        Vragen & Antwoorden
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>

            <div className="text-center text-sm text-white bg-[#84BD38] py-4">
                <p>© {new Date().getFullYear()} Natuurs. All rights reserved.</p>
            </div>
        </>
    )
}
