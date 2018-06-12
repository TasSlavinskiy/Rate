var inputName = document.getElementById('nameadd'),
    resultName = document.getElementById('name'),
    inputSum = document.getElementById('sumadd'),
    resultSum = document.getElementById('sum'),
    btnPush = document.getElementById('push'),
    rateVal = document.getElementById('rate'),

    checkName = document.getElementById('checkname'),
    checkSum = document.getElementById('checksum');

var fff = btnPush.addEventListener('click', (e) => {
		e.preventDefault();
	
if( inputName.value.length == 0 ) {
		
		checkName.style.display = "block";
	return true;
	} else {
		checkName.style.display = "none";
		
	}
if (inputSum.value.length == 0 ) {
		
		checkSum.style.display = "block";
	return true;
	} else {
		checkSum.style.display = "none";
		
	}

    if( inputSum.value <= 100 ) {
        	rateVal.innerText = "3%";
        } else if ( inputSum.value <= 1000 && inputSum.value > 100) {
        	rateVal.innerText = "5%";
        } else if ( inputSum.value > 1000 ) {
        	rateVal.innerText = "7%";
        } 
		    resultName.innerText = inputName.value;
    		resultSum.innerText = inputSum.value + "$";
        
});


	
  	
	

