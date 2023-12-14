let imgBox = document.getElementById("imgBox");
let qrImage = document.getElementById("qrImage");
let qrText = document.getElementById("qrText");
const generateQRBtn = document.querySelector(".generate-qr-btn");

generateQRBtn.addEventListener("click", generateQR);

function generateQR() {
    if (qrText.value.length > 0) {
        qrImage.src =
            "https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=" +
            qrText.value;
        imgBox.classList.add("show-img");
    } else {
        qrText.classList.add("error");
        setTimeout(() => {
            qrText.classList.remove("error");
        }, 1000);
    }
}
