do
{
  try++;
  str_name = ""; str_age = "";

  str_name = prompt("Ваше ФИО", "");
  str_age = prompt("Ваш возраст", '');
  isMen = confirm("Ваш пол мужской?");
  str_name = CutTheStringOff(str_name);

  check_name = (str_name.length < 2)||(isHaveNumber(str_name))||(isHaveSpecialSymbols(str_name));

  check_age = !isFinite(str_age)||(str_age == "")||(str_age < 0);
}
while ((check_name || check_age) == true);

//////

//////

let str = "    Egor Onishchenko";
console.log(str);
console.log(CutTheStringOff(str));
