class Message {
    constructor(text = '', created = Date.now()) {
        this.text = text;
        this.created = created;
    }
    toString() {
        return `Message's toString`;
    }

}

var emptyMessage = new Message();
var textMessage = new Message('Yesterday', Date.now() - 86400);

console.log(emptyMessage);
console.log(textMessage);

console.log(emptyMessage + '');
console.log(textMessage + '');