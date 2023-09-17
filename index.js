let name = prompt('Как вас зовут?').toLocaleLowerCase().trim()

if (name.charAt(0).toLowerCase() === 'a') {
    let age = prompt('Сколько вам лет?')
    if (age >= 20 && age <= 40) {

    let money = prompt('Сколько у вас денег?')
    if (money >99) {
      let people= prompt('Сколько вас?')
      if(people>0 && people <4){
        alert('Добро пожаловать!')
      }else{
        alert('Проваливай!')
      }
    }else{
        alert('Проваливай!')
    }
 
   
} else {
    alert('Проваливай!')
}
}else{
    alert('Проваливай!')
}