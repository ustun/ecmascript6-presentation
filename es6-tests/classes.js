class Human {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.parti = null;
    }

    oyVerebilir() {
        return this.age >= 18 && !this.parti;
    }

    oyVer(parti) {
        if (this.oyVerebilir()) {
            console.log(`${parti} partisine oy veriyor`);
            this.parti = parti;

        } else {
            console.warn("oy veremez");
            if (this.parti) {
                console.warn("mukerrer oy");
            }
            if (this.age < 18) {
                console.warn("resit degil");
            }
        }
    }
}


class Ogrenci extends Human {
    constructor(name, age, school) {
        super(name, age);
        this.school = school;
    }

    oyVer(parti) {
        console.warn(`${this.school} okulundaki ogrenci oy veriyor`);
        super.oyVer(parti);
    }

}

var u = new Human("ustun", 30);

u.oyVer("X");

u.oyVer("Y");


var a = new Ogrenci("Ahmet", 17, "TED");

a.oyVer("X");
