# coral_simulation

# 🪸 Mercan Resifi Stres & Ağarma Simülasyonu

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
- **CSS3** — Responsive arayüz tasarımı

---

## ✨ Özellikler

### 🗺️ Harita Simülasyonu
- **24×18 hücrelik** mercan koloni grid'i
- Her hücre bağımsız stres seviyesine sahip
- 5 farklı durum: Sağlıklı → Stresli → Ağarmış → Ölü → İyileşen
- **Bulaşma modeli**: Stres komşu hücrelere organik olarak yayılır
- **3 okyanus akıntısı merkezi** sıcaklık dağılımını etkiler

### 📊 Gerçek Zamanlı Grafikler
- **SST & DHW**: Deniz yüzey sıcaklığı ve Derece Isıtma Haftası
- **Coral Cover**: Mercan örtüsü yüzdesi
- **Prey Fish**: Av balık popülasyonu (Lotka-Volterra modeli)
- **Predator Fish**: Avcı balık popülasyonu

### 🗺️ Isı Haritası Modu
Her grafik başlığına tıklandığında grid üzerinde ilgili metriğin ısı haritasını görselleştirir.

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
| DHW Değeri | Anlam |
|-----------|-------|
| < 4 | Ağarma riski düşük |
| 4 – 8 | Ağarma başlar |
| ≥ 8 | Ciddi ağarma ve ölüm riski |

### Lotka-Volterra Av-Avcı Dinamikleri
Av balık (prey) ve avcı balık (predator) popülasyonları mercan sağlık indeksine bağlı taşıma kapasitesiyle modellenir:
- Mercan örtüsü azaldığında → av balık yaşam alanı daralır → popülasyon düşer
- Av azaldığında → avcı popülasyonu da düşer

### Bulaşma Yayılım Modeli
Stres, komşu mercan kolonilerine IDW (Inverse Distance Weighting) tabanlı yayılır. Korunan alanlarda bu yayılım %70 azaltılır.

### IPCC SSP2-4.5 Projeksiyon Modeli
2024 sonrası sıcaklık artışı, IPCC'nin orta emisyon senaryosu (SSP2-4.5) ankraj noktaları arasında doğrusal interpolasyonla hesaplanır.

---

## 🎮 Kullanıcı Kontrolleri

### Temel Simülasyon Kontrolleri
| Kontrol | Açıklama |
|---------|----------|
| **Region** | Simüle edilecek Pasifik bölgesini seçer |
| **Temperature (°C)** | Başlangıç deniz yüzey sıcaklığı (26–34°C) |
| **Coral Cover (%)** | Başlangıç canlı mercan örtüsü yüzdesi |
| **Recovery Speed** | Mercanların iyileşme hızı (Slow/Medium/Fast) |
| **Restoration Budget** | Ölü mercanları aktif restorasyon bütçesi ($0M–$100M) |

### Simülasyon Butonları
| Buton | İşlev |
|-------|-------|
| ⏸ Pause | Simülasyonu duraklat |
| ▶ Play | Normal hızda başlat/devam et |
| ⏩ Fast | 3x hızda çalıştır |
| ↺ Reset | Simülasyonu sıfırla |
| ⚖ Compare | İki bölgeyi yan yana karşılaştır |
| ⬇ CSV | Simülasyon verilerini CSV olarak indir |

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
- İyileşme hızı **3.25x** artar
- Komşu bulaşma **%70 azalır**
- Hafif ısınma altında aktif iyileşme sağlar
- Maksimum koruma: **%40**

---

## 📁 Dosya Yapısı

```
mercanbeyaz/
├── coral_simulation_final.html  # Ana simülasyon dosyası (monolitik HTML/CSS/JS)
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
1. coral_simulation_final.html dosyasını tarayıcıda açın
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
- Mevsimsel sıcaklık döngüsü sinüsoidal modelle eklenir
- Kitlesel ağarma olayları (1998, 2010, 2014-17, 2024) tarihsel olarak tetiklenir

### Stres Hesaplama
```
yeniStres = eskiStres
  + (sıcaklık - eşik) × 0.0008 × stresÇarpanı    // Sıcaklık stresi
  + komşuStres × 0.0004 × bulaşmaÇarpanı           // Bulaşma
  - 0.0008 × iyileşmeÇarpanı                        // Doğal iyileşme
```

### Durum Geçişleri
| Stres Aralığı | Durum |
|---------------|-------|
| 0.00 – 0.25 | 🟢 HEALTHY (Sağlıklı) |
| 0.25 – 0.55 | 🟡 STRESSED (Stresli) |
| 0.55 – 0.82 | 🟠 BLEACHED (Ağarmış) |
| 0.82 – 1.00 | 🔴 DEAD (Ölü) |

### Performans
- Offscreen canvas ile render optimizasyonu
- SimplexNoise ile prosedürel doku oluşturma
- Mini harita arka planı cache'lenerek tekrar render edilmez

---

## 📜 Lisans

Bu proje eğitim amaçlı geliştirilmiştir. Kullanılan veriler NOAA açık veri politikası kapsamındadır.
