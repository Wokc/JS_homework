class User {
    constructor(data) {
        this.data = {
            id: data.id || 0,
            name: data.name || null,
            email: data.email || null,
            address: data.address || null,
            phone: data.phone || null
        };
    }

    edit (newData) {

        // Мое решение
        // if (newData.name != undefined) {this.data.name = newData.name}
        // if (newData.email != undefined) {this.data.email = newData.email}
        // if (newData.address != undefined) {this.data.address = newData.address}
        // if (newData.phone != undefined) {this.data.phone = newData.phone}

        // #1 
        for(let key in newData) {
        if (this.data[key])  this.data[key] = newData[key];
        }
        // #2 
        // this.data = Object.assign(this.data, newData);
    }

    get () {
        return this.data;
    }

}

class Contacts {
    constructor() {
        this.data = [];
    };

    add(data) {
        let id = 0;

        this.data.forEach((user) => {
            if (user.data.id > id) {
                id = user.data.id;
            }
        });
        id++;
        data.id = id;

        const contact = new User(data);
        this.data.push(contact);
    };

    edit(id, newData) {
        if (!id) return;

        const user = this.data.find(user => {
            return user.data.id == id;
        });

        user.edit(newData);
    };

    remove(id) {
        if (!id) return;

        let index = null;

        this.data.forEach((user, userIndex) => {
            
            if (user.data.id == id) {
                console.log(userIndex);
                index = userIndex;
            }
        });

        if (index === null) return;

        this.data.splice(index, 1);
        
    };

    get() {
        return this.data;
    };
}
const contacts = new Contacts

class ContactsUI {
    constructor() {
        this.init();
    }

    init(){
        const contactCreate = document.createElement('div');
        contactCreate.classList.add('contactCreate');

        const contactForm = document.createElement('div');
        contactForm.classList.add('contactForm');

        const contactName = document.createElement('input');
        contactName.setAttribute('type', 'text');
        contactName.setAttribute('name', 'name');
        contactName.setAttribute('placeholder', 'Contact name')
        contactName.classList.add('contactName');

        const contactAddress = document.createElement('input');
        contactAddress.setAttribute('type', 'text');
        contactAddress.setAttribute('name', 'address');
        contactAddress.setAttribute('placeholder', 'Contact address')
        contactAddress.classList.add('contactAddress')

        const contactEmail = document.createElement('input');
        contactEmail.setAttribute('type', 'text');
        contactEmail.setAttribute('name', 'Email');
        contactEmail.setAttribute('placeholder', 'Contact Email')
        contactEmail.classList.add('contactEmail')

        const contactPhone = document.createElement('input');
        contactPhone.setAttribute('type', 'phone');
        contactPhone.setAttribute('name', 'phone');
        contactPhone.setAttribute('placeholder', 'Contact phone')
        contactPhone.classList.add('contactPhone')

        contactForm.append(contactName, contactAddress, contactEmail, contactPhone);
        contactCreate.append(contactForm);
        document.body.append(contactCreate);


    }
}

new ContactsUI();

// const NewUser = new User ({
//     name: 'Alex',
//     email: 'Alex.gmail.com',
//     phone: '9547817'
// });

// NewUser.edit({
//     name: 'Bob',
//     phone: '11111111',
// })

// console.log(NewUser.get())

contacts.add({name: 'biba', email: 'lol@gmail.com'})
contacts.add({name: 'alex', email: 'alex@gmail.com', address: 'Vitebsk'})
contacts.add({name: 'Pop', email: 'Pop@gmail.com', phone: '5947817'})