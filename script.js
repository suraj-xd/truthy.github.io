var txtInput = document.querySelector('#txtInput');
var voiceList = document.querySelector('#voiceList');
var btnSpeak = document.querySelector('#btnSpeak');
txtInput.value = txtInput.value.toLowerCase();

var QUESTIONmarks = ['is', 'am', 'are', 'do', 'does', 'was', 'were', 'had', 'have', 'has', 'will', 'shall', 'should', 'would', 'can', 'did'];
QUESTIONmarks = JSON.stringify(QUESTIONmarks);

//Casual
var warn = document.getElementById('warning');
var warn1 = document.getElementById('warning1');
warn1.innerHTML = '';
warn.innerHTML = '';
function clearbox() {
    txtInput.value = '';
    window.location.reload();
}

//Yes no
var yes = document.getElementById('box1');
var no = document.getElementById('box2');
yes.style.visibility = 'hidden';
no.style.visibility = 'hidden';



//Main 
btnSpeak.addEventListener('click', () => {
    if (txtInput.value.length == 0) {
        warn.innerHTML = '⚠ ENTER A QUESTION!';
        warn.style.color = 'red';
        setTimeout(() => {
            warn.innerHTML = '';
        }, 2000);
    }

    //Question Mark

    if (txtInput.value.length != 0 && txtInput.value.endsWith('?') != true) {
        warn.innerHTML = '⚠ PUT A QUESTION MARK!';
        warn.style.color = 'red';
        setTimeout(() => {
            warn.innerHTML = '';
        }, 2000);
    }

    var randomnum = parseInt((Math.floor(Math.random() * 20)));



    if (txtInput.value.startsWith('is') || txtInput.value.startsWith('am') || txtInput.value.startsWith('are') || txtInput.value.startsWith('do') || txtInput.value.startsWith('does') || txtInput.value.startsWith('did') || txtInput.value.startsWith('will') || txtInput.value.startsWith('shall') || txtInput.value.startsWith('should') || txtInput.value.startsWith('would') || txtInput.value.startsWith('was') || txtInput.value.startsWith('were') || txtInput.value.startsWith('has') || txtInput.value.startsWith('have') || txtInput.value.startsWith('had') == true) {
        if (txtInput.value.endsWith('?') == true) {

            if (randomnum > 10) {
                yes.style.visibility = '';
                yes.style.background = 'rgba(247, 41, 41, 0.856)';
                yes.style.boxShadow = '0 5px 15px #da1010ef';
                setTimeout(() => {
                    yes.style.visibility = 'hidden';

                }, 1500);
            } else {
                no.style.visibility = '';
                no.style.background = 'rgba(125, 211, 85, 0.822)';
                no.style.boxShadow = '0 5px 15px #63db3eef';
                setTimeout(() => {
                    no.style.visibility = 'hidden';

                }, 1500);
            }
        }
    } else if (txtInput.value.length != 0 ){
        warn.innerHTML = '⚠ ENTER A VALID QUESTION';
        warn.style.color = 'red';
        setTimeout(() => {
            warn.innerHTML = '';
        }, 2000);
    }


})

