/**
 * Create a Friend class with the following properties
 * - name (string)
 * - email (string)
 * - phone (string)
 *
 * Create an collection of 3 to 5 friends with any values.
 *
 * Iterate through the collection and display each friend
 * in the console.
 */

class Friend {
    name;
    email;
    phone;
    constructor(name, email, phone) {
        this.name = name,
        this.email = email,
        this.phone = phone
    }

    print(){
        console.log(`${this.name}, ${this.email}, ${this.phone}`)
    }

}

let friend = new Friend("Drew", "d@g.com", "482-402-5294");
let friend2 = new Friend("Bob", "b@g.com", "489-264-2274");
let friend3 = new Friend("Phil", "p@g.com", "849-384-2849");

const friends = [friend, friend2, friend3];

for(let i of friends){
i.print();
}


