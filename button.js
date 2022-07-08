function dayNightChange() {

    if (document.querySelector('#day').value === 'day'){

        document.querySelector('body').style.backgroundColor='black';
        document.querySelector('.label').style.color='white';
        document.querySelector('.label').style.borderColor='white';
        document.querySelector('#day').style.backgroundColor='black';
        document.querySelector('.divider').style.borderColor='white';
        document.querySelector('.lg').style.backgroundColor='white';
        document.querySelector('#temp1').style.backgroundColor='white';
        document.querySelector('#temp2').style.backgroundColor='white';
        document.querySelector('#temp3').style.backgroundColor='white';
        document.querySelector('.md').style.backgroundColor='white';
        document.getElementById('dayNight').src='./moon.png';
        document.querySelector('#day').value = 'night';
      }

        else if (document.querySelector('#day').value === 'night')
       {
        document.querySelector('body').style.backgroundColor='white';
        document.querySelector('.label').style.color='black';
        document.querySelector('.label').style.borderColor='black';
        document.querySelector('#day').style.backgroundColor='white';
        document.querySelector('.divider').style.borderColor='black';
        document.querySelector('.lg').style.backgroundColor='black';
        document.querySelector('#temp1').style.backgroundColor='black';
        document.querySelector('#temp2').style.backgroundColor='black';
        document.querySelector('#temp3').style.backgroundColor='black';
        document.querySelector('.md').style.backgroundColor='black';
        document.getElementById('dayNight').src='./sun.png';
        document.querySelector('#day').value = 'day';
      }

}