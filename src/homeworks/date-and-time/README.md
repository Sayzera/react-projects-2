## Date and Time Homework (Tarih ve Zaman Ödevi)

Bu dosya, tarih ve zaman hesaplamaları ile ilgili React ödevini README formatında sunmaktadır. Ödev için amaç, istenenler, kabul kriterleri, ipuçları ve kısa test adımları bulunmaktadır.

---

### Tarih Farkı Hesaplayıcısı

**Amaç:** Kullanıcıdan alınan iki tarih arasındaki farkı hesaplayarak gün, saat, dakika, saniye cinsinden göstermek.

**İstenilenler:**

- Kullanıcıdan başlangıç tarihi alın (input veya date picker)
- Kullanıcıdan bitiş tarihi alın (input veya date picker)
- İki tarih arasındaki farkı hesaplayın
- Sonucu gün, saat, dakika, saniye cinsinden gösterin
- Sonuç ekranda düzenli ve okunabilir biçimde gösterilsin

**Kabul kriterleri:**

- Her iki tarih input'u da görünür ve kullanılabilir olmalı
- Tarih seçildiğinde hesaplama otomatik olarak yapılmalı
- Sonuç doğru formatta gösterilmeli (örn: "2 gün, 5 saat, 30 dakika, 45 saniye")
- Geçersiz tarih girişlerinde uygun hata mesajı gösterilmeli
- Bitiş tarihi başlangıç tarihinden önceyse uygun uyarı verilmeli

**İpuçları:**

- `new Date()` nesnesini ve `getTime()` metodunu kullanın
- `fark = bitis - baslangic` işlemi milisaniye farkını verir
- Milisaniyeyi gün, saat, dakika, saniyeye çevirmek için matematiksel işlemler yapın:
  - 1 saniye = 1000 milisaniye
  - 1 dakika = 60 saniye
  - 1 saat = 60 dakika
  - 1 gün = 24 saat
- `useState` ile tarih değerlerini ve hesaplanan sonucu saklayın

**Test:**

1. Başlangıç ve bitiş tarihlerini seçin → sonuç otomatik hesaplanıp gösterilsin
2. Farklı tarih aralıkları deneyin → sonuçlar doğru formatta gösterilsin
3. Bitiş tarihini başlangıç tarihinden önce seçin → uygun uyarı mesajı gösterilsin
4. Geçersiz tarih formatı girin → hata mesajı gösterilsin

---

## Ek Notlar

- Tarih input'ları için `type="date"` kullanabilirsiniz
- Sonuç gösteriminde büyük sayılar için uygun formatlamalar yapın
- Responsive tasarım için CSS düzenlemeleri ekleyebilirsiniz
- İsteğe bağlı: geçmiş/gelecek tarih kontrolü ekleyebilirsiniz

---

Dosya: `src/homeworks/date-and-time/README.md`

İyi çalışmalar!