function isCreditCardNumberValid(){
    var sum = 0;
    var count=0;
    //Inputa girilen değeri DOM ile alıyoruz.
    var cardNumber = document.getElementById("card").value;
    var text="";
    var kNo="";
    var strCard = cardNumber.toString();
    //Kart numarası var? Kart numarası 16 haneli mi? Kart numarası sayı mı? Kontrollerinin yapıldığı kod bloğu.
    if (cardNumber && strCard.length === 16 && !isNaN(cardNumber)) {
        //Burada kart numarasının her bir rakamı kontrol ediliyor
        for (let i = 0; i < strCard.length; i++) {
            var element = strCard[i];
            sum +=parseInt(element);
            //Burada rakamların hepsi aynı mı değil mi onun kontrolünü yaptım eğer farklı ise count'ı bir arttırdım.
            if (strCard[i] !== strCard[i+1]) {
                count++;
            }
        }
        //count kontrolü ilk rakamla 1 dönecektir farklı bir rakam olduğunda 2 olacaktır.
        //O yüzden count 1'e eşit olduğunda bu kod bloğu çalışacaktır.
        if (count === 1 ) {
            text = "Kart numaraları en az bir rakam farklı olmalı"; 
        }
        //Kart numarasının rakamları toplamı 16 olmalıdır maddesinin kontrolünün yapıldığı blok.
        if (sum < strCard.length ) {
            text="Kart Numarası rakamları toplamı 16'dan küçük olamaz.";
        }
        //Kart numarasının son hanesi çift olmalıdır maddesinin kontrolünün yapıldığı blok.
        if (element % 2 == 1) {
            text = "Kart Numarasının son hanesi tek olamaz.";
        }
        kNo=cardNumber.toString().replace(/\B(?=(\d{4})+(?!\d))/g, "-");
        
     //Kart numarası var? Kart numarası 16 haneli mi? Kart numarası sayı mı? Bu üç şart sağlanmayınca çalışacak blok.
    }else{
        text = "Kart Numarası 16 haneden küçük veya büyük olamaz veya Sıfır ile başlayamaz ve boş olamaz.";
    }
    //DOM'a müdahale ederek textleri html etiketlerine yazdırdık.
    document.getElementById("kNo").innerHTML = kNo;
    document.getElementById("err").innerHTML = text;

}

isCreditCardNumberValid();