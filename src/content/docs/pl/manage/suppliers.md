---
title: Dostawcy
description: Podłączanie własnych umów z dostawcami, testowanie i wymiana kluczy, włączanie i wyłączanie, kondycja oraz buforowanie stawek.
---

OneRate nie odsprzedaje niczyjego inwentarza. Ty przynosisz umowy, które już masz, a OneRate
przeszukuje je w Twoim imieniu. Ten ekran to miejsce, w którym żyją Twoje dane dostępowe.

Tylko właściciele i administratorzy.

## Dodawanie dostawcy

1. **Dostawcy → Dodaj dostawcę.**
2. Wybierz dostawcę z listy.
3. Wybierz **środowisko** — **Środowisko testowe** albo **Produkcja**. To środowisko dostawcy, do
   którego należy klucz, a klucza testowego nie można używać produkcyjnie. Pomyłka tutaj to
   najczęstszy błąd konfiguracji.
4. Wpisz dane dostępowe wydane Ci przez dostawcę.
5. Opcjonalnie nadaj **etykietę** — przydatną, gdy masz dwie umowy z tym samym dostawcą.
6. **Dodaj dostawcę.**

Dane dostępowe są szyfrowane przed zapisem, odszyfrowywane tylko w chwili wykonywania żądania do
tego dostawcy i nigdy nie wracają do Twojej przeglądarki. Nawet Ty nie odczytasz zapisanego klucza z
portalu — jeśli go zgubisz, weź nowy od dostawcy i podmień go tutaj.

## Testowanie klucza

**Testuj** wykonuje prawdziwe wywołanie do dostawcy z zapisanymi danymi.

| Wynik | Znaczenie |
| --- | --- |
| „…przyjął zapisane dane dostępowe.” | Klucz działa. |
| „…klucz został odrzucony” | Klucz jest błędny, wygasł albo należy do drugiego środowiska. Wymień go. |
| „…dostawca ogranicza nam liczbę zapytań” | Klucz **może być całkowicie poprawny**. Poczekaj i przetestuj ponownie. |
| „…dostawca nie odpowiedział na czas” | Klucz może być poprawny. Dostawca jest wolny albo niedostępny. |
| „…nie udało się połączyć z dostawcą” | Klucz może być poprawny. Problem sieciowy albo awaria dostawcy. |

Tylko pierwszy błąd dotyczy Twojego klucza. Reszta to stwierdzenia o dostawcy, a sformułowania celowo
pilnują tej różnicy — wymiana działającego klucza dlatego, że dostawca chwilowo leżał, pogarsza
sprawę.

## Wymiana klucza

**Wymień klucz** przyjmuje nowe dane i podmienia je. Jeśli nowy klucz nie zostanie przyjęty, **stary
pozostaje w użyciu** — nie zepsujesz działającego połączenia złym wklejeniem.

Rób to zgodnie z harmonogramem dostawcy, a natychmiast, gdy klucz mógł wyciec.

## Włączanie i wyłączanie

Przeszukiwani są wyłącznie **włączeni** dostawcy.

**Wyłącz** usuwa dostawcę z każdego wyszukiwania, nic nie kasując. Użyj tego, gdy umowa jest
zawieszona, gdy dostawca ma gorszy dzień i spowalnia Twoje wyszukiwania albo gdy porządkujesz
problem z danymi dostępowymi. Włącz ponownie w dowolnej chwili.

**Usuń** kasuje dostawcę i jego zapisane dane dostępowe. To nieodwracalne — do ponownego dodania
będziesz potrzebować danych jeszcze raz.

:::note
Dostawcy nie da się włączyć, dopóki Twoja agencja nie ma ustawień, od których zależy korzystanie z
niego — na przykład Twojego przydziału zapytań. Portal nazywa brakującą wartość i prowadzi tam,
gdzie się ją ustawia. Zobacz [Ustawienia](/pl/manage/settings/).
:::

**Wyłączenie** dostawcy najpierw pyta: jego stawki przestają pojawiać się w każdym wyszukiwaniu od
tej chwili, a jedynym znakiem jest krótsza lista wyników. Ponowne włączenie nie pyta — to jest
naprawa.

## Kondycja

Kolumna **Kondycja** to bieżący widok OneRate na danego dostawcę, a nie status umowy:

| Kondycja | Znaczenie |
| --- | --- |
| **Sprawny** | Normalnie. Żądania przechodzą. |
| **Wraca do sprawności** | Wcześniej zawodził; OneRate ostrożnie przepuszcza ruch z powrotem. |
| **Niedostępny** | Zawodzi konsekwentnie, więc OneRate przestał go wywoływać na jakiś czas, zamiast kazać każdemu wyszukiwaniu czekać na przekroczenie czasu. |

**Niedostępny** to zabezpieczenie, nie kara. Leżący dostawca w innym razie dokładałby swój pełny
timeout do każdego uruchomionego wyszukiwania. Stan sam się zdejmuje, gdy dostawca wraca do formy.

To samo zobaczysz odzwierciedlone w wierszu statusu dostawców na ekranie wyszukiwania.

## Buforowanie stawek

OneRate na krótko buforuje stawki dostawcy, żeby powtórzenie wyszukiwania kilka sekund później nie
zużywało kolejnego zapytania z Twojego przydziału.

**Przestań buforować** wyłącza to dla jednego dostawcy — wtedy każde wyszukiwanie pyta go od nowa.
Użyj tego, gdy tropisz rozbieżność cenową i musisz zobaczyć dokładnie, co dostawca mówi w tej
chwili. Dostawca z wyłączonym buforem jest oznaczony jako **Bez bufora**, żeby nikt się nie
zastanawiał, czemu wyszukiwania zwolniły.

Buforowane stawki są zawsze ograniczone do Twojej agencji. Twoje kontraktowe stawki nigdy nie trafią
do innej agencji, a stawki innej agencji nigdy nie trafią do Ciebie.

## Którzy dostawcy są dostępni

Lista na ekranie **Dodaj dostawcę** to ci, dla których OneRate ma obecnie adaptery. Jeśli Twoja umowa
jest z dostawcą spoza listy, powiedz o tym OneRate — dodanie go to praca produktowa, a nie
ustawienie, które możesz przełączyć.

## Dalej

- [Preferencje dostawców](/pl/manage/preferences/) — nadpisywanie „najtańsze najpierw” przy
  zobowiązaniach wolumenowych
- [Ceny i marża](/pl/manage/pricing/)
