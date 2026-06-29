const supabaseUrl = "https://mgqdwsiktnlblnhjcaer.supabase.co";
const supabaseKey = "sb_publishable_xfJDW7ysQdhRXKMwn0W6Ag_bBBwCpPo";
const clienteSupabase = window.supabase.createClient(
    supabaseUrl,
    supabaseKey
);
let tablaActual = "tablaComputadoras";
let seccionActual = "todo";
window.onload = () => {
    cargarComputadoras();
    cargarLaptops();
    cargarImpresoras();
    cargarProductos();
};
function buscarRegistros(){
    let texto = document.getElementById("buscador").value.toLowerCase();
    let filas = document.querySelectorAll(
        `#${tablaActual} tbody tr`
    );
    filas.forEach(fila => {
        let contenido =
            fila.cells[1]?.textContent.toLowerCase() + " " +
            fila.cells[3]?.textContent.toLowerCase();
        fila.style.display = contenido.includes(texto)
            ? ""
            : "none";
    });
}
function mostrarSeccion(id){
    document.querySelectorAll(".seccion")
    .forEach(seccion=>{
        seccion.style.display = "none";
    });
    if(id === "todo"){
        document.querySelectorAll(".seccion")
        .forEach(seccion=>{
            seccion.style.display = "block";
        });
        seccionActual = "todo";
        return;
    }
    document.getElementById(id).style.display = "block";
    seccionActual = id;
    switch(id){
        case "computadoras":
            tablaActual = "tablaComputadoras";
        break;
        case "laptops":
            tablaActual = "tablaLaptops";
        break;
        case "impresoras":
            tablaActual = "tablaImpresoras";
        break;
        case "productos":
            tablaActual = "tablaProductos";
        break;
    }
}
async function cargarComputadoras(){
    const { data, error } = await clienteSupabase.from("computadoras").select("*");
    if(error) return console.error(error);
    let tbody =  document.querySelector("#tablaComputadoras tbody");
    tbody.innerHTML = "";
    data.forEach((item, index) => {
        tbody.innerHTML += `
        <tr>
            <td>${index+1}</td>
            <td>${item.usuario || ""}</td>
            <td>${item.departamento || ""}</td>
            <td>${item.marca_cpu || ""}</td>
            <td>${item.modelo_cpu || ""}</td>
            <td>${item.marca_monitor || ""}</td>
            <td>${item.modelo_monitor || ""}</td>
            <td>${item.marca_mouse || ""}</td>
            <td>${item.modelo_mouse || ""}</td>
            <td>${item.serie || ""}</td>
            <td>${item.disco_tipo || ""}</td>
            <td>${item.capacidad_disco || ""}</td>
            <td>${item.ram_tipo || ""}</td>
            <td>${item.capacidad_ram || ""}</td>
            <td>${item.slots_libres || ""}</td>
            <td>${item.version_so || ""}</td>
            <td>${item.procesador || ""}</td>
            <td>${item.fabricante || ""}</td>
            <td>${item.wifi || ""}</td>
            <td>${item.dual_band || ""}</td>
            <td>${item.mac_wifi || ""}</td>
            <td>${item.rj45 || ""}</td>
            <td>${item.mac_ethernet || ""}</td>
            <td>${item.bluetooth || ""}</td>
            <td>${item.unidad_lectora || ""}</td>
            <td>${item.grafica || ""}</td>
            <td>${item.monitor || ""}</td>
            <td>${item.admin_pc || ""}</td>
            <td>${item.estado || ""}</td>
            <td>${item.observaciones || ""}</td>
        </tr>
        `;
    });
}
async function cargarLaptops(){
    const { data, error } = await clienteSupabase.from("laptops").select("*");
    if(error) return console.error(error);
    let tbody = document.querySelector("#tablaLaptops tbody");
    tbody.innerHTML = "";
    data.forEach((item, index) => {
        tbody.innerHTML += `
        <tr>
            <td>${index+1}</td>
            <td>${item.usuario || ""}</td>
            <td>${item.departamento || ""}</td>
            <td>${item.marca || ""}</td>
            <td>${item.modelo || ""}</td>
            <td>${item.serie || ""}</td>
            <td>${item.disco_tipo || ""}</td>
            <td>${item.capacidad_disco || ""}</td>
            <td>${item.ram_tipo || ""}</td>
            <td>${item.capacidad_ram || ""}</td>
            <td>${item.ram_soportada || ""}</td>
            <td>${item.slots_libres || ""}</td>
            <td>${item.version_so || ""}</td>
            <td>${item.procesador || ""}</td>
            <td>${item.fabricante || ""}</td>
            <td>${item.wifi || ""}</td>
            <td>${item.dual_band || ""}</td>
            <td>${item.mac_wifi || ""}</td>
            <td>${item.rj45 || ""}</td>
            <td>${item.mac_ethernet || ""}</td>
            <td>${item.bluetooth || ""}</td>
            <td>${item.unidad_lectora || ""}</td>
            <td>${item.grafica || ""}</td>
            <td>${item.monitor || ""}</td>
            <td>${item.admin_pc || ""}</td>
            <td>${item.estado || ""}</td>
            <td>${item.observaciones || ""}</td>
        </tr>
        `;
    });
}
async function cargarImpresoras(){
    const { data, error } = await clienteSupabase.from("impresoras").select("*");
    if(error) return console.error(error);
    let tbody = document.querySelector("#tablaImpresoras tbody");
    tbody.innerHTML = "";
    data.forEach((item, index) => {
        tbody.innerHTML += `
        <tr>
           <td>${index+1}</td>
            <td>${item.usuario || ""}</td>
            <td>${item.departamento || ""}</td>
            <td>${item.marca || ""}</td>
            <td>${item.modelo || ""}</td>
            <td>${item.serie || ""}</td>
            <td>${item.tipo_impresora || ""}</td>
            <td>${item.conexion || ""}</td>
            <td>${item.estado || ""}</td>
            <td>${item.observaciones || ""}</td>
        </tr>
        `;
    });
}
async function cargarProductos(){
    const { data, error } = await clienteSupabase.from("productos").select("*");
    if(error){
        return console.error(error);
    }
    let tbody = document.querySelector("#tablaProductos tbody");
    tbody.innerHTML = "";
    data.forEach((item,index)=>{
        let codigo = generarCodigo(
            item.producto,
            item.modelo,
            item.serie
        );
        tbody.innerHTML += `
        <tr>
            <td>${index + 1}</td>
            <td>${item.fecha || ""}</td>
            <td>${item.usuario || ""}</td>
            <td>${item.departamento || ""}</td>
            <td>${item.fecha_devolucion || ""}</td>
            <td>${item.consumible || ""}</td>
            <td>${item.producto || ""}</td>
            <td>${item.modelo || ""}</td>
            <td>${item.marca || ""}</td>
            <td>${item.serie || ""}</td>
            <td>${item.estado || ""}</td>
            <td>${codigo}</td>
            <td>${item.observaciones || ""}</td>
        </tr>
        `;
    });
}
function generarCodigo(producto, modelo, serie){
    let p = (producto || "XX").substring(0,2).toUpperCase();
    let m = (modelo || "XX").substring(0,2).toUpperCase();
    let s = serie
    ? serie.slice(-4)
    : "0001";
    return p + m + s;
}
function exportarExcel(){
    const wb = XLSX.utils.book_new();
    const tablas = {
        computadoras: {
            id: "tablaComputadoras",
            hoja: "Computadoras"
        },
        laptops: {
            id: "tablaLaptops",
            hoja: "Laptops"
        },
        impresoras: {
            id: "tablaImpresoras",
            hoja: "Impresoras"
        },
        productos: {
            id: "tablaProductos",
            hoja: "Productos"
        }
    };
    let exportar = [];
    if(seccionActual === "todo"){
        exportar = Object.values(tablas);
    }else{
        exportar.push(tablas[seccionActual]);
    }
    exportar.forEach(info => {
        const tabla = document.getElementById(info.id).cloneNode(true);
        const ws = XLSX.utils.table_to_sheet(tabla);
        const rango = XLSX.utils.decode_range(ws["!ref"]);
        let anchos = [];
        for(let C = rango.s.c; C <= rango.e.c; C++){
            anchos.push({ wch: 25 });
        }
        ws["!cols"] = anchos;
        XLSX.utils.book_append_sheet(
            wb,
            ws,
            info.hoja
        );
    });
    XLSX.writeFile(
        wb,
        seccionActual === "todo"
            ? "Inventario_Completo.xlsx"
            : `${seccionActual}.xlsx`
    );
}