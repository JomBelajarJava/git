# git add

Kita telah menggunakan command ini untuk memilih file yang ingin kita tambah ke
dalam rekod. Selama ini, kita hanya menaip command berserta nama file. Apabila
difikirkan kembali, cara ini agak menyusahkan untuk projek yang mempunyai banyak
file yang berubah.

Sekarang kita lihat flag yang boleh kita gunakan dengan `git add`.

## git add &lt;nama_folder>

Selain nama file, kita juga boleh menggunakan nama folder untuk menambah folder
termasuk kandungannya sekaligus. Jika anda menggunakan Linux, anda boleh
menggunakan `./` atau hanya `.` untuk merujuk 'folder ini'. Jadi, antara cara
untuk menambah semua file adalah dengan menggunakan `git add .` semasa berada
dalam root folder projek.

## git add -A

`git add --all` atau `git add -A` akan menambah semua file yang boleh dikesan
oleh Git tidak kisah anda berada dalam folder yang mana.

## git add -u

`git add --update` atau `git add -u` pula akan menambah semua perubahan pada
file yang telah dijejaki sebelum ini. Maksudnya jika anda membuat file baru,
command ini tidak akan pilih file tersebut.

----

Command-command di atas adalah untuk memilih semua perubahan, bagaimana jika
kita ingin memilih sebahagian perubahan dalam satu-satu file? Untuk itu, kita
boleh menggunakan,

## git add -p

Kita boleh menggunakan `git add --patch` atau `git add -p` untuk memilih
perubahan. Selepas menaip command tersebut, Git akan menunjukkan sebahagian
daripada perubahan, dan bertanya,

```
Stage this hunk [y,n,q,a,d,/,s,e,?]?
```

Taip `y` untuk ya, `n` untuk `no`, `q` untuk quit, dan `s` untuk split. Yang
lain-lain, anda boleh lihat menggunakan `git add --help`.

Split adalah untuk memisahkan lagi bahagian yang dipaparkan supaya anda boleh
memilih bahagian yang lebih kecil.

Setelah memberi jawapan, Git akan mengulangi soalan yang sama untuk
bahagian-bahagian yang lain.
