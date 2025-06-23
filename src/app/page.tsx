export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-[#F5F7FA] flex flex-col-reverse lg:flex-row items-center px-6 md:px-20 lg:px-40 py-20 gap-y-12 lg:gap-y-0">
        {/* Sol Kısım - Yazı ve Butonlar */}
        <div className="w-full lg:w-1/2">
          <h1
            style={{ fontFamily: "SFPro" }}
            className="text-4xl md:text-5xl lg:text-7xl font-bold text-slate-950 leading-tight"
          >
            Halı saha planlarını{" "}
            <span className="block text-green-600">kolaylaştır!</span>
          </h1>

          <h2
            style={{ fontFamily: "SFPro" }}
            className="text-base md:text-lg lg:text-xl font-thin text-slate-800 mt-4"
          >
            CepteSaha ile halı saha maçlarını kolayca organize et, <br />
            takımını kur, maçlarını planla, oyuncularını değerlendir!
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            {/* App Store */}
            <a
              href="#"
              style={{ fontFamily: "SFPro" }}
              className="inline-flex items-center gap-x-2 px-6 py-3 bg-white text-black shadow-md text-base md:text-lg font-thin rounded-xl hover:opacity-70 transition"
            >
              <img src="/apple.svg" alt="Apple Logo" className="w-6 h-6" />
              App Store’dan indir
            </a>

            {/* Google Play */}
            <a
              href="#"
              style={{ fontFamily: "SFPro" }}
              className="inline-flex items-center gap-x-2 px-6 py-3 bg-white text-black shadow-md text-base md:text-lg font-thin rounded-xl hover:opacity-70 pointer-events-none"
            >
              <img
                src="/googleplay.svg"
                alt="Google Play Logo"
                className="w-6 h-6"
              />
              Google Play’de Yakında
            </a>
          </div>
        </div>

        {/* Sağ Kısım - Logo */}
        <div className="w-full lg:w-1/2 flex flex-col items-center">
          <img
            src="/logo2.svg"
            alt="Logo"
            className="max-w-[220px] md:max-w-[280px] lg:max-w-[300px] h-auto"
          />
          <span
            style={{ fontFamily: "SFPro" }}
            className="text-2xl md:text-3xl lg:text-4xl font-thin text-slate-800 mt-2"
          >
            CepteSaha
          </span>
        </div>
      </div>

      <div className="bg-white px-6 md:px-20 py-24">
        <h2
          style={{ fontFamily: "SFPro" }}
          className="text-center text-4xl md:text-5xl font-bold text-black mb-16 leading-snug"
        >
          Tüm halı saha takımınızı <br />
          tek yerden yönetin.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {/* Maç Planla */}
          <div className="flex flex-col items-center">
            <img
              src="/ball.svg"
              alt="Maç Planla İkonu"
              className="w-8 h-8 mb-3"
            />
            <h3
              className="text-2xl font-bold text-slate-950"
              style={{ fontFamily: "SFPro" }}
            >
              Maç Planla
            </h3>
            <p
              className="text-base md:text-lg text-gray-700 font-thin mt-2"
              style={{ fontFamily: "SFPro" }}
            >
              Tarih, saat ve saha <br />
              bilgisiyle maçlarını kolayca <br />
              organize et.
            </p>
            <img
              src="/plan.svg"
              alt="Maç Planla Ekranı"
              className="mt-6 w-full max-w-[280px] rounded-lg "
            />
          </div>

          {/* Katılım Takibi */}
          <div className="flex flex-col items-center">
            <img
              src="/check.svg"
              alt="Katılım İkonu"
              className="w-8 h-8 mb-3"
            />
            <h3
              className="text-2xl font-bold text-slate-950"
              style={{ fontFamily: "SFPro" }}
            >
              Katılım Takibi
            </h3>
            <p
              className="text-base md:text-lg text-gray-700 font-thin mt-2"
              style={{ fontFamily: "SFPro" }}
            >
              Kim geliyor, kim gelmiyor? <br />
              Anlık takip et.
            </p>
            <img
              src="/screen2.svg"
              alt="Katılım Takibi Ekranı"
              className="mt-6 w-full max-w-[280px] rounded-lg "
            />
          </div>

          {/* Oyuncu Değerlendirme */}
          <div className="flex flex-col items-center">
            <img
              src="/star.svg"
              alt="Değerlendirme İkonu"
              className="w-8 h-8 mb-3"
            />
            <h3
              className="text-2xl font-bold text-slate-950"
              style={{ fontFamily: "SFPro" }}
            >
              Oyuncu Değerlendirme
            </h3>
            <p
              className="text-base md:text-lg text-gray-700 font-thin mt-2"
              style={{ fontFamily: "SFPro" }}
            >
              Maç sonrası arkadaşlarını <br />
              değerlendir, istatistiklerini gör.
            </p>
            <img
              src="/screen3.svg"
              alt="Oyuncu Değerlendirme Ekranı"
              className="mt-6 w-full max-w-[280px] rounded-lg "
            />
          </div>
        </div>
      </div>
      {/* İletişim Bölümü */}
      <div className="bg-[#1E1E1E] text-white px-6 md:px-20 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2
            style={{ fontFamily: "SFPro" }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Bize Ulaşın
          </h2>

          <p
            style={{ fontFamily: "SFPro" }}
            className="text-lg font-thin text-gray-300 mb-8"
          >
            Uygulama ile ilgili görüş, öneri veya destek talepleriniz için bize
            e-posta gönderebilirsiniz.
          </p>
          <a
            href="mailto:iletisim@ceptesaha.com"
            className="inline-block text-base md:text-lg font-medium bg-white text-black px-6 py-3 rounded-xl hover:opacity-80 transition"
            style={{ fontFamily: "SFPro" }}
          >
            iletisim@ceptesaha.com
          </a>
        </div>
      </div>

      {/* Footer Bölümü */}
      <footer className="bg-[#121212] text-gray-400 text-sm py-6 px-6 md:px-20">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-y-4 text-center md:text-left">
          {/* Telif */}
          <p style={{ fontFamily: "SFPro" }}>
            © {new Date().getFullYear()} CepteSaha. Tüm hakları saklıdır.
          </p>

          {/* Bağlantılar */}
          <div className="flex gap-x-6">
            <a
              href="/gizlilik-politikasi"
              className="hover:text-white transition"
            >
              Gizlilik Politikası
            </a>
            <a
              href="/kullanim-sartlari"
              className="hover:text-white transition"
            >
              Kullanım Şartları
            </a>
          </div>

          {/* E-posta */}
          <a
            href="mailto:iletisim@ceptesaha.com"
            className="hover:text-white transition"
          >
            iletisim@ceptesaha.com
          </a>
        </div>
      </footer>
    </>
  );
}
