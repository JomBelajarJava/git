# git checkout

`git checkout` ada satu lagi kegunaan selain menukar branch. Jika anda menaip
`git checkout --help`, Git akan memaparkan

```
git-checkout - Switch branches or restore working tree files
```

bermaksud selain menukar branch, kita juga boleh mengembalikan file ke bentuk
yang asal.

Contohnya, semasa kita sedang menulis code, code kita asyik tak menjadi-jadi.
Disebabkan terlalu geram, kita pun ingin mula dari awal, maka kita boleh
menggunakan `git checkout` untuk reset kembali file.

Caranya adalah dengan meletakkan nama file selepas command tersebut, contohnya,

```
git checkout bola.txt
```

Selain itu, kita juga boleh menggunakan nama folder. Jadi, kita boleh
menggunakan

```
git checkout .
```

Untuk reset semua file kembali ke asal.
