
    SC.initialize({
        client_id:  'unnFdubicpq7RVFFsQucZzduDPQTaCYy'
    });
    function soundcloud (st) {

        SC.get('/tracks', {
            q: st
        }).then(function (tracks){
            for (i of tracks){
                if (i.artwork_url) {
                    var image=document.createElement('img');
                    image.src=i.artwork_url;
                    image.id=i.id;
                    var div1=document.getElementById('canciones');
                    div.appendChild(image);


                }else{
                    var imag=document.createElement('img');
                    imag.src="src/imagenes/og_image.png";
                    var div=document.getElementById('canciones');
                    div.appendChild(imag);
                    imag.id=i.id;


                }

            }


        })
    }

    function buscar() {
        var str=document.getElementById('input').value;
        var e=soundcloud(str);
    }

    function star() {
        var e=document.querySelectorAll('img');
        console.log(e);
        for (i=0;i<e.length;i++){
            console.log(e[i].id);
            SC.stream('/tracks/'+e[i].id).then(function (player){
                player.play().then(function(){
                    console.log('Playback started!');
                }).catch(function(e){
                    console.error('Playback rejected. Try calling play() from a user interaction.', e);
                });
            })
        }
    }







    function miOnDragStart(event) {
    event.dataTransfer.setData('id',event.target.id);

    console.log('Drag start',event.target.id,' = ',event.dataTransfer.getData('id'));
}

function miOnDragOver(event) {
    event.preventDefault();
    // console.log('Drag over');
}
function miOnDrop(event) {
    event.preventDefault();
    var data=event.dataTransfer.getData(star());
    console.log(data);
    event.target.appendChild(document.getElementById(data));
    console.log('Drag drop',data);
}

