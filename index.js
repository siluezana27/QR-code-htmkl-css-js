function generer_code_qr() {
    let contentInput = document.getElementById('text').value;
    let qrcodeEspace = document.getElementById('qrcode');
    let error=document.getElementById("error")

     //Effacer le QRCode et du champs d'erreur
     error.innerHTML=""
        document.getElementById("qrcode").innerHTML = ""
        //validation
           const urlPattern = /^(https?:\/\/)[^\s/$.?#].[^\s]*$/
          if (!urlPattern.test(contentInput)) {
            error.innerHTML="url invalide"
          }else{

             //console.log(contentInput)
        //Genere moi le code QR
        //let generer=document.getElementById("generer")
        //generer.disabled=false
         new QRCode(qrcodeEspace,
            contentInput);
            document.getElementById('download').style.display = "inline-block"
          }
       
    
    
}

function download(){
    let img = document.querySelector('#qrcode img');
    if (img) {
        let lien = document.createElement('a');
        console.log(lien)
        lien.href = img.src;
        lien.download = 'qr-code-maker.png';
        document.body.appendChild(lien);
        lien.click();
    }
}

