// Upon first glance, Gemma's code below looks like it should work. But it throws a TypeError, saying: 
// Cannot read property 'forEach' of undefined. Why is that?

// let ladder = ''

// ['head', 'heal', 'teal', 'tell', 'tall', 'tail'].forEach(word => {
//   if (ladder !== '') {
//     ladder += '-'
//   }

//   ladder += word
// })

// console.log(ladder)  // expect: head-heal-teal-tell-tall-tail

let ladder = ''; // missing semicolon upon declaration of ladder caused JS thinking arr is part of value

['head', 'heal', 'teal', 'tell', 'tall', 'tail'].forEach(word => {
  if (ladder !== '') {
    ladder += '-'
  }

  ladder += word
});

console.log(ladder)  // expect: head-heal-teal-tell-tall-tail