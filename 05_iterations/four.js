// +++++++++++++++++++++ LOOP IN OBJECTS using FOR IN ++++++++++++++++

const myObj = {
    js : 'JavaScript',
    cpp : 'C++',
    rb : 'ruby',
    swift : 'Swift by apple'
}

for (const key in myObj) {
     //console.log(key);
     console.log(`${key} for shortcut is for ${myObj[key]}`);
}

const proggming = ["js","cpp","java","py"]

for (const key in proggming) {
    //console.log(key); // 0 1 2 3
    console.log(proggming[key]); // values 
}