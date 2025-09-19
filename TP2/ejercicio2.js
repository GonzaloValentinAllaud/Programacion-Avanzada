// Ejercicio 2: Array de dispositivos de red
    //Crea un array con 5 dispositivos de red (routers, switches, firewalls, etc.) donde
    //cada uno sea un objeto literal con propiedades como tipo, marca, modelo y precio.

    const dispositivosRed = [
        {
            tipo: "Router",
            marca: "TP-Link",
            modelo: "Archer C7",
            precio: 70
        },
        {
            tipo: "Switch",
            marca: "Netgear",
            modelo: "GS108",
            precio: 50
        },
        {
            tipo: "Firewall",
            marca: "Cisco",
            modelo: "ASA 5506-X",
            precio: 300
        },
        {
            tipo: "Access Point",
            marca: "Ubiquiti",
            modelo: "UniFi AP AC Pro",
            precio: 130
        },
        {
            tipo: "Modem",
            marca: "Motorola",
            modelo: "MB7621",
            precio: 80
        }
    ];
    console.log(dispositivosRed);