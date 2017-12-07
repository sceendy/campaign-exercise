import style from '../scss/_styles.scss';

const FORM_BTN = document.getElementById('petition');

// PETITION
class Petition {
  constructor() {
    this.petitionUrL = 'https://my.api.mockaroo.com/people.json?key=43754b40';
    this.petitionBtn = document.getElementById('petition');
    this.formName = document.getElementById('name');
    this.formMessage = document.getElementById('message');
    this.formState = document.getElementById('state');
  }

  getSignatures() {
    let headers = new Headers();

    return fetch(this.petitionUrL, {
      method: 'GET',
      headers: headers
    }).then(data =>  data.json());
  }

  submitSignature() {
    let headers = new Headers();
    let date = new Date().toUTCString();
    let data = {
      name: this.formName.value,
      date: date,
      state: this.formState.valu
    };
    console.log(data);
    // return fetch(this.petitionUrL, {
    //   method: 'POST',
    //   headers: headers,
    //   body: data
    // }).then(data => data.json());
  }
}

let petition = new Petition();

petition.getSignatures().then(people => {
  let userList = document.getElementsByClassName('users')[0];
  people.forEach(person => {
    let box = document.createElement('li');
    box.innerHTML = `${person.name} <br/>from ${person.state} <br/><br/> <small>Signed on ${person.date}</small>`;
    userList.append(box);
  })
});

FORM_BTN.addEventListener('click', petition.submitSignature);