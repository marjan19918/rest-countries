let str1='Afganistan';
let str2='Turkamanistan'
let str3='Iran'
let str4='Bosnia and Herzegovina'
let str5='Central African Republic'
 let res=str1.match(/[aeiou]/gi)
 console.log(res);
//  str1.filter(d=>res)
 console.log([
    'Foo',
    'Bar',
    'Abc',
    'Lorem',
    'Ipsum'
  ].filter(str => /[aeiou]/g.test(str)));
  function disemvowel(str1) {
    return str1.replace(/[aeiou]/gi, '');
  }
  d=str5.includes('and') ? str5.replace('and',"I") : str5.concat(str5.match(/[A-Z]/g))
  console.log(str5.match(/[A-Z]/g));
  console.log((''.concat(str5.match(/[A-Z]/g))).replace(/[,]/g,''));
  console.log(str5.includes(' '));
  let g=str5.charAt(' ')
  console.log(g);
  console.log(str5.charAt(0).concat(g));
  console.log(str5.replace(/[aeiou]/g, ''));
  console.log(str3.slice(1));