function popularSelect() {
    // O Array JSON
    var estados = [
        {
            "ID": "001",
            "Nome": "São Paulo"
        },
        {
            "ID": "002",
            "Nome": "Rio de Janeiro"
        },
        {
            "ID": "003",
            "Nome": "Minas Gerais"
        },
        {
            "ID": "004",
            "Nome": "Curitiba"
        },
        {
            "ID": "005",
            "Nome": "Porto Alegre"
        },
    ];
    var opc = document.getElementById('sel'); // var opc pega o elemento de id "sel"
    for (var i = 0; i < estados.length; i++) { // laço for com contador para adicionar as opções
        // Popular SELECT com JSON.
        opc.innerHTML = opc.innerHTML +
            '<option value="' + estados[i]['ID'] + '">' + estados[i]['Nome'] + '</option>';
    }
}
