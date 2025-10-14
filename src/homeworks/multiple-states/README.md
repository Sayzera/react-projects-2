🧩 Ödev 1: Basit Kullanıcı Bilgileri Formu

Amaç: Birden fazla useState ile form alanlarını yönetmeyi öğrenmek.

İstenilenler:

isim, soyisim, email alanları için ayrı ayrı useState tanımla.

Her input değiştiğinde ilgili state’i güncelle.

“Gönder” butonuna basıldığında ekrana şu şekilde yazdır:
👉 Merhaba [isim] [soyisim], mail adresin: [email]



🧩 Ödev 2: Ürün Ekleme Formu

Amaç: Birden fazla input state’ini bir dizi (array) olarak yönetmeyi öğrenmek.

İstenilenler:

urunAdi, fiyat, kategori için state oluştur.

“Ekle” butonuna tıklanınca bu verileri bir listeye ekle (setUrunler([...urunler, yeniUrun])).

Alttaki listede eklenen ürünleri sırayla görüntüle.

Ekstra: Her eklenen ürünün yanına “Sil” butonu koy, tıklanınca o ürünü listeden kaldır.



🧩 Ödev 3: Gelişmiş Kayıt Formu (State Objesi ile)
🎯 Amaç:

Bu ödevde amacın, formdaki birden fazla alanı tek bir state objesi içinde yönetmeyi öğrenmendir.
Yani her input için ayrı useState tanımlamak yerine, hepsini bir tek obje içinde kontrol edeceksin.
Bu yöntem, formlar büyüdüğünde kodun daha düzenli, okunabilir ve yönetilebilir olmasını sağlar.

📋 Görev Tanımı:

Bir kayıt formu oluşturacaksın.
Formda üç adet bilgi alanı olacak:

Ad

Yaş

Şehir

Kullanıcı bu bilgileri girecek, “Kaydet” butonuna bastığında ekrana bu bilgileri düzgün şekilde yazdıracaksın.
Bu işlemleri yaparken, tek bir state objesi kullanman gerekiyor.