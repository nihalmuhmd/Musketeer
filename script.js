var MainImg = document.getElementById('MainImg');
        var smallimage = document.getElementsByClassName('small-img');


        smallimage[0].onclick = function () {
            MainImg.src = smallimage[0].src;
        }
        smallimage[1].onclick = function () {
            MainImg.src = smallimage[1].src;
        }
        smallimage[2].onclick = function () {
            MainImg.src = smallimage[2].src;
        }
        smallimage[3].onclick = function () {
            MainImg.src = smallimage[3].src;
        }


        let redBtn = document.getElementById('red');
        let blueBtn = document.getElementById('blue');
        let blackBtn = document.getElementById('black');

        
        redBtn.onclick = function() {
            MainImg.src = smallimage[1].src;
        }

        blueBtn.onclick = function() {
            MainImg.src = smallimage[2].src;
        }

        blackBtn.onclick = function() {
            MainImg.src = smallimage[3].src;
        }

        const bar = document.getElementById('bar');
        const close = document.getElementById('close');
        const nav = document.getElementById('navbar');

        if (bar) {
            bar.addEventListener('click', () => {
                nav.classList.add('active');
            })
        }

        if (close) {
            close.addEventListener('click', () => {
                nav.classList.remove('active');
            })
        }
        
        
        

