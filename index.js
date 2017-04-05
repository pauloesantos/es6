class Message {
  constructor(text = '', created = Date.now()) {
      this.text = text;
      this.created = created;
    }
  get created() {
      return this._created;
    }
  set created(created) {
      if (!created || isNaN(created)) {
          throw new Error('Invalid Created');
        }
      this._created = created;
    }
  toString() {
      return `Message created at: ${this._created} - Text #${this.text}`;
    }
}

class ImageMessage extends Message {
  constructor(text = '', created = Date.now(),
        url = '', thumbnail = '') {
      super(text, created);
      this.url = url;
      this.thumbnail = thumbnail;

    }
}

var text = 'um texto';
var created = Date.now();

var duckTypeMessage = {
  text,
  created
};

console.log(duckTypeMessage);

var emptyMessage = new Message();
var textMessage = new Message('Yesterday', Date.now() - 86400);
var photoMessage = new ImageMessage();

console.log(emptyMessage);
console.log(textMessage);
console.log(photoMessage);

console.log(emptyMessage instanceof Message);
console.log(textMessage instanceof Message);
console.log(photoMessage instanceof Message);
console.log(photoMessage instanceof ImageMessage);
console.log(emptyMessage instanceof ImageMessage);

console.log(emptyMessage instanceof Message);
console.log(duckTypeMessage instanceof Message);

// console.log(emptyMessage + '');
// console.log(textMessage + '');

// console.log(String(emptyMessage));
// console.log(String(textMessage));