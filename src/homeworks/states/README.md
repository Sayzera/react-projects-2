## States Homework (Durum Yönetimi Ödevleri)

Bu dosya, `states-homework.md` dosyasındaki dört küçük React ödevini README formatına çevirmektedir. Her ödev için amaç, istenenler, kabul kriterleri, ipuçları ve kısa test adımları bulunmaktadır.

---

### 1 — Favori Renk Seçici
Amaç: Kullanıcının etkileşimiyle state güncelleme. Dinamik stillerle state kullanımı.

İstenilenler:

- Birkaç renk butonu (örnek: kırmızı, mavi, yeşil, sarı)
- Kullanıcı butona bastığında ekranda “Seçilen renk: <Renk>” yazsın
- Arka plan rengi de o renge dönüşsün
- “Sıfırla” butonu ile başlangıç durumuna dönsün

Kabul kriterleri:

- Tüm renk butonları görünür ve tıklanabilir olmalı
- Butona basıldığında ekranda seçilen renk doğru yazmalı (ör. “Seçilen renk: Mavi”)
- Bileşenin arka plan rengi seçilen renge değişmeli
- Sıfırla butonu, renk bilgisini temizleyip başlangıç stiline döndürmeli

İpuçları:

- Her renk için değer olarak CSS renk isimleri veya hex kullanılabilir
- `useState` ile seçilen rengi saklayın; butonlara onclick ile state güncelleyin
- Inline stil veya sınıf (className) ile arka plan rengini uygulayabilirsiniz

Test:

1. Bir renk butonuna tıklayın → ekranda seçilen renk görünsün ve arka plan değişsin
2. Birden fazla renge sırayla tıklayın → her seferinde ekranda güncel renk gösterilsin
3. Sıfırla butonuna tıklayın → arka plan ve gösterge başlangıç durumuna dönsün

---

### 2 — Karakter Sayacı (Character Counter)
Amaç: Kullanıcının girdiği metindeki karakter sayısını canlı göstermek.

İstenilenler:

- `input` veya `textarea` kullanılsın
- Altında “X karakter yazıldı” yazsın
- Maksimum 100 karakter sınırı olsun, aşınca kırmızı uyarı mesajı gösterilsin
- “Temizle” butonu

Kabul kriterleri:

- Kullanıcı yazarken alt kısımda anlık karakter sayısı görünmeli
- Karakter sayısı 100'ü geçtiğinde gösterge veya uyarı kırmızı olmalı
- Temizle butonu alanı boşaltmalı ve sayaç sıfırlanmalı

İpuçları:

- `value` ve `onChange` ile controlled component oluşturun
- Uzunluk kontrolünü (`value.length`) kullanarak uyarı/renk sınıfını koşullu verin
- `maxLength` attribute'u ekleyerek tarayıcı seviyesinde de sınır koyabilirsiniz, ama kullanıcıya görsel uyarı göstermeyi unutmayın

Test:

1. Metin yazın → alt kısımda anlık karakter sayısı doğru gösterilsin
2. 100 karakteri geçin → uyarı kırmızı olsun (mesaj veya sayaç kırmızı olabilir)
3. Temizle butonuna tıklayın → alan boşalsın ve sayaç 0'a dönsün

---

### 3 — Basit Tema Değiştirici (Light/Dark Mode)
Amaç: State kullanarak stil değiştirme.

İstenilenler:

- “Tema değiştir” butonuna tıklanınca arka plan ve metin renkleri değişsin
- Tema durumu (örneğin: “Dark Mode aktif”) ekranda yazsın
- İki state: tema rengi ve metin rengi

Kabul kriterleri:

- Butona tıklandığında tema state değişmeli ve UI buna göre güncellenmeli
- Ekranda aktif tema açıkça yazmalı (ör. “Light Mode aktif” / “Dark Mode aktif”)
- Tema ve metin rengi uyumlu olmalı (okunabilirlik korunmalı)

İpuçları:

- Tek bir boolean state (`isDark`) veya bir obje ile (`{bg, text}`) tutulabilir
- Tema değişiminde body veya component root elementine stil uygulayın
- Geçiş efektleri için basit CSS geçişleri ekleyebilirsiniz

Test:

1. Tema değiştir butonuna tıklayın → arka plan ve metin renkleri değişsin
2. Ekranda aktif tema doğru yazsın
3. Birden fazla kez tıklayın → açık/kapalı arasında geçiş düzgün olsun

---

### 4 — Rastgele Sayı Tahmini (Guess the Number)
Amaç: Koşullu render ve state ile oyun mantığı.

İstenilenler:

- 1–10 arası rastgele sayı (bileşen mount’unda sabitlenebilir — useEffect yok, yani bileşen ilk render sırasında sabit bir değer atayın)
- Kullanıcı tahmin girer, “Tahmin Et” butonuna basar
- “Daha yüksek!” veya “Daha düşük!” mesajı gösterilsin
- 3 tahmin hakkı varsa 3 hakkı bitince “Kaybettiniz!” mesajı gözüksün

Kabul kriterleri:

- Bileşen yüklendiğinde hedef sayı 1–10 arası sabitlenmiş olmalı
- Her tahminde kalan hak doğru azalmalı
- Kullanıcı doğru sayıyı bulduğunda kazandığına dair mesaj gösterilmeli
- 3 tahmin sonunda hala bulamadıysa kaybettiğine dair mesaj gösterilmeli

İpuçları:

- Rastgele sayıyı sabitlemek için bileşenin ilk çalışmasında (render sırasında) `Math.floor(Math.random() * 10) + 1` ile bir değişkene atayabilirsiniz. (Not: useEffect kullanılmadan bile ilk render'da sabitlenmiş bir değer istenirse, komponentin dışındaki üst seviye bir değişkene atamak veya `useRef` kullanmak alternatiflerdir.)
- Tahmin sayısını ve mesajı state ile yönetin
- Girdi validasyonu: boş/geçersiz girişleri kontrol edin (1–10 arası olup olmadığı)

Test:

1. Oyun başladığında tahmin hakkı 3 olmalı
2. Her hatalı tahmin sonrası ekranda “Daha yüksek!” veya “Daha düşük!” uygun şekilde görünmeli
3. Doğru tahmin yapıldığında kazanma mesajı gösterilsin ve tahminler durdurulsun
4. 3 hakkı bittiyse “Kaybettiniz!” mesajı gösterilsin

---

## Ek Notlar

- Küçük projeler olduğu için her alıştırma tek bir bileşen içinde veya ayrı küçük bileşenlere bölünerek yapılabilir
- CSS için basit inline stiller, CSS modülleri veya global CSS kullanılabilir — repo yapısına göre uyarlayın
- İsteğe bağlı: her ödev için kısa bir test senaryosu veya Storybook hikâyesi eklemek öğretici olur

---

Dosya: `src/homeworks/states/README.md`

İyi çalışmalar!
