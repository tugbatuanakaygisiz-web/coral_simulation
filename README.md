# 🪸 Mercan Resifi Stres & Ağarma Simülasyonu

### 🔗 Canlı Demo: [https://tugbatuanakaygisiz-web.github.io/coral_simulation/](https://tugbatuanakaygisiz-web.github.io/coral_simulation/)

Pasifik Okyanusu'ndaki mercan resiflerinin iklim değişikliği, insan politikaları ve çevresel faktörler altındaki tepkisini modelleyen **interaktif ekolojik simülasyon**.

---

## 📋 İçindekiler

- [Proje Hakkında](#-proje-hakkında)
- [Özellikler](#-özellikler)
- [Veri Kaynakları](#-veri-kaynakları)
- [Bilimsel Modeller](#-bilimsel-modeller)
- [Kullanıcı Kontrolleri](#-kullanıcı-kontrolleri)
- [Dosya Yapısı](#-dosya-yapısı)
- [Kurulum ve Çalıştırma](#-kurulum-ve-çalıştırma)
- [Veri Çıktısı (CSV)](#-veri-çıktısı-csv)
- [Teknik Detaylar](#-teknik-detaylar)

---

## 🌊 Proje Hakkında

Bu simülasyon, **NOAA NCRMP** ve **NOAA NCEI** veri setlerinden beslenen gerçekçi bir mercan resifi stres modelidir. 2013–2023 arası gerçek gözlem verileriyle başlayıp, **IPCC SSP2-4.5** orta emisyon senaryosu altında 2100 yılına kadar projeksiyon yapar.

### Amaç
- Gerçek verilerle beslenecek
- Kontrol edilebilir faktörler kullanıcı tarafından değiştirilebilecek
- Üretilen veriler analiz etmeye müsait bir formatta (CSV) kaydolacak

### Teknoloji
- **HTML5 Canvas** — Mercan haritası ve ısı haritası görselleştirmesi
- **Chart.js** — Zaman serisi grafikleri (SST, Mercan Örtüsü, Balık Popülasyonu)
- **Vanilla JavaScript** — Simülasyon motoru, veri yönetimi
- **CSS3** — Renk değişkenleriyle (tema token'ları) aydınlık/karanlık tema, responsive düzen
- **IBM Plex** (Serif, Sans, Mono) — Google Fonts'tan yazı ailesi; ikonlar sayfa içi SVG

---

## ✨ Özellikler

### 🗺️ Harita Simülasyonu
- **24×18 hücrelik** mercan koloni grid'i
- Her hücre bağımsız stres seviyesine sahip
- 5 farklı durum: Sağlıklı → Stresli → Ağarmış → Ölü → İyileşen
- **Gerçek DHW modeli**: Her hücre için NOAA Coral Reef Watch yöntemiyle 12 haftalık Derece Isıtma Haftası birikir
- **Bölgesel iklim**: Her bölgenin kendi ortalama SST'si, mevsimsel genliği ve en sıcak ayı (yarımküreye göre) vardır
- **Bulaşma modeli**: Isı stresi altında ağarmış komşular stresi artırır (hastalık yayılımı)
- **3 okyanus akıntısı merkezi** sıcaklık dağılımını etkiler

### Görsel Tasarım ve Tema
- Sağ üstteki **güneş/ay** düğmesiyle **aydınlık** ("Lagün": kumlu beyaz, derin deniz yeşili) ve **karanlık** ("Derin Okyanus": yeşile çalan derin su, deniz camı) mod arasında geçiş yapılır. İlk açılışta cihazın ayarı kullanılır, seçim tarayıcıda hatırlanır.
- Mercan rengi yalnızca mercan verisinde kullanılır; düğmeler deniz renginde, değerler ince çizgilerle ayrılmış tek bir gösterge şeridinde durur.
- Emoji yerine tek renkli çizgi ikonlar kullanılır.
- Resif haritası ve ısı haritası iki modda da koyu kalır; renkleri bilimsel ölçek olduğu için temadan bağımsızdır.

### 🌐 Türkçe / English Dil Seçeneği
- Sağ üstteki **TR | EN** düğmesiyle sayfadaki tüm yazılar (butonlar, ipuçları, grafikler, harita yazıları, tur, bilgi paneli, sonuç ekranı) anında değişir; simülasyon kaldığı yerden devam eder.
- İlk girişte tarayıcı dili kullanılır (Türkçe tarayıcı → TR, diğerleri → EN); seçim tarayıcıda hatırlanır. `?lang=tr` veya `?lang=en` ile bağlantıda da belirtilebilir.
- Tüm metinler `i18n.js` dosyasında `anahtar: [Türkçe, English]` biçiminde tek yerde durur.

### 🎓 Tanıtım Turu
- **Karşılama ekranı yalnızca ilk girişte** açılır; **6 kısa adımlık tur** her bölümün ne işe yaradığını anlatır.
- Sağ alttaki **❓ Tur** turu istenildiği zaman yeniden açar, **?** bilimsel ayrıntıları gösterir.
- **İnteraktif MPA Çizim Eğitimi:** Harita üzerine ilk gelindiğinde aktifleşen görsel yönlendirme ile deniz koruma alanı oluşturma öğreticisi.

### 📊 Anlık Analiz Paneli
- Grafiklerin hemen üstünde yer alan panel, simülasyon boyunca **En Yüksek Ağarma**, **En Kritik Yıl**, **Mevcut Mercan Örtüsü**, **Toplam Ölü Hücre**, **Korunan Alan (%)** ve **2100 Tahmini** metriklerini canlı ve anlık olarak hesaplayıp raporlar.
- Panelin altında simülasyonla birlikte güncellenen **kısa yazılı özet**: güncel sağlıklı koloni oranı ve başlangıç değeri, şu anki ısı stresi ve etkin sıcak dalga, şimdiye kadarki en kötü yıl ve 2100 tahmini ile onu en çok neyin değiştireceği (iki dilde).

### 🎛️ Hızlı Senaryo Butonları
- Kullanıcının tek tıkla önceden tanımlanmış emisyon ve politika senaryolarını simülasyona uygulamasını sağlar:
  - 🔥 **Business as Usual**: Maksimum emisyon, sıfır politika ve koruma.
  - 🌿 **Optimal Policies**: Sıfır emisyon, maksimum politika, alkalinite, fon ve koruma.
  - 🏝️ **MPA Only**: Standart emisyon, maksimum yerel koruma, fon ve bütçe.

### 📊 Gerçek Zamanlı Grafikler
Dört grafik de aynı sayısal yıl eksenini paylaşır ve 2013'ten itibaren tüm çalıştırmayı gösterir; 2024 sonrası
"Projeksiyon" olarak işaretlenir. Her kartta Türkçe başlık, tek cümlelik açıklama, eksen başlıkları/birimleri ve sağ üstte
anlık değer bulunur.

- **🌡️ Deniz Sıcaklığı & Isı Stresi**: Aylık SST (soluk) ve 12 aylık ortalama (kalın, ısınma eğilimi) sol eksende;
  DHW (°C-hafta) sağ eksende. Kesikli çizgiler: bölgenin MMM değeri, DHW 4 (ağarma) ve DHW 8 (ölüm riski).
  Kırmızı şeritler sıcak dalga (ağarma olayı) dönemleridir.
- **🪸 Sağlıklı Mercan Kolonileri**: Sağlıklı koloni yüzdesi — ağarmamış ve ölmemiş kolonilerin tüm mercan kolonilerine oranı (çıplak zemin hariç). NOAA NCRMP'nin `healthy_pct` değeriyle aynı tanımdır; seçilen bölgenin gerçek gözlemleri altın yıldız [⭐] olarak aynı grafikte gösterilir. Grafik 2013'ten itibaren tüm çalıştırmayı gösterir.
- **🐟 Av Balıkları**: Av balık popülasyonu (Lotka-Volterra, göreli indeks) ve kesikli çizgiyle mercan sağlığına bağlı taşıma kapasitesi (K)
- **🦈 Avcı Balıklar**: Avcı balık popülasyonu (göreli indeks)

### 🗺️ Isı Haritası Modu
Her grafik başlığına tıklandığında grid üzerinde ilgili metriğin ısı haritasını görselleştirir. Grafiklere dönmek için
açık sekmenin başlığına tekrar tıklamak (📈) veya "← GRAFİKLER" düğmesi yeterlidir.
- **5 katman:** Deniz sıcaklığı, **Isı stresi (DHW)**, Mercan sağlığı, Av ve Avcı balık yoğunluğu (tahmini).
- **Değer okuma:** Fareyi (telefonda parmağı) harita üzerinde gezdirince o hücrenin sıcaklığı, DHW'si, durumu, stresi ve balık yoğunlukları görünür.
- **Üst bilgi:** Katman, tarih, bölge ve özet (ortalama/en düşük/en yüksek, ağarma riskindeki alan, sağlıklı/ağarmış/ölü oranı).
- **Sabit ölçekler ve eşikler:** Renk çubuğunda MMM, DHW 4/8 ve mercan durum eşikleri (0.25/0.55/0.82) işaretlidir; koruma alanları kesikli çerçeveyle gösterilir.

### 📱 Mobil Uyum
Telefon ve dar ekranlarda düzen tek sütuna geçer (rozetler satırlara yayılır, politikalar ve grafikler alt alta).
Haritada koruma alanı parmakla sürükleyerek çizilir, alana **basılı tutarak** silinir.

### 🌍 Bölge Desteği (5 Bölge)
| Bölge | Koordinat | Veri Yılları |
|-------|-----------|-------------|
| American Samoa | 14.03°S, 170.19°W | 2015, 2016, 2018, 2023 |
| Main Hawaiian Islands | 20.76°N, 156.97°W | 2013, 2016, 2019 |
| Mariana Archipelago | 16.50°N, 145.38°E | 2014, 2017, 2022 |
| Northwestern Hawaiian Islands | 25.75°N, 171.51°W | 2014, 2015, 2016, 2017 |
| Pacific Remote Island Areas | 5.09°N, 164.03°W | 2014–2018, 2023 |

### 🔮 2100 Projeksiyon Tahmini
Mevcut politika ayarlarına göre 2100 yılındaki tahmini mercan sağlığı yüzdesi canlı olarak hesaplanır.

### 🗺️ Mini Harita
Pasifik Okyanusu uydu görüntüsü üzerinde bölge konumlarını gösteren interaktif mini harita. Noktaya tıklayarak bölge değiştirilebilir.

### ⚖️ Karşılaştırma Modu
İki bölgeyi yan yana simüle ederek aynı koşullar altındaki farklı tepkileri karşılaştırma.

### 🏆 Simülasyon Sonu Değerlendirmesi
2100'e ulaşıldığında sağlıklı mercan yüzdesine göre Türkçe puan değerlendirmesi:
- 🏆 **%40+** → "MERCANLARI KURTARDIN!"
- ⚠️ **%25–40** → "KRİTİK AMA UMUT VAR"
- 🔻 **%10–25** → "CİDDİ GERİLEME"
- 💀 **%10 altı** → "EKOSİSTEM ÇÖKTÜ"

---

## 📡 Veri Kaynakları

Tüm veriler gerçek bilimsel kaynaklardan alınmıştır:

### NOAA NCRMP (National Coral Reef Monitoring Program)
- **269.356** yetişkin mercan koloni gözlemi (2013–2023)
- Bölgesel sağlıklı/ağarmış/ölü yüzdeleri
- Ortalama koloni boyutu, eski/yeni ölüm oranları

### NOAA NCEI (National Centers for Environmental Information)
- Küresel Mercan Ağarma Veritabanı (Erişim No: 0228498)
- **35.991 kayıt** — 1963–2012 arası küresel ağarma olayları
- Bleaching Severity Index verileri

### NOAA NCRMP STR (Subsurface Temperature Recorder)
- Kalıcı resif noktalarında su altı sıcaklık kaydedicileri
- 0–30m derinlik profili verileri

### IPCC SSP2-4.5
- 2024–2100 arası sıcaklık projeksiyon verileri
- Orta emisyon senaryosu (moderate pathway)

---

## 🔬 Bilimsel Modeller

### DHW Eşik Modeli (NOAA Coral Reef Watch)
Her hücre için **HotSpot = SST − MMM** (bölgenin En Yüksek Aylık Ortalaması) hesaplanır. Yalnızca **≥ 1°C** olan HotSpot'lar,
son **12 haftalık** kayan pencerede toplanarak DHW'yi oluşturur. Mercan stresi doğrudan bu birikmiş DHW'den türetilir;
böylece kısa süreli sıcaklık zirveleri değil, **süregelen ısı stresi** ağarmaya yol açar.

| DHW Değeri | Anlam |
|-----------|-------|
| < 4 | Ağarma riski düşük |
| 4 – 8 | Ağarma başlar |
| ≥ 8 | Ciddi ağarma ve ölüm riski |

### Lotka-Volterra Av-Avcı Dinamikleri
Av balık (prey) ve avcı balık (predator) popülasyonları mercan sağlık indeksine bağlı taşıma kapasitesiyle modellenir:
- Mercan örtüsü azaldığında → av balık yaşam alanı daralır → popülasyon düşer
- Av azaldığında → avcı popülasyonu da düşer

### Bölgesel İklim Modeli
| Bölge | Yıllık Ort. SST | Mevsimsel Genlik | En Sıcak Ay | MMM |
|-------|----------------|------------------|-------------|-----|
| American Samoa | 28.6°C | ±0.9°C | Mart | 29.5°C |
| Main Hawaiian Islands | 25.9°C | ±1.4°C | Eylül | 27.3°C |
| Mariana Archipelago | 28.5°C | ±0.9°C | Eylül | 29.4°C |
| Northwestern Hawaiian Islands | 24.6°C | ±2.5°C | Ağustos | 27.1°C |
| Pacific Remote Island Areas | 28.3°C | ±0.6°C | Nisan | 28.9°C |

Değerler NOAA Coral Reef Watch 5 km sanal istasyonlarına dayanan yaklaşık iklimsel ortalamalardır. Karşılaştırma modunda iki
bölge kendi iklimleri ve kendi ağarma geçmişleriyle simüle edilir.

### Bölgeye Özel Ağarma Olayları
Her bölge yalnızca kendisini gerçekten etkileyen sıcak dalgaları yaşar; olay bölgenin sıcak mevsiminde (±6 ay) zirve yapar.

| Bölge | Gözlenen sıcak dalgalar (tepe SST anomalisi) |
|-------|-----------------------------------------------|
| American Samoa | 2015 (+0.7°C), 2016 (+1.1°C), 2017 (+0.6°C), 2020 (+0.8°C), 2024 (+1.0°C) |
| Main Hawaiian Islands | 2014 (+0.9°C), 2015 (+1.6°C, Batı Hawaii'de ağır ölüm), 2019 (+1.0°C) |
| Mariana Archipelago | 2013 (+0.8°C), 2014 (+1.0°C), 2016 (+0.8°C), 2017 (+1.0°C), 2024 (+1.0°C) |
| Northwestern Hawaiian Islands | 2014 (+1.4°C, Lisianski/Pearl & Hermes), 2015 (+0.6°C), 2017 (+0.9°C), 2019 (+0.8°C) |
| Pacific Remote Island Areas | 2015 (+0.8°C), 2016 (+1.0°C, 2015–16 El Niño), 2024 (+1.0°C) |

Hangi yılın hangi bölgeyi etkilediği NOAA Coral Reef Watch uyarılarına ve yayımlanmış ağarma araştırmalarına dayanır; şiddetler
yaklaşıktır ve simülasyondaki sağlıklı koloni oranının NOAA NCRMP ölçümlerini izlemesi için ayarlanmıştır. 2013–2023 döneminde
model ile NOAA ölçümleri arasındaki ortalama fark (RMSE, 6 tohum ortalaması) **13.0 → 5.2 puana** indi. Kuzeybatı Hawaii'de
kalan farkın (≈9 puan) büyük kısmı anket zamanlamasından kaynaklanır: model ölçümleri yıl ortasında varsayar.

### Bulaşma ve İyileşme Modeli
- Isı stresi altındaki hücrelerde ağarmış komşular stresi artırır (korunan alanlarda %70 daha az).
- Isı stresi geçince (DHW < 1) ağarmış koloniler simbiyontlarını geri kazanarak **aylar içinde** toparlanır.
- Ölü resif yalnızca sağlıklı komşulardan **larva yerleşimi** ile canlanır; bu süreç **10–15 yıl** sürer.

### IPCC SSP2-4.5 Projeksiyon Modeli
2024 sonrası sıcaklık artışı, SSP2-4.5 senaryosu için tropikal deniz yüzeyi ısınmasını temsil eden ankraj noktaları arasında
doğrusal interpolasyonla hesaplanır (2013–2023 ortalamasına göre 2050'de +0.8°C, 2100'de +1.75°C).
- Emisyon politikalarının etkisi iklim gecikmesi nedeniyle **2024–2060 arasında kademeli** olarak devreye girer.
- 2024 sonrası **rastgele deniz sıcak dalgaları** (El Niño benzeri, yaklaşık 5 yılda bir) eklenir; her çalıştırma farklıdır.

---

## 🎮 Kullanıcı Kontrolleri

### Temel Simülasyon Kontrolleri
| Kontrol | Açıklama |
|---------|----------|
| **Region** | Simüle edilecek Pasifik bölgesini seçer |
| **Temperature (°C)** | Bölgenin yıllık ortalama SST'si (22–34°C). Bölge seçildiğinde iklimsel ortalamaya ayarlanır; artırmak kalıcı ısınma anomalisi ekler |
| **Coral Cover (%)** | Başlangıç canlı mercan örtüsü yüzdesi |
| **Recovery Speed** | Doğal iyileşme hızı çarpanı (Slow ×0.6 / Medium ×1 / Fast ×1.6) |
| **Restoration Budget** | Ölü mercanları aktif restorasyon bütçesi ($0M–$100M) |

### Simülasyon Butonları
| Buton | İşlev |
|-------|-------|
| ⏸ Pause | Simülasyonu duraklat |
| ▶ Play | Normal hızda başlat/devam et |
| ⏩ Fast | 3x hızda çalıştır |
| ↺ Reset | Simülasyonu sıfırla (aynı tohumla aynı çalıştırma tekrarlanır) |
| Seed / 🎲 | Tohum: aynı tohum ve aynı ayarlar birebir aynı simülasyonu üretir; 🎲 yeni rastgele tohum seçer |
| ⚖ Compare | İki bölgeyi yan yana karşılaştır |
| ⬇ CSV | Simülasyon verilerini CSV olarak indir |

### Hızlı Senaryo Seçim Butonları
| Buton | İşlev / Açıklama |
|-------|------------------|
| 🔥 Business as Usual | Tüm emisyonları maksimuma çıkarır, tüm politikaları ve korumaları devre dışı bırakır. |
| 🌿 Optimal Policies | Tüm emisyonları sıfırlar, tüm yeşil politikaları, alkaliniteyi ve bütçeyi maksimuma çıkarır. |
| 🏝️ MPA Only | Emisyonları orta seviyede tutarken yerel koruma (MPA, bütçe) ve erken uyarıyı maksimize eder. |

### Emisyon Kaynakları (Policy Controls)
| Kaynak | Varsayılan | Etkisi |
|--------|-----------|--------|
| 🏭 Coal & Industry | 50 | Endüstriyel CO₂ — en büyük ısınma etkeni |
| ✈️ Aviation & Ship | 50 | Uluslararası taşımacılık emisyonları |
| 🌾 Livestock & Rice | 50 | Tarımsal metan (CH₄) emisyonları |
| 🌲 Forest Loss | 50 | Ormansızlaşma — karbon yutağı kaybı |
| ⚡ Clean Energy Mix | 30 | Temiz enerji payı — ısınmayı yavaşlatır |
| 🔬 CCS Technology | 0 | Karbon yakalama ve depolama teknolojisi |

### Okyanus & Resif Politikaları
| Kontrol | Açıklama |
|---------|----------|
| 🇺🇸 US / 🇨🇳 CN / 🇪🇺 EU | İklim anlaşmaları — kapatıldığında ısınma hızlanır |
| 🌊 Alkalinity Enhancement | Mercanların ağarma eşiğini yükseltir |
| ✈️ Tourism Regulation | Turizm düzenlemesi (Kontrolsüz→Sıkı) |
| 🐟 Fishing Quota | Balıkçılık kotası (Yok→Sürdürülebilir→Sıkı) |
| 💰 GEF Reef Finance | Uluslararası mercan koruma fonu |
| 🚨 EWS Auto-Protect | Erken uyarı sistemi — otomatik koruma |

### Deniz Koruma Alanları (MPA)
Harita üzerinde **sürükleyerek** koruma alanı çizilebilir. Korunan mercanlar:
- Stres birikimi **%77 azalır**
- İyileşme hızı **1.8x** artar
- Komşu bulaşma **%70 azalır**
- Maksimum koruma: **%40**

---

## 📁 Dosya Yapısı

```
mercanbeyaz/
├── index.html                   # Ana simülasyon dosyası (HTML/CSS/JS)
├── i18n.js                      # Türkçe/İngilizce metinler ve dil değiştirme
├── coral_simulation_dataset.csv # NOAA kaynak veri seti (21 kayıt, 5 bölge)
├── pacific_map_bg.png           # Mini harita uydu arka plan görseli
├── PROJECT_DOCUMENTATION.md     # Proje dokümantasyonu
└── README.md                    # Bu dosya
```

---

## 🚀 Kurulum ve Çalıştırma

### Gereksinimler
- Modern web tarayıcı (Chrome, Firefox, Edge)
- İnternet bağlantısı (Chart.js ve Google Fonts CDN için)

### Çalıştırma
```
1. index.html dosyasını tarayıcıda açın
2. Simülasyon otomatik olarak başlar (▶ Play)
3. Sol panelden kontrolleri ayarlayın
4. Harita üzerinde sürükleyerek koruma alanı çizin
5. 2100'e ulaştığında sonuç değerlendirmesi görün
```

> **Not:** Dosyayı bir HTTP sunucu üzerinden açmak mini harita arka plan görselinin (pacific_map_bg.png) yüklenmesini sağlar. `file://` protokolü ile bazı tarayıcılarda CORS kısıtlaması olabilir.

---

## 📊 Veri Çıktısı (CSV)

Simülasyon sırasında **⬇ CSV** butonuna tıklayarak tüm simülasyon verilerini indirebilirsiniz.

### CSV Sütunları
| Sütun | Açıklama |
|-------|----------|
| `tick` | Simülasyon adımı |
| `seed` | Çalıştırmanın tohumu (aynı tohumla yeniden üretilebilir) |
| `year` | Simülasyon yılı |
| `month` | Ay |
| `region` | Seçilen bölge |
| `sst` | Deniz Yüzey Sıcaklığı (°C) |
| `dhw` | Derece Isıtma Haftası |
| `avg_stress` | Ortalama stres seviyesi (0–1) |
| `coral_cover_pct` | Mercan örtüsü (%) |
| `healthy_pct` | Sağlıklı hücre yüzdesi |
| `dead_pct` | Ölü hücre yüzdesi |
| `bleached_pct` | Ağarmış hücre yüzdesi |
| `recovering_pct` | İyileşen hücre yüzdesi |
| `colony_healthy_pct` / `colony_bleached_pct` / `colony_dead_pct` | Kolonilerin sağlıklı/ağarmış/ölü oranı (NOAA `healthy_pct`/`bleached_pct`/`dead_pct` ile doğrudan karşılaştırılabilir) |
| `prey_population` | Av balık popülasyonu |
| `predator_population` | Avcı balık popülasyonu |
| `protected_pct` | Korunan alan yüzdesi |
| `is_projected` | Projeksiyon verisi mi (1/0) |
| `projected_2100_health_pct` | 2100 tahmini sağlık yüzdesi |
| Emisyon ve politika parametreleri | Tüm slider/toggle değerleri |

---

## 🔧 Teknik Detaylar

### Simülasyon Döngüsü
- Her **tick** = ~12 gün (30 tick ≈ 1 yıl)
- Toplam simülasyon: **2013–2100** (87 yıl, ~2610 tick)
- Mevsimsel sıcaklık döngüsü bölgenin en sıcak ayına göre kosinüs modeliyle eklenir
- Ağarma olayları 2013–2024 arasında bölgeye özel gözlemlere göre, 2024 sonrası ise rastgele (tohumlu) sıcak dalgalarla tetiklenir

### Stres Hesaplama
```
HotSpot = yerelSST - MMM
DHW     = Σ (HotSpot ≥ 1 ise HotSpot × 1.74 hafta), son 7 tick (≈12 hafta)
eşik    = 4 DHW + alkalinite bonusu (0–3 DHW)

DHW > eşik - 1 ise:
  stres += (DHW - eşik + 1) × 0.0045 × stresÇarpanı      // Termal ağarma
  stres += ağarmışKomşu × 0.0015 × bulaşmaÇarpanı         // Hastalık yayılımı
DHW < 1 ise:
  yaşayan koloni: stres -= 0.008 × iyileşmeÇarpanı         // Simbiyont geri kazanımı (aylar)
  ölü resif:      stres -= 0.0003 × sağlıklıKomşu × iyileşmeÇarpanı  // Larva yerleşimi (10–15 yıl)
```

### Durum Geçişleri
| Stres Aralığı | Durum |
|---------------|-------|
| 0.00 – 0.25 | 🟢 HEALTHY (Sağlıklı) |
| 0.25 – 0.55 | 🟡 STRESSED (Stresli) |
| 0.55 – 0.82 | 🟠 BLEACHED (Ağarmış) |
| 0.82 – 1.00 | 🔴 DEAD (Ölü) |

### Tekrarlanabilirlik (Seed)
Tüm rastgelelik (başlangıç resifi, okyanus akıntıları, sıcaklık deseni, gelecekteki sıcak dalgalar, restorasyon)
tohumlanmış bir üreteçten (mulberry32) gelir. Her amaç için ayrı bir akış kullanılır; böylece örneğin karşılaştırma
modunu çalışma sırasında açmak ana resifin geleceğini değiştirmez.
- Politikaları adil karşılaştırmak için tohumu sabit tutup yalnızca ayarları değiştirin.
- Tohum adres çubuğuna yazılır (`?seed=4242`); bağlantıyı paylaşan kişi aynı çalıştırmayı görür.

### Performans
- Offscreen canvas ile render optimizasyonu
- SimplexNoise ile prosedürel doku oluşturma
- Mini harita arka planı cache'lenerek tekrar render edilmez

---

## 📜 Lisans

Bu proje eğitim amaçlı geliştirilmiştir. Kullanılan veriler NOAA açık veri politikası kapsamındadır.

---

*Son güncelleme: Ekim 2026*
