function isCreditCardNumberValid(){
    var sum = 0;
    var count=0;
    var cardNumber = document.getElementById("card").value;
    var text="";
    var kNo="";
    var strCard = cardNumber.toString();
    if (cardNumber && strCard.length === 16 && !isNaN(cardNumber)) {
        for (let i = 0; i < strCard.length; i++) {
            var element = strCard[i];
            sum +=parseInt(element);
            if (strCard[i] !== strCard[i+1]) {
                count++;
            }
        }
        if (count === 1 ) {
            text = "Kart numaraları en az bir rakam farklı olmalı"; 
        }
        if (sum < strCard.length ) {
            text="Kart Numarası rakamları toplamı 16'dan küçük olamaz.";
        }
        if (element % 2 == 1) {
            text = "Kart Numarasının son hanesi tek olamaz.";
        }
        kNo=cardNumber.toString().replace(/\B(?=(\d{4})+(?!\d))/g, "-");
        
       
    }else{
        text = "Kart Numarası 16 haneden küçük veya büyük olamaz veya Sıfır ile başlayamaz ve boş olamaz.";
    }
    document.getElementById("kNo").innerHTML = kNo;
    document.getElementById("err").innerHTML = text;

}

isCreditCardNumberValid();