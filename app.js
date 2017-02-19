
//makes more specific
'use strict'

// global variables
var hourOfDay = ['10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm','5pm'];
var locations = [];
// var grandTotalCookies = 0;
//var hourly Totals = [];
var salesTable = document.getElementById('salesTable');
var salesInput = document.getElementById('salesInput');

// Obj Constructor Function: Object & Properties (key = value)
function Store (storeLocation, min, max, avgSale, cookiesPerHour, totalCookies) {
  // Properties
  this.storeLocation = storeLocation;
  this.min = min;
  this.max = max;
  this.avgSale = avgSale;
  // arrays
  this.avgCustomerPerHour = [];
  // this.cookiesPerHour = cookiesPerHour[];
  this.totalCookies = 0;
  //Methods
  // random customer per hour number generator // not working below!!!
  this.getrandomCookiesPerHour = function() {
    return (Math.random() * (this.max - this.min + 1) + this.min);
  }
  //  cookiesPerHour generator
  this.cookiesPerHour = function() {
    return Math.floor(this.getrandomCookiesHour(this.max, this.min) * this.avgSale);
  };
  // this.numCustomerPerHour();
  // this.cookiesPerCustomer();
  // push to create instance to storeLocation array
  this.getrandomCookiesPerHour = function() {
    return (Math.random() * (this.max - this.min + 1) + this.min);
  }

  storeLocation.render()
  // Obj constructor saves new stores info into new variables
  var pikePlace = new Store('Pike Place Market', 17, 88, 5.2);
  pikePlace.render();

  var seaTac = new Store('SeaTac', 6, 24, 1.2);
  seaTac.render();

  var southCenter = new Store('South Center', 11, 38, 1.9);
  southCenter.render();

  var bellevueSquare = new Store('Bellevue Square', 20, 48, 3.3);
  bellevueSquare.render();

  var alkiBeach = new Store('Alki Beach', 3, 24, 2.6);
  alkiBeach.render();

  //Constructor function is the prototype for Store Obj --creates table elements
  // Store.prototype.numCustomerPerHour = function () {
  function makeHeaderRow() {
    var thElement = document.createElement('th');
    var tableRow = document.createElement('tr');
    tableRow.appendChild('thElement');
    for(i = 0; i < this.hourOfDay.length; i++) {
      thElement = document.createElement('th');
      thElement.textContent = hourOfDay[i];
      tableRow.appendChild(thElement);
    };
    thElement = document.createElement('th');
    thElement.textContent = 'Daily Location Totals:';
    tableRow.appendChild(thElement);
    salesInput.appendChild(tableRow);
  };

  function makeCollumnHeader() {
    var tableRow;
    var tdElement;
    for (var l = 0; l < locations.length; l++);
    tableRow = document.createElement('tr');
    tdElement = document.createElement('td');
    tdElement.textContent = locations[l].name;
    tableRow.appendChild(tdElement);
    for (var i = 0; i < hourOfDay.length; i++);
    tdElement = document.createElement('td');
    tdElement.textContent = locations[l].cookiesPerHour[i];
  };

  function makeTotalsRow() {
    var footerRow = document.createElement('tfoot');
    salesTable.appendChild(footerRow);
    var tableRow = document.createElement('tr');
    tableRow.textContent = 'Totals';
    footerRow.appendChild(tableRow);
    var tdElement;
    var globalDailyTotals = 0;
    for (i = 0; i < this.hourOfDay.length; i++) {
      cookiesPerHour = 0;
      for (var l = 0; l <locations.length; l++) {
      }
    };
  }

  // this.render = function() {
  //   var locations = document.getElementById('Cookies by Locations');
  //   var liElement = document.createElement('li')
  // }
  //
  // Obj Constructor Methods / Formulas:
  // random customer per hour number generator
  this.getrandomCookiesHr = function() {
    return (Math.random() * (this.max - this.min + 1) + this.min);
  }

  // cookiesPerHour generator
  this.cookiesPerHour = function() {
    return Math.floor(this.getrandomCookiesHr(this.max, this.min) * this.avgSale);
  };

  this.populate = function() {
    for(i = 0; i < this.hourOfDay.length; i++) {
      var hourlyCookies = Math.floor(this.getrandomCookiesHr() * this.avgCustomerPerHour);
      this.cookiesPerHour.push(hourlyCookies);
      this.totalCookies += hourlyCookies;
    }
  }

  //
  // function createTable(locations) {
  //   var table id = document.getElementById('Cookies Needed by Location');
  //   var storeLocationEl: document.getElementById('storeLocation'),
  //
  //       this.populate();
  //       for (i = 0; i < this.hourOfDay.length; i++) {
  //         var liRandomNumEl = document.createElement('li');
  //         console.log(liRandomNumEl);
  //         liRandomNumEl.textContent = this.hourOfDay[i] + ':' + ' ' + this.cookiesPerHour[i];
  //         this.storeLocationEl.appendChild(liRandomNumEl);
  //       };
  //
  //       var liTotalCookiesEL = document.createElement('li');
  //       liTotalCookiesEL.textContent = 'Total Cookies:' + this.totalCookies;
  //       this.storeLocationEl.appendChild(liTotalCookiesEL);
  //     }
  //   };
  //
  //   this.renderRow = function() {
  //     var trElement = document.createElement('tr');
  //     locations [ ]
  //   }
  //

  //
  // this.create = function() {
  //   var storeList = document
  // }
  //

  //
  //
  //
  //
  // var southCenter = {
  //   min: 11,
  //   max: 38,
  //   avgCookiesCustomer: 1.9,
  //
  //   hourOfDay: ['10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm','5pm'],
  //   // random customer per hour number generator
  //   getRandom: function() {
  //     //could also use: return Math.floor(Math.random() * (max - min + 1)) + min;
  //     return (Math.random() * (this.max - this.min + 1) + this.min);
  //   },
  //
  //   cookiesPerHour: [],
  //   totalCookies: 0,
  //   // cookiesPerHour generator
  //   populate: function() {
  //     for(i = 0; i < this.hourOfDay.length; i++) {
  //       var hourlyCookies = Math.floor(this.getRandom() * this.avgCookiesCustomer);
  //       this.cookiesPerHour.push(hourlyCookies);
  //       this.totalCookies += hourlyCookies;
  //     }
  //   },
  //   // call function to generate cookie totals for Pike Place
  //
  //   southCenterEl: document.getElementById('southCenter'),
  //
  //   render: function() {
  //     this.populate();
  //     for (i = 0; i < this.hourOfDay.length; i++) {
  //       var liRandomNumEl = document.createElement('li');
  //       console.log(liRandomNumEl);
  //       liRandomNumEl.textContent = this.hourOfDay[i] + ':' + ' ' + this.cookiesPerHour[i];
  //       this.southCenterEl.appendChild(liRandomNumEl);
  //     };
  //
  //     var liTotalCookiesEL = document.createElement('li');
  //     liTotalCookiesEL.textContent = 'Total Cookies:' + this.totalCookies;
  //     this.southCenterEl.appendChild(liTotalCookiesEL);
  //   }
  // };
  // southCenter.render()
