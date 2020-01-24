angular
  .module('worldbank', [])
  .controller('worldbankController', worldbankController);

  worldbankController.$inject = ['$http'];

  function worldbankController($http){
    //scope helper
    var self = this;
    self.count = '';
    self.all = [];
    self.uniqueRegions = [];
    this.showRegionRecords = showRegionRecords;
    self.regionRecords = [];
    self.newRecord = [];
    self.addRecord = addRecord;

    function getCount(){
      $http
      .get('wbinfo/count')
      .then(function(response){
        console.log(response.data);
        self.count = response.data;
      });
    }
    getCount();

    // function to get all unique region names
    function getUniqueRecords(){
      console.log('unique record path');
      $http
      .get('wbinfo/uniqueRegions')
      .then(function(response){
        self.uniqueRegions = response.data;
      });
    }
    getUniqueRecords();

    //function to get unique region records
    function showRegionRecords(regionName){
      console.log('show unique region records');
      $http
      .get('wbinfo/byName/' + regionName)
      .then(function(response){
        self.regionRecords = response.data;
      });
    }

  //adding a new record
    function addRecord(){
      console.log("let's add a new one");
      $http
      .post('/wbinfo', self.newRecord)
      .then(function(err){
        if(err)console.log(err);
        self.newRecord = {};
        getUniqueRecords();
      });
    }

  }
