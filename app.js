// 1-MASALA
// For3. Bir kg konfetning narxi berilgan (haqiqiy son). 1, 2, 10 kg konfetni narxini chiqaruvchi programma tuzilsin.
const narx = 35000;
for (let i = 1; i <= 10; i++) {
  console.log(`${i}kg :`, i * narx);
}

// 2-MASALA
// For4. Bir kg konfetning narxi berilgan (haqiqiy son). 1.2, 1.4, ..., 2 kg konfetni narxini chiqaruvchi programma tuzilsin.
const konfet = 35000;
for (let i = 1.2; i <= 2; i += 0.2) {
  console.log(`${i.toFixed(1)}kg :`, i.toFixed(1) * konfet);
}

// 3-MASALA
// For5. a va b butun sonlari berilgan (a < b). a dan b gacha bo'lgan barcha butun sonlar yig'indisini chiqaruvchi programma tuzilsin.
const a = 1;
const b = 7;
let counter = 0;
for (let i = a; i <= b; i++) {
  if (a < b) {
    counter += i;
  } else {
    console.log("a b dan katta bolishi shart");
  }
}
console.log("Yig'indi: ", counter);

// 4-MASALA
// For6. a va b butun sonlari berilgan (a < b). a dan b gacha bo'lgan barcha butun sonlar ko'paytmasini chiqaruvchi programma tuzilsin.
const son = 1;
const son1 = 7;
let counter1 = 1;
for (let i = son; i <= son1; i++) {
  if (son < son1) {
    counter1 *= i;
  } else {
    console.log("a b dan katta bolishi shart");
  }
}
console.log("Yig'indi: ", counter1);

// 5-MASALA
// For7. a va b butun sonlari berilgan (a < b). a dan b gacha bo'lgan barcha butun sonlar kvadratlarining yig'indisini chiqaruvchi programma tuzilsin.

const number = 1;
const Number = 7;
let sum = 1;
for (let i = number; i <= Number; i++) {
  if (number < Number) {
    sum += i ** 2;
  } else {
    console.log("a b dan katta bolishi shart");
  }
}
console.log("Yig'indi: ", sum);

// 6-MASALA
// For8. n butun soni berilgan (n > 0). Quyidagi yig'indini hisoblovchi programma tuzilsin. S=1+1/2+1/3+...+1/n

const n = 5;
let S = 0;
for (let i = 1; i <= n; i++) {
  S += 1 / i;
}
console.log(S);

// 7-MASALA
// For9. n butun soni berilgan (n > 0). Quyidagi ko'paytmani hisoblovchi programma tuzilsin. S=1.1*1.2* 1.3*... *n

const N = 3;
let natija = 1;
for (let i = 1.1; i <= N; i += 0.1) {
  natija *= i;
}
console.log(natija);

// 8-MASALA
// For10. n butun soni berilgan (n > 0). Shu sonning kvadratini quyidagi formula asosida hisoblovchi programma tuzilsin.
//  n^2=1+3+5+... + (2*n-1)
const A = 5;
let yigindi = 0;
for (let i = 1; i <= A; i++) {
  yigindi += 2 * i - 1;
  console.log(`${yigindi}`);
}

// 9-MASALA
// For11. n butun soni va a haqiqiy soni berilgan (n > 0). a ning n - darajasini aniqlovchi programma tuzilsin.
// a^n=a*a*a...a;

const c = 6;
const d = 2;
let Sum = 1;
for (let i = 1; i <= d; i++) {
  Sum *= c;
}
console.log(Sum);

// 10-MASALA
// For12. n butun soni va a haqiqiy soni berilgan (n > 0). Bir sikldan foydalanib a ning 1 dan n gacha bo'lgan barcha darajalarini chiqaruvchi programma tuzilsin.
const e = 6;
const f = 2;
let summa = 0;
for (let i = 1; i <= e; i++) {
  summa = f ** i;
  console.log(summa);
}

// 11-MASALA
// For13. n butun soni va a haqiqiy soni berilgan (n > 0). Bir sikldan foydalanib quyidagi a ning 1 dan n gacha bo'lgan barcha darajalarini chiqaruvchi va yig'indini hisoblovchi programma tuzilsin.
// S = 1+a^1+a^2 + a^3 + ... a^n

const g = 5;
const h = 3;
let Summa = 0;
for (let i = 1; i <= g; i++) {
  Summa += h ** i;
}
console.log(Summa);

// 12-MASALA
// For14. n butun soni berilgan (n > 0). Bir sikldan foydalangan holda quyidagi yig'indini hisoblovchi programma tuzilsin.
// S = 1! + 2! + 3! + ... + n!

const j = 9;
let result = 1;
for (let i = 1; i <= j; i++) {
  result *= i;
}
console.log(result);

// 13-MASALA
// For15. N va K butun sonlari berilgan. Quyidagi yig'indini chiqaruvchi programma tuzilsin.
// S = 1^K + 2^K + ... + N^K

const l = 3;
const k = 4;
let Result = 0;
for (let i = 1; i <= l; i++) {
  Result += i ** k;
}
console.log(Result);

// 14-MASALA
// For16. N butun soni berilgan. Quyidagi yig'indini chiqaruvchi programma tuzilsin.
// S = 1^1 + 2^2 + … + N^N

const m = 3;
let result1 = 0;
for (let i = 1; i <= m; i++) {
  result1 += i ** i;
}
console.log(result1);

// 15-MASALA
// For17. A va B butun soni berilgan (A < B). A va B sonlari orasidagi barcha butun sonlarni chiqaruvchi programma tuzilsin. Bunda A soni 1 marta, (A + 1) soni 2 marta chiqariladi va xokazo.
let o = 5,
  p = 1,
  counter2 = 0;
for (let i = p; i <= o; i++) {
  counter2++;
  for (let k = 1; k <= counter2; k++) {
    console.log(i);
  }
}

// 16-MASALA
// For18. Sonning barcha bo’luvchilarini, ularning sonini va yig’indisini chiqaruvchi dastur tuzing.
let n1 = 18;
let boluvchilar = "";
let yigindi1 = 0;
let soni = 0;

for (let i = 1; i <= n1; i++) {
  if (n1 % i === 0) {
    boluvchilar += i + " ";
    yigindi1 += i;
    soni++;
  }
}
console.log(
  `Son: ${n1}  Bo‘luvchilar: ${boluvchilar} Bo‘luvchilar soni: ${soni}  Bo‘luvchilar yig‘indisi: ${yigindi1}`
);

// 17-MASALA
// For19. n butun soni berilgan (n > 1). N sonini tub yoki tub emasligini aniqlovchi programma tuzilsin.

// 18-MASALA
// For20. Sonlarni quyidagi tartibda chiqaruvchi dastur tuzing. N = 5 bo’lganda,
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5
let q = 5;
for (let i = 1; i <= q; i++) {
  let qator = "";
  for (let j = 1; j <= i; j++) {
    qator += j + " ";
  }
  console.log(qator.trim());
}

// While1. A va B butun musbat sonlari berilgan (A> B). A usunlikdagi kesmada maksimal darajada B kesma joylashtirilgan. A kesmaning bo'sh qismini aniqlovchi programma tuzilsin. Ko'paytirish va bo'lish amallarini ishlatmang.

let r = 18;
let t = 4;
let boshJoy = 0;
let qolganJoy = 0;
let i = 0;
while (i <= r) {
  i++;
  boshJoy = parseInt(r / t);
  qolganJoy = r % t;
}
console.log(`${boshJoy} ta joylashtirilgan.`);
console.log(`${qolganJoy} ta bosh joy qolgan `);

// While2. A va B butun musbat sonlari berilgan (A > B). A usunlikdagi kesmada B kesmadan nechta joylashtirish mumkinligini aniqlovchi programma tuzilsin. Ko'paytirish va bo'lish amallarini ishlatmang.
let son2 = 16;
let son3 = 5;
let result2 = son3;
let counter3 = 0;
while (result2 < son2) {
  result2 += son3;
  counter3++;
}
console.log(counter3);

// While3. n butun soni berilgan (n > 0). Agar n soni 3 ning darajasi bo'lsa "3 - ning darajasi", aks xolda "3 - ning darajasi emas” degan natija chiqaruvchi programma tuzilsin. Qoldiqli bo'lish va bo'lish amallarini ishlatmang.
let number1 = 27;
let L = 1;
while (3 ** L <= number1) {
  L++;
  if (number1 === 3 ** L) {
    console.log(`3ning darajasi`);
  }
}

// While7. n butun soni berilgan (n > 0). Bo'lib butun va qoldiq qismlarini aniqlash orqali, berilgan son raqamlarining orasida 2 raqami bor-yo'qligini aniqlovchi programma tuzilsin.
let s1 = 462;
let u1 = s1 % 10;
let y1 = (s1 % 100) / 10;
let z1 = s1 / 100;
let K1 = 0;
while (K1 <= s1) {
  K1++;
  if (u1 == 2 || y1 == 2 || z1 == 2) {
    console.log("Ikki raqami mavjud");
    break;
  } else {
    console.log("Ikki raqami mavjud emas boshqa raqam kiriting!");
    break;
  }
}

// While8. n butun soni berilgan (n > 0). Bo'lib butun va qoldiq qismlarini aniqlash orqali, berilgan son raqamlarining orasida toq raqamlar bor-yo'qligini aniqlovchi programma tuzilsin.
let s = 468;
let u = s % 10;
let y = (s % 100) / 10;
let z = s / 100;
let K = 0;
while (K <= s) {
  K++;
  if (u % 2 == 1 || y % 2 == 1 || z % 2 == 1) {
    console.log("Toq raqam mavjud");
    break;
  } else {
    console.log("Toq raqam mavjud emas boshqa raqam kiriting!");
    break;
  }
}
// While9. Palindromik songa tekshirish dasturini yozing. True yoki False qaytarsin.
// Palindromik son – boshidan va oxiridan o’qilish bir xil bo’lgan son, masalan 1345431, 45788754
let w = (1345431).toString();
let x = " ";
let I = w.length - 1;
while (I >= 0) {
  x += w[I];
  I--;
}
console.log(+w == +x);
