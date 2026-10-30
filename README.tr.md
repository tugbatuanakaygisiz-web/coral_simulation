# Mercan Resifi Stres ve Ağarma Simülasyonu

[English](README.md) · **Türkçe**

Pasifik mercan resiflerinin deniz sıcak dalgalarına, emisyon politikalarına ve yerel korumaya nasıl tepki verdiğini
gösteren, tarayıcıda çalışan interaktif bir simülasyon. NOAA resif gözlem verileriyle (2013–2023) başlar ve her resifi
IPCC SSP2-4.5 senaryosu altında 2100 yılına kadar taşır.

Geliştiren: **Tuğba Tuana Kaygısız**

**Canlı demo:** https://tugbatuanakaygisiz-web.github.io/coral_simulation/

![Karanlık temada simülasyon](docs/screenshot-dark.jpg)

## Öne çıkanlar

- **Isı stresi NOAA'nın ölçtüğü gibi.** 432 resif hücresinin her biri, NOAA Coral Reef Watch tanımıyla 12 haftalık
  kayan pencerede Derece Isıtma Haftası (DHW) biriktirir. Ağarmaya tek tek sıcak günler değil, süregelen ısı yol açar.
- **Gerçek gözlemlerle doğrulandı.** Sağlıklı koloni oranı, beş ABD Pasifik bölgesinde NOAA NCRMP ölçümlerini izler.
  Bölgesel iklim ve belgelenmiş sıcak dalgalarla yapılan kalibrasyon hatayı 13.0'dan 5.2 puana indirdi
  (bkz. [Doğrulama](#doğrulama)).
- **Politika deneyleri.** Emisyon kaynakları, okyanus politikaları, restorasyon bütçesi ve haritaya çizilen deniz
  koruma alanları modele etki eder. Üç hazır senaryo ve yan yana karşılaştırma modu farkları görünür kılar.
- **Tekrarlanabilir çalıştırmalar.** Tüm rastgelelik tohumlu bir üreteçten gelir. Adres çubuğundaki `?seed=4242`
  aynı çalıştırmayı birebir tekrarlar; CSV çıktısı her satırda tohumu kaydeder.
- **Okunması kolay.** NOAA ölçüm noktalarıyla dört eşzamanlı grafik, DHW ve stres ısı haritaları, her simülasyon
  yılında güncellenen kısa yazılı özet ve 2100'de sonuç değerlendirmesi.
- **Özenli arayüz.** Aydınlık ve karanlık tema, tam Türkçe/İngilizce dil seçeneği, mobil düzen, klavyeyle kullanılabilen
  kontroller ve WCAG AA metin kontrastı. Resif haritası yaklaşık 60 fps çizilir.

| Aydınlık tema | Mobil |
|---|---|
| ![Aydınlık tema](docs/screenshot-light.jpg) | <img src="docs/screenshot-mobile.jpg" alt="Mobil düzen" width="260"> |

| Grafikler | DHW ısı haritası |
|---|---|
| ![Grafikler](docs/charts.jpg) | ![DHW ısı haritası](docs/heatmap.jpg) |

## Model nasıl çalışır

Bir adım (tick) yaklaşık 12 gündür; 30 adım bir yıl eder. Tam çalıştırma 2013–2100 arasını kapsar.

1. **Deniz yüzeyi sıcaklığı.** Her bölgenin kendi ortalama SST'si, mevsimsel genliği, en sıcak ayı ve En Yüksek Aylık
   Ortalaması (MMM) vardır. Mekânsal farklılık simplex gürültüsü ve üç okyanus akıntısı merkezinden gelir. Gözlenmiş
   bölgesel sıcak dalgalar (2013–2024) yılın doğru zamanında eklenir; 2024 sonrasında yaklaşık beş yılda bir tohumlu,
   El Niño benzeri olaylar oluşur.
2. **Derece Isıtma Haftası.** `HotSpot = SST − MMM`. Yalnızca en az 1 °C olan HotSpot'lar son 12 hafta boyunca toplanır.
   Ağarma yaklaşık 4 DHW'de başlar; 8 DHW ve üzerinde ciddi ağarma ve ölüm görülür.
3. **Mercan stresi.** Stres, ağarma eşiğini aşan DHW ile artar ve ağarmış komşulardan yayılır (koruma alanlarında daha
   az). DHW 1'in altına inince yaşayan koloniler aylar içinde toparlanır. Ölü resif yalnızca sağlıklı komşulardan larva
   yerleşimiyle canlanır; bu 10–15 yıl sürer.
4. **Balıklar.** Av ve avcı popülasyonları Lotka–Volterra dinamiğini izler; taşıma kapasitesi mercan sağlığına bağlıdır.
5. **İklim projeksiyonu.** 2024 sonrasında ısınma SSP2-4.5 ankraj noktalarını izler (2050'de +0.8 °C, 2100'de +1.75 °C).
   İklim gecikmesini yansıtmak için emisyon politikaları 2024–2060 arasında kademeli olarak devreye girer.

## Doğrulama

Tablo, 2013–2023 için simülasyondaki ve NOAA NCRMP'deki sağlıklı koloni yüzdelerini karşılaştırır (RMSE, yüzde puanı,
altı tohumun ortalaması):

| Bölge | Kalibrasyon öncesi | Sonrası |
|---|---:|---:|
| American Samoa | 15.9 | 4.6 |
| Main Hawaiian Islands | 2.6 | 4.5 |
| Mariana Archipelago | 12.2 | 2.0 |
| Northwestern Hawaiian Islands | 8.1 | 8.8 |
| Pacific Remote Island Areas | 17.3 | 3.0 |
| **Tüm bölgeler** | **13.0** | **5.2** |

Kuzeybatı Hawaii'de kalan farkın büyük kısmı anket zamanlamasından kaynaklanır: model her anketin yıl ortasında
yapıldığını varsayar.

## Teknolojiler

- Vanilla JavaScript, HTML5 Canvas ve CSS değişkenleri. Framework ve derleme adımı yok.
- Zaman serisi grafikleri için [Chart.js](https://www.chartjs.org/).
- IBM Plex Serif, Sans ve Mono yazı tipleri; tüm ikonlar sayfa içi SVG.
- Her metnin `anahtar: [Türkçe, English]` çifti olarak durduğu küçük bir dil katmanı (`i18n.js`).

Dikkat çeken uygulama ayrıntıları:

- Resif haritası yalnızca simülasyon ilerlediğinde, en fazla 80 ms'de bir yeniden hesaplanır; ters mesafe ağırlıkları
  tablodan okunur. Bu ikisi kare süresini yaklaşık 67 ms'den 17 ms'ye indirdi.
- Tema renkleri `:root` üzerinde tasarım değişkenleridir; grafikler tema değişince bunları yeniden okur.
- Her amacın kendi tohumlu rastgele akışı vardır (mulberry32). Çalışma sırasında karşılaştırma modunu açmak ana resifin
  geleceğini değiştirmez.

## Yerelde çalıştırma

Repoyu klonlayın ve klasörü herhangi bir statik dosya sunucusuyla açın, örneğin:

```bash
python3 -m http.server 8000
# http://localhost:8000 adresini açın
```

`index.html` doğrudan da açılabilir; bazı tarayıcılar `file://` altında mini harita arka planını engeller.

Kullanışlı adres parametreleri: `?seed=1234` (tekrarlanabilir çalıştırma) ve `?lang=tr` / `?lang=en`.

## Veri kaynakları

- **NOAA NCRMP**: Ulusal Mercan Resifi İzleme Programı, yaklaşık 269.000 yetişkin mercan kolonisi gözlemi (2013–2023).
  Burada kullanılan bölgesel özet [`coral_simulation_dataset.csv`](coral_simulation_dataset.csv) dosyasındadır.
- **NOAA NCEI Küresel Mercan Ağarma Veritabanı** (erişim no. 0228498): 1963–2012 arası 35.991 ağarma kaydı.
- **NOAA Coral Reef Watch**: DHW yöntemi ve 5 km sanal istasyon iklim değerleri.
- **IPCC AR6 SSP2-4.5**: 2024–2100 projeksiyonu için ısınma senaryosu.

## Sınırlar

Bu bir eğitim modelidir, tahmin aracı değildir. İklim değerleri ve sıcak dalga şiddetleri gözlem verisine göre
ayarlanmış yaklaşık değerlerdir. Izgara gerçek batimetri değil, stilize bir resiftir. Politika etkileri niteldir:
kesin sonuçları değil, yönü ve göreli büyüklüğü gösterir.

## Dosya yapısı

```
index.html                   simülasyon, arayüz ve stiller
i18n.js                      Türkçe/İngilizce metinler ve dil değiştirme
coral_simulation_dataset.csv NOAA NCRMP bölgesel özeti (5 bölge)
pacific_map_bg.png           mini harita arka planı
docs/                        ekran görüntüleri ve paylaşım önizlemesi
PROJECT_DOCUMENTATION.md     ayrıntılı teknik dokümantasyon (kontroller, CSV sütunları, durum değişkenleri)
```

## Lisans

Eğitim amaçlı geliştirilmiştir. NOAA verileri NOAA açık veri politikası kapsamında kullanılmıştır.
