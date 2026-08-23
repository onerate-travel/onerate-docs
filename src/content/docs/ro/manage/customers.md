---
title: Clienți
description: Cum îi lași pe clienții tăi corporativi să rezerve singuri pe contractele tale cu furnizorii, rolurile din interiorul unui client, grupele de preț, plafoanele rezervărilor deschise — și exact ce pot și ce nu pot vedea.
---

Un **client** este unul dintre clienții tăi corporativi, configurat în OneRate astfel încât oamenii
lui să poată căuta și rezerva pe contractele *tale* cu furnizorii, la prețurile *tale*.

Îi configurează proprietarii și administratorii.

## De ce ai face-o

Alternativa este ca agentul tău să preia cererea la telefon sau pe email și să o introducă. Dacă un
client rezervă suficient, lăsându-l să o facă singur elimini acel pas fără să cedezi nimic —
contractele tale, furnizorii tăi și tarifele tale nete rămân ale tale.

## Cum configurezi unul

1. **Clienți → Adaugă un client.** Dă-i numele companiei.
2. Deschide-l și folosește **Invită**: introdu adresa de email a persoanei și apasă **Invită**.
3. Copiază linkul de invitație și trimite-i-l. Se alătură după ce îl deschide și se înregistrează.

La **{nume} — persoane** îi vezi pe toți: **Înscris** pentru cei care au acceptat, **Invitat** pentru
cei în așteptare. Poți **Copia linkul** din nou sau **Revoca** o invitație — revocarea oprește
imediat funcționarea linkului.

O invitație deja acceptată nu poate fi revocată; elimină în schimb persoana din client.

## Cele trei roluri din interiorul unui client

| Rol | Vede | Mai poate |
| --- | --- | --- |
| **Organizator** | Rezervările companiei sale | Să rezerve pentru oricine din compania sa |
| **Călător** | **Doar rezervările făcute de el însuși** | — |
| **Administrator client** | Rezervările companiei sale | Să își invite colegii și să administreze setările propriei companii |

Organizatorul este implicit și este ceea ce a fost fiecare utilizator client înainte ca celelalte două
să existe.

Dați rolul de **călător** persoanelor care își rezervă doar propriile călătorii: rezervarea unui coleg
nu apare deloc în lista lor, iar deschisă din link li se spune că nu există, nu că nu au voie să o
vadă.

Dați rolul de **administrator client** persoanei din acea companie care ar trebui să facă această
muncă în locul dvs. — să își invite colegii și să își definească propriile câmpuri. Nu ajunge la nimic
din agenția dvs.; granița este compania, nu rolul.

Niciunul dintre cele trei nu poate anula și niciunul nu vede vreodată numele unui furnizor sau prețul
dvs. net.

## Ce vede un utilizator client

| Vede | Nu vede |
| --- | --- |
| Hoteluri și disponibilitate | De la ce furnizor a venit tariful |
| Prețuri **cu marja ta deja aplicată** | Tariful tău net de la furnizor |
| Propriile rezervări | Orice altă rezervare, din agenția ta sau din propria companie |
| Propriile vouchere și detalii de confirmare | Rapoartele, furnizorii, echipa sau setările tale |

Identitatea furnizorului este eliminată din tot ce ating — rezultatele, rezervarea, pagina de
detalii. Nu există extindere, traseu sau referință care să o scape.

De asemenea, **nu pot anula**. Pagina lor de rezervare le spune să te contacteze și îi avertizează
să nu sune direct hotelul:

> Pentru a anula sau modifica această rezervare, contactează agenția ta — ea deține contractul cu
> furnizorul și este singura care o poate modifica. Nu suna direct hotelul: o modificare făcută
> acolo nu ar ajunge în această înregistrare.

## Ce vezi tu

**Rezervările clienților** listează fiecare rezervare făcută de utilizatorii fiecărui client, cu un
filtru pentru client. Are aceleași coloane ca rezervările tale plus clientul, iar pagina de detalii a
fiecărei rezervări este cea completă — furnizor, net, penalizări și tot.

Anularea rezervării unui client este treaba ta, din acea pagină.

## Prețuri pentru un client

Clienții fac parte din lanțul organizației tale, așa că [marja](/ro/manage/pricing/) ta și
configurația agenției tale curg implicit către ei. Un client poate avea propria marjă — utilă când un
client are alte condiții comerciale — și câștigă nivelul cel mai apropiat care are o valoare.

Ștergerea marjei proprii a unui client revine la cea a agenției tale, nu la zero.

### Grupe de preț

Dacă tarifați grupuri de clienți la fel — „A bayileri" la o cotă, „B bayileri" la alta — puneți-i
într-o **grupă de preț** în loc să vă repetați. Coloana grupei este pe acest ecran; grupele în sine
sunt la [Prețuri](/ro/manage/pricing/#grupe-de-preț).

Grupa se așază **între** marja proprie a clientului și cea a agenției dvs.: un client cu propria cotă
o păstrează, iar toți ceilalți din grupă primesc cota grupei.

Un client aparține cel mult unei grupe. Mutarea între grupe este aceeași listă derulantă.

## Plafonul rezervărilor deschise

Puteți limita cât poate avea un client **deschis** la un moment dat. Coloana este pe acest ecran: o
sumă în moneda dvs. de vânzare sau gol, dacă nu există plafon.

**Deschis** înseamnă rezervări care nu sunt nici anulate, nici deja consumate, adunate la prețul la
care le vindeți. O rezervare care ar duce clientul peste plafon este refuzată înainte să ajungă la
furnizor, iar agentului i se spune să discute cu dvs.

:::caution
Acesta **nu este o linie de credit.** OneRate nu vede niciodată o plată, deci nimic de aici nu se
schimbă când clientul vă plătește. Plafonul scade pe măsură ce sejururile se încheie și rezervările se
anulează — și cu nimic altceva.

Răspunde la *„opriți acest client să adune rezervări pe care nu le poate plăti"*. Nu răspunde la
*„acordați acestui client 50.000 credit"*; nimic din OneRate nu răspunde la asta, prin proiectare.
:::

Funcționează **pe fiecare monedă**. Un plafon stabilit în EUR nu spune nimic despre o rezervare
prețuită în TRY, pentru că OneRate nu convertește între monede — iar o limită este cel mai prost loc
din produs în care să începi să inventezi un curs.

## Înainte să inviți pe cineva

Două lucruri de pus la punct întâi, pentru că un client care se lovește de oricare dintre ele va afla
pur și simplu că rezervarea nu este disponibilă și te va suna:

1. **Un contact corporativ pentru rezervări** în [Setări](/ro/manage/settings/) — și email, și
   telefon. Fără el nu se poate face nicio rezervare, de către nimeni. Versiunea mesajului pentru
   client îi spune să îți ceară ție.
2. **O marjă cu care ești de acord să o vadă.** Ei văd prețul de vânzare. Dacă marja ta nu este
   setată, se uită la prețul net al furnizorului tău.

Invitarea cuiva se face în panoul care se deschide când selectezi un client, lângă persoanele deja
prezente — nu în rândul clientului. Dacă ce scrii în plafonul de rezervare deschisă nu este o sumă,
câmpul o spune și nu salvează nimic.

## Retragerea accesului

**Revocă** anulează o invitație în așteptare. Ca să elimini pe cineva care s-a alăturat deja,
scoate-l din lista de persoane a clientului — rezervările lui rămân înregistrate.
