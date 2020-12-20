class ElectronicItem {
    constructor(img, name, country, brend, diagonal, price) {
        this.img = img;
        this.name = name;
        this.country = country;
        this.brend = brend;
        this.diagonal = diagonal;
        this.price = price;
    }
    fullDescribtion() {
        return `Страна производитель ${this.country}, диагональ экрана ${this.diagonal}"`;
    }
}
class SmartPhone extends ElectronicItem {
    constructor(img, name, country, brend, diagonal, memory, price) {
        super(img, name, country, brend, diagonal, price);
        this.type = 'Смартфон';
        this.memory = memory;
    }
    fullDescribtion() {
        return `${super.fullDescribtion()}, ${this.memory}ГБ встроенной памяти`;
    }
}
class Notebook extends ElectronicItem {
    constructor(img, name, country, brend, diagonal, screen, price) {
        super(img, name, country, brend, diagonal, price);
        this.type = 'Ноутбук';
        this.screen = screen;
    }
    fullDescribtion() {
        return `${super.fullDescribtion()}, LAN/Wi-Fi/Bluetooth/веб-камера`;
    }
}
class Tablet extends ElectronicItem {
    constructor(img, name, country, brend, diagonal, battery, price) {
        super(img, name, country, brend, diagonal, price);
        this.type = 'Планшет';
        this.battery = battery;
    }
    fullDescribtion() {
        return `${super.fullDescribtion()}, батарея ${this.battery} часов/ Bluetooth 5.0 /основная двойная камера 12 Мп + 10 Мп, фронтальная - 7 Мп`;
    }
}

const filter = {
    type: [],
    country: [],
    brend: [],
    diagonal: []
}
const legend = {
    country: 'Страна производитель',
    brend: 'Бренд',
    type: 'Тип устройства',
    diagonal: 'Диагональ экрана'
}
const priceRange = {
    min: 0,
    max: 0
}

const item1 = new SmartPhone('sf.jpg', 'Мобильный телефон Xiaomi Mi 10T', 'Китай', 'Xiaomi', '5.5', 128, 7000);
const item2 = new SmartPhone('sf.jpg', 'Мобильный телефон Samsung Galaxy S20', 'Китай', 'Samsung', '6', 128, 28000);
const item3 = new SmartPhone('sf.jpg', 'Мобильный телефон Samsung Galaxy A51', 'Корея', 'Samsung', '5.5', 64, 9000);
const item4 = new Notebook('note.jpg', 'Ноутбук Acer Aspire 5 A515-55G', 'Корея', 'Acer', '15.5', 'Full HD', 29000);
const item5 = new Notebook('note.jpg', 'Ноутбук Asus ROG Strix G15 G512LU-HN093', 'Китай', 'Acus', '16', 'Full HD', 20000);
const item6 = new Notebook('note.jpg', 'Ноутбук Samsung ROG Strix G15 G512LU-HN093', 'Россия', 'Samsung', '18', 'Full HD', 18000);
const item7 = new Tablet('tab.jpg', 'Планшет Samsung Tab S6 Lite', 'Россия', 'Samsung', '12', 15, 7000);
const item8 = new SmartPhone('sf.jpg', 'Мобильный телефон Samsung Galaxy A51', 'Корея', 'Samsung', '5.5', 64, 9000);
const item9 = new Tablet('tab.jpg', 'Планшет Samsung Galaxy Tab S6 Lite', 'Корея', 'Samsung', '13', 18, 17000);
const item10 = new Tablet('tab.jpg', 'Планшет Samsung Galaxy Tab S6 Lite', 'Корея', 'Samsung', '13', 18, 17000);
const item11 = new Tablet('tab.jpg', 'Планшет Samsung Galaxy Tab S6 Lite', 'Россия', 'Samsung', '12', 15, 7000);
const item12 = new Tablet('tab.jpg', 'Планшет Samsung Galaxy Tab S6 Lite', 'Корея', 'Samsung', '13', 18, 17000);
const item13 = new SmartPhone('sf.jpg', 'Мобильный телефон Xiaomi Mi 10T', 'Китай', 'Xiaomi', '5.5', 128, 6000);
const item14 = new SmartPhone('sf.jpg', 'Мобильный телефон Samsung Galaxy S20', 'Китай', 'Samsung', '6', 128, 28000);
const item15 = new SmartPhone('sf.jpg', 'Мобильный телефон Xiaomi Mi 10T', 'Уганда', 'Xiaomi', '5.5', 128, 6000);
const item16 = new SmartPhone('sf.jpg', 'Мобильный телефон Samsung Galaxy S20', 'Китай', 'Samsung', '6', 128, 28000);
const item17 = new SmartPhone('sf.jpg', 'Мобильный телефон Samsung Galaxy A51', 'Корея', 'Samsung', '5.5', 64, 9000);
const item18 = new Notebook('note.jpg', 'Ноутбук Acer Aspire 5 A515-55G', 'Корея', 'Acer', '15.5', 'Full HD', 35000);
const item19 = new SmartPhone('sf.jpg', 'Мобильный телефон Samsung Galaxy S20', 'Китай', 'Samsung', '6', 128, 28000);
const item20 = new SmartPhone('sf.jpg', 'Мобильный телефон Xiaomi Mi 10T', 'Китай', 'Xiaomi', '5.5', 128, 6000);
const item21 = new Notebook('note.jpg', 'Ноутбук Asus ROG Strix G15 G512LU-HN093', 'Китай', 'Acus', '16', 'Full HD', 20000);
const item22 = new Notebook('note.jpg', 'Ноутбук Samsung ROG Strix G15 G512LU-HN093', 'Россия', 'Samsung', '18', 'Full HD', 18000);
const item23 = new SmartPhone('sf.jpg', 'Мобильный телефон Samsung Galaxy A51', 'Китай', 'Sony', '6.5', 64, 19000);
const item24 = new Notebook('note.jpg', 'Ноутбук Acer Aspire 5 A515-55G', 'Уганда', 'Acer', '15.5', 'Full HD', 30000);
const item25 = new Notebook('note.jpg', 'Ноутбук Asus ROG Strix G15 G512LU-HN093', 'Китай', 'Acus', '16', 'Full HD', 20000);
const item26 = new Notebook('note.jpg', 'Ноутбук Samsung ROG Strix G15 G512LU-HN093', 'Россия', 'Samsung', '18', 'Full HD', 18000);
const item27 = new Tablet('tab.jpg', 'Планшет Samsung Galaxy Tab S6 Lite', 'Россия', 'Samsung', '12', 15, 7000);
const item28 = new Tablet('tab.jpg', 'Планшет Samsung Galaxy Tab S6 Lite', 'Корея', 'Samsung', '13', 18, 17000);

const listOfSomeItems = [];

for(let i = 1; i <=28; i++){
    listOfSomeItems.push(eval('item' + i));
}

// значение получаем по запросу пользователя
const countOnePage = 8;
const pageList = [];

const $mainContent = document.querySelector('.main_content');
const $filter = document.querySelector('.filter');
const $priceValueForm = document.forms.priceValue;
const $countOfItems = document.querySelector('.items_count span');


//эти функции должны вызываться при добавлении нового товара и изменении существующих
fillFilterWithValuesandSortIt(filter, listOfSomeItems);
SetPriceRange(priceRange, listOfSomeItems);

fillPageList(listOfSomeItems, pageList, countOnePage);
makePageActive(1, pageList);

drawPage(getItemsbyPageNumber(listOfSomeItems, 1, countOnePage));
drawFilters(filter, legend);
drawPageNumbers(pageList);

$priceValueForm.minPrice.value = priceRange.min;
$priceValueForm.maxPrice.value = priceRange.max;
$countOfItems.innerHTML = listOfSomeItems.length;

$filterList = document.querySelectorAll('.filter input');
$propertyList = document.querySelectorAll('.filter_property');

//здесь также можно реализовать динамический список самих фильтров в зависимости от типа устройства (было бы время:)
function fillFilterWithValuesandSortIt(filter, listOfSomeItems) {
    for (let prop in filter) {
        for (let i = 0; i < listOfSomeItems.length; i++) {
            const propertyValue = listOfSomeItems[i][prop];
            if (!filter[prop].find(el => el.name === propertyValue)) {
                filter[prop].push({ name: propertyValue, checked: false });
            }
        }
        sortPropertyValuesByName(filter[prop]);
    }
}

function sortPropertyValuesByName(valueList) {
    if (Number.isNaN(valueList[0].name * 1)) {
        valueList.sort(function (a, b) {
            return (a.name > b.name ? 1 : -1);
        })
    } else {
        valueList.sort(function (a, b) {
            return a.name - b.name;
        })
    }
}

function SetPriceRange(priceRange, listOfSomeItems) {
    priceRange.min = listOfSomeItems[0].price;
    priceRange.max = listOfSomeItems[0].price;
    listOfSomeItems.forEach((item) => {
        if (item.price < priceRange.min) {
            priceRange.min = item.price;
        }
        if (item.price > priceRange.max) {
            priceRange.max = item.price;
        }
    })
}

function drawFilters(filter, legend) {
    let inner = '';
    let index = 1;
    for (let prop in filter) {
        inner += `<fieldset class = "filter_property mt-3 ${prop}" property="${prop}">
        <legend>${legend[prop]}: </legend>`;
        inner += filter[prop].reduce(function (acc, filterValue) {
            return acc + `<div class="filter_item custom-control custom-checkbox">
            <input type="checkbox" class="custom-control-input"  id="customCheck${index}" value="${filterValue.name}">
            <label class="custom-control-label" for="customCheck${index++}">${filterValue.name}</label>
        </div>`
        }, '');
        inner += '</fieldset>';
    }
    $filter.innerHTML = inner;
}

function drawPage(listOfSomeItems) {
    let inner = listOfSomeItems.reduce(function (acc, item) {
        return acc + `<div class="card"><img src="${item.img}" class="card-img-top" alt="здесь могла быть Ваша реклама">
        <div class="card-body"><h6><a class="card-title" href="#">${item.name}</a></h6>
        <p class="card-text">${item.fullDescribtion()}</p>
        <div class="d-flex justify-content-between">
        <span class="font-weight-bold text-danger">${item.price.toLocaleString()} &#8372;</span>
        <button type="button" class="btn btn-primary"></button></div></div></div>`;
    }, '');
    $mainContent.innerHTML = inner;
}

function drawCheckedFiters(filter) {
    const checkedList = getListChekedProperties(filter);
    let inner = '';
    if (checkedList.length !== 0) {
        inner += '<span class="reset rounded-pill pb-1 pt-1 pl-3 pr-5 mr-2">Сбросить все</span>'
    }

    inner += checkedList.reduce(function (acc, filter) {
        return acc + `<span class="cancel rounded-pill pb-1 pt-1 pl-3 pr-5 mr-2" value = "${filter.name}" property = "${filter.property}">${filter.name}</span>`;
    }, '');
    document.querySelector('.filters_checked').innerHTML = inner;

    document.querySelectorAll('.filters_checked .cancel').forEach(el => {
        el.addEventListener('click', item => {
            const property = item.target.getAttribute('property');
            const value = item.target.getAttribute('value');
            const targetElem = getElementInFilterByPropAndValue(property, value);

            targetElem.checked = false;
            document.querySelector(`fieldset[property= ${property}] input[value='${value}']`).checked = false;

            doThisWhenAnyFilter(listOfSomeItems, filter, countOnePage, pageList);
            drawCheckedFiters(filter);

        })
    })
    if (checkedList.length !== 0) {
        document.querySelector('.filters_checked .reset').addEventListener('click', () => {
            for (let prop in filter) {
                filter[prop].forEach((item) => {
                    item.checked = false;
                })
            }
            document.querySelectorAll('.filter input').forEach((item) => {
                item.checked = false;
            })
            const price_checked = document.querySelector('.price_checked .priceRange');
            $priceValueForm.minPrice.value = priceRange.min;
            $priceValueForm.maxPrice.value = priceRange.max;

            if (price_checked) {
                price_checked.remove();
            }
            doThisWhenAnyFilter(listOfSomeItems, filter, countOnePage, pageList);
            document.querySelector('.filters_checked').innerHTML = '';
        })
    }
}

function drawPageNumbers(pageList) {
    const inner = pageList.reduce((acc, page) => {
        const active = page.active ? 'active' : '';
        return acc + `<span class = "page ${active}  m-1">${page.number}</span>`
    }, '');

    document.querySelector('.footer').innerHTML = inner;

    document.querySelectorAll('.footer .page').forEach((index) => {
        index.addEventListener('click', (el) => {
            const pageIndex = +el.target.textContent;
            makePageActive(pageIndex, pageList);
            drawPageNumbers(pageList);

            const filtered = getItemspassedAllFilters(listOfSomeItems, filter);
            const filteredTargetPage = getItemsbyPageNumber(filtered, pageIndex, countOnePage);
            drawPage(filteredTargetPage);
        })
    })
}

$priceValueForm.priceBtn.addEventListener('click', (btn) => {
    let $priceSpan = document.querySelector('.price_checked .priceRange');
    const max = $priceValueForm.maxPrice.value;
    const min = $priceValueForm.minPrice.value;
    const inner = `${min} - ${max}`;
    if ($priceSpan) {
        $priceSpan.innerHTML = inner;
    } else {
        $priceSpan = document.createElement('span')
        $priceSpan.classList.add('priceRange', 'rounded-pill', 'pb-1', 'pt-1', 'pl-3', 'pr-5', 'mr-2');
        $priceSpan.innerHTML = inner;
        document.querySelector('.price_checked').append($priceSpan);
        $priceSpan.addEventListener('click', () => {
            $priceValueForm.minPrice.value = priceRange.min;
            $priceValueForm.maxPrice.value = priceRange.max;
            $priceSpan.remove();
            SetPriceRange(priceRange, listOfSomeItems);
            doThisWhenAnyFilter(listOfSomeItems, filter, countOnePage, pageList);
        })
    }
    doThisWhenAnyFilter(listOfSomeItems, filter, countOnePage, pageList);
})

$filterList.forEach(el => {
    el.addEventListener('change', item => {
        const property = item.target.closest('fieldset').getAttribute('property');
        const value = item.target.value;
        const itemInFilter = filter[property].find(prop => prop.name === value);

        if (item.target.checked) {
            itemInFilter.checked = true;
        } else {
            itemInFilter.checked = false;
        }
        doThisWhenAnyFilter(listOfSomeItems, filter, countOnePage, pageList);
        drawCheckedFiters(filter);
    })
})

function getElementInFilterByPropAndValue(property, value) {
    return filter[property].find(el => {
        return el.name === value;
    })
}

function getListChekedProperties(filter) {
    const checkedList = [];
    for (let prop in filter) {
        filter[prop].forEach(item => {
            if (item.checked) {
                item['property'] = prop;
                checkedList.push(item);
            }
        })
    }
    return checkedList;
}

function getItemspassedAllFilters(itemList, filter) {
    const filterList = Object.keys(filter);
    let filtered = filterList.reduce(function (acc, prop) {
        return getItemsFiltered(acc, prop);
    }, itemList);
    filtered = filterByPrice(filtered);
    return filtered;
}

function getItemsFiltered(itemsList, propertyName) {
    const propertyValues = filter[propertyName];
    const checked = filter[propertyName].filter(item => item.checked);
    let filtered = itemsList;
    if (checked.length != 0) {
        filtered = itemsList.filter(item => {
            return checked.find(property => {
                return item[propertyName] === property.name;
            })
        })
    }
    return filtered;
}

function filterByPrice(listOfSomeItems) {
    const min = $priceValueForm.minPrice.value;
    const max = $priceValueForm.maxPrice.value;
    const filtered = listOfSomeItems.filter((item) => {
        return item.price <= max && item.price >= min;
    })
    return filtered;
}

function fillPageList(listOfSomeItems, pageList, countOnePage) {
    pageList.splice(0);

    const pagesCount = Math.ceil((listOfSomeItems.length) / countOnePage);
    for (let i = 0; i < pagesCount; i++) {
        pageList.push({ number: i + 1, active: false });
    }
}

function getItemsbyPageNumber(listOfSomeItems, pageIndex, countOnePage) {
    const firstIndex = (pageIndex - 1) * countOnePage;
    const lastIndex = pageIndex * countOnePage - 1;
    const itemsOnPage = listOfSomeItems.slice(firstIndex, lastIndex + 1);
    return itemsOnPage;
}

function drawFilteredFirstPage(listOfSomeItems, filter, countOnePage) {
    drawFilteredTargetPage(listOfSomeItems, filter, 1, countOnePage);
}

function drawFilteredTargetPage(listOfSomeItems, filter, pageIndex, countOnePage) {
    const filtered = getItemspassedAllFilters(listOfSomeItems, filter);
    const filteredTargetPage = getItemsbyPageNumber(filtered, pageIndex, countOnePage);
    drawPage(filteredTargetPage);
    makePageActive(pageIndex, pageList);
}

function makePageActive(pageIndex, pageList) {
    pageList.forEach(el => {
        if (el.number === pageIndex) {
            el.active = true;
        } else {
            el.active = false;
        }
    })
}

function doThisWhenAnyFilter(listOfSomeItems, filter, countOnePage, pageList) {
    const filteredList = getItemspassedAllFilters(listOfSomeItems, filter);
    $countOfItems.innerHTML = filteredList.length;
    fillPageList(filteredList, pageList, countOnePage);
    drawFilteredFirstPage(listOfSomeItems, filter, countOnePage);
    drawPageNumbers(pageList);
}







