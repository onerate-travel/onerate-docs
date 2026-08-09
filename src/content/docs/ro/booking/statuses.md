---
title: Stările rezervării
description: Fiecare stare pe care o poate avea o rezervare, ce înseamnă pentru oaspete și cele două care cer un om — În reconciliere și Verificare manuală.
---

## Stările

| Stare | Ce înseamnă | Ce ar trebui să faci |
| --- | --- | --- |
| **Ciornă** | Creată, încă neplasată la furnizor. | Nimic — durează o clipă. |
| **Prerezervată** | Prețul a fost reverificat și acceptat; rezervarea este în curs de plasare. | Nimic. |
| **Confirmată** | Furnizorul o are. Există o referință de confirmare și un voucher. | Trimite voucherul. Gata. |
| **Eșuată** | Nu s-a întâmplat și știm că nu s-a întâmplat. La furnizor nu există nimic. | Rezervă din nou dacă oaspetele mai vrea sejurul. |
| **În reconciliere** | Încă nu știm dacă furnizorul a preluat-o. | **Așteaptă. Nu o rezerva din nou.** Vezi mai jos. |
| **Verificare manuală** | Tot necunoscută după 24 de ore. Trebuie rezolvată de un om. | Proprietar sau administrator: verifică la furnizor și înregistrează ce găsești. Vezi mai jos. |
| **Anulată** | Anulată. Orice penalizare percepută de furnizor este înregistrată pe rezervare. | Nimic. |
| **Modificată** | Furnizorul raportează că rezervarea a fost schimbată. | Verifică detaliile și cronologia. |

## În reconciliere

Aceasta este starea pe care merită să o înțelegi bine.

**Un timeout al furnizorului înseamnă *necunoscut*, nu *eșuat*.** Cererea poate să fi ajuns și să
fi fost acceptată după ce conexiunea a căzut. A o trata drept eșec și a rezerva din nou este modul
în care o agenție ajunge cu — și plătește — două camere.

Așa că OneRate nu ghicește. Pune rezervarea **În reconciliere** și întreabă furnizorul din nou, la
intervale tot mai mari, până la 24 de ore. Portalul spune exact asta:

> Verificăm cu furnizorul dacă această rezervare a intrat. Verificarea se repetă automat și se
> rezolvă în 24 de ore; dacă rămâne necunoscută și după aceea, este escaladată către o persoană.
>
> Între timp nu rezerva din nou acest sejur — dacă furnizorul chiar a preluat-o, ai ajunge cu două.

Apoi se pot întâmpla trei lucruri:

- Furnizorul confirmă că există → **Confirmată**, și totul continuă normal.
- Furnizorul este definitiv sigur că nu există → **Eșuată**. Rezervă liniștit din nou.
- Tot necunoscută după 24 de ore → **Verificare manuală**.

Nu ai nimic de făcut cât timp o rezervare este în reconciliere. Verificarea rulează indiferent dacă
portalul este deschis sau nu.

:::caution
Dacă oaspetele stă în fața ta și are nevoie de o cameră în seara asta, **rezervă alt hotel sau alt
tarif**, nu același din nou. O a doua rezervare a aceluiași sejur este exact duplicatul pe care
această stare există ca să îl prevină.
:::

## Verificare manuală

24 de ore de verificări automate nu au lămurit-o. Trebuie să se uite cineva.

Doar un proprietar sau un administrator o poate închide, pentru că este o declarație permanentă
despre ce s-a întâmplat cu adevărat. Ecranul spune:

> Reconcilierea nu a putut stabili dacă această rezervare a ajuns la furnizor. Verifică evidențele
> furnizorului tău și înregistrează ce găsești — este singurul mod în care iese din verificare.

### Cum închizi una

1. **Verifică extranetul furnizorului sau sună-l.** Nu închide din memorie sau prin deducție. Asta e
   toată treaba.
2. Deschide rezervarea și mergi la **Închide această rezervare**.
3. Înregistrează ce arată furnizorul:
   - **Rezervarea există** — trebuie să furnizezi **referința de confirmare a furnizorului**. Fără
     ea nimic nu identifică rezervarea la furnizor, deci formularul o cere.
   - **Nu există nicio astfel de rezervare** — este înregistrată ca eșuată, iar sejurul poate fi
     rezervat din nou.
   - **Există, dar este deja anulată** — se înregistrează ca anulată.
4. Apasă **Înregistrează acest rezultat**.

Dacă altcineva a închis-o înaintea ta, ți se va spune: *„Această rezervare nu mai este în
verificare — altcineva a închis-o înaintea ta.”* Nimic nu se suprascrie.

## Rezervări care îți cer atenția

Navigația poartă un număr al rezervărilor blocate într-o stare care nu se rezolvă de la sine.
Urmează-l. O rezervare în verificare manuală este o cameră pe care un oaspete o are sau nu, și nu
se rezolvă singură.

## De ce stările se mișcă într-o singură direcție

O rezervare parcurge un traseu fix — Ciornă → Prerezervată → Confirmată, sau către Eșuată, În
reconciliere ori Verificare manuală — și niciodată înapoi. Tranzițiile sunt impuse în momentul în
care se scriu, nu verificate după aceea, așa că două persoane care acționează în același timp nu
pot produce două rezultate.

Practic, asta înseamnă: ce vezi pe o rezervare este ce s-a întâmplat. Nu există o cale de reparare
care rescrie în tăcere istoria, exact de aceea verificarea manuală cere declarația unui om în loc
de un buton de reîncercare.
