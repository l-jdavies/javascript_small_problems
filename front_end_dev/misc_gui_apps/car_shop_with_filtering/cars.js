const cars = [
  {make: 'Honda', image: 'images/honda-accord-2005.jpg', model: 'Accord', year: 2005, price: 7000},
  {make: 'Honda', image: 'images/honda-accord-2008.jpg', model: 'Accord', year: 2008, price: 11000},
  {make: 'Toyota', image: 'images/toyota-camry-2009.jpg', model: 'Camry', year: 2009, price: 12500},
  {make: 'Toyota', image: 'images/toyota-corrolla-2016.jpg', model: 'Corolla', year: 2016, price: 15000},
  {make: 'Suzuki', image: 'images/suzuki-swift-2014.jpg', model: 'Swift', year: 2014, price: 9000},
  {make: 'Audi', image: 'images/audi-a4-2013.jpg', model: 'A4', year: 2013, price: 25000},
  {make: 'Audi', image: 'images/audi-a4-2013.jpg', model: 'A4', year: 2013, price: 26000},
];

class Cars {
  constructor() {
    this.cars = cars;
    this.selectTemplate = null;
    this.displayCarTemplate = null;

    this.cacheTemplates();
    this.renderCars(this.cars);
    this.renderSelectOptions();
    this.bindEvents();
  }

  bindEvents() {
    let filterButton = document.querySelector('.filter_button');
    let selectMakeOption = document.querySelector('#select_make');

    filterButton.addEventListener('click', this.filterCars.bind(this));
    selectMakeOption.addEventListener('change', this.changeModelOptionList.bind(this))
  }

  cacheTemplates() {
    let select = document.querySelector('#select_options_template').innerHTML;
    let cars = document.querySelector('#display_cars_template').innerHTML;
    let partial = document.querySelector('#display_cars_partial_template').innerHTML;

    this.selectTemplate = Handlebars.compile(select);
    this.displayCarTemplate = Handlebars.compile(cars);

    Handlebars.registerPartial('car_template', partial);
  }

  renderCars(selectedCars) {
    this.removeCurrentlyDisplayedCars();
    let carContainer = document.querySelector('.car_container');

    carContainer.insertAdjacentHTML('beforeend', (this.displayCarTemplate({cars: selectedCars})));
  }

  removeCurrentlyDisplayedCars() {
    while (document.querySelector('.car_container').childElementCount > 0) {
      document.querySelector('.car_container').lastElementChild.remove();
    }
  }

  renderSelectOptions() {
    let make = document.querySelector('#select_make');
    let model = document.querySelector('#select_model');
    let price = document.querySelector('#select_price');
    let year = document.querySelector('#select_year');

    let makeOptions = this.getOptionList(this.cars, 'make');
    let modelOptions = this.getOptionList(this.cars, 'model');
    let priceOptions = this.getOptionList(this.cars, 'price');
    let yearOptions = this.getOptionList(this.cars, 'year');

    make.insertAdjacentHTML('beforeend', this.selectTemplate({option: makeOptions}));
    model.insertAdjacentHTML('beforeend', this.selectTemplate({option: modelOptions}));
    price.insertAdjacentHTML('beforeend', this.selectTemplate({option: priceOptions}));
    year.insertAdjacentHTML('beforeend', this.selectTemplate({option: yearOptions}));
  }

  changeModelOptionList() {
    let make = document.querySelector('#select_make').value;
    let model = document.querySelector('#select_model');
    let modelOptions;

    if (!make || make === 'all') {
      modelOptions = this.getOptionList(this.cars, 'model');
    } else {
      modelOptions = this.findModelOptions(make);
    }

    this.removeCurrentModelOptions();
    model.insertAdjacentHTML('beforeend', this.selectTemplate({option: modelOptions}));
  }

  removeCurrentModelOptions() {
    let model = document.querySelector('#select_model');

    while (model.childElementCount > 0) {
      model.lastElementChild.remove();
    }
  }

  findModelOptions(selectedMake) {
    let selectedCars = this.cars.filter(carObj => carObj.make === selectedMake);
    let tempArr = this.getOptionList(selectedCars, 'model');

    return tempArr;
  }

  getOptionList(cars, option) {
    let tempArr = [];

    cars.forEach(obj => {
      if (!tempArr.includes(obj[option])) {
        tempArr.push(obj[option]);
      }
    })

    return tempArr;
  }

  filterCars(event) {
    event.preventDefault();

    let filterCriteria = this.getSelectedFilterOptions();
    let selectedCars;

    if (this.noFiltersSelected(filterCriteria)) {
      this.renderCars(this.cars);
    } else {
      selectedCars = this.selectCarsByCriteria(filterCriteria);
    }

    this.renderCars(selectedCars);
  }

  selectCarsByCriteria(options) {
    let tempSelection = this.cars;
    let optionKeys = Object.keys(options);

    optionKeys.forEach(key => {
      if (options[key] === 'all') {
        return;
      } else {
        tempSelection = tempSelection.filter(car => String(car[key]) === options[key]);
      }
    })

    return tempSelection;
  }

  getSelectedFilterOptions() {
    let selectedMake = document.querySelector('#select_make').value;
    let selectedModel = document.querySelector('#select_model').value;
    let selectedPrice = document.querySelector('#select_price').value;
    let selectedYear = document.querySelector('#select_year').value;

    return {
      make: selectedMake,
      model: selectedModel,
      price: selectedPrice,
      year: selectedYear,
    }
  }

  noFiltersSelected(criteria) {
    let objKeys = Object.keys(criteria);

    for (let idx = 0; idx < objKeys.length; idx++) {
      if (criteria[objKeys[idx]] !== 'all') {
        return false;
      }
    }

    return true;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new Cars();
})
