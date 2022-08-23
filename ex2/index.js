function mlista(){
    var lista = ['46', '28', "5000", '80', '120', '500']
    var max = Math.max(...lista);
    document.getElementById("list").innerHTML = `na lista ${lista} , o maior numero é o ${max}`
}

    function files(){
        document.getElementById("arquivo").addEventListener('change', function(){
            var fr=new FileReader();
            fr.onload=function(){
                document.getElementById("texto").textContent=fr.result;
            }
            fr.readAsText(this.files[0]);
        })};
