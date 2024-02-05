 var grand = alert ("Siz bizning siteimizga kirmoqchi bo'lsangiz iltomos shartlarimizni bajaring");
 let names = alert("Agarda siznig ismingiz Sardor Jurabek Bexruz Muxammadjon Muhammadali Dilshod Javohir bo'lsa bizning dasturga kirish taqiqlanadi");
 var dgshj = alert("Agarda siznig ismingiz Shakxruz Otabek bo'lsa bizning siteimizga bemalol kira olasiz");
 var fsgh = prompt("Ismingizni kiriting");
 prompt("Iltimos yoshingizni kiriting");
 prompt("Iltimos shaxsingizni kiriting");
 prompt("Iltimos qaysi oyda tug'ulganingizni kiriting");
 confirm("Tabriklaymiz foydalanuvchi siz Jamilov Navro'zbekning siteiga muaffaqqiyatli tarizda kirdingiz");

const btnEl = document.querySelector(".btn");
const boxEl = document.querySelector(".box");
const btn2El = document.querySelector(".btn-close");
btnEl.addEventListener('click', () => {
    boxEl.style.display = "block"
    btnEl.style.display = "none"
    btn2El.style.display = "block"
})
btn2El.addEventListener('click', () => {
    boxEl.style.display = "none"
    btnEl.style.display = "block"
    btn2El.style.display = "none"
})