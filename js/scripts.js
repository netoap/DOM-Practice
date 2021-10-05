(function(){

    var carImages = document.querySelector('.carimages');

    carImages.addEventListener('click', function(e){
        if(e.target.tagName === 'IMG'){

            var overlay = document.createElement('div');
            overlay.id = 'overlay';
            overlay.style.position = 'absolute';
            overlay.style.top = 0;
            overlay.style.background = 'rgba(0,0,0,0.7)';
            overlay.style.cursor = 'pointer';
            overlay.style.width = window.innerWidth + "px";
            overlay.style.height = window.innerHeight + "px";

            document.body.appendChild(overlay);

            var imageSource = e.target.src;

            var popUpImage = document.createElement('img');
            popUpImage.id = 'popUpImage';
            popUpImage.src = imageSource;        
            popUpImage.style.display = 'block';
            popUpImage.style.width = '50%';
            popUpImage.style.margin = '0 auto';
            popUpImage.style.marginTop = '10%';  
            
            

            overlay.appendChild(popUpImage);

            popUpImage.addEventListener('click', function(){

                if(overlay){
                    overlay.parentElement.removeChild(overlay);
                }
            });

            window.addEventListener('scroll', function(){
                if(overlay){
                    overlay.style.top = window.pageYOffset +'px';
                    overlay.style.left = window.pageXOffset +'px';
                }
            });

            window.addEventListener('resize', function(){
                overlay.style.width = window.innerWidth + 'px';
                overlay.style.height = window.innerHeight + 'px';
            });
        }
        
    });



}());