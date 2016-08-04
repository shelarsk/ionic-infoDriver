angular.module('starter.services', ['ionic','ngCordova'])

.service('DataService', function ($http,$localStorage,$window,$ionicLoading,$cordovaSQLite) {
    
    this.square = function(a) {
      return MathService.multiply(a,a);
    }
       
    this.downloadBook = function(id,url) {
        
        delete $http.defaults.headers.common['X-Requested-With']; // See note 2
        
        alert ( "Downloading" + id + url);
        
        $ionicLoading.show({
      template: 'Loading...'
    });
        
        $http.get(url, {responseType: "arraybuffer"}).
          success(function(data) {
            alert ( "Read '" + url + "' with " + data.byteLength
            + " bytes in a variable of type '" + typeof(data) + "'");
            alert("download complete.");
            
       ''    // execute INSERT statement with parameter
              //  $cordovaSQLite.execute(db, 'INSERT INTO Book(id,buffer) VALUES (?,?)', [id,data])
//            .then(function(result) {
////                alert("Message saved successful, cheers!");''
//            }, function(error) {
//                alert("Error on saving: " + error.message);
//            })

            
           
    $ionicLoading.hide();
       
           // alert($localStorage.bkBuf);
            
          }).
          error(function(data, status) {
            alert("Request failed with status: " + status + data);
            $ionicLoading.hide();
          });
        
    }
    
    this.loadBookData = function () {
        
         // Execute SELECT statement to load message from database.
//        $cordovaSQLite.execute(db, 'SELECT * FROM Book ORDER BY id DESC')
//            .then(
//                function(res) {
//
//                    if (res.rows.length > 0) {
//
//                        $scope.localBookList = res.rows;
//                        console.log("Message loaded successful, cheers!" + res.rows.length);
//                    }
//                },
//                function(error) {
//                    alert("Error on loading: " + error.message);
//                }
//            );
    }
    
    this.getBook = function() {
        return $window.decode($localStorage.bkBuf);
    }
    
    })

.factory('deviceLibrary', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var shelf = [{
    id: 0,
    title: 'katha-yugabhanachi-front',
    url: 'kthaa-yugbhaanaacii-miinaa-gokhle.epub',
    face: 'book/katha-yugabhanachi-front.jpg'
  }, {
    id: 1,
    title: 'lock-griffin-front',
    url: 'loNk-griphin-vsNt-vsNt-limye.epub',
    face: 'book/lock-griffin-front.jpg'
  }, {
    id: 2,
    title: 'mumbai-te-kashmir-front',
    url: 'muNbii-te-kaashmiir-arunn-hrishcNdr-vedhiikr.epub',
    face: 'book/mumbai-te-kashmir-front.jpg'
  }, {
    id: 3,
    title: 'olakh-siyachenchi-front',
    url: 'olkh-siyaacencii-anuraadhaa-gore.epub',
    face: 'book/olakh-siyachenchi-front.jpg'
  }, {
    id: 4,
    title: 'sonyachya-dhurache-thaske-front',
    url: 'sonyaacyaa-dhuraace-tthske-ddoN.-ujjvlaa-rege-dlvii.epub',
    face: 'book/sonyachya-dhurache-thaske-front.jpg'
  }];
  
     return {
    all: function() {
      return shelf;
    },
    remove: function(chat) {
      shelf.splice(shelf.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < shelf.length; i++) {
        if (shelf[i].id === parseInt(chatId)) {
          return shelf[i];
        }
      }
      return null;
    } 
  };
    
})

.factory('library', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var shelf = [{
    id: 0,
    name: 'Notification Status',
    url: 'New: 3  Checked : 5 Total :8  ',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Submission Status',
    url: ' Pending : 2 , Submitted : 4 Total : 6',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Total Reports',
    url: 'Total Reports : 5',
    face: 'img/adam.jpg'
  }];

      
  return {
    all: function() {
      return shelf;
    },
    remove: function(chat) {
      shelf.splice(shelf.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < shelf.length; i++) {
        if (shelf[i].id === parseInt(chatId)) {
          return shelf[i];
        }
      }
      return null;
    } 
  };
})

.factory('notification', function() {
  // Might use a resource here that returns a JSON array

 var notifyID;
    
    
  // Some fake testing data
  var shelf = [{
    id: 0,
    title: 'Maleria Submission deadline ',
    summary: 'Start Date: 05-Jun=2016 End Date:05-Jul-2016 ',
    face: 'img/ben.png',
    details : 'tjoadada adad add '
  }, {
    id: 1,
    title: 'Waste Management Submission deadline ',
    url: 'Start Date: 05-Jun=2016 End Date:05-Jul-2016 ',
    face: 'img/max.png',
    details : 'tjoadada adad add '
  }, {
    id: 2,
    title: 'New Scheme for Doctors ',
    summary: 'Useful Scheme for doctors',
    face: 'img/adam.jpg',
      details : 'tjoadada adad add '
  }];

      
  return {
    all: function() {
      return shelf;
    },
    remove: function(chat) {
      shelf.splice(shelf.indexOf(chat), 1);
    },
    set : function (s) {
        shelf=s;
    },
    get: function(chatId) {
      for (var i = 0; i < shelf.length; i++) {
        if (shelf[i].id === parseInt(chatId)) {
          return shelf[i];
        }
      }
      return null;
    },
    setNotifyID : function(nid) {
      notifyID = nid;
  },
      getNotifyID : function () {
          return notifyID;
      }
      
  };
})


.factory('areas', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var shelf = [{
    id: 0,
    name: 'HealthCare',
    count: '2',
    face: 'img/h.png'
  }, {
    id: 1,
    name: 'Waste Managemnt',
    url: '0',
    face: 'img/w.png'
  }
   ];

      
  return {
    all: function() {
      return shelf;
    },
    get: function(chatId) {
      for (var i = 0; i < shelf.length; i++) {
        if (shelf[i].id === parseInt(chatId)) {
          return shelf[i];
        }
      }
      return null;
    } 
  };
})


.factory('collections', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var shelf = [{
    id: 0,
    name: 'Maleria Submission',
    area: 'HealthCare',  
    startDate: '01-Jun-2016',
    endDate: '05-Jul-2016',
    poc: 'Abc Xyz',
    submittedby: 'Muncipal Health Department',
    status: 'open'
  }, {
    id: 1,
    name: 'Waste Collection Submission',
    area: 'Waste',  
    startDate: '01-May-2016',
    endDate: '30-Jul-2016',
    poc: 'Gaurav',
    submittedby: 'Muncipal Waste Department',
    status: 'open'
  }
   ];

      
  return {
    all: function() {
      return shelf;
    },
    get: function(chatId) {
      for (var i = 0; i < shelf.length; i++) {
        if (shelf[i].id === parseInt(chatId)) {
          return shelf[i];
        }
      }
      return null;
    } 
  };
})


.factory('submissions', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var shelf = [{
    id: 0,
    name: 'Maleria Submission',
    area: 'HealthCare',  
    startDate: '01-Jun-2016',
    endDate: '05-Jul-2016',
    poc: 'Abc Xyz',
    submittedby: 'Muncipal Health Department',
    status: 'open',
    fields : []
  }, {
    id: 1,
    name: 'Waste Collection Submission',
    area: 'Waste',  
    startDate: '01-May-2016',
    endDate: '30-Jul-2016',
    poc: 'Gaurav',
    submittedby: 'Muncipal Waste Department',
    status: 'open',
    fields : []
  }
   ];

   shelf[0].fields.push(  {id: 'forminput1', type: 'text', value: '', placeholder: 'Enter your username here..'});
   shelf[0].fields.push(  {id: 'forminput1', type: 'text', value: '', placeholder: 'Enter your username here..'});
   shelf[1].fields.push(  {id: 'forminput1', type: 'text', value: '', placeholder: 'Enter your username here..'});
   shelf[1].fields.push(  {id: 'forminput1', type: 'text', value: '', placeholder: 'Enter your username here..'});
              
  return {
    all: function() {
      return shelf;
    },
    get: function(chatId) {
      for (var i = 0; i < shelf.length; i++) {
        if (shelf[i].id === parseInt(chatId)) {
          return shelf[i];
        }
      }
      return null;
    } 
  };
})

.factory('booklist', function($http,$ionicLoading,$ionicPopup) {
  // Might use a resource here that returns a JSON array
 console.log("inside booklist factory");
 
  var categories = [
 
       {key:0,name:"Graphs", subCategories:[] },
       {key:1,name:"मासिकं", subCategories:[]}
         
      ];
	//पुस्तकं 
   
    
    
   
	  
	  for(var i=0;i<categories.length; i++)
	  {
		  for(var j=0; j < categories[i].subCategories.length; j++)
		  {
			  for(var k=0; k < 3; k++) //categories[i].subCategories[j].noOfBooks
			  {
				  categories[i].subCategories[j].bookList.push({id:i+'/'+j+'/'+k,img:'img/book.jpg',title: '&#2310;&#2336;&#2357;&#2339;&#2368;&#2340;&#2354;&#2375;  &#2348;&#2366;&#2348;&#2366;&#2360;&#2366;&#2361;&#2375;&#2348;',author:'Author'+i+j+k, priceDesc:'Rs.100  <s>Rs.150</s>  (33% OFF)',btnText:'\u0935\u093f\u0915\u0924 \u0918\u094d\u092f\u093e (buy)',price:100 ,ubt:1 });
					
				  
			  }
			 
		  }
	  };
	 
      
      
  return {
    all: function() {
	  console.log("Insids Service return Booklists=",categories);
      return categories;
    },
    
    getList: function(catId) {
        //alert(JSON.stringify(categories[catId].subCategories));
        return categories[catId].subCategories;
    },
      
    get: function(catId,subCatId) {
		console.log("Inside dataservice get function: catId",catId +"subCatId"+subCatId);
		var url = "http://orgowners.com/granthaliJsonData/WebContent/jsonData.jsp?callback=JSON_CALLBACK&type=S12"
		$http.jsonp(url)
		.success(function(data) {
			
			alert("inside getbooklist json data");
			alert(JSON.stringify(data));
			console.log(data);
			return data; 
					
		})
		.error(function(json) {
			
			 var alertPopup = $ionicPopup.alert({
					title: 'Internet Check',
					template: 'Check your Internet Connection.'+json
					
				});
				
		});
		/*
		for(var i=0; i < categories.length; i++ )
		{
			if (categories[i].key === parseInt(catId))
			{
				 for (var j = 0; j < categories[i].subCategories.length; j++) {
					if (categories[i].subCategories[j].key === parseInt(subCatId)) {
					  return categories[i].subCategories[j].bookList;
					}
				 }
			}
		} return null;
		*/
		
		 console.log("Leaving service get"); 
      }
      
    }; 
  
});

