//for background color change
var colors = new Array(
  [62,35,255],
  [60,255,60],
  [255,35,98],
  [45,175,230],
  [255,0,255],
  [255,128,0]);

var step = 0;
//color table indices for: 
// current color left
// next color left
// current color right
// next color right
var colorIndices = [0,1,2,3];

//transition speed
var gradientSpeed = 0.003;

function updateGradient()
{
  
  if ( $===undefined ) return;
  
var c0_0 = colors[colorIndices[0]];
var c0_1 = colors[colorIndices[1]];
var c1_0 = colors[colorIndices[2]];
var c1_1 = colors[colorIndices[3]];

var istep = 1 - step;
var r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
var g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
var b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
var color1 = "rgb("+r1+","+g1+","+b1+")";

var r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
var g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
var b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
var color2 = "rgb("+r2+","+g2+","+b2+")";

 $('#gradient').css({
   background: "-webkit-gradient(linear, left top, right top, from("+color1+"), to("+color2+"))"}).css({
    background: "-moz-linear-gradient(left, "+color1+" 0%, "+color2+" 100%)"});
  
  step += gradientSpeed;
  if ( step >= 1 )
  {
    step %= 1;
    colorIndices[0] = colorIndices[1];
    colorIndices[2] = colorIndices[3];
    
    //pick two new target color indices
    //do not pick the same as the current one
    colorIndices[1] = ( colorIndices[1] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
    colorIndices[3] = ( colorIndices[3] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
    
  }
}

setInterval(updateGradient,10);
//-----------------------------------------------

//Google Sign In
$(document).ready(function() {
  var googleUser = {};

    var startApp = function() {
      gapi.load('auth2', function(){
        // Retrieve the singleton for the GoogleAuth library and set up the client.
        auth2 = gapi.auth2.getAuthInstance({
          client_id: '571162360878-5gskopcqa3pp2n5puh4b0h7ubbdc841r.apps.googleusercontent.com',
          cookiepolicy: 'none',
          // Request scopes in addition to 'profile' and 'email'
          //scope: 'additional_scope'

        });
         renderButton();
        console.log(document.getElementById('mysignin2'));
      });
    };

    function attachSignin(element) {
      auth2.attachClickHandler(element, {},
        function(googleUser) {
          document.getElementById('name').innerText = "Signed in: " +
                googleUser.getBasicProfile().getName();
          }, function(error) {
            alert(JSON.stringify(error, undefined, 2));
          });
    }

    function onSuccess(googleUser) {
      var profile = googleUser.getBasicProfile();
      gapi.client.load('plus', 'v1', function () {
          var request = gapi.client.plus.people.get({
              'userId': 'me'
          });

          //Display the user details
          request.execute(function (resp) {
              var profileHTML = '<div class="profile"><div class="head">Welcome '+resp.name.givenName+'! <a href="javascript:void(0);" onclick="signOut();">Sign out</a></div>';
              profileHTML += '<img src="'+resp.image.url+'"/><div class="proDetails"><p>'+resp.displayName+'</p><p>'+resp.emails[0].value+'</p><p>'+resp.gender+'</p><p>'+resp.id+'</p><p><a href="'+resp.url+'">View Google+ Profile</a></p></div></div>';
              $('.userContent').html(profileHTML);
              $('.gsignin').slideUp('slow');
          });
      });
  }

  function onFailure(error) {
      alert(error);
      $(".AfterLogin").hide();
  }

  function renderButton() {
      gapi.signin2.render('mysignin2', {
          'scope': 'profile email',
          'width': 240,
          'height': 50,
          'longtitle': true,
          'theme': 'dark',
          'onsuccess': onSuccess,
          'onfailure': onFailure
      });
  }

  function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail());
  }

  function onSuccess(googleUser) {
    console.log('Logged in as: ' + googleUser.getBasicProfile().getName());
    $(".hello").html("Welcome: " + googleUser.getBasicProfile().getName());
    console.log("I'm Here");
    $(".AfterLogin").show();
    $("#mysignin2").hide();
    $(".text-vertical-center2").hide();
    $(".searchResults").hide();
    $("#pageFooter1").hide();
    }

    function onFailure(error) {
    console.log(error);
    }
  });

/*Carousel Gallery*/
    $(document).ready(function() {
      $("#owl-demo").owlCarousel({
          autoPlay: 3000, //Set AutoPlay to 3 seconds
          items : 5,
          itemsCustom : false,
          itemsDesktop : [1199,4],
          itemsDesktopSmall : [980,3],
          itemsTablet: [768,2],
          itemsTabletSmall: false,
          itemsMobile : [479,1],
          singleItem : false,
          itemsScaleUp : false,
      });
    });

