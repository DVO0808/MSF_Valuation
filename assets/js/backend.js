/*
var valiseUser = null;
//var loginUser = null;
var toDoList = {list: []};

function User(name, city, country, date) {
	this.name = name;
	this.city = city;
	this.country = country;
	this.date = date;
}
*/

var toDoList = {list: []};
var toDoListCompleted = {list: []};

var deadLine = null;
// Initialize Firebase

function initializeFireBase () {

  var config = {
    apiKey: "AIzaSyDssrFpJ-XMh_arO3ZQbbk3fEG_5WqpUf0",
    authDomain: "msf-practicum.firebaseapp.com",
    databaseURL: "https://msf-practicum.firebaseio.com",
    storageBucket: "",
    messagingSenderId: "9353490276"
  };
  firebase.initializeApp(config);

}

function getRef(endpoint) {
	var ref;
	if (endpoint == '') {
		ref = firebase.database().ref();
	} else {
		ref = firebase.database().ref('/' + endpoint + '/');
	}
	return ref;
}
function addFBListenter(endpoint) {
    var ref = getRef(endpoint);
    if (endpoint == 'meeting') {
        ref.on('value', getMeetingValue);
    } else if (endpoint == 'deadline') {
        ref.on('value', getDeadlineValue);
    } else if (endpoint == 'comment') {
        ref.on('value', getCommentValue);
    } else if (endpoint == 'comment2') {
        ref.on('value', getCommentValue2);
    } else if (endpoint == 'comment3') {
        ref.on('value', getCommentValue3);
    } else if (endpoint == 'comment4') {
        ref.on('value', getCommentValue4);
    } else if (endpoint == 'toDoList') {
        ref.on('value', getToDoListChildAdded);
        ref.on('value', getToDoListChildRemoved);
    } else if (endpoint == 'toDoListCompleted') {
        ref.on('child_added', getToDoListChildAddedCompleted);
        ref.on('child_removed', getToDoListChildRemovedCompleted);
    } else {
        // something very wrong
        console.error('addFBListenter: Incorrect endpoint: ' + endpoint);
    }

}
/*
function removeFBListener(endpoint) {
	var ref = getRef(endpoint);
	if (endpoint == 'user') {
		ref.off('value', getUserValue);
	} else if (endpoint == 'toDoList') {
		ref.off('value', getToDoListValue);
	} else {
		// something very wrong
		console.error('removeFBListenter: Incorrect endpoint: ' + endpoint);
	}
}

function removeFBListeners() {
	var uid = firebase.auth().currentUser.uid;
	//console.log('uid: ' + uid);
	removeFBListener('user'); 
	removeFBListener('toDoList');
}
*/
// Firebase Listeners
function getMeetingValue(snapshot) {
	//console.log('getUserValue');
	// when the user sign up first time, no snapshot.val()
	// is defined. Do nothing.
	if (snapshot.val() == null) return;

	//console.log('snapshot.key: ' + snapshot.key);
	//console.log(snapshot.val());
	//setValiseUser(snapshot.val());
	// Update UI
	updateUIGetMeetingValue(snapshot.val());
 
}

function getDeadlineValue(snapshot) {
	//console.log('getUserValue');
	// when the user sign up first time, no snapshot.val()
	// is defined. Do nothing.
	if (snapshot.val() == null) return;

	//console.log('snapshot.key: ' + snapshot.key);
	//console.log(snapshot.val());
	//setValiseUser(snapshot.val());
	// Update UI
	deadLine = snapshot.val();
	updateUIGetDeadlineValue(snapshot.val());
 
}


function getCommentValue(snapshot, index) {
	console.log('getCommentValue');
	// when the user sign up first time, no snapshot.val()
	// is defined. Do nothing.
	if (snapshot.val() == null) return;

	//console.log('snapshot.key: ' + snapshot.key);
	console.log(snapshot.val());
	//setValiseUser(snapshot.val());
	// Update UI
	updateUIGetCommentValue(snapshot.val(), index);
 
}



function getCommentValue2(snapshot, index) {
	console.log('getCommentValue2');
	// when the user sign up first time, no snapshot.val()
	// is defined. Do nothing.
	if (snapshot.val() == null) return;

	//console.log('snapshot.key: ' + snapshot.key);
	console.log(snapshot.val());
	//setValiseUser(snapshot.val());
	// Update UI
	updateUIGetCommentValue2(snapshot.val(), index);
 
}

function getCommentValue3(snapshot, index) {
	console.log('getCommentValue3');
	// when the user sign up first time, no snapshot.val()
	// is defined. Do nothing.
	if (snapshot.val() == null) return;

	//console.log('snapshot.key: ' + snapshot.key);
	console.log(snapshot.val());
	//setValiseUser(snapshot.val());
	// Update UI
	updateUIGetCommentValue3(snapshot.val(), index);
 
}


function getCommentValue4(snapshot, index) {
	console.log('getCommentValue4');
	// when the user sign up first time, no snapshot.val()
	// is defined. Do nothing.
	if (snapshot.val() == null) return;

	//console.log('snapshot.key: ' + snapshot.key);
	console.log(snapshot.val());
	//setValiseUser(snapshot.val());
	// Update UI
	updateUIGetCommentValue4(snapshot.val(), index);
 
}



function getToDoListChildAdded(snapshot) {
	console.log('getToDoListValue');
	if (snapshot.val() == null) { 
		console.log("I am not working");
        updateUIGetToDoListChildAdded([])
		return;
	}
	
	//console.log('snapshot.key: ' + snapshot.key);
	//console.log(snapshot.val());
	toDoList = snapshot.val();
	console.log(toDoList.list);
	updateUIGetToDoList(toDoList.list);
}

function getToDoListChildRemoved(snapshot) {
	console.log('getToDoListValueRemoved');
	if (snapshot.val() == null) { 
		return;

	}
	//console.log('snapshot.key: ' + snapshot.key);
	//console.log(snapshot.val());
	toDoList = snapshot.val();
	console.log(toDoListCompleted.list);
	updateUIGetToDoListRemoved(toDoListCompleted.list);
}


function getToDoListChildAddedCompleted(snapshot) {
	//console.log('getToDoListValue');
	if (snapshot.val() == null)  return;
	
	//console.log('snapshot.key: ' + snapshot.key);
	//console.log(snapshot.val());
	//toDoList = snapshot.val();
	updateUIGetToDoListChildAddedCompleted();
}

function getToDoListChildRemovedCompleted(snapshot) {
	//console.log('getToDoListValue');
	if (snapshot.val() == null)  return;

	//console.log('snapshot.key: ' + snapshot.key);
	//console.log(snapshot.val());
	//toDoList = snapshot.val();
	updateUIGetToDoListChildRemovedCompleted();
}




// Helper Function, e.g. called by click Listeners

function getDeadLineObj() {
	return Object.assign({}, deadLine);
}

/*
function setValiseToDoList(index, item) {
	toDoList.list[index] = item;	
}
function addValiseToDoList(item) {
	toDoList.list.push(item);
}
function deleteValiseToDoList(index) {
	toDoList.list.splice(index, 1);
}
function getValiseToDoList() {
	return toDoList.list;
}
function filterValiseToDoList(filter) {
	var list = toDoList.list;
	var filteredList = list.filter(function(item) {
		if (item != filter) {
			return true;
		} else {
			return false;
		}
	})
	toDoList.list = filteredList;
}
*/
function setComment(obj) {
	
	firebase.database().ref('/comment/').set(obj);
}

function setComment2(obj) {
	
	firebase.database().ref('/comment2/').set(obj);
}


function setComment3(obj) {
	
	firebase.database().ref('/comment3/').set(obj);
}

function setComment4(obj) {
	
	firebase.database().ref('/comment4/').set(obj);
}

function setDeadLine(obj) {

	firebase.database().ref('/deadline/').set(obj);
}
function setMeeting(obj) {

	firebase.database().ref('/meeting/').set(obj);
}


function setFBList() {
	firebase.database().ref('/toDoList/').set(toDoList);
}

function setFBListCompleted() {
	firebase.database().ref('/toDoListCompleted/').set(toDoListCompleted);
}

function addToDoList(item) {
	toDoList.list.push(item);
}

function addToDoListCompleted(item) {
	toDoList.list.push(item);
}


function setToDoList(index, item) {
	toDoList.list[index] = item;	
}





