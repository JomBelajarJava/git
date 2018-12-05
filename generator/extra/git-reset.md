# git reset

`git reset` ialah command yang berlawanan dengan `git add`. Jika kita tersilap
memilih file menggunakan `git add`, kita boleh reset kembali pemilihan tersebut.
Caranya hampir sama dengan `git add`. Taip command kemudian path ke file atau
folder yang ingin kita reset.

Contoh,

```
git reset bola.txt
git reset folder/takpenting/
```

Untuk reset segala-galanya, hanya perlu menaip

```
git reset
```

## Reset commit

Satu lagi kegunaan `git reset` adalah untuk reset commit.

> Sebelum itu, saya ingin memberi pesanan, anda tidak perlu reset commit jika
> anda melakukan kesilapan pada code. Jika ada kesilapan pada code, anda cuma
> perlu membuat perubahan, kemudian commit sekali lagi supaya kita boleh
> menjejaki kesilapan kita. Kita cuma perlu reset untuk commit yang kita tidak
> mahu jejaki, contohnya jika kita tidak sengaja commit password database.

Contoh untuk reset commit adalah seperti berikut,

```
git reset HEAD~1
```

`HEAD~1` bermaksud daripada commit yang terakhir sehingga SATU commit sebelum
itu. Anda boleh mencuba dengan `git log` untuk melihat senarai commit yang
terakhir, kemudian `git reset HEAD~1`, dan check kembali menggunakan `git log`.

Untuk reset tiga commit terakhir, boleh taip seperti berikut,

```
git reset HEAD~3
```
