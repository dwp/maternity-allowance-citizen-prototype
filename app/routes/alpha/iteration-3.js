
module.exports = router => {

// Add your routes here - above the module.exports line

// (Used Alpha Iteration 10)
// **************** ITERATION 1 ******************** /
// **************** START A CLAIM ****************** /

router.post('/beta-private/iteration-3/start-a-claim/', function (req, res) {
  // has a match been made, in this scenario?
  var match = "no";

  if (match == 'no') {
    var match = null;
    res.redirect('/beta-private/iteration-3/start-a-claim/more-claimant-information');
  }
  else {
    res.redirect('/beta-private/iteration-3/start-a-claim/about-the-baby');
  }
});

router.post('/beta-private/iteration-3/start-a-claim/more-claimant-information', function (req, res) {
  res.redirect('/beta-private/iteration-3/start-a-claim/about-the-baby');
});

router.post('/beta-private/iteration-3/start-a-claim/more-claimant-information', function (req, res) {
  res.redirect('/beta-private/iteration-3/start-a-claim/about-the-baby');
});

router.post('/beta-private/iteration-3/start-a-claim/claim-date', function (req, res) {
  res.redirect('/beta-private/iteration-3/start-a-claim/about-the-baby');
});

router.post('/beta-private/iteration-3/start-a-claim/about-the-baby', function (req, res) {
  if (req.session.data['baby-born'] == 'yes') {
    res.redirect('/beta-private/iteration-3/start-a-claim/baby-birth-date');
  }
  else {
    res.redirect('/beta-private/iteration-3/start-a-claim/date-last-worked');
  }
});

router.post('/beta-private/iteration-3/start-a-claim/baby-birth-date', function (req, res) {
  res.redirect('/beta-private/iteration-3/start-a-claim/date-last-worked');
});

router.post('/beta-private/iteration-3/start-a-claim/date-last-worked', function (req, res) {
  if (req.session.data['stopped-work'] == 'yes') {
    res.redirect('/beta-private/iteration-3/start-a-claim/dlw-date');
  }
  else {
    if (req.session.data['action'] == 'change') {
      req.session.data['action'] = null;
      res.redirect('/beta-private/iteration-3/start-a-claim/summary');
    }
    else {
      res.redirect('/beta-private/iteration-3/start-a-claim/ma-start-date-provided');
    }
  }
});

router.post('/beta-private/iteration-3/start-a-claim/dlw-date', function (req, res) {
  if (req.session.data['action'] == 'change') {
    req.session.data['action'] = null;
    res.redirect('/beta-private/iteration-3/start-a-claim/summary');
  }
  else {
    res.redirect('/beta-private/iteration-3/start-a-claim/chosen-map-date');
  }
});

router.post('/beta-private/iteration-3/start-a-claim/ma-start-date-provided', function (req, res) {
  if (req.session.data['ma-start-date-provided'] == 'yes') {
    res.redirect('/beta-private/iteration-3/start-a-claim/planned-dlw-date');
  }
  else {
    res.redirect('/beta-private/iteration-3/start-a-claim/chosen-map-date');
  }
});

router.post('/beta-private/iteration-3/start-a-claim/planned-dlw-date', function (req, res) {
  res.redirect('/beta-private/iteration-3/start-a-claim/chosen-map-date');
});

router.post('/beta-private/iteration-3/start-a-claim/chosen-map-date', function (req, res) {
  if (req.session.data['ma-date-requested'] == 'yes') {
    res.redirect('/beta-private/iteration-3/start-a-claim/requested-start-date');
  }
  else {
    res.redirect('/beta-private/iteration-3/start-a-claim/summary');
  }
});

router.post('/beta-private/iteration-3/start-a-claim/requested-start-date', function (req, res) {
  res.redirect('/beta-private/iteration-3/start-a-claim/summary');
});

// **************** FIND A CLAIM ****************** /

router.post('/beta-private/', function (req, res) {
  res.redirect('/beta-private/iteration-3/find-a-claim/');
});

router.post('/beta-private/iteration-3/find-a-claim/', function (req, res) {
  res.redirect('/beta-private/iteration-3/find-a-claim/summary');
});

router.post('/alpha/iteration-3/start-a-claim/what-is-your-name', function (req, res) {
  res.redirect('/alpha/iteration-3/start-a-claim/nino');
});

router.post('/alpha/iteration-3/start-a-claim/nino', function (req, res) {
  res.redirect('/alpha/iteration-3/start-a-claim/dob');
});

router.post('/alpha/iteration-3/start-a-claim/dob', function (req, res) {
  res.redirect('/alpha/iteration-3/start-a-claim/confirm-details');
});

router.post('/alpha/iteration-3/start-a-claim/confirm-details', function (req, res) {
  res.redirect('/alpha/iteration-3/start-a-claim/baby-due');
});

router.post('/alpha/iteration-3/start-a-claim/previous-address', function (req, res) {
  res.redirect('/alpha/iteration-3/start-a-claim/MATB1');
});

router.post('/alpha/iteration-3/start-a-claim/MATB1', function (req, res) {
  res.redirect('/alpha/iteration-3/start-a-claim/employment-type');
});

router.post('/alpha/iteration-3/start-a-claim/SMP1', function (req, res) {
  res.redirect('/alpha/iteration-3/start-a-claim/employer-stop');
});

router.post('/alpha/iteration-3/start-a-claim/baby-due', function (req, res) {
  res.redirect('/alpha/iteration-3/start-a-claim/baby-born');
});

router.post('/alpha/iteration-3/start-a-claim/baby-born', function (req, res) {
  res.redirect('/alpha/iteration-3/start-a-claim/proof');
});

router.post('/alpha/iteration-3/start-a-claim/proof', function (req, res) {
  res.redirect('/alpha/iteration-3/start-a-claim/MATB1');
});

router.post('/alpha/iteration-3/start-a-claim/baby-birth-date', function (req, res) {
  res.redirect('/alpha/iteration-3/start-a-claim/employment-type');
});


router.post('/alpha/iteration-3/start-a-claim/employment-test-dates', function (req, res) {
  res.redirect('/alpha/iteration-3/start-a-claim/employment-type');
});

router.post('/alpha/iteration-3/start-a-claim/employment-type', function (req, res) {
  res.redirect('/alpha/iteration-3/start-a-claim/employment-playback');
});

router.post('/alpha/iteration-3/start-a-claim/employment-playback', function (req, res) {
  res.redirect('/alpha/iteration-3/start-a-claim/another-employer');
});

router.post('/alpha/iteration-3/start-a-claim/employer-name', function (req, res) {
  res.redirect('/alpha/iteration-3/start-a-claim/employer-phone-number');
});

router.post('/alpha/iteration-3/start-a-claim/employer-phone-number', function (req, res) {
  res.redirect('/alpha/iteration-3/start-a-claim/employment-first-date');
});

router.post('/alpha/iteration-3/start-a-claim/employment-first-date', function (req, res) {
  res.redirect('/alpha/iteration-3/start-a-claim/employment-last-date');
});

router.post('/alpha/iteration-3/start-a-claim/employment-last-date', function (req, res) {
  res.redirect('/alpha/iteration-3/start-a-claim/employment-id');
});

router.post('/alpha/iteration-3/start-a-claim/employment-id', function (req, res) {
  res.redirect('/alpha/iteration-3/start-a-claim/payment-frequency');
});

router.post('/alpha/iteration-3/start-a-claim/payment-frequency', function (req, res) {
  res.redirect('/alpha/iteration-3/start-a-claim/another-employer');
});

router.post('/alpha/iteration-3/start-a-claim/another-employer', function (req, res) {
  res.redirect('/alpha/iteration-3/start-a-claim/SMP1');
});

router.post('/alpha/iteration-3/start-a-claim/employer-stop', function (req, res) {
  res.redirect('/alpha/iteration-3/start-a-claim/stop-work-reason');
});

router.post('/alpha/iteration-3/start-a-claim/employer-leave', function (req, res) {
  res.redirect('/alpha/iteration-3/start-a-claim/employer-last-worked');
});

router.post('/alpha/iteration-3/start-a-claim/employer-sick', function (req, res) {
  res.redirect('/alpha/iteration-3/start-a-claim/mat-start');
});

router.post('/alpha/iteration-3/start-a-claim/mat-leave-start', function (req, res) {
  res.redirect('/alpha/iteration-3/start-a-claim/employed-abroad');
});

router.post('/alpha/iteration-3/start-a-claim/employed-abroad', function (req, res) {
  res.redirect('/alpha/iteration-3/start-a-claim/other-benefits');
});

router.post('/alpha/iteration-3/start-a-claim/map-start', function (req, res) {
  res.redirect('/alpha/iteration-3/start-a-claim/mat-frequency');
});

router.post('/alpha/iteration-3/start-a-claim/mat-frequency', function (req, res) {
  res.redirect('/alpha/iteration-3/start-a-claim/bank-details');
});

router.post('/alpha/iteration-3/start-a-claim/employer-additional-name', function (req, res) {
  res.redirect('/alpha/iteration-3/start-a-claim/employment-additional-date');
});

router.post('/alpha/iteration-3/start-a-claim/employment-additional-date', function (req, res) {
  res.redirect('/alpha/iteration-3/start-a-claim/employment-additional-id');
});

router.post('/alpha/iteration-3/start-a-claim/employment-additional-id', function (req, res) {
  res.redirect('/alpha/iteration-3/start-a-claim/another-employer');
});

router.post('/alpha/iteration-3/start-a-claim/pregnancy-sick', function (req, res) {
  res.redirect('/alpha/iteration-3/start-a-claim/employer-last-worked');
});

router.post('/alpha/iteration-3/start-a-claim/sick-start', function (req, res) {
  res.redirect('/alpha/iteration-3/start-a-claim/employer-last-worked');
});

router.post('/alpha/iteration-3/start-a-claim/sick-end', function (req, res) {
  res.redirect('/alpha/iteration-3/start-a-claim/employer-last-worked');
});

router.post('/alpha/iteration-3/start-a-claim/employer-last-worked', function (req, res) {
  res.redirect('/alpha/iteration-3/start-a-claim/employed-abroad');
});

router.post('/alpha/iteration-3/start-a-claim/bank-details', function (req, res) {
  res.redirect('/alpha/iteration-3/start-a-claim/confirmation');
});

router.post('/baby-born-answer', function(request, response) {

  var babyBornAnswer = request.session.data['babyBorn']
  if (babyBornAnswer == "yes"){
      response.redirect("/alpha/iteration-3/start-a-claim/baby-birth-date")
  } else {
      response.redirect("alpha/iteration-3/start-a-claim/employment-test-dates")
  }
})

router.post('/i3-other-benefits', function(request, response) {

  var i3otherBenefitsAnswer = request.session.data['i3otherBenefits']
  if (i3otherBenefitsAnswer == "yes"){
      response.redirect("/alpha/iteration-3/start-a-claim/test1")
  } else {
      response.redirect("alpha/iteration-3/start-a-claim/map-start")
  }
})


router.post('/etd-answer', function(request, response) {

  var etdAnswer = request.session.data['employmentTestDates']
  if (etdAnswer == "yes"){
      response.redirect("/alpha/iteration-3/start-a-claim/employment-type")
  } else {
      response.redirect("/alpha/iteration-3/start-a-claim/exit")
  }
})

//router.post('/employment-type-answer', function(request, response) {

//  var employmentTypeAnswer = request.session.data['employmentType']
 // if (employmentTypeAnswer == "employed"){
 //     response.redirect("/alpha/iteration-3/start-a-claim/employment-playback")
 // } else if (employmentTypeAnswer == "selfEmployed"){
  //  response.redirect("/alpha/iteration-3/start-a-claim/test2")
//} 
//else if (employmentTypeAnswer == "agency"){
 // response.redirect("/alpha/iteration-3/start-a-claim/test3")
//} 
//else {
// response.redirect("/alpha/iteration-3/start-a-claim/test4")
//}
//})



router.post('/another-employer', function(request, response) {

  var anotherEmploymerAnswer = request.session.data['anotherEmployer']
  if (anotherEmploymerAnswer == "yes"){
      response.redirect("/alpha/iteration-3/start-a-claim/employer-additional-name")
  } else {
      response.redirect("/alpha/iteration-3/start-a-claim/employer-stop")
  }
})

router.post('/mat-start', function(request, response) {

  var matStartAnswer = request.session.data['matStart']
  if (matStartAnswer == "yes"){
      response.redirect("/alpha/iteration-3/start-a-claim/mat-leave-start")
  } else {
      response.redirect("/alpha/iteration-3/start-a-claim/employed-abroad")
  }
})

router.post('i3-employed-abroad', function(request, response) {

  var i3employedAbroadAnswer = request.session.data['i3employedAbroad']
  if (i3employedAbroadAnswer == "yes"){
      response.redirect("/alpha/iteration-3/start-a-claim/test1")
  } else {
      response.redirect("/alpha/iteration-3/start-a-claim/other-benefits")
  }
})

router.post('/i3-stop-work', function(request, response) {

  var i3stopWorkAnswer = request.session.data['i3stopWork']
  if (i3stopWorkAnswer == "yes"){
      response.redirect("/alpha/iteration-3/start-a-claim/stop-work-reason")
  } else {
      response.redirect("/alpha/iteration-3/start-a-claim/employed-abroad")
  }
})

router.post('/i3-stop-work-reason', function(request, response) {

  var i3stopWorkReasonAnswer = request.session.data['i3stopWorkReason']
  if (i3stopWorkReasonAnswer == "maternity"){
      response.redirect("/alpha/iteration-3/start-a-claim/mat-leave-start")

  } else if (i3stopWorkReasonAnswer == "sick"){
    response.redirect("/alpha/iteration-3/start-a-claim/sick-leave-reason")

} 
else if (i3stopWorkReasonAnswer == "ended"){
  response.redirect("/alpha/iteration-3/start-a-claim/employer-last-worked")

} 
else {
  response.redirect("/alpha/iteration-3/start-a-claim/employer-last-worked")
}
})

router.post('/i3-sick-reason', function(request, response) {

  var i3sickReasonAnswer = request.session.data['i3sickReason']
  if (i3sickReasonAnswer == "SSP"){
      response.redirect("/alpha/iteration-3/start-a-claim/sick-end")

  } else if (i3sickReasonAnswer == "ESA"){
    response.redirect("/alpha/iteration-3/start-a-claim/sick-start")

} 

else {
  response.redirect("/alpha/iteration-3/start-a-claim/pregnancy-sick")
}
})

}
