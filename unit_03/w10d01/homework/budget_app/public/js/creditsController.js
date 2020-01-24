angular.module('budgetApp', [])
  .controller('creditsController', creditsController)

creditsController.$inject = ['http'];

function creditsController($http){
    var self = this;

function newCredit(){
    var PutCredit = new Credit({
      name:req.body.add,
      note: req.body.note,
      created_at: req.body.created_at,
      updated_at: req.body.updated_at
    });
    PutCredit.save(function(err, PutCredit){
      if(err) console.log(err);
      conosle.log(PutCredit);
    })
  }

}
