// ── Language support (Türkçe / English) ──
// Every user-visible text lives here as key: [Türkçe, English].
// HTML elements opt in with data-i18n (text), data-i18n-html (markup) or data-i18n-title (tooltip);
// scripts call t(key, { placeholder: value }) and re-render on onLangChange().
(function () {
  const STRINGS = {
    // Page
    'page.title': [`Mercan Resifi Ağarma Simülasyonu`, `Coral Reef Bleaching Simulation`],
    'page.description': [`Gerçek NOAA verilerine dayanan, iklim değişikliğinin Pasifik mercan resiflerine etkisini modelleyen interaktif simülasyon.`, `Interactive simulation of how climate change affects Pacific coral reefs, built on real NOAA data.`],
    'app.title': [`🪸 Mercan Resifi Stres & Ağarma Monitörü`, `🪸 Coral Reef Stress & Bleaching Monitor`],
    'app.titlePlain': [`Mercan Resifi Stres & Ağarma Monitörü`, `Coral Reef Stress & Bleaching Monitor`],
    'lang.switch': [`Dil / Language`, `Language / Dil`],

    // Regions (option values stay in English; these are display names)
    'region.American Samoa': [`Amerikan Samoası`, `American Samoa`],
    'region.Main Hawaiian Islands': [`Ana Hawaii Adaları`, `Main Hawaiian Islands`],
    'region.Mariana Archipelago': [`Mariana Takımadaları`, `Mariana Archipelago`],
    'region.Northwestern Hawaiian Islands': [`Kuzeybatı Hawaii Adaları`, `Northwestern Hawaiian Islands`],
    'region.Pacific Remote Island Areas': [`ABD Pasifik Uzak Adaları`, `Pacific Remote Island Areas`],

    // Months
    'months': [`Oca,Şub,Mar,Nis,May,Haz,Tem,Ağu,Eyl,Eki,Kas,Ara`, `Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec`],

    // Status badges
    'badge.year': [`Yıl`, `Year`],
    'badge.year.tip': [`Simülasyonun bulunduğu yıl. 2024 sonrası projeksiyondur.`, `Current simulation year. Years after 2024 are projections.`],
    'badge.projected': [`PROJEKSİYON`, `PROJECTED`],
    'badge.sst.tip': [`Deniz Yüzey Sıcaklığı (SST): resifin ortalama su sıcaklığı.`, `Sea Surface Temperature (SST): average water temperature over the reef.`],
    'badge.dhw.tip': [`Derece Isıtma Haftası (DHW): son 12 haftada biriken ısı stresi. 4 üstü ağarma, 8 üstü ölüm riski.`, `Degree Heating Weeks (DHW): heat stress accumulated over the last 12 weeks. Above 4 bleaching, above 8 mortality risk.`],
    'badge.stress': [`Stres`, `Stress`],
    'badge.stress.tip': [`Ortalama stres seviyesi (0–1). Yükseldikçe mercan sağlığı kötüleşir.`, `Average stress level (0–1). Higher means worse coral health.`],
    'badge.tick': [`Adım`, `Tick`],
    'badge.tick.tip': [`Simülasyon adımı. 30 adım ≈ 1 yıl.`, `Simulation step. 30 ticks ≈ 1 year.`],
    'badge.protected': [`Korunan`, `Protected`],
    'badge.protected.tip': [`Haritada çizilen Deniz Koruma Alanlarının (MPA) oranı. En fazla %40.`, `Share of the map covered by Marine Protected Areas (MPA). Maximum 40%.`],
    'badge.clearAll': [`✕ Tümünü Sil`, `✕ Clear All`],
    'badge.clearAll.tip': [`Tüm koruma alanlarını sil`, `Remove all protected areas`],
    'card.dead': [`💀 Ölü Koloniler`, `💀 Dead Colonies`],
    'card.dead.tip': [`Ölü mercan hücresi sayısı. Restorasyon bütçesiyle yeniden dikilebilir.`, `Number of dead coral cells. Restoration budget can replant them.`],
    'card.bleached': [`🌡️ Ağaran`, `🌡️ Bleaching`],
    'card.bleached.tip': [`Şu anda ağarmış mercan hücresi sayısı. Isı stresi geçerse aylar içinde toparlanabilir.`, `Number of currently bleached coral cells. They can recover within months once the heat stress passes.`],
    'card.hotzone': [`📍 Sıcak Bölge`, `📍 Hot Zone`],
    'card.hotzone.tip': [`Stresin en yüksek olduğu bölge (KD/KB/GD/GB/MERKEZ).`, `Area with the highest stress (NE/NW/SE/SW/CENTER).`],
    'card.recovering': [`💚 İyileşen`, `💚 Recovering`],
    'card.recovering.tip': [`Ölmüş ve yeniden büyümekte olan resif oranı.`, `Share of the reef that died and is growing back.`],
    'card.proj2100': [`🔮 2100 Tahmini`, `🔮 2100 Forecast`],
    'card.proj2100.tip': [`Mevcut ayarlarla 2100'de beklenen sağlıklı mercan oranı (IPCC SSP2-4.5 temelli).`, `Expected healthy coral share in 2100 with the current settings (based on IPCC SSP2-4.5).`],
    'zone.NE': [`KD`, `NE`], 'zone.NW': [`KB`, `NW`], 'zone.SE': [`GD`, `SE`], 'zone.SW': [`GB`, `SW`], 'zone.CENTER': [`MERKEZ`, `CENTER`],
    'minimap.tip': [`Bölgelerin Pasifik'teki konumu (NOAA NCRMP koordinatları). Noktaya tıklayarak bölge değiştirebilirsin.`, `Location of the regions in the Pacific (NOAA NCRMP coordinates). Click a dot to switch region.`],
    'minimap.lat': [`Enlem`, `Lat`],
    'minimap.lon': [`Boylam`, `Lon`],

    // Controls
    'ctl.region': [`Bölge`, `Region`],
    'ctl.region.tip': [`Simüle edilecek mercan resifi bölgesi. Her bölgenin kendi iklimi, NOAA ölçümleri ve ağarma geçmişi var.`, `Coral reef region to simulate. Each has its own climate, NOAA surveys and bleaching history.`],
    'ctl.temp': [`Sıcaklık (°C)`, `Temperature (°C)`],
    'ctl.temp.tip': [`Bölgenin yıllık ortalama deniz sıcaklığı. Bölge seçilince gerçek ortalamaya ayarlanır; artırmak kalıcı ek ısınma ekler.`, `Region's annual mean sea temperature. Set to the real average when a region is chosen; raising it adds permanent extra warming.`],
    'ctl.cover': [`Mercan Örtüsü (%)`, `Coral Cover (%)`],
    'ctl.cover.tip': [`Başlangıçta zeminin ne kadarının mercanla kaplı olduğu.`, `How much of the seafloor is covered by coral at the start.`],
    'ctl.recovery': [`İyileşme Hızı`, `Recovery Speed`],
    'ctl.recovery.tip': [`Mercanların stresten doğal toparlanma hızı.`, `How fast corals naturally recover from stress.`],
    'ctl.recovery.slow': [`Yavaş`, `Slow`],
    'ctl.recovery.medium': [`Orta`, `Medium`],
    'ctl.recovery.fast': [`Hızlı`, `Fast`],
    'ctl.budget': [`RESTORASYON BÜTÇESİ`, `RESTORATION BUDGET`],
    'ctl.budget.tip': [`Ölü mercan alanlarına fidanlıkta yetiştirilmiş koloni dikmek için bütçe.`, `Budget for planting nursery-grown colonies on dead reef.`],
    'ctl.budget.note': [`Ölü kolonilerin aktif restorasyonu`, `Active restoration of dead coral colonies`],
    'scn.bau': [`🔥 Her Şey Aynı (BAU)`, `🔥 Business as Usual`],
    'scn.bau.tip': [`Emisyonlar en yüksek, iklim anlaşmaları ve koruma kapalı.`, `Maximum emissions, climate agreements and protection switched off.`],
    'scn.optimal': [`🌿 En İyi Politikalar`, `🌿 Optimal Policies`],
    'scn.optimal.tip': [`Emisyonlar en düşük, tüm politikalar ve resif önlemleri açık.`, `Minimum emissions, every policy and reef measure switched on.`],
    'scn.mpa': [`🏝 Sadece Yerel Koruma`, `🏝 MPA Only`],
    'scn.mpa.tip': [`Emisyonlar orta düzeyde; yalnızca yerel önlemler (restorasyon, fon, turizm/balıkçılık kuralları, erken uyarı) en yüksek.`, `Emissions stay moderate; only local measures (restoration, funding, tourism/fishing rules, early warning) are maxed out.`],
    'btn.pause': [`⏸ Duraklat`, `⏸ Pause`],
    'btn.pause.tip': [`Simülasyonu duraklat.`, `Pause the simulation.`],
    'btn.play': [`▶ Oynat`, `▶ Play`],
    'btn.play.tip': [`Normal hızda oynat.`, `Play at normal speed.`],
    'btn.fast': [`⏩ Hızlı`, `⏩ Fast`],
    'btn.fast.tip': [`3 kat hızda oynat.`, `Play at 3× speed.`],
    'btn.reset': [`↺ Sıfırla`, `↺ Reset`],
    'btn.reset.tip': [`Simülasyonu aynı tohumla baştan başlat.`, `Restart the simulation with the same seed.`],
    'seed.label': [`Tohum`, `Seed`],
    'seed.tip': [`Tohum (seed): aynı tohum ve aynı ayarlar her seferinde birebir aynı simülasyonu üretir. Politikaları adil karşılaştırmak için sabit tut.`, `Seed: the same seed and settings always reproduce exactly the same run. Keep it fixed to compare policies fairly.`],
    'seed.new.tip': [`Yeni rastgele tohum seç ve yeniden başlat`, `Pick a new random seed and restart`],
    'btn.compare': [`⚖ Karşılaştır`, `⚖ Compare`],
    'btn.compare.tip': [`İki bölgeyi yan yana, aynı politikalarla çalıştır.`, `Run two regions side by side under the same policies.`],
    'btn.csv.tip': [`Simülasyon verilerini CSV olarak indir`, `Download the simulation data as CSV`],

    // Policy panel
    'pol.title': [`🌍 POLİTİKA KONTROLLERİ`, `🌍 POLICY CONTROLS`],
    'pol.netWarming': [`Net Isınma:`, `Net Warming:`],
    'pol.netWarming.tip': [`Emisyon ayarlarının ısınmaya net etkisi.`, `Net warming effect of the emission settings.`],
    'pol.ph': [`pH Riski:`, `pH Risk:`],
    'pol.ph.tip': [`Okyanus asitlenmesi riski. Alkalinite artırma ile düşer.`, `Ocean acidification risk. Lowered by alkalinity enhancement.`],
    'pol.fish': [`Balık:`, `Fish:`],
    'pol.fish.tip': [`Balık stoklarının durumu (balıkçılık kotasına bağlı).`, `State of fish stocks (depends on the fishing quota).`],
    'pol.policies': [`Anlaşmalar:`, `Policies:`],
    'pol.policies.tip': [`Yürürlükteki iklim anlaşması sayısı (ABD, Çin, AB).`, `Number of climate agreements in force (US, China, EU).`],
    'pol.active': [`{n}/3 Aktif`, `{n}/3 Active`],
    'pol.stable': [`STABİL`, `STABLE`],
    'pol.high': [`YÜKSEK`, `HIGH`],
    'pol.moderate': [`ORTA`, `MODERATE`],
    'pol.buffered': [`TAMPONLU`, `BUFFERED`],
    'pol.depleting': [`AZALIYOR`, `DEPLETING`],
    'pol.recovering': [`TOPARLANIYOR`, `RECOVERING`],
    'pol.emissions': [`Emisyon Kaynakları`, `Emission Sources`],
    'pol.ind': [`🏭 Kömür & Sanayi`, `🏭 Coal & Industry`],
    'pol.ind.tip': [`Kömür ve ağır sanayiden gelen CO₂. Isınmanın en büyük kaynağı.`, `CO₂ from coal and heavy industry. The largest driver of warming.`],
    'pol.trans': [`✈️ Havacılık & Gemi`, `✈️ Aviation & Ship`],
    'pol.trans.tip': [`Uçak ve gemi taşımacılığı emisyonları.`, `Emissions from aviation and shipping.`],
    'pol.agr': [`🌾 Hayvancılık & Çeltik`, `🌾 Livestock & Rice`],
    'pol.agr.tip': [`Hayvancılık ve çeltik tarımından gelen metan (CH₄).`, `Methane (CH₄) from livestock and rice farming.`],
    'pol.def': [`🌲 Orman Kaybı`, `🌲 Forest Loss`],
    'pol.def.tip': [`Ormansızlaşma: kesilen ağaçlar karbon salar ve CO₂ emmeyi bırakır.`, `Deforestation: felled trees release carbon and stop absorbing CO₂.`],
    'pol.ren': [`⚡ Temiz Enerji Payı`, `⚡ Clean Energy Mix`],
    'pol.ren.tip': [`Güneş, rüzgâr gibi temiz enerjinin payı. Arttıkça ısınma yavaşlar.`, `Share of clean energy such as solar and wind. Higher slows warming.`],
    'pol.ccs': [`🔬 Karbon Yakalama (CCS)`, `🔬 CCS Technology`],
    'pol.ccs.tip': [`Karbon yakalama ve depolama: CO₂'yi atmosfere salınmadan tutar.`, `Carbon capture and storage: traps CO₂ before it reaches the atmosphere.`],
    'pol.level.tip': [`0 = yok, 100 = en yüksek`, `0 = none, 100 = maximum`],
    'pol.netEffect': [`NET EMİSYON ETKİSİ: {v}`, `NET EMISSION EFFECT: {v}`],
    'pol.ocean': [`Okyanus & Resif Politikaları`, `Ocean & Reef Policies`],
    'pol.us.tip': [`ABD iklim politikası. Kapatılırsa ısınma ×1.4 hızlanır.`, `US climate policy. Switching it off speeds up warming ×1.4.`],
    'pol.cn.tip': [`Çin iklim politikası. Kapatılırsa ısınma ×1.27 hızlanır.`, `China climate policy. Switching it off speeds up warming ×1.27.`],
    'pol.eu.tip': [`AB iklim politikası. Kapatılırsa ısınma ×1.08 hızlanır.`, `EU climate policy. Switching it off speeds up warming ×1.08.`],
    'pol.ph.label': [`🌊 Alkalinite Artırma`, `🌊 Alkalinity Enh.`],
    'pol.ph.label.tip': [`Deniz suyunun alkalinitesini artırır; mercanlar ağarmadan önce daha fazla ısı stresine dayanır.`, `Raises seawater alkalinity; corals tolerate more heat stress before bleaching.`],
    'pol.tourism': [`✈️ Turizm Düzenlemesi`, `✈️ Tourism Reg`],
    'pol.tourism.tip': [`Resifteki turizmin denetimi. Kontrolsüz turizm stresi artırır.`, `How tightly reef tourism is regulated. Unregulated tourism adds stress.`],
    'pol.tourism.0': [`Kontrolsüz`, `Unregulated`],
    'pol.tourism.1': [`Düşük`, `Low`],
    'pol.tourism.2': [`Orta`, `Medium`],
    'pol.tourism.3': [`Sıkı`, `Strict`],
    'pol.fishing': [`🐟 Balıkçılık Kotası`, `🐟 Fishing Quota`],
    'pol.fishing.tip': [`Avlanma sınırı. Kota yoksa balıklar azalır, sıkı kota balıkları çoğaltır.`, `Catch limit. With no quota fish decline; a strict quota lets them recover.`],
    'pol.fishing.0': [`Yok`, `None`],
    'pol.fishing.1': [`Sürdürülebilir`, `Sustainable`],
    'pol.fishing.2': [`Sıkı`, `Strict`],
    'pol.imf': [`💰 GEF Resif Fonu`, `💰 GEF Reef Finance`],
    'pol.imf.tip': [`Uluslararası mercan koruma fonu. İyileşmeyi ve restorasyonu güçlendirir.`, `International reef protection fund. Boosts recovery and restoration.`],
    'pol.ews': [`🚨 Erken Uyarı Sistemi`, `🚨 Early Warning System`],
    'pol.ews.tip': [`Açıksa bölgesel DHW 4'ü aşınca en stresli 10 hücre geçici olarak korunur.`, `When on, the 10 most stressed cells are temporarily protected once regional DHW exceeds 4.`],
    'pol.ews.badge': [`Otomatik koruma: {n} alan`, `Auto-protect: {n} sites`],

    // Reef map
    'map.paused': [`⏸ DURAKLATILDI`, `⏸ PAUSED`],
    'map.warnAll': [`⚠ BÜYÜK İKLİM ANLAŞMALARI ÇÖKTÜ`, `⚠ MAJOR CLIMATE AGREEMENTS COLLAPSED`],
    'map.warnUs': [`⚠ ABD İKLİM POLİTİKASINDAN ÇEKİLDİ — ISINMA HIZLANIYOR`, `⚠ US CLIMATE POLICY WITHDRAWN — ACCELERATED WARMING`],
    'map.colorbar': [`Mercan Sağlığı`, `Coral Health`],
    'map.canvas.tip': [`Koruma alanı çizmek için sürükle. Silmek için alanın üstüne gel ve sağ tıkla.`, `Drag to draw a protected area. Hover over an area and right-click to delete it.`],
    'state.healthy': [`Sağlıklı`, `Healthy`],
    'state.stressed': [`Stresli`, `Stressed`],
    'state.bleached': [`Ağarmış`, `Bleached`],
    'state.dead': [`Ölü`, `Dead`],
    'state.recovering': [`İyileşen`, `Recovering`],
    'legend.healthy': [`Sağlıklı (SST rengi)`, `Healthy (SST color)`],
    'legend.stressed': [`Stresli (noktalı)`, `Stressed (stipple)`],
    'legend.bleached': [`Ağarmış (parlak)`, `Bleached (hotspot)`],
    'legend.dead': [`Ölü (karartılmış)`, `Dead (darkened)`],
    'legend.recovering': [`İyileşen (parıltılı)`, `Recovering (shimmer)`],
    'event.global': [`Küresel Ağarma {year}`, `Global Bleaching {year}`],
    'event.heatwave': [`Deniz Sıcak Dalgası {year}`, `Marine Heatwave {year}`],
    'toast.mpaLimit': [`⚠ Koruma alanı sınırına ulaşıldı (en fazla %40)`, `⚠ Protected area limit reached (40% max)`],
    'toast.mpaCleared': [`Tüm koruma alanları silindi`, `Cleared all protected areas`],
    'csv.empty': [`Henüz kayıtlı veri yok. Simülasyonu çalıştırın.`, `No data recorded yet. Run the simulation first.`],

    // Analysis panel
    'ap.title': [`📊 SİMÜLASYON ANALİZİ`, `📊 SIMULATION ANALYSIS`],
    'ap.peak': [`En Yüksek Ağarma:`, `Peak Bleaching:`],
    'ap.worst': [`En Kritik Yıl:`, `Worst Year:`],
    'ap.coralNow': [`Mevcut Mercan Örtüsü:`, `Current Coral Cover:`],
    'ap.dead': [`Toplam Ölü Hücre:`, `Dead Cells:`],
    'ap.protected': [`Korunan Alan:`, `Protected Area:`],
    'ap.proj': [`2100 Tahmini:`, `2100 Forecast:`],

    // Charts
    'chart.open': [`Haritayı aç`, `Open map`],
    'chart.temp.title': [`🌡️ Deniz Sıcaklığı & Isı Stresi`, `🌡️ Sea Temperature & Heat Stress`],
    'chart.temp.sub': [`Turuncu: deniz sıcaklığı (kalın çizgi 12 aylık ortalama). Kırmızı alan: biriken ısı stresi (DHW) — 4 üstü ağarma, 8 üstü ölüm riski. Kırmızı şeritler: sıcak dalgalar.`, `Orange: sea temperature (thick line is the 12-month average). Red area: accumulated heat stress (DHW) — above 4 bleaching, above 8 mortality risk. Red bands: heatwaves.`],
    'chart.temp.tip': [`Deniz yüzey sıcaklığı (sol eksen) ve Derece Isıtma Haftası (DHW, sağ eksen). DHW, sıcaklığın bölgenin en sıcak ay ortalamasını (MMM) en az 1°C aştığı haftaların son 12 haftadaki toplamıdır. Harita için başlığa tıkla.`, `Sea surface temperature (left axis) and Degree Heating Weeks (DHW, right axis). DHW sums the weeks in the last 12 when temperature exceeded the region's warmest-month mean (MMM) by at least 1°C. Click the title for the map.`],
    'chart.coral.title': [`🪸 Sağlıklı Mercan Kolonileri`, `🪸 Healthy Coral Colonies`],
    'chart.coral.sub': [`Ağarmamış ve ölmemiş kolonilerin oranı (%). ⭐ Aynı bölgede NOAA dalgıçlarının gerçek ölçümü.`, `Share of colonies that are neither bleached nor dead (%). ⭐ Real measurements by NOAA divers in the same region.`],
    'chart.coral.tip': [`Ağarmamış ve ölmemiş kolonilerin tüm kolonilere oranı (çıplak zemin hariç); NOAA NCRMP ile aynı tanım. Harita için başlığa tıkla.`, `Colonies that are neither bleached nor dead, as a share of all colonies (bare rock excluded); same definition as NOAA NCRMP. Click the title for the map.`],
    'chart.prey.title': [`🐟 Av Balıkları`, `🐟 Prey Fish`],
    'chart.prey.sub': [`Resifte yaşayan küçük balıklar. Kesikli çizgi: resifin besleyebileceği en fazla balık (taşıma kapasitesi, mercan sağlığına bağlı).`, `Small fish living on the reef. Dashed line: the most fish the reef can support (carrying capacity, depends on coral health).`],
    'chart.prey.tip': [`Av balık popülasyonu (Lotka-Volterra modeli, göreli indeks). Mercan öldükçe taşıma kapasitesi düşer. Harita için başlığa tıkla.`, `Prey fish population (Lotka-Volterra model, relative index). Carrying capacity drops as coral dies. Click the title for the map.`],
    'chart.pred.title': [`🦈 Avcı Balıklar`, `🦈 Predator Fish`],
    'chart.pred.sub': [`Av balıklarıyla beslenen büyük balıklar (orfoz, köpekbalığı). Av azaldıkça gecikmeyle düşer.`, `Large fish that eat prey fish (groupers, sharks). They decline with a delay as prey runs out.`],
    'chart.pred.tip': [`Avcı balık popülasyonu (Lotka-Volterra modeli, göreli indeks). Harita için başlığa tıkla.`, `Predator fish population (Lotka-Volterra model, relative index). Click the title for the map.`],
    'chart.projection': [`Projeksiyon →`, `Projection →`],
    'chart.sstMonthly': [`Sıcaklık (aylık)`, `Temperature (monthly)`],
    'chart.sstAvg': [`Sıcaklık (12 ay ort.)`, `Temperature (12-mo avg)`],
    'chart.dhw': [`Isı stresi (DHW)`, `Heat stress (DHW)`],
    'chart.dhwUnit': [` °C-hafta`, ` °C-weeks`],
    'chart.axisTemp': [`Sıcaklık (°C)`, `Temperature (°C)`],
    'chart.axisDhw': [`DHW (°C-hafta)`, `DHW (°C-weeks)`],
    'chart.refDhw4': [`DHW 4 · ağarma`, `DHW 4 · bleaching`],
    'chart.refDhw8': [`DHW 8 · ölüm riski`, `DHW 8 · mortality risk`],
    'chart.model': [`Model`, `Model`],
    'chart.noaa': [`NOAA ölçümü`, `NOAA survey`],
    'chart.axisHealthy': [`Sağlıklı koloni (%)`, `Healthy colonies (%)`],
    'chart.ref50': [`%50 kritik`, `50% critical`],
    'chart.prey': [`Av balığı`, `Prey fish`],
    'chart.capacity': [`Taşıma kapasitesi`, `Carrying capacity`],
    'chart.predator': [`Avcı balık`, `Predator fish`],
    'chart.axisPop': [`Popülasyon indeksi`, `Population index`],

    // Heatmap
    'hm.tab.tip': [`Açık sekmeye tekrar tıklayınca grafiklere dönülür`, `Click the open tab again to return to the charts`],
    'hm.sst': [`🌡️ SST`, `🌡️ SST`],
    'hm.coral': [`🪸 Mercan`, `🪸 Coral`],
    'hm.prey': [`🐟 Av`, `🐟 Prey`],
    'hm.predator': [`🦈 Avcı`, `🦈 Predator`],
    'hm.back': [`← GRAFİKLER`, `← CHARTS`],
    'hm.sst.cool': [`Serin su`, `Cool water`],
    'hm.sst.warm': [`Ilık`, `Warm`],
    'hm.sst.hot': [`Kritik sıcaklık`, `Critical heat`],
    'hm.sst.text': [`Her noktadaki deniz sıcaklığı. Kırmızı alanlar mercanlar için ısı stresi riski taşır.`, `Sea temperature at each location. Red zones mean heat-stress risk for corals.`],
    'hm.coral.healthy': [`Sağlıklı resif`, `Healthy reef`],
    'hm.coral.stressed': [`Stresli`, `Stressed`],
    'hm.coral.bleaching': [`Ağarma`, `Bleaching`],
    'hm.coral.dead': [`Ölü`, `Dead`],
    'hm.coral.text': [`Her noktadaki mercan sağlığı. Koyu alanlar resif kaybı, mavi alanlar canlı ekosistem.`, `Coral health at each location. Dark zones are reef loss, blue is a thriving ecosystem.`],
    'hm.prey.none': [`Balık yok`, `No fish`],
    'hm.prey.sparse': [`Seyrek`, `Sparse`],
    'hm.prey.dense': [`Yoğun sürü`, `Dense school`],
    'hm.prey.text': [`Tahmini av balığı yoğunluğu. Mercan sağlığını izler — resif bozulunca balıklar kaybolur.`, `Estimated prey fish density. Follows coral health — fish disappear where the reef degrades.`],
    'hm.pred.absent': [`Yok`, `Absent`],
    'hm.pred.present': [`Var`, `Present`],
    'hm.pred.high': [`Yüksek aktivite`, `High activity`],
    'hm.pred.text': [`Avcı dağılımı av bolluğunu izler. Sağlıklı resif kenarlarında yoğunlaşır, av azalınca çöker.`, `Predators follow prey availability. They gather near healthy reef edges and collapse after prey declines.`],
    'hm.dhw': [`🔥 Isı Stresi`, `🔥 Heat Stress`],
    'hm.dhw.low': [`Düşük`, `Low`],
    'hm.dhw.bleach': [`ağarma`, `bleaching`],
    'hm.dhw.death': [`ölüm riski`, `mortality risk`],
    'hm.dhw.bleachShort': [`ağarma`, `bleach`],
    'hm.dhw.deathShort': [`ölüm`, `death`],
    'hm.dhw.text': [`Her noktada son 12 haftada biriken ısı stresi (DHW). 4 üstü ağarma, 8 üstü ölüm riski — ağarmayı asıl belirleyen budur.`, `Heat stress accumulated over the last 12 weeks (DHW) at each location. Above 4 bleaching, above 8 mortality risk — this is what actually drives bleaching.`],
    'hm.mpa': [`koruma alanı`, `protected area`],
    'hm.hint': [`Değerleri görmek için fareyi (veya parmağını) harita üzerinde gezdir.`, `Move the mouse (or your finger) over the map to read the values.`],
    'hm.layer.sst': [`Deniz sıcaklığı`, `Sea temperature`],
    'hm.layer.dhw': [`Isı stresi (DHW)`, `Heat stress (DHW)`],
    'hm.layer.coral': [`Mercan sağlığı`, `Coral health`],
    'hm.layer.prey': [`Av balığı yoğunluğu (tahmini)`, `Prey fish density (estimated)`],
    'hm.layer.predator': [`Avcı balık yoğunluğu (tahmini)`, `Predator fish density (estimated)`],
    'hm.sum.sst': [`Ort. {avg}°C · en düşük {min} · en yüksek {max}`, `Avg {avg}°C · min {min} · max {max}`],
    'hm.sum.dhw': [`Ort. DHW {avg} · en yüksek {max} · ağarma riskinde (≥4): %{pct}`, `Avg DHW {avg} · max {max} · at bleaching risk (≥4): {pct}%`],
    'hm.sum.coral': [`Sağlıklı %{h} · ağarmış %{b} · ölü %{d}`, `Healthy {h}% · bleached {b}% · dead {d}%`],
    'hm.sum.fish': [`Ortalama yoğunluk %{avg}`, `Average density {avg}%`],
    'hm.tt.sst': [`Sıcaklık`, `Temperature`],
    'hm.tt.dhw': [`Isı stresi (DHW)`, `Heat stress (DHW)`],
    'hm.tt.state': [`Durum`, `State`],
    'hm.tt.prey': [`Av balığı`, `Prey fish`],
    'hm.tt.pred': [`Avcı balık`, `Predator fish`],
    'hm.tt.protected': [`Koruma alanında`, `Inside a protected area`],
    'hm.health': [`Sağlık`, `Health`],
    'hm.density': [`Yoğunluk`, `Density`],
    'hm.none': [`Yok`, `None`],
    'hm.low': [`Az`, `Low`],
    'hm.med': [`Orta`, `Med`],
    'hm.high': [`Çok`, `High`],

    // End-of-run banner
    'end.saved': [`MERCANLARI KURTARDIN!`, `YOU SAVED THE REEF!`],
    'end.hope': [`KRİTİK AMA UMUT VAR`, `CRITICAL BUT HOPEFUL`],
    'end.decline': [`CİDDİ GERİLEME`, `SEVERE DECLINE`],
    'end.collapse': [`EKOSİSTEM ÇÖKTÜ`, `ECOSYSTEM COLLAPSED`],
    'end.subtitle': [`2100 — Projeksiyon Dönemi Sonu · Tohum #{seed}`, `2100 — End of Projection · Seed #{seed}`],
    'end.healthy': [`Sağlıklı`, `Healthy`],
    'end.dead': [`Ölü`, `Dead`],
    'end.policies': [`Anlaşma`, `Policies`],
    'end.scenario': [`IPCC SSP2-4.5 orta emisyon senaryosu`, `IPCC SSP2-4.5 intermediate emissions scenario`],
    'end.close': [`✕ Kapat`, `✕ Close`],

    // Footer / help
    'footer.data': [`Veri:`, `Data:`],
    'help.tip': [`Bilimsel ayrıntılar`, `Scientific details`],
    'tour.restart': [`❓ Tur`, `❓ Tour`],
    'tour.restart.tip': [`Tanıtım turunu yeniden başlat`, `Restart the introduction tour`],

    // Welcome
    'welcome.title': [`🪸 Mercan Resifi Ağarma Simülasyonu`, `🪸 Coral Reef Bleaching Simulation`],
    'welcome.text': [`İklim değişikliğinin Pasifik mercan resiflerini nasıl etkilediğini gerçek NOAA verileriyle keşfet. Politikaları değiştir, koruma alanları çiz ve 2100'e kadar neler olacağını izle.`, `Explore how climate change affects Pacific coral reefs using real NOAA data. Change policies, draw protected areas and watch what happens up to 2100.`],
    'welcome.start': [`Kısa Turu Başlat →`, `Start the Quick Tour →`],
    'welcome.skip': [`Turu atla`, `Skip the tour`],

    // Tour
    'tour.back': [`← Geri`, `← Back`],
    'tour.next': [`İleri →`, `Next →`],
    'tour.skip': [`Turu Atla`, `Skip Tour`],
    'tour.finish': [`Başla 🪸`, `Start 🪸`],
    'tour.1.title': [`📊 Durum Paneli`, `📊 Status Panel`],
    'tour.1.desc': [`Simülasyonun anlık durumu: yıl, deniz sıcaklığı (SST), ısı stresi (DHW — 4 üstü ağarma, 8 üstü ölüm riski), ölü ve ağaran koloniler ile 2100 tahmini.`, `The live state of the run: year, sea temperature (SST), heat stress (DHW — above 4 bleaching, above 8 mortality risk), dead and bleaching colonies, and the 2100 forecast.`],
    'tour.2.title': [`🎛️ Ayarlar ve Oynatma`, `🎛️ Settings and Playback`],
    'tour.2.desc': [`Bölgeyi seç (mini haritadaki noktalara da tıklayabilirsin), başlangıç sıcaklığını ve mercan örtüsünü ayarla. Hazır senaryolarla tek tıkla dene; ▶ ⏸ ⏩ ↺ ile oynat. <b>Tohum</b> aynıysa sonuç da aynıdır, <b>⚖</b> iki bölgeyi karşılaştırır, <b>⬇ CSV</b> verileri indirir.`, `Choose a region (or click a dot on the mini map) and set the starting temperature and coral cover. Try a ready-made scenario in one click; use ▶ ⏸ ⏩ ↺ to play. The same <b>seed</b> gives the same result, <b>⚖</b> compares two regions, <b>⬇ CSV</b> downloads the data.`],
    'tour.3.title': [`🌍 Politikalar`, `🌍 Policies`],
    'tour.3.desc': [`Solda emisyon kaynakları: gelecekteki ısınmayı belirler (etkisi 2024'ten sonra yavaş yavaş görülür). Sağda iklim anlaşmaları ve resif önlemleri: alkalinite, turizm ve balıkçılık kuralları, koruma fonu ve erken uyarı.`, `Left: emission sources, which set future warming (their effect builds up gradually after 2024). Right: climate agreements and reef measures — alkalinity, tourism and fishing rules, protection funding and early warning.`],
    'tour.4.title': [`🪸 Resif Haritası`, `🪸 Reef Map`],
    'tour.4.desc': [`Her kare bir mercan kolonisi; renklerin anlamı haritanın altında. Fareyle <b>sürükleyerek</b> deniz koruma alanı (MPA) çiz, <b>sağ tıkla</b> sil. Alttaki çubukla zamanda ileri geri git.`, `Each square is a coral colony; the colors are explained under the map. <b>Drag</b> with the mouse to draw a marine protected area (MPA), <b>right-click</b> to remove it. Use the bar below to move through time.`],
    'tour.5.title': [`📈 Grafikler`, `📈 Charts`],
    'tour.5.desc': [`Sıcaklık ve ısı stresi, sağlıklı koloniler (⭐ = gerçek NOAA ölçümü) ve balıklar. Grafik başlığına tıklayınca ısı haritası açılır; açık sekmeye tekrar tıklayınca grafiklere dönülür.`, `Temperature and heat stress, healthy colonies (⭐ = real NOAA survey) and fish. Click a chart title to open its heat map; click the open tab again to return to the charts.`],
    'tour.6.title': [`🌐 Dil ve Yardım`, `🌐 Language and Help`],
    'tour.6.desc': [`Dili buradan değiştirebilirsin. Sağ alttaki <b>?</b> bilimsel ayrıntıları, <b>❓ Tur</b> bu turu yeniden açar.`, `Switch the language here. The <b>?</b> at the bottom right opens the scientific details, <b>❓ Tour</b> replays this tour.`],

    // MPA tutorial
    'mpa.title': [`🏝️ Koruma Alanı (MPA) Çizme`, `🏝️ Drawing a Protected Area (MPA)`],
    'mpa.step1': [`1 — Sürükle`, `1 — Drag`],
    'mpa.step1.text': [`Harita üzerinde fareyi basılı tutup sürükle; dikdörtgen bir koruma alanı oluşur.`, `Hold the mouse button and drag on the map to create a rectangular protected area.`],
    'mpa.step2': [`2 — Etkisi`, `2 — Effect`],
    'mpa.step2.text': [`Korunan alanda ısı stresi daha yavaş birikir, iyileşme yaklaşık 1.8 kat hızlanır. Haritanın en fazla %40'ı korunabilir.`, `Inside a protected area heat stress builds up more slowly and recovery is about 1.8× faster. Up to 40% of the map can be protected.`],
    'mpa.step3': [`3 — Kaldır`, `3 — Remove`],
    'mpa.step3.text': [`Bir alanı sağ tıklayarak, hepsini "Tümünü Sil" ile kaldır.`, `Right-click an area to remove it, or use "Clear All" to remove them all.`],
    'mpa.ok': [`Anladım →`, `Got it →`],

    // Info panel
    'info.html': [`
      <div class="info-h1">🪸 Bu Simülasyon Hakkında</div>
      <div class="info-sub">Mercan Resifi Stres & Ağarma Monitörü</div>
      <div class="info-h2">Bilimsel Modeller</div>
      <div class="info-text">
        <b>Isı stresi (DHW)</b> — NOAA Coral Reef Watch yöntemi: sıcaklık, bölgenin en sıcak ay ortalamasını (MMM) en az 1°C aştığında bu aşım son 12 hafta boyunca toplanır. DHW 4 üstü ağarma, 8 üstü ölüm riski.<br><br>
        <b>Bölgesel iklim</b> — Her bölgenin kendi ortalama sıcaklığı, mevsimi ve en sıcak ayı vardır (Samoa ve ekvator resifleri Mart–Nisan, Hawaii ve Marianalar Ağustos–Eylül).<br><br>
        <b>Ağarma olayları</b> — 2013–2024 arasında her bölge yalnızca kendisini etkileyen gerçek sıcak dalgaları yaşar; 2024 sonrası sıcak dalgalar rastgele (tohuma bağlı) gelir.<br><br>
        <b>İyileşme</b> — Ağarmış koloniler ısı geçince aylar içinde toparlanır; ölü resif yalnızca sağlıklı komşulardan gelen larvalarla 10–15 yılda yeniden canlanır.<br><br>
        <b>Balıklar</b> — Lotka-Volterra av-avcı modeli; resifin besleyebileceği balık sayısı (taşıma kapasitesi) mercan sağlığına bağlıdır.<br><br>
        <b>Gelecek (IPCC SSP2-4.5)</b> — 2100'e kadar 2013–2023 ortalamasının ~1.75°C üstüne ısınma; emisyon politikalarının etkisi 2024–2060 arasında kademeli devreye girer.
      </div>
      <div class="info-h2">Veri Kaynakları</div>
      <table class="info-table">
        <thead><tr><th>Kaynak</th><th>Açıklama</th><th>Kapsam</th></tr></thead>
        <tbody>
          <tr><td class="info-src">NOAA NCRMP</td><td>Mercan koloni gözlemleri — ağarma ve ölüm verileri</td><td>269.356 kayıt, 2013–2023</td></tr>
          <tr><td class="info-src">NOAA Coral Reef Watch</td><td>Bölgesel sıcaklık iklimi ve DHW yöntemi</td><td>5 km sanal istasyonlar</td></tr>
          <tr><td class="info-src">NOAA NCEI</td><td>Küresel Mercan Ağarma Veritabanı (Erişim No: 0228498)</td><td>35.991 kayıt</td></tr>
          <tr><td class="info-src">IPCC SSP2-4.5</td><td>Orta emisyon senaryosu sıcaklık projeksiyonu</td><td>2024–2100</td></tr>
        </tbody>
      </table>
      <div class="info-h2">DHW Eşikleri</div>
      <table class="info-table">
        <thead><tr><th>DHW</th><th>Durum</th><th>Etki</th></tr></thead>
        <tbody>
          <tr><td>0 – 4</td><td style="color:#00d4aa;">Normal</td><td>Ağarma riski düşük</td></tr>
          <tr><td>4 – 8</td><td style="color:#ffd166;">Uyarı</td><td>Ağarma başlar</td></tr>
          <tr><td>≥ 8</td><td style="color:#ff6b6b;">Kritik</td><td>Ciddi ağarma ve ölüm riski</td></tr>
        </tbody>
      </table>
      <div class="info-h2">Mercan Durumları</div>
      <table class="info-table">
        <thead><tr><th>Stres</th><th>Durum</th><th>Açıklama</th></tr></thead>
        <tbody>
          <tr><td>0.00 – 0.25</td><td style="color:#00d4aa;">Sağlıklı</td><td>Stres yok</td></tr>
          <tr><td>0.25 – 0.55</td><td style="color:#ffd166;">Stresli</td><td>Solgunlaşma başlar</td></tr>
          <tr><td>0.55 – 0.82</td><td style="color:#ff6b6b;">Ağarmış</td><td>Isı geçerse aylar içinde toparlanır</td></tr>
          <tr><td>0.82 – 1.00</td><td style="color:#888;">Ölü</td><td>Larva yerleşimi veya restorasyonla yeniden büyür</td></tr>
          <tr><td>—</td><td style="color:#00ffd0;">İyileşen</td><td>Ölmüş ve yeniden büyüyen resif</td></tr>
        </tbody>
      </table>
      <div class="info-h2">Stres Hesabı</div>
      <div class="info-code">HotSpot = SST − MMM<br>DHW = Σ HotSpot (HotSpot ≥ 1°C) × hafta, son 12 hafta<br><br>DHW &gt; eşik − 1 ise: stres += (DHW − eşik + 1) × 0.0045 × stresÇarpanı<br>DHW &lt; 1 ise: yaşayan koloni stres −= 0.008 × iyileşmeÇarpanı<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ölü resif stres −= 0.0003 × sağlıklıKomşu × iyileşmeÇarpanı<br><br>eşik = 4 DHW + alkalinite bonusu (en fazla +3)</div>`,
      `
      <div class="info-h1">🪸 About This Simulation</div>
      <div class="info-sub">Coral Reef Stress & Bleaching Monitor</div>
      <div class="info-h2">Scientific Models</div>
      <div class="info-text">
        <b>Heat stress (DHW)</b> — NOAA Coral Reef Watch method: whenever temperature exceeds the region's warmest-month mean (MMM) by at least 1°C, the excess is summed over the last 12 weeks. DHW above 4 means bleaching, above 8 mortality risk.<br><br>
        <b>Regional climate</b> — Each region has its own mean temperature, seasonal cycle and warmest month (Samoa and equatorial reefs peak in March–April, Hawaii and the Marianas in August–September).<br><br>
        <b>Bleaching events</b> — From 2013 to 2024 each region only experiences the real heatwaves that hit it; after 2024 heatwaves arrive at random (depending on the seed).<br><br>
        <b>Recovery</b> — Bleached colonies recover within months once the heat passes; dead reef only regrows over 10–15 years from larvae of healthy neighbours.<br><br>
        <b>Fish</b> — Lotka-Volterra predator–prey model; the number of fish the reef can support (carrying capacity) depends on coral health.<br><br>
        <b>Future (IPCC SSP2-4.5)</b> — Warming of ~1.75°C above the 2013–2023 average by 2100; emission policies take effect gradually between 2024 and 2060.
      </div>
      <div class="info-h2">Data Sources</div>
      <table class="info-table">
        <thead><tr><th>Source</th><th>Description</th><th>Coverage</th></tr></thead>
        <tbody>
          <tr><td class="info-src">NOAA NCRMP</td><td>Coral colony surveys — bleaching and mortality</td><td>269,356 records, 2013–2023</td></tr>
          <tr><td class="info-src">NOAA Coral Reef Watch</td><td>Regional temperature climatology and DHW method</td><td>5 km virtual stations</td></tr>
          <tr><td class="info-src">NOAA NCEI</td><td>Global Coral Bleaching Database (Accession 0228498)</td><td>35,991 records</td></tr>
          <tr><td class="info-src">IPCC SSP2-4.5</td><td>Intermediate emissions temperature projection</td><td>2024–2100</td></tr>
        </tbody>
      </table>
      <div class="info-h2">DHW Thresholds</div>
      <table class="info-table">
        <thead><tr><th>DHW</th><th>Status</th><th>Effect</th></tr></thead>
        <tbody>
          <tr><td>0 – 4</td><td style="color:#00d4aa;">Normal</td><td>Low bleaching risk</td></tr>
          <tr><td>4 – 8</td><td style="color:#ffd166;">Warning</td><td>Bleaching begins</td></tr>
          <tr><td>≥ 8</td><td style="color:#ff6b6b;">Critical</td><td>Severe bleaching and mortality risk</td></tr>
        </tbody>
      </table>
      <div class="info-h2">Coral States</div>
      <table class="info-table">
        <thead><tr><th>Stress</th><th>State</th><th>Meaning</th></tr></thead>
        <tbody>
          <tr><td>0.00 – 0.25</td><td style="color:#00d4aa;">Healthy</td><td>No stress</td></tr>
          <tr><td>0.25 – 0.55</td><td style="color:#ffd166;">Stressed</td><td>Paling begins</td></tr>
          <tr><td>0.55 – 0.82</td><td style="color:#ff6b6b;">Bleached</td><td>Recovers within months if the heat passes</td></tr>
          <tr><td>0.82 – 1.00</td><td style="color:#888;">Dead</td><td>Regrows through larvae or restoration</td></tr>
          <tr><td>—</td><td style="color:#00ffd0;">Recovering</td><td>Reef that died and is growing back</td></tr>
        </tbody>
      </table>
      <div class="info-h2">Stress Calculation</div>
      <div class="info-code">HotSpot = SST − MMM<br>DHW = Σ HotSpot (HotSpot ≥ 1°C) × weeks, last 12 weeks<br><br>if DHW &gt; threshold − 1: stress += (DHW − threshold + 1) × 0.0045 × stressMult<br>if DHW &lt; 1: living colony stress −= 0.008 × recoveryMult<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;dead reef stress −= 0.0003 × healthyNeighbours × recoveryMult<br><br>threshold = 4 DHW + alkalinity bonus (up to +3)</div>`]
  };

  const LANGS = ['tr', 'en'];
  const listeners = [];

  function detectLang() {
    try {
      const q = new URLSearchParams(location.search).get('lang');
      if (LANGS.includes(q)) return q;
      const saved = localStorage.getItem('lang');
      if (LANGS.includes(saved)) return saved;
    } catch (e) { /* storage may be unavailable */ }
    return (navigator.language || '').toLowerCase().startsWith('tr') ? 'tr' : 'en';
  }

  let lang = detectLang();

  // t('pol.active', { n: 3 }) → "3/3 Aktif"; unknown keys fall back to the key itself
  function t(key, vars) {
    const entry = STRINGS[key];
    let s = entry ? entry[lang === 'tr' ? 0 : 1] : key;
    if (vars) for (const k in vars) s = s.split('{' + k + '}').join(vars[k]);
    return s;
  }

  function applyStatic(root) {
    (root || document).querySelectorAll('[data-i18n]').forEach(el => { el.textContent = t(el.dataset.i18n); });
    (root || document).querySelectorAll('[data-i18n-html]').forEach(el => { el.innerHTML = t(el.dataset.i18nHtml); });
    (root || document).querySelectorAll('[data-i18n-title]').forEach(el => { el.title = t(el.dataset.i18nTitle); });
  }

  function applyAll() {
    document.documentElement.lang = lang;
    document.title = t('page.title');
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.content = t('page.description');
    applyStatic();
    document.querySelectorAll('.lang-btn').forEach(b => b.classList.toggle('active', b.dataset.lang === lang));
    listeners.forEach(fn => { try { fn(lang); } catch (e) { console.error(e); } });
  }

  function setLang(next) {
    if (!LANGS.includes(next) || next === lang) return;
    lang = next;
    try { localStorage.setItem('lang', lang); } catch (e) { /* ignore */ }
    applyAll();
  }

  window.I18N = {
    t, setLang, applyStatic, applyAll,
    get lang() { return lang; },
    onLangChange(fn) { listeners.push(fn); },
    regionName: r => t('region.' + r),
    months: () => t('months').split(',')
  };
  window.t = t;
})();
