class Human {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.party = null;
    }

    canVote() {
        return this.age >= 18 && !this.party;
    }

    vote(party) {
        if (this.canVote()) {
            console.log(`votes for ${party} party`);
            this.party = party;

        } else {
            console.warn("can't vote");
            if (this.party) {
                console.warn("already voted");
            }
            if (this.age < 18) {
                console.warn("age issue");
            }
        }
    }
}


class Ogrenci extends Human {
    constructor(name, age, school) {
        super(name, age);
        this.school = school;
    }

    vote(party) {
        console.warn(`${this.school} school student is voting`);
        super.vote(party);
    }

}

var u = new Human("ustun", 30);

u.vote("X");

u.vote("Y");


var a = new Ogrenci("Ahmet", 17, "TED");

a.vote("X");
