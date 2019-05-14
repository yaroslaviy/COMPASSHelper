var i = 0;
function eraseCovers(){
	d = document;
	var regex = new RegExp("Delete");
	var arr = d.getElementsByClassName('btn btn-mini btn-primary'); 
      for(i; i < arr.length; i++) {
      	if(arr[i].innerHTML != undefined && regex.test(arr[i].innerHTML)){
      		arr[i].click();
      		d.getElementsByClassName('confirmOkBtn btn btn-primary')[0].click();
      		break;
      	}
      	
      }
  }


eraseCovers();