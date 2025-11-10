import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full max-w-[1440px] mx-auto h-auto min-h-[649px] bg-white font-[Manrope]  relative overflow-hidden">
      <div className="relative z-10 h-full pt-8 md:pt-16 lg:pt-[108px] px-4 sm:px-6 md:px-8 lg:px-[94px] pb-32">
        
        {/* ✅ Responsive Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 lg:gap-0 items-start">
          
          {/* ✅ Logo */}
          <div className="col-span-2 lg:col-span-1 mb-8 lg:mb-0">
            <div className="flex items-center gap-2">
              <div 
                className="w-6 h-6 bg-black rounded flex items-center justify-center text-white text-xs font-bold border border-black"
                style={{ borderWidth: '0.53px' }}
              >
                ⊞
              </div>
              <span 
                className="font-bold text-black"
                style={{
                  fontFamily: 'Manrope, sans-serif',
                  fontWeight: 700,
                  fontSize: 'clamp(20px, 4vw, 24px)',
                  lineHeight: '40px',
                }}
              >
                Teams24
              </span>
            </div>
          </div>

          {/* ✅ Company Section */}
          <div className="lg:ml-[58px]">
            <p className="font-bold text-black mb-4 md:mb-6 text-lg">Company</p>
            <ul className="space-y-2 md:space-y-3">
              <li><Link href="/what-we-do" className="text-gray-600 hover:text-black transition font-semibold text-base">What we do</Link></li>
              <li><Link href="/how-it-works" className="text-gray-600 hover:text-black transition font-semibold text-base">How it works</Link></li>
              <li><Link href="/faq" className="text-gray-600 hover:text-black transition font-semibold text-base">FAQ’s</Link></li>
              <li><Link href="/careers" className="text-gray-600 hover:text-black transition font-semibold text-base">Careers</Link></li>
            </ul>
          </div>

          {/* ✅ Legal Section */}
          <div className="lg:ml-[89px]">
            <p className="font-bold text-black mb-4 md:mb-6 text-lg">Legal</p>
            <ul className="space-y-2 md:space-y-3">
              <li><Link href="/terms" className="text-gray-600 hover:text-black transition font-semibold text-base">Terms and conditions</Link></li>
              <li><Link href="/privacy-policy" className="text-gray-600 hover:text-black transition font-semibold text-base">Privacy policy</Link></li>
            </ul>
          </div>

          {/* ✅ Contact Section */}
          <div className="col-span-2 lg:col-span-1 lg:ml-[89px] mt-8 lg:mt-0">
            <p className="font-bold text-black mb-4 md:mb-6 text-lg">Contact</p>
            <p className="text-gray-600 mb-4 md:mb-6 font-semibold text-base">
              <Link href="mailto:support@teams24.in" className="hover:text-black">
                support@teams24.in
              </Link>
            </p>

            {/* ✅ Social Icons Section */}
            <div
              className="
                flex gap-[11px]
                sm:justify-center
                lg:justify-start
                w-[201px] h-[42px]
                mx-auto lg:mx-0
              "
            >
              {/* Instagram */}
              <Link href="https://www.instagram.com/teams24" target="_blank">
                <Image
                  src="/icons/instagram.png" // ✅ path in /public/icons/
                  alt="Instagram"
                  width={42}
                  height={42}
                  className="hover:opacity-80 transition"
                />
              </Link>

              {/* LinkedIn */}
              <Link href="https://www.linkedin.com/company/teams24" target="_blank">
                <Image
                  src="/icons/linkedin.png"
                  alt="LinkedIn"
                  width={42}
                  height={42}
                  className="hover:opacity-80 transition"
                />
              </Link>

              {/* X (Twitter) */}
              <Link href="https://x.com/teams24" target="_blank">
                <Image
                  src="/icons/x.png"
                  alt="X"
                  width={42}
                  height={42}
                  className="hover:opacity-80 transition"
                />
              </Link>

              {/* Facebook */}
              <Link href="https://facebook.com/teams24" target="_blank">
                <Image
                  src="/icons/facebook.png"
                  alt="Facebook"
                  width={42}
                  height={42}
                  className="hover:opacity-80 transition"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Watermark (Unchanged) */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-screen max-w-[1440px] overflow-hidden pointer-events-none">
        <div className="w-full h-[120px] sm:h-[150px] md:h-[200px] lg:h-[250px] xl:h-[350px] flex items-end justify-center select-none opacity-10">
          <p 
            className="font-normal text-center whitespace-nowrap w-full px-4"
            style={{
              fontFamily: 'Dyson Sans Modern',
              fontWeight: 400,
              fontSize: 'clamp(80px, 25vw, 400px)',
              lineHeight: '0.6',
              color: '#131313',
              transform: 'translateY(15%)',
              minWidth: 'max-content'
            }}
          >
            Teams24
          </p>
        </div>
      </div>
    </footer>
  );
}
