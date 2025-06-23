export default function GizlilikPolitikasi() {
    return (
      <div
        className="max-w-4xl mx-auto px-6 py-16 text-slate-800"
        style={{ fontFamily: "SFPro" }}
      >
        <h1 className="text-3xl font-bold mb-6">Gizlilik Politikası</h1>
        <p className="mb-4">
          CepteSaha uygulaması olarak kullanıcı gizliliğini önemsiyor ve kişisel
          verilerinizi korumak için gerekli tüm adımları atıyoruz. Bu gizlilik
          politikası, uygulamamızı kullandığınızda hangi verilere eriştiğimizi, bu
          verilerin nasıl kullanıldığını ve nasıl korunduğunu açıklar.
        </p>
  
        <h2 className="text-xl font-semibold mt-8 mb-2">Erişim ve İzinler</h2>
        <p className="mb-4">
          Uygulama, cihazınızın kamera ve fotoğraf galerisi gibi alanlarına
          yalnızca sizin onayınızla erişir. Kamera, profil fotoğrafı çekimi için;
          galeri ise mevcut görselleri seçebilmeniz amacıyla kullanılır.
        </p>
  
        <h2 className="text-xl font-semibold mt-8 mb-2">Kimlik Doğrulama</h2>
        <p className="mb-4">
          Google ve Apple ile giriş işlemleri sırasında yalnızca adınız ve e-posta
          adresiniz alınır. Bu bilgiler sadece kimlik doğrulama ve hesap oluşturma
          için kullanılır.
        </p>
  
        <h2 className="text-xl font-semibold mt-8 mb-2">Bildirimler</h2>
        <p className="mb-4">
          Uygulama, yalnızca maç hatırlatmaları ve uygulama içi güncellemeler için
          bildirim gönderir. Bildirimler cihaz ayarlarından kapatılabilir.
        </p>
  
        <h2 className="text-xl font-semibold mt-8 mb-2">
          Reklamlar ve Üçüncü Taraf Hizmetler
        </h2>
        <p className="mb-4">
          CepteSaha, Google AdMob üzerinden özelleştirilmiş reklamlar gösterir.
          Ayrıca Firebase altyapısı kullanılarak kimlik doğrulama, veri saklama,
          analiz ve bildirim işlevleri sağlanır.
        </p>
  
        <p className="mb-4">
          Daha fazla bilgi için:
          <br />
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            className="text-blue-600 underline"
          >
            Google AdMob Gizlilik Politikası
          </a>
          <br />
          <a
            href="https://firebase.google.com/support/privacy"
            target="_blank"
            className="text-blue-600 underline"
          >
            Firebase Gizlilik ve Güvenlik Politikası
          </a>
        </p>
  
        <h2 className="text-xl font-semibold mt-8 mb-2">
          Veri Saklama ve Güvenlik
        </h2>
        <p className="mb-4">
          Kullanıcı verileri güvenli sunucularda saklanır ve yalnızca uygulama
          işlevleri için kullanılır. Hesap silindiğinde veya talep edildiğinde,
          veriler güvenli bir şekilde sistemden kaldırılır.
        </p>
  
        <h2 className="text-xl font-semibold mt-8 mb-2">Güncellemeler</h2>
        <p className="mb-4">
          Bu politika zaman zaman güncellenebilir. Değişiklikler uygulama içinden
          veya sayfadan duyurulur.
        </p>
  
        <h2 className="text-xl font-semibold mt-8 mb-2">Veri Hakları</h2>
        <p className="mb-4">
          Kullanıcılar diledikleri zaman hesaplarını silebilir ve verilerinin
          sistemden kaldırılmasını talep edebilir.
        </p>
  
        <h2 className="text-xl font-semibold mt-8 mb-2">İletişim</h2>
        <p>
          Sorularınız için:{" "}
          <a
            href="mailto:iletisim@ceptesaha.com"
            className="text-blue-600 underline"
          >
            iletisim@ceptesaha.com
          </a>
        </p>
      </div>
    );
  }
  