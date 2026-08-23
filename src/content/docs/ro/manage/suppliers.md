---
title: Furnizori
description: Conectarea propriilor contracte cu furnizorii, testarea și înlocuirea cheilor, activarea și dezactivarea, sănătatea și cache-ul de tarife.
---

OneRate nu revinde inventarul nimănui. Tu aduci contractele pe care le ai deja, iar OneRate le
caută în numele tău. Acest ecran este locul unde stau datele tale de acces.

Doar proprietari și administratori.

## Adăugarea unui furnizor

1. **Furnizori → Adaugă un furnizor.**
2. Alege furnizorul din listă.
3. Alege **mediul** — **Sandbox** sau **Producție**. Este mediul propriu al furnizorului căruia îi
   aparține cheia, iar o cheie de sandbox nu poate fi folosită în producție. Greșeala aici este cea
   mai frecventă eroare de configurare.
4. Introdu datele de acces pe care ți le-a emis furnizorul.
5. Opțional dă-i o **etichetă**, utilă când ai două contracte cu același furnizor.
6. **Adaugă furnizorul.**

Datele de acces sunt criptate înainte de a fi salvate, sunt decriptate doar în momentul în care se
face o cerere către acel furnizor și nu sunt trimise niciodată înapoi către browserul tău. Nici tu
nu poți citi înapoi din portal o cheie salvată — dacă o pierzi, cere una nouă furnizorului și
înlocuiește-o aici.

## Testarea unei chei

**Testează** face un apel real către furnizor cu datele de acces salvate.

| Rezultat | Sens |
| --- | --- |
| „…a acceptat datele de acces salvate.” | Cheia funcționează. |
| „…cheia a fost respinsă” | Cheia este greșită, expirată sau este pentru celălalt mediu. Înlocuiește-o. |
| „…furnizorul ne limitează cererile” | Cheia **poate fi perfect în regulă**. Așteaptă și testează din nou. |
| „…furnizorul nu a răspuns la timp” | Cheia poate fi în regulă. Furnizorul este lent sau picat. |
| „…furnizorul nu a putut fi contactat” | Cheia poate fi în regulă. O problemă de rețea sau o pană la furnizor. |

Doar prima eroare este despre cheia ta. Restul sunt afirmații despre furnizor, iar formularea are
grijă de diferență în mod intenționat — înlocuirea unei chei funcționale pentru că furnizorul a fost
picat pentru scurt timp înrăutățește lucrurile.

## Înlocuirea unei chei

**Înlocuiește cheia** preia o nouă credențială și o schimbă. Dacă noua cheie nu este acceptată,
**cea veche rămâne în uz** — nu poți strica o conexiune funcțională cu o lipire greșită.

Fă-o după calendarul furnizorului și imediat dacă o cheie ar fi putut fi expusă.

## Activare și dezactivare

Doar furnizorii **activați** sunt căutați.

**Dezactivează** scoate un furnizor din fiecare căutare fără să șteargă nimic. Folosește-o când un
contract este suspendat, când un furnizor are o zi proastă și îți încetinește căutările, sau cât timp
rezolvi o problemă de credențiale. Reactivează oricând.

**Elimină** șterge furnizorul și datele lui de acces salvate. Nu este reversibil — vei avea nevoie
din nou de datele de acces pentru a-l adăuga înapoi.

:::note
Un furnizor nu poate fi activat până când agenția ta nu are setările de care depinde folosirea acelui
furnizor — de exemplu alocarea ta de cereri. Portalul numește valoarea lipsă și trimite acolo unde se
setează. Vezi [Setări](/ro/manage/settings/).
:::

**Dezactivarea** unui furnizor întreabă mai întâi: tarifele lui nu mai apar în nicio căutare din
acel moment, iar singurul semn este o listă de rezultate mai scurtă. Reactivarea nu întreabă — ea
este remediul.

## Sănătate

Coloana **Sănătate** este vederea în timp real pe care OneRate o are asupra acelui furnizor, nu o
stare contractuală:

| Sănătate | Sens |
| --- | --- |
| **Sănătos** | Normal. Cererile trec. |
| **În revenire** | Eșua; OneRate lasă cu grijă traficul să treacă din nou. |
| **Indisponibil** | Eșuează constant, așa că OneRate a încetat să îl mai apeleze pentru o perioadă, în loc să facă fiecare căutare să aștepte un timeout. |

**Indisponibil** este o protecție, nu o pedeapsă. Un furnizor picat ar adăuga altfel timeout-ul lui
complet la fiecare căutare pe care o faci. Se eliberează singur când furnizorul își revine.

Acesta este și ceea ce vei vedea reflectat în linia de stare pe furnizor de pe ecranul de căutare.

## Cache-ul de tarife

OneRate păstrează scurt în cache tarifele unui furnizor, astfel încât repetarea unei căutări câteva
secunde mai târziu să nu consume încă o cerere din alocarea ta.

**Oprește cache-ul** îl dezactivează pentru un furnizor — fiecare căutare îl întreabă atunci din nou.
Folosește-l când urmărești o discrepanță de preț și trebuie să vezi exact ce spune furnizorul chiar
acum. Un furnizor cu cache-ul oprit este marcat **Fără cache**, ca nimeni să nu se întrebe de ce
căutările au încetinit.

Tarifele din cache sunt întotdeauna limitate la agenția ta. Tarifele tale contractate nu sunt servite
niciodată altei agenții, iar cele ale altei agenții nu îți sunt servite niciodată ție.

## Ce furnizori sunt disponibili

Lista de pe ecranul **Adaugă un furnizor** este cea pentru care OneRate are în prezent adaptoare.
Dacă ai contract cu un furnizor care nu apare, spune-i OneRate — adăugarea unuia este muncă de
produs, nu o setare pe care o poți comuta.

## Mai departe

- [Preferințe de furnizori](/ro/manage/preferences/) — modificarea criteriului „cel mai ieftin” pentru
  angajamente de volum
- [Prețuri și marjă](/ro/manage/pricing/)
