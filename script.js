const items = document.querySelectorAll(".item");
const content = document.getElementById("content");

const data = {
  1: `
    <h2>About Me</h2>
    <div class="box">
     <img src="https://i.imgur.com/qL6qXiM.jpeg">
     <div>
       <p class="p1">  <strong>Gunven</strong> adalah nama akun tiktok ku, dan <strong>J.S.T</strong> adalah inisial nama ku(gak usah kepo 
  nama asli gue siapa), kalian bisa panggil aku bang <strong>Gunven</strong>, <strong>Juned</strong>, ataupun <strong>Edi</strong>.
       <br>
       Aku siapa? Well, aku cuman seseorang yang masih duduk di bangku SMA. Seseorang yang menyukai model kit, dan 
  akhir-akhir ini tertarik dalam dalam dunia perkodingan.</p>
     </div>
    </div>
  <h2 class="lasan">Alasan tertarik ke
  <br>
  1.Model Kit</h2>
    <p class="mainan"> Aku menyukai model kit dari tahun lalu, disaat aku melihat video orang 
  merakit <strong>EG Nu gundam</strong>. Aku nonton videonya, tertarik, beli, rakit, suka, terus beli beberapa lagi.</p>
  <h2 class="gokil">2.Coding</h2>
  <p class="tertarik">Alasan aku tertarik ke dunia perkodingan karena 1 hal doang, aku lihat video youtube shorts tentang seseorang yang mencoba membuat game. Cuman karena hal itu saja, 
  aku langsung tertarik untuk belajar tentang perkodingan. Aku menggunakan aplikasi <strong>mimo</strong> dan <strong>ChatGPT</strong> untuk belajar.</p>
  <h1 class="asik">Tampilan webnya cuman bagus di mobile/hp doang, kalau 
  di komputer/laptop, tampilannya bakal hancur</h1>
  `,
  2: `
    <h2>Media Sosial</h2>
  <p class="sosial">Berikut adalah beberapa media sosial gue. Youtube gak gue kasih 
  masuk karna gak penting, dan akun instagram gue juga cuman buat nonton doang. Gue aktif posting 
  cuman di tiktok, itupun kalau lagi niat, kalau gak niat bisa ilang beberapa minggu gue nya.</p>
  <br>
    <a href="https://www.tiktok.com/@gunvenid?_r=1&_t=ZS-92v5KRJp8DA"
  target="_blank" class="card">
    <img src="https://i.pinimg.com/474x/ad/d5/c3/add5c3bb5fe319ed7bbc0bbaefb26be9.jpg" alt="Tiktok">
    <span>Tiktok</span>
  </a>
  <br>
    <a href="https://www.instagram.com/rvenxd_?igsh=MWMxM2tnd3R0NmJucg=="
     target="_blank" class="kartu">
     <img src="https://unblast.com/wp-content/uploads/2025/07/instagram-logo-colored.jpg" alt="Instagram">
     <span>Instagram</span>
  </a>
  `,
  3: `
    <h2>Hobby</h2>
    <div class="hobi">
      <img src="https://i.imgur.com/OO03lvD.jpeg">
      <div>
        <p class="rx">Nama gundam di samping kiri ini adalah <strong>RX-78-2</strong>.
        Diversi mainan atau gunpla nya, ada beberapa versi. Yang aku punya adalah versi beyond global, dengan nama lengkapnya 
        adalah <strong>RX-78-2 Beyong Global</strong>. Dan gunpla yang aku punya ini gak resmi, alias barang kw. Di dunia gunpla, para builder(seseorang yang 
        merakit gunpla) menyebut gunpla kw sebagai <strong>Bootleg atau KO</strong>. Gundam RX-78-2 adalah Gundam pertama yang muncul pada tahun 1979 di anime mobile suit gundam.</p>
      </div>
    </div>
    <br>
    <div class="hob2">
     <img src="https://i.imgur.com/MfDFKOB.jpeg">
     <div>
      <p class="ana">Disamping kanan ini adalah gundam yang bernama <strong>Lfrith Anavata</strong>. Mobile suit gundam 
      ini muncul di serial <strong>Mobile Suit Gundam: The Witch from Mercury</strong>, lebih tepatnya 
      di side story nya, yaitu <strong>Mobile Suit Gundam: The Witch from Mercury - Vanadis Heart</strong>. 
      Gundam Lfrith Anavata merupakan gundam turunan dari gundam <strong>Lfrith</strong> yang muncul 
      pada anime <strong>Mobile Suit Gundam: The Witch from Mercury</strong>. Animenya terbagi dalam dua bagian atau season, season pertama rilis pada <strong>2 Oktober 2022</strong> 
      dan season duanya rilis pada <strong>9 April 2023</strong>.</p>
     </div>
    </div>
  <br>
  <div class="mochin">
  <img src="https://i.imgur.com/kOnpNwS.jpeg">
  <div>
  <p class="gawain">Yang ada disamping kiri ini bukanlah gundam, tapi semacam gundam. 
  Model kit ini berasal dari <strong>China</strong>, bisa dipanggil sebagai <strong>Mochin</strong>(gak tau beneran kepanjangannya model kit china, 
  ngasal doanh gue). Mochin ini bernama <strong>God Guardian Gawain</strong>, yang berasal dari brand <strong>SNAA</strong>, dengan 
  series <strong>The Round Table Knights</strong> untuk model kit snaa yang berukuran 1/144.</p>
  </div>
  </div>
  <br>
  <div class="haha">
  <img src="https://i.imgur.com/c25v9xu.jpeg">
  <div>
  <p class="my">Model kit <strong>Dummy 13</strong> adalah nama dari kit disamping ini.
  Model kit ini aku beli karena harganya yang sangat murah yaitu cuman Rp100 doang karena diskon dan 
  sedikit rasa penasaran karena melihat banyak yang beli model kit ini. Setelah aku beli, aku merasa kit ini 
  sangat lah biasa saja karena tampilannya yang sangat polos. Senjata yang didapatkan ada banyak, tapi memiliki detail 
  yang sangat kurang. Hal itu wajar saja karena harga normalnya sekitaran Rp 20.000 saja kalau tidak salah ingat.
  </p>
  </div>
  </div>
  `
};

items.forEach(item => {
  item.addEventListener("click", function() {
    const page = this.getAttribute("data-page");
    content.innerHTML = data[page];
  });
});

