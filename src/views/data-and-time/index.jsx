import React from 'react'

function DateAndTime() {
    const simdi = new Date();
    const gunler = ['Pazartesi', 'Salı', 'Çarşamba']
    console.log("Yıl", simdi.getFullYear())
    console.log('Ay', simdi.getMonth() + 1 ) // aylar 0 dan başlıyor
    console.log("Gün", gunler[simdi.getDay() - 1])
    // Saat
    // Dakika 
    // Saniye
    
    //   const simdi = new Date(2025,11,13)


    const tarih = new Date();

    tarih.setFullYear(2027)
    // Ayı
    // Günü 

    // Zaman farkı hesaplama 

    const baslangic = new Date();
    
    const bitis = new Date()
    bitis.setDate(bitis.getDate() + 5);


    const farkMs = bitis - baslangic;

    const farkGun = farkMs / (1000 * 60 * 60 * 24)

    console.log(`İki tarih arasındaki ${Math.floor(farkGun)} gün var`)


    // Tarihi formatlı yazdırmak

    console.log(baslangic, 'baslangic')
    console.log(baslangic.toDateString())


    // Local formatta yazmak

    /**
     * Kullanıcı inputa number olarak doğum tarihini yazar ve kullanıcının kaç yaşında olduğunu hesaplayınız 
     * Doğum gününe kaç gün kaldığını göstersin
     */

  


  return (
    // <div>DateAndTime {baslangic.toDateString()}</div>

    <div>
        Local formatta yazmak: {baslangic.toLocaleDateString('tr-TR')} - {baslangic.toLocaleTimeString('tr-TR')}
    </div>
  )
}

export default DateAndTime