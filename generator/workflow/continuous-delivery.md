# Continuous Delivery

> Tutorial ini hanya untuk team yang ingin mengikuti cara development yang
> disyorkan. Jika anda hanya develop secara solo atau team anda ada cara
> development yang tersendiri, anda boleh skip tutorial ini.

Kebiasaannya anggota team development mempunyai peranan masing-masing. Ada
frontend developer, backend developer, *quality assurance*(QA) engineer, dan
DevOps.

Bagi syarikat yang sudah mempunyai software development yang matang atau stabil,
mereka boleh menyediakan *continuous delivery*. *Continuous delivery* bermaksud
mereka boleh mengeluarkan update pada bila-bila masa walaupun proses development
masih berjalan. Cara ini menggunakan kelebihan Git yang boleh membuat branch
untuk code.

## Platform as a service(PaaS)

PaaS ialah servis untuk menjalankan application. Ada PaaS yang boleh menggunakan
Git repository untuk terus build application setiap kali kita push code,
contohnya [Heroku](https://www.heroku.com/) dan
[Dokku](http://dokku.viewdocs.io/dokku/). Oleh sebab itu, kita perlu memisahkan
code yang masih belum sempurna supaya PaaS tidak build code tersebut.

Kebiasaannya, code sesuatu projek akan dibahagikan kepada dua branch, `master`
dan `dev`. Branch `master` adalah untuk code yang terkini yang tengah live
sekarang, dan branch `dev` adalah untuk code yang sedang dalam development.

## Issue tracking system

Contoh *issue tracking system* adalah seperti
[JIRA](https://www.atlassian.com/software/jira), [Trello](https://trello.com/),
dan [Clubhouse](https://clubhouse.io/). Biasanya team development akan
menggunakan *issue tracking system* untuk menyenaraikan bug dan penambahbaikan
yang ingin dilakukan. Sistem ini akan memberikan nombor tiket untuk setiap issue
tersebut. Jadi, kita boleh menggunakan nombor tiket untuk nama branch kita.

Setelah memilih issue yang perlu diselesaikan, kita pun bina branch dari branch
`dev`. Setelah selesai menulis code, kita merge dengan branch `dev.`

## Automated testing

Antara tugas DevOps ialah memasang *automated testing* untuk QA engineer. Contoh
*automated testing* adalah seperti [Jenkins](https://jenkins.io/), [Travis
CI](https://travis-ci.org/) dan [CircleCI](https://circleci.com/). DevOps boleh
pilih mana-mana branch untuk *automated testing*, biasanya branch `dev`. Jadi,
apabila developer merge ke branch `dev`, testing akan berjalan secara automatik.
Jika semasa testing, code tidak mencapai piawaian, programmer yang berkenaan
bertanggungjawab membaiki code tersebut.

Setelah selesai, maka branch `dev` tersebut sudah siap sedia untuk diupdate ke
branch `master` untuk release.

> Ada sesetengah team memilih untuk update ke branch `staging` sebelum ke branch
> `master` untuk testing dalaman.

----

Sekarang kita sudah dapat gambaran kehidupan seharian seorang programmer.

```
Pilih tiket > selesaikan code > merge ke dev untuk testing > ulang jika testing gagal
```

## Hotfix

Kalau kita lihat kitaran development tersebut, ada satu kelemahan. Katakanlah
ada satu bug yang terlalu kritikal yang boleh menjejaskan bisnes. Jika hotfix
untuk masalah tersebut merge ke branch `dev`, hotfix tersebut perlu menunggu
sehingga semua code dalam branch `dev` melepasi testing. Branch `dev` juga
mungkin masih belum sedia untuk release, tetapi kita perlukan hotfix sekarang.

Bagi mengatasi masalah di atas, kita boleh membuat branch baru dari branch
`master` dengan nama `hotfix`. DevOps pun boleh memasang *automated testing*
untuk branch tersebut. Kemudian, programmer yang mengambil tiket berkenaan boleh
membina branch dari branch `hotfix` untuk membuat hotfix. Setelah siap, dia
boleh merge branch tersebut ke branch `hotfix` untuk testing. Pada masa yang
sama, dia juga perlu merge branch tersebut ke branch `dev` supaya branch `dev`
dapat update yang terkini, dan supaya kerjanya ada dalam rekod. Apabila tiada
masalah, branch `hotfix` boleh merge ke branch `master` untuk release.
