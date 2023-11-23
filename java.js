// Mengambil elemen header menggunakan selektor CSS
const header = document.querySelector("header");

// Menambahkan event listener untuk event scroll pada window
window.addEventListener("scroll", function () {
  // Menambah atau menghapus kelas "sticky" pada header berdasarkan posisi scroll
  header.classList.toggle("sticky", this.window.scrollY > 0);
});

// Mendeklarasikan variabel menu dan navmenu
let menu = document.querySelector("#menu-icon");
let navmenu = document.querySelector(".navmenu");

// Menambahkan event listener untuk event klik pada ikon menu
menu.onclick = () => {
  // Mengganti ikon menu menjadi "X" dan menampilkan/menyembunyikan menu navigasi
  menu.classList.toggle("bx-x");
  navmenu.classList.toggle("open");
};


