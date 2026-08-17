---
title: Integracje
description: Klucze API, którymi Państwa systemy czytają rezerwacje, oraz webhooki powiadamiające, gdy coś się wydarzy.
---

Dwa sposoby, w jakie Państwa systemy mogą współpracować z OneRate. Właściciele i administratorzy.

Oba znajdują się w [Ustawieniach](/pl/manage/settings/).

## Klucze API

Klucz pozwala Państwa własnemu zapleczu odczytywać **Państwa** rezerwacje z OneRate, bez logowania
się kogokolwiek.

### Tworzenie

1. **Ustawienia → Klucze API.** Proszę nadać nazwę mówiącą, gdzie będzie używany — później zechcą
   Państwo wiedzieć, który unieważnić.
2. **Utwórz klucz.**
3. **Proszę skopiować klucz teraz.** Pokazywany jest raz i nigdy więcej.

Nie ma przycisku „pokaż klucz", a wsparcie go Państwu nie odczyta. OneRate przechowuje jednokierunkowy
odcisk, więc kopia bazy nie daje nikomu działającego klucza. W razie utraty proszę utworzyć nowy i
unieważnić stary.

Lista pokazuje pierwsze znaki każdego klucza — dość, by odróżnić cztery, o wiele za mało, by któregoś
użyć.

### Używanie

Proszę wysłać go jako bearer token:

```http
GET /api/v1/bookings?checkInFrom=2026-09-01&checkInTo=2026-09-30
Authorization: Bearer onerate_…
```

- `GET /api/v1/bookings` — Państwa rezerwacje, filtrowane po zakresie pobytu i statusie.
- `GET /api/v1/bookings/{id}` — jedna rezerwacja, w całości.

W tych adresach nie ma nigdzie identyfikatora organizacji. **To klucz mówi, o które biuro chodzi** —
i dlatego klucz jednego biura nigdy nie odczyta rezerwacji innego.

### Co klucz może, a czego nie

Klucz **czyta**. Nie może rezerwować, anulować ani niczego zmieniać i nie sięga do Państwa ustawień,
dostawców ani zespołu.

To celowe i nie na zawsze. Rezerwowanie przez API otwiera pytanie **do Państwa dostawców**, nie do
OneRate — czy ruch z Państwa własnej strony liczy się na ich warunkach jako Państwa ruch — a ta
odpowiedź zapada osobno dla każdego dostawcy i na piśmie. Odczyt własnych danych nie otwiera żadnego
z tych pytań.

**Dozwolone adresy IP** Państwa biura, jeśli zostały ustawione, obowiązują także klucze. Klucz to
również ruch Państwa biura.

Każdy klucz ma własny limit żądań. Jedna integracja w pętli nie kładzie drugiej — i dlatego nazwy mają
znaczenie: unieważniają Państwo tę, która sprawia kłopot, a nie swój dostęp.

### Unieważnianie

**Unieważnij** zatrzymuje klucz natychmiast. Pozostaje on na liście, oznaczony jako unieważniony, by
zapis tego, co się stało, pozostał czytelny.

Klucz unieważniony i klucz, który nigdy nie istniał, dają tę samą odpowiedź. Ten, kto go trzyma, nie
dowie się, czy kiedykolwiek był prawdziwy.

## Webhooki

Webhook to OneRate mówiący Państwa systemowi, że coś się wydarzyło, zamiast systemu, który pyta.

### Dodanie punktu

1. **Ustawienia → Punkty webhook.**
2. Proszę podać **adres https**, pod który OneRate ma wysyłać POST.
3. Zaznaczyć **zdarzenia**, które Państwa interesują.
4. **Dodaj punkt**, a następnie **skopiować klucz podpisujący** — jak przy kluczu API, pokazywany jest
   raz.

Tylko `https` i żadnych adresów w sieci wewnętrznej. Podpis dowodzi, że wiadomość jest autentyczna;
nie ukrywa jej treści, a te wiadomości niosą nazwiska gości.

### Zdarzenia

| Zdarzenie | Kiedy |
| --- | --- |
| `booking.confirmed` | Dostawca potwierdził rezerwację |
| `booking.failed` | Próba rezerwacji zakończyła się bez rezerwacji |
| `booking.cancelled` | Anulowanie doszło do skutku |
| `booking.manual_review` | Rezerwacja czeka na decyzję człowieka |
| `option.expiring` | Zbliża się termin opcji |

Otrzymują Państwo dokładnie te zdarzenia, które zaznaczono. Nie ma opcji „wszystko" — w dniu, w
którym OneRate doda szóste zdarzenie, Państwa odbiornik zacząłby dostawać kształt wiadomości, jakiego
nigdy nie widział.

### Sprawdzenie, że wiadomość naprawdę pochodzi z OneRate

Każda dostawa niesie dwa nagłówki:

```http
onerate-event: booking.confirmed
onerate-signature: t=1800000000,v1=<hex>
```

`v1` to HMAC-SHA256 z `<t>.<treść>` przy użyciu Państwa klucza podpisującego. Proszę przeliczyć i
porównać. Proszę odrzucać wszystko, czego znacznik czasu jest odległy od teraz — to powstrzymuje
późniejsze odtworzenie przechwyconej dostawy.

### Gdy Państwa odbiornik nie działa

Nieudana dostawa jest ponawiana i po kilku próbach zostaje porzucona. Wiersz punktu pokazuje
**ostatnią dostawę** i to, co wróciło, dzięki czemu widzą Państwo awarię własnego odbiornika, nie
pytając nikogo — logi OneRate nie są czymś, co można przeczytać.

**Wstrzymanie** punktu na czas naprawy. Wstrzymanie zachowuje adres i klucz, którymi system jest już
skonfigurowany; usunięcie traci oba.

Wiadomość, która w chwili wstrzymania czekała już w kolejce, nie zostanie dostarczona. To właśnie
różnica między wstrzymaniem a opóźnieniem.
