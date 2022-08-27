const [types, greetings, scopes, closures, async, es6] = document.querySelectorAll('.item');

const [typesList, greetingsList, scopesList, closuresList, asyncList, es6List] = document.querySelectorAll('.props__list');
const propsItem = [...document.querySelectorAll('.props__item')];

const typeItems = propsItem.filter(item => item.classList.contains('props__item_four'));
const greetingsItems = propsItem.filter(item => item.classList.contains('props__item_one'));
const scopesItems = propsItem.filter(item => item.classList.contains('props__item_two'));
const closureItems = propsItem.filter(item => item.classList.contains('props__item_three'));
const asyncItems = propsItem.filter(item => item.classList.contains('props__item_five'));
const es6Items = propsItem.filter(item => item.classList.contains('props__item_six'));

const [typeT, es6T, closureT, scopesT, asyncT] = document.querySelectorAll('.item__title');

const ads = document.querySelector('.ads');
ads.remove();


closureT.textContent = 'This и прототипы объектов';
es6T.remove();
scopesList.prepend(scopesT);

asyncList.prepend(asyncT);

es6List.prepend(es6T);

typesList.append(...typeItems);
typeItems[2].after(typeItems[5]);
greetingsList.append(...greetingsItems);
scopesList.append(...scopesItems);
closuresList.append(...closureItems);
asyncList.append(...asyncItems);
es6List.append(...es6Items);

closures.after(types);
