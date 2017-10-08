## Alkalmazások Fejlesztése Beadandó - Étterem

### 1)	Funkciók
*	város alapján lehet étteremre szűrni
*	egy étterem aloldalon megjelennek a hozzá tartozó értékelések és az étlap
*	egy felhasználó értékelheti az éttermet
*	új étterem hozzáadása / módosítása / törlése
*	új város hozzáadása / módosítása / törlése
*	új étel v. ital hozzáadása / módosítása / törlése
További ötletek
*	étel/ital (étlap) alapján szűrés (hogy melyik étteremben lehet kapni)
*	értékelés alapján listázás

### 2)	Adattáblák
Éttermek (Restaurants)
*	azonosító: int
*	név: string
*	város: (Város) azonosító		amelyik városban található
*	cím: string
Városok (Cities)
*	azonosító: int
*	név: string
Étlapok (Menus)
*	azonosító: id
*	típus: string		„food” vagy „drink”
*	név: string
*	étterem: (Étterem) azonosító		amelyik étteremben felszolgálják
Értékelések (Reviews)
*	azonosító: int
*	étterem: (Étterem) azonosító
*	user: (User azonosító)
*	értékelés: int		1-5 fokú skála
*	üzenet: string
Felhasználók
*	azonosító: int
*	felhasználónév: string
*	jelszó: password

### 3)	REST végpontok
*	/restaurants			éttermek listája
*	/restaurants/:id		egy specifikus étterem
*	/restaurants/:id/reviews	az adott étterem értékelései
*	/restaurants/:id/menus		adott étterem étlapja
*	/reviews			értékelések listája
*	/cities				városok listája
*	/cities/:id			kilistázza az adott város éttermeit
*	/users				felhasználók listája
*	/users/:id			adott felhasználó
*	/users/:id/reviews		adott felhasználó értékelései

