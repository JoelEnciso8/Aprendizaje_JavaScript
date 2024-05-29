// IndexDB API de Js apra administrad datos de mannera estructurada 

(function () {
    let DB;
    document.addEventListener('DOMContentLoaded',() =>{
        crearDB();
        


    })

    // crar la base de datos de IndexedDB

    function crearDB () {
        const crearDB = window.indexedDB.open('crm',1);

    // si el nav no soporta IndexedDB este va a mostrar el error
        crearDB.onerror = function () {
            console.log('one error');
        };
        crearDB.onsuccess = function () {
            DB = crearDB.result;
        }

        crearDB.onupgradeneeded = function (e) {
            const db = e.target.result;
            const ObjectStore = db.createObjectStore('crm',{keyPath:'id', autoIncrement: true});

            ObjectStore.createIndex('nombre','nombre',{unique:false})
            ObjectStore.createIndex('correo','correo',{unique:false})
            ObjectStore.createIndex('telefono','telefono',{unique:false})
            ObjectStore.createIndex('empresa','empresa',{unique:false})
            ObjectStore.createIndex('id','id',{unique:true})

            console.log('DB lista Y creada');
        }
        
    }
})();



