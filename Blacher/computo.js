        const supabaseUrl = "https://mgqdwsiktnlblnhjcaer.supabase.co";
        const supabaseKey = "sb_publishable_xfJDW7ysQdhRXKMwn0W6Ag_bBBwCpPo";
        const clienteSupabase =
            window.supabase.createClient(
                supabaseUrl,
                supabaseKey
            );
        let registros = [];
        let filtroActual = "todo";
        function filtrarTipo() {

    filtroActual = document.getElementById("filtroTipo").value;
    generarEncabezado(filtroActual);
    mostrarTabla();
}
        function mostrarAlerta(mensaje) {
            const alerta =
                document.getElementById("alertaGuardado");
            alerta.innerHTML =
                `<i class="fa-solid fa-circle-check"></i> ${mensaje}`;
            alerta.style.display = "block";
            setTimeout(() => {
                alerta.style.display = "none";
            }, 3000);
        }
        async function cargarDatos() {
            registros = [];
            const { data: computadoras } = await clienteSupabase.from("computadoras").select("*");
            computadoras.forEach(pc => {
                registros.push({
                    tipo: "compu",
                    id: pc.id,
                    usuario: pc.usuario,
                    departamento: pc.departamento,
                    tipo_equipo: pc.tipo_equipo,
                    marca_cpu: pc.marca_cpu,
                    modelo_cpu: pc.modelo_cpu,
                    marca_monitor: pc.marca_monitor,
                    modelo_monitor: pc.modelo_monitor,
                    marca_mouse: pc.marca_mouse,
                    modelo_mouse: pc.modelo_mouse,
                    serie: pc.serie,
                    disco_tipo: pc.disco_tipo,
                    capacidadRAM: pc.capacidad_ram,
                    capacidadDisco: pc.capacidad_disco,
                    ram_tipo: pc.ram_tipo,
                    ram_soportada: pc.ram_soportada,
                    slots_libres: pc.slots_libres,
                    version_so: pc.version_so,
                    procesador: pc.procesador,
                    fabricante: pc.fabricante,
                    wifi: pc.wifi,
                    dual_band: pc.dual_band,
                    mac_wifi: pc.mac_wifi,
                    rj45: pc.rj45,
                    mac_ethernet: pc.mac_ethernet,
                    bluetooth: pc.bluetooth,
                    unidad_lectora: pc.unidad_lectora,
                    grafica: pc.grafica,
                    monitor: pc.monitor,
                    admin_pc: pc.admin_pc,
                    estado: pc.estado,
                    observaciones: pc.observaciones || ""
                });

            });
            const { data: laptops } = await clienteSupabase.from("laptops").select("*");
            laptops.forEach(laptop => {
                registros.push({
                    tipo: "laptop",
                    id: laptop.id,
                    usuario: laptop.usuario,
                    departamento: laptop.departamento,
                    tipo_equipo: laptop.tipo_equipo,
                    marca: laptop.marca,
                    modelo: laptop.modelo,
                    serie: laptop.serie,
                    disco_tipo: laptop.disco_tipo,
                    capacidadRAM: laptop.capacidad_ram,
                    capacidadDisco: laptop.capacidad_disco,
                    ram_tipo: laptop.ram_tipo,
                    ram_soportada: laptop.ram_soportada,
                    slots_libres: laptop.slots_libres,
                    version_so: laptop.version_so,
                    procesador: laptop.procesador,
                    fabricante: laptop.fabricante,
                    wifi: laptop.wifi,
                    dual_band: laptop.dual_band,
                    mac_wifi: laptop.mac_wifi,
                    rj45: laptop.rj45,
                    mac_ethernet: laptop.mac_ethernet,
                    bluetooth: laptop.bluetooth,
                    unidad_lectora: laptop.unidad_lectora,
                    grafica: laptop.grafica,
                    monitor: laptop.monitor,
                    admin_pc: laptop.admin_pc,
                    estado: laptop.estado,
                    observaciones: laptop.observaciones || ""
                });
            });

            const { data: impresoras } = await clienteSupabase.from("impresoras").select("*");
            impresoras.forEach(impresora => {
                registros.push({
                    tipo: "impresora",
                    id: impresora.id,
                    usuario: impresora.usuario,
                    departamento: impresora.departamento,
                    marca: impresora.marca,
                    modelo: impresora.modelo,
                    serie: impresora.serie,
                    tipo_impresora: impresora.tipo_impresora,
                    conexion: impresora.conexion,
                    estado: impresora.estado,
                    observaciones: impresora.observaciones || ""
                });
            });
            mostrarTabla();
        }
        function generarEncabezado(tipo) {
            let encabezado = document.getElementById("encabezadoTabla");
            if (tipo === "compu") {
                encabezado.innerHTML = `
        <tr>
            <th>ITEM</th>
            <th>USUARIO</th>
            <th>DEPARTAMENTO</th>
            <th>TIPO EQUIPO</th>
            <th>MARCA CPU</th>
            <th>MODELO CPU</th>
            <th>MARCA MONITOR</th>
            <th>MODELO MONITOR</th>
            <th>MARCA MOUSE</th>
            <th>MODELO MOUSE</th>
            <th>SERIE</th>
            <th>TIPO DISCO</th>
            <th>CAP. DISCO</th>
            <th>TIPO RAM</th>
            <th>CAP. RAM</th>
            <th>RAM SOPORTADA</th>
            <th>LIBRES SLOTS</th>
            <th>VERSIÓN SO</th>
            <th>PROCESADOR</th>
            <th>FABRICANTE</th>
            <th>WIFI</th>
            <th>DUAL BAND</th>
            <th>MAC WIFI</th>
            <th>RJ45</th>
            <th>MAC ETHERNET</th>
            <th>BLUETOOTH</th>
            <th>LECTORA</th>
            <th>TARJETA GRÁFICA</th>
            <th>TAMAÑO MONITOR</th>
            <th>ADMIN</th>
            <th>ESTADO</th>
            <th>OBSERVACIONES</th>
            <th>ACCIONES</th>
        </tr>`;
            }
            else if (tipo === "laptop") {
                encabezado.innerHTML = `
        <tr>
            <th>ITEM</th>
            <th>USUARIO</th>
            <th>DEPARTAMENTO</th>
            <th>MARCA</th>
            <th>MODELO</th>
            <th>SERIE</th>
            <th>TIPO DISCO</th>
            <th>CAP. DISCO</th>
            <th>TIPO RAM</th>
            <th>CAP. RAM</th>
            <th>RAM SOPORTADA</th>
            <th>SLOTS</th>
            <th>VERSIÓN SO</th>
            <th>PROCESADOR</th>
            <th>FABRICANTE</th>
            <th>WIFI</th>
            <th>DUAL BAND</th>
            <th>MAC WIFI</th>
            <th>RJ45</th>
            <th>MAC ETHERNET</th>
            <th>BLUETOOTH</th>
            <th>LECTORA</th>
            <th>TARJETA GRÁFICA</th>
            <th>TAMAÑO MONITOR</th>
            <th>ADMIN</th>
            <th>ESTADO</th>
            <th>OBSERVACIONES</th>
            <th>ACCIONES</th>
        </tr>`;
            }
            else if (tipo === "impresora") {
                encabezado.innerHTML = `
        <tr>
            <th>ITEM</th>
            <th>USUARIO</th>
            <th>DEPARTAMENTO</th>
            <th>MARCA</th>
            <th>MODELO</th>
            <th>SERIE</th>
            <th>TIPO IMPRESORA</th>
            <th>CONEXION</th>
            <th>ESTADO</th>
            <th>OBSERVACIONES</th>
            <th>ACCIONES</th>
        </tr>`;
            }
            else {
                encabezado.innerHTML = `
        <tr>
            <th>ITEM</th>
            <th>TIPO</th>
            <th>USUARIO</th>
            <th>DEPARTAMENTO</th>
            <th>SERIE</th>
            <th>ESTADO</th>
            <th>ACCIONES</th>
        </tr>`;
            }
        }
        function mostrarTabla() {
            generarEncabezado(filtroActual);
            const tablaContenedor = document.getElementById("tablaEquipos");
            if(tablaContenedor){
                if(
                    filtroActual === "compu" ||
                    filtroActual === "laptop"
                ){
                    tablaContenedor.classList.add("tabla-computo");
                    tablaContenedor.classList.remove("tabla-resumen");
                }else{
                    tablaContenedor.classList.remove("tabla-computo");
                    tablaContenedor.classList.add("tabla-resumen");
                }
            }
            let tabla = document.getElementById("tablaRegistros");
            tabla.innerHTML = "";
            let registrosFiltrados = registros.filter(registro => {
                if (filtroActual === "todo") {
                    return true;
                }
                return registro.tipo === filtroActual;
            });
            registrosFiltrados.forEach((registro, index) => {
    if (filtroActual === "compu") {
        tabla.innerHTML += `
    <tr>
        <td>${index + 1}</td>
        <td>
            <input type="text" id="usuario${registro.id}" value="${registro.usuario || ""}"readonly>
        </td>
        <td>
            <input type="text" id="departamento${registro.id}" value="${registro.departamento || ""}"readonly> 
        </td>
        <td>
            <input type="text" id="tipo_equipo${registro.id}"  value="${registro.tipo_equipo || ""}"readonly> 
        </td>
        <td>
            <input type="text" id="marca_cpu${registro.id}" value="${registro.marca_cpu || ""}"readonly> 
        </td>
        <td>
            <input type="text" id="modelo_cpu${registro.id}" value="${registro.modelo_cpu || ""}"readonly> 
        </td>
        <td>
            <input type="text" id="marca_monitor${registro.id}" value="${registro.marca_monitor || ""}"readonly> 
        </td>
        <td>
            <input type="text" id="modelo_monitor${registro.id}" value="${registro.modelo_monitor || ""}"readonly> 
        </td>
        <td>
            <input type="text" id="marca_mouse${registro.id}" value="${registro.marca_mouse || ""}"readonly> 
        </td>
        <td>
            <input type="text" id="modelo_mouse${registro.id}" value="${registro.modelo_mouse || ""}"readonly> 
        </td>
        <td>
            <input type="text" id="serie${registro.id}" value="${registro.serie || ""}"readonly> 
        </td>
        <td>
            <input type="text" id="disco_tipo${registro.id}" value="${registro.disco_tipo || ""}"readonly> 
        </td>
        <td>
            <input type="text" id="capacidadDisco${registro.id}" value="${registro.capacidadDisco || ""}"readonly> 
        </td>
        <td>
            <input type="text" id="ram_tipo${registro.id}" value="${registro.ram_tipo || ""}"readonly> 
        </td>
        <td>
            <input type="text" id="capacidadRAM${registro.id}" value="${registro.capacidadRAM || ""}"readonly> 
        </td>
        <td>
            <input type="text" id="ram_soportada${registro.id}" value="${registro.ram_soportada || ""}"readonly>
        </td>
        <td>
            <input type="text" id="slots_libres${registro.id}" value="${registro.slots_libres || ""}"readonly> 
        </td>
        <td>
            <input type="text" id="version_so${registro.id}" value="${registro.version_so || ""}"readonly> 
        </td>
        <td>
            <input type="text" id="procesador${registro.id}" value="${registro.procesador || ""}"readonly> 
        </td>
        <td>
            <input type="text" id="fabricante${registro.id}" value="${registro.fabricante || ""}"readonly> 
        </td>
        <td>
            <input type="text" id="wifi${registro.id}" value="${registro.wifi || ""}"readonly>
        </td>
        <td>
            <input type="text" id="dual_band${registro.id}" value="${registro.dual_band || ""}"readonly> 
        </td>
        <td>
            <input type="text" id="mac_wifi${registro.id}" value="${registro.mac_wifi || ""}"readonly> 
        </td>
        <td>
            <input type="text" id="rj45${registro.id}" value="${registro.rj45 || ""}"readonly> 
        </td>
        <td>
            <input type="text" id="mac_ethernet${registro.id}" value="${registro.mac_ethernet || ""}"readonly> 
        </td>
        <td>
            <input type="text" id="bluetooth${registro.id}" value="${registro.bluetooth || ""}"readonly> 
        </td>
        <td>
            <input type="text" id="unidad_lectora${registro.id}" value="${registro.unidad_lectora || ""}"readonly> 
        </td>
        <td>
            <input type="text" id="grafica${registro.id}" value="${registro.grafica || ""}"readonly> 
        </td>
        <td>
            <input type="text" id="monitor${registro.id}" value="${registro.monitor || ""}"readonly> 
        </td>
        <td>
            <input type="text" id="admin_pc${registro.id}" value="${registro.admin_pc || ""}"readonly> 
        </td>
        <td>
            <input type="text" id="estado${registro.id}" value="${registro.estado || ""}"readonly> 
        </td>
        <td>
            <textarea id="observaciones${registro.id}" readonly>${registro.observaciones || ""}</textarea> 
        </td>
        <td>
            <div class="acciones">
                <button class="btn-icon btn-guardar" data-editando="false" onclick="guardarCambios('${registro.tipo}',${registro.id})">
                    <i class="fa-solid fa-pen"></i>
                </button>
                <button class="btn-icon btn-eliminar" onclick="eliminarRegistro('${registro.tipo}',${registro.id})">
                    <i class="fa-solid fa-trash"></i>
                </button>
            </div>
        </td>
    </tr>
    `;
                }
                else if (filtroActual === "laptop") {
                    tabla.innerHTML += `
    <tr>
        <td>${index + 1}</td>
        <td>
            <input type="text" id="usuario${registro.id}" value="${registro.usuario || ""}"readonly>
        </td>
        <td>
            <input type="text" id="departamento${registro.id}" value="${registro.departamento || ""}"readonly> 
        </td>
        <td>
            <input type="text" id="marca${registro.id}" value="${registro.marca || ""}"readonly> 
        </td>
        <td>
            <input type="text" id="modelo${registro.id}" value="${registro.modelo || ""}"readonly> 
        </td>
        <td>
            <input type="text" id="serie${registro.id}" value="${registro.serie || ""}"readonly> 
        </td>
        <td>
            <input type="text" id="disco_tipo${registro.id}" value="${registro.disco_tipo || ""}"readonly> 
        </td>
        <td>
            <input type="text" id="capacidadDisco${registro.id}" value="${registro.capacidadDisco || ""}"readonly> 
        </td>
        <td>
            <input type="text" id="ram_tipo${registro.id}" value="${registro.ram_tipo || ""}"readonly> 
        </td>
        <td>
            <input type="text" id="capacidadRAM${registro.id}" value="${registro.capacidadRAM || ""}"readonly> 
        </td>
        <td>
            <input type="text" id="ram_soportada${registro.id}" value="${registro.ram_soportada || ""}"readonly>
        </td>
        <td>
            <input type="text" id="slots_libres${registro.id}" value="${registro.slots_libres || ""}"readonly> 
        </td>
        <td>
            <input type="text" id="version_so${registro.id}" value="${registro.version_so || ""}"readonly> 
        </td>
        <td>
            <input type="text" id="procesador${registro.id}" value="${registro.procesador || ""}"readonly> 
        </td>
        <td>
            <input type="text" id="fabricante${registro.id}" value="${registro.fabricante || ""}"readonly> 
        </td>
        <td>
            <input type="text" id="wifi${registro.id}" value="${registro.wifi || ""}"readonly> 
        </td>
        <td>
            <input type="text" id="dual_band${registro.id}" value="${registro.dual_band || ""}"readonly> 
        </td>
        <td>
            <input type="text" id="mac_wifi${registro.id}" value="${registro.mac_wifi || ""}"readonly> 
        </td>
        <td>
            <input type="text" id="rj45${registro.id}" value="${registro.rj45 || ""}"readonly> 
        </td>
        <td>
            <input type="text" id="mac_ethernet${registro.id}" value="${registro.mac_ethernet || ""}"readonly> 
        </td>
        <td>
            <input type="text" id="bluetooth${registro.id}" value="${registro.bluetooth || ""}"readonly> 
        </td>
        <td>
            <input type="text" id="unidad_lectora${registro.id}" value="${registro.unidad_lectora || ""}"readonly>
        </td>
        <td>
            <input type="text" id="grafica${registro.id}" value="${registro.grafica || ""}"readonly> 
        </td>
        <td>
            <input type="text" id="monitor${registro.id}" value="${registro.monitor || ""}"readonly> 
        </td>
        <td>
            <input type="text" id="admin_pc${registro.id}" value="${registro.admin_pc || ""}"readonly> 
        </td>
        <td>
            <input type="text" id="estado${registro.id}" value="${registro.estado || ""}"readonly> 
        </td>
        <td>
            <textarea id="observaciones${registro.id}" readonly>${registro.observaciones || ""}</textarea> 
        </td>
        <td>
            <div class="acciones">
                <button class="btn-icon btn-guardar" data-editando="false" onclick="guardarCambios('${registro.tipo}',${registro.id})">
                    <i class="fa-solid fa-pen"></i>
                </button>
                <button class="btn-icon btn-eliminar" onclick="eliminarRegistro('${registro.tipo}',${registro.id})">
                    <i class="fa-solid fa-trash"></i>
                </button>
            </div>
        </td>
    </tr>
    `;
                }
                else if (filtroActual === "impresora") {
                    tabla.innerHTML += `
            <tr>
            <td>${index + 1}</td>
            <td>
                <input type="text" id="usuario${registro.id}" value="${registro.usuario || ""}"readonly>
            </td>
            <td>
                <input type="text" id="departamento${registro.id}" value="${registro.departamento || ""}"readonly> 
            </td>
            <td>
                <input type="text" id="marca${registro.id}" value="${registro.marca || ""}"readonly> 
            </td>
            <td>
                <input type="text" id="modelo${registro.id}" value="${registro.modelo || ""}"readonly> 
            </td>
            <td>
                <input type="text" id="serie${registro.id}" value="${registro.serie || ""}"readonly> 
            </td>
            <td>
                <input type="text" id="tipo_impresora${registro.id}" value="${registro.tipo_impresora || ""}"readonly> 
            </td>
            <td>
                <input type="text" id="conexion${registro.id}" value="${registro.conexion || ""}"readonly> 
            </td>
            <td>
                <input type="text" id="estado${registro.id}" value="${registro.estado || ""}"readonly> 
            </td>
            <td>
            <textarea id="observaciones${registro.id}" readonly>${registro.observaciones || ""}</textarea> 
        </td>
            <td>
            <div class="acciones">
                <button class="btn-icon btn-guardar" data-editando="false" onclick="guardarCambios('${registro.tipo}',${registro.id})">
                    <i class="fa-solid fa-pen"></i>
                </button>

            <button class="btn-icon btn-eliminar" onclick="eliminarRegistro('${registro.tipo}',${registro.id})">
            <i class="fa-solid fa-trash"></i>
            </button>
            </div>
            </td>
            </tr>
            `;
                }

                else {
                    tabla.innerHTML += `
            <tr>
            <td>${index + 1}</td>
            <td>${registro.tipo}</td>
            <td>${registro.usuario}</td>
            <td>${registro.departamento}</td>
            <td>${registro.serie}</td>
            <td>${registro.estado}</td>
            <td>
            <div class="acciones">
            <button class="btn-icon btn-guardar" onclick="guardarCambios('${registro.tipo}',${registro.id})">
            <i class="fa-solid fa-floppy-disk"></i>
            </button>

            <button class="btn-icon btn-eliminar" onclick="eliminarRegistro('${registro.tipo}',${registro.id})">
            <i class="fa-solid fa-trash"></i>
            </button>
            </div>
            </td>
            </tr>
            `;
                }
            });
        }
        function buscarRegistros() {
            let texto = document.getElementById("buscador").value.toLowerCase();
            let filas = document.querySelectorAll("#tablaRegistros tr");
            filas.forEach(fila => {
                let contenido = fila.textContent.toLowerCase();
                fila.style.display =
                    contenido.includes(texto)
                        ? ""
                        : "none";
            });
        }
        async function guardarCambios(tipo, id) {
            console.log("Click", tipo, id);
        const fila = document.getElementById(`usuario${id}`).closest("tr");
        const inputs = fila.querySelectorAll("input");
        const boton = fila.querySelector(".btn-guardar");
        const editando = boton.dataset.editando === "true";
        // PRIMER CLICK 
        if(!editando){
            inputs.forEach(input=>{
                input.removeAttribute("readonly");
            });
            boton.dataset.editando = "true";
            boton.innerHTML = '<i class="fa-solid fa-floppy-disk"></i>';
            return;
        }    // SEGUNDO CLICK 
        let tabla = "";
        if(tipo==="compu") tabla="computadoras";
        if(tipo==="laptop") tabla="laptops";
        if(tipo==="impresora") tabla="impresoras";
        let datos = {};
        if (tipo === "compu") {
                datos = {
                    usuario: document.getElementById(`usuario${id}`)?.value,
                    departamento: document.getElementById(`departamento${id}`)?.value,
                    tipo_equipo: document.getElementById(`tipo_equipo${id}`)?.value ,
                    marca_cpu: document.getElementById(`marca_cpu${id}`)?.value,
                    modelo_cpu: document.getElementById(`modelo_cpu${id}`)?.value,
                    marca_monitor: document.getElementById(`marca_monitor${id}`)?.value,
                    modelo_monitor: document.getElementById(`modelo_monitor${id}`)?.value,
                    marca_mouse: document.getElementById(`marca_mouse${id}`)?.value,
                    modelo_mouse: document.getElementById(`modelo_mouse${id}`)?.value,
                    serie: document.getElementById(`serie${id}`)?.value,
                    disco_tipo: document.getElementById(`disco_tipo${id}`)?.value,
                    capacidad_ram: document.getElementById(`capacidadRAM${id}`)?.value,
                    capacidad_disco: document.getElementById(`capacidadDisco${id}`)?.value,
                    ram_tipo: document.getElementById(`ram_tipo${id}`)?.value,
                    ram_soportada: document.getElementById(`ram_soportada${id}`)?.value,
                    slots_libres: document.getElementById(`slots_libres${id}`)?.value,
                    version_so: document.getElementById(`version_so${id}`)?.value,
                    procesador: document.getElementById(`procesador${id}`)?.value,
                    fabricante: document.getElementById(`fabricante${id}`)?.value,
                    wifi: document.getElementById(`wifi${id}`)?.value,
                    dual_band: document.getElementById(`dual_band${id}`)?.value,
                    mac_wifi: document.getElementById(`mac_wifi${id}`)?.value,
                    rj45: document.getElementById(`rj45${id}`)?.value,
                    mac_ethernet: document.getElementById(`mac_ethernet${id}`)?.value,
                    bluetooth: document.getElementById(`bluetooth${id}`)?.value,
                    unidad_lectora: document.getElementById(`unidad_lectora${id}`)?.value,
                    grafica: document.getElementById(`grafica${id}`)?.value,
                    monitor: document.getElementById(`monitor${id}`)?.value,
                    admin_pc: document.getElementById(`admin_pc${id}`)?.value,
                    estado: document.getElementById(`estado${id}`)?.value,
                    observaciones: document.getElementById(`observaciones${id}`)?.value
                };
            }
            if (tipo === "laptop") {
                datos = {
                    usuario: document.getElementById(`usuario${id}`)?.value,
                    departamento: document.getElementById(`departamento${id}`)?.value,
                    marca: document.getElementById(`marca${id}`)?.value,
                    modelo: document.getElementById(`modelo${id}`)?.value,
                    serie: document.getElementById(`serie${id}`)?.value,
                    disco_tipo: document.getElementById(`disco_tipo${id}`)?.value,
                    capacidad_ram: document.getElementById(`capacidadRAM${id}`)?.value,
                    capacidad_disco: document.getElementById(`capacidadDisco${id}`)?.value,
                    ram_tipo: document.getElementById(`ram_tipo${id}`)?.value,
                    ram_soportada: document.getElementById(`ram_soportada${id}`)?.value,
                    slots_libres: document.getElementById(`slots_libres${id}`)?.value,
                    version_so: document.getElementById(`version_so${id}`)?.value,
                    procesador: document.getElementById(`procesador${id}`)?.value,
                    fabricante: document.getElementById(`fabricante${id}`)?.value,
                    wifi: document.getElementById(`wifi${id}`)?.value,
                    dual_band: document.getElementById(`dual_band${id}`)?.value,
                    mac_wifi: document.getElementById(`mac_wifi${id}`)?.value,
                    rj45: document.getElementById(`rj45${id}`)?.value,
                    mac_ethernet: document.getElementById(`mac_ethernet${id}`)?.value,
                    bluetooth: document.getElementById(`bluetooth${id}`)?.value,
                    unidad_lectora: document.getElementById(`unidad_lectora${id}`)?.value,
                    grafica: document.getElementById(`grafica${id}`)?.value,
                    monitor: document.getElementById(`monitor${id}`)?.value,
                    admin_pc: document.getElementById(`admin_pc${id}`)?.value,
                    estado: document.getElementById(`estado${id}`)?.value,
                    observaciones: document.getElementById(`observaciones${id}`)?.value
                };
            }
            if (tipo === "impresora") {
                datos = {
                    usuario: document.getElementById(`usuario${id}`)?.value,
                    departamento: document.getElementById(`departamento${id}`)?.value,
                    marca: document.getElementById(`marca${id}`)?.value,
                    modelo: document.getElementById(`modelo${id}`)?.value,
                    serie: document.getElementById(`serie${id}`)?.value,
                    tipo_impresora: document.getElementById(`tipo_impresora${id}`)?.value,
                    conexion: document.getElementById(`conexion${id}`)?.value,
                    estado: document.getElementById(`estado${id}`)?.value,
                    observaciones: document.getElementById(`observaciones${id}`)?.value
                };
            }
            const { error } = await clienteSupabase.from(tabla).update(datos).eq("id", id);
            if (error) {
                alert("Error al guardar");
                console.log(error);
                return;
            }
           inputs.forEach(input=>{
                input.setAttribute("readonly",true);
            });
            boton.dataset.editando = "false";
            boton.innerHTML = '<i class="fa-solid fa-pen"></i>';
            mostrarAlerta("Cambios guardados");
        }
        async function eliminarRegistro(tipo, id) {
            let tabla = "";
            if (tipo === "compu") {
                tabla = "computadoras";
            }
            if (tipo === "laptop") {
                tabla = "laptops";
            }
            if (tipo === "impresora") {
                tabla = "impresoras";
            }
            const { error } =
                await clienteSupabase.from(tabla).delete().eq("id", id);
            if (error) {
                alert("Error al eliminar");
                console.log(error);
                return;
            }
            cargarDatos();

        }
        function exportarExcel() {
    let datos = [];
   if (filtroActual === "todo") {
    datos = registros.map(r => ({
        TIPO: r.tipo || "",
        USUARIO: r.usuario || "",
        DEPARTAMENTO: r.departamento || "",
        TIPO_EQUIPO: r.tipo_equipo || "",
        MARCA_CPU: r.marca_cpu || "",
        MODELO_CPU: r.modelo_cpu || "",
        MARCA_MONITOR: r.marca_monitor || "",
        MODELO_MONITOR: r.modelo_monitor || "",
        MARCA_MOUSE: r.marca_mouse || "",
        MODELO_MOUSE: r.modelo_mouse || "",
        MARCA: r.marca || "",
        MODELO: r.modelo || "",
        SERIE: r.serie || "",
        TIPO_DISCO: r.disco_tipo || "",
        CAPACIDAD_DISCO: r.capacidadDisco || "",
        TIPO_RAM: r.ram_tipo || "",
        CAPACIDAD_RAM: r.capacidadRAM || "",
        RAM_SOPORTADA: r.ram_soportada || "",
        SLOTS_LIBRES: r.slots_libres || "",
        VERSION_SO: r.version_so || "",
        PROCESADOR: r.procesador || "",
        FABRICANTE: r.fabricante || "",
        WIFI: r.wifi || "",
        DUAL_BAND: r.dual_band || "",
        MAC_WIFI: r.mac_wifi || "",
        RJ45: r.rj45 || "",
        MAC_ETHERNET: r.mac_ethernet || "",
        BLUETOOTH: r.bluetooth || "",
        LECTORA: r.unidad_lectora || "",
        GRAFICA: r.grafica || "",
        MONITOR: r.monitor || "",
        ADMIN_PC: r.admin_pc || "",
        TIPO_IMPRESORA: r.tipo_impresora || "",
        CONEXION: r.conexion || "",
        ESTADO: r.estado || "",
        OBSERVACIONES: r.observaciones || ""
    }));
    } else if (filtroActual === "compu") {

        datos = registros
        .filter(r => r.tipo === "compu")
        .map(r => ({
            USUARIO: r.usuario,
            DEPARTAMENTO: r.departamento,
            TIPO_EQUIPO: r.tipo_equipo,
            MARCA_CPU: r.marca_cpu,
            MODELO_CPU: r.modelo_cpu,
            MARCA_MONITOR: r.marca_monitor,
            MODELO_MONITOR: r.modelo_monitor,
            MARCA_MOUSE: r.marca_mouse,
            MODELO_MOUSE: r.modelo_mouse,
            SERIE: r.serie,
            TIPO_DISCO: r.disco_tipo,
            CAPACIDAD_DISCO: r.capacidadDisco,
            TIPO_RAM: r.ram_tipo,
            CAPACIDAD_RAM: r.capacidadRAM,
            RAM_SOPORTADA: r.ram_soportada,
            SLOTS_LIBRES: r.slots_libres,
            VERSION_SO: r.version_so,
            PROCESADOR: r.procesador,
            FABRICANTE: r.fabricante,
            WIFI: r.wifi,
            DUAL_BAND: r.dual_band,
            MAC_WIFI: r.mac_wifi,
            RJ45: r.rj45,
            MAC_ETHERNET: r.mac_ethernet,
            BLUETOOTH: r.bluetooth,
            LECTORA: r.unidad_lectora,
            GRAFICA: r.grafica,
            MONITOR: r.monitor,
            ADMIN_PC: r.admin_pc,
            ESTADO: r.estado,
            OBSERVACIONES: r.observaciones
        }));
    } else if (filtroActual === "laptop") {

        datos = registros
        .filter(r => r.tipo === "laptop")
        .map(r => ({
            USUARIO: r.usuario,
            DEPARTAMENTO: r.departamento,
            MARCA: r.marca,
            MODELO: r.modelo,
            SERIE: r.serie,
            TIPO_DISCO: r.disco_tipo,
            CAPACIDAD_DISCO: r.capacidadDisco,
            TIPO_RAM: r.ram_tipo,
            CAPACIDAD_RAM: r.capacidadRAM,
            RAM_SOPORTADA: r.ram_soportada,
            SLOTS_LIBRES: r.slots_libres,
            VERSION_SO: r.version_so,
            PROCESADOR: r.procesador,
            FABRICANTE: r.fabricante,
            WIFI: r.wifi,
            DUAL_BAND: r.dual_band,
            MAC_WIFI: r.mac_wifi,
            RJ45: r.rj45,
            MAC_ETHERNET: r.mac_ethernet,
            BLUETOOTH: r.bluetooth,
            LECTORA: r.unidad_lectora,
            GRAFICA: r.grafica,
            MONITOR: r.monitor,
            ADMIN_PC: r.admin_pc,
            ESTADO: r.estado,
            OBSERVACIONES: r.observaciones
        }));

    } else if (filtroActual === "impresora") {
        datos = registros
        .filter(r => r.tipo === "impresora")
        .map(r => ({
            USUARIO: r.usuario,
            DEPARTAMENTO: r.departamento,
            MARCA: r.marca,
            MODELO: r.modelo,
            SERIE: r.serie,
            TIPO_IMPRESORA: r.tipo_impresora,
            CONEXION: r.conexion,
            ESTADO: r.estado,
            OBSERVACIONES: r.observaciones
        }));
    }
    const libro = XLSX.utils.book_new();
    const hoja = XLSX.utils.json_to_sheet(datos);
    hoja["!cols"] = Object.keys(datos[0] || {}).map(() => ({
        wch: 25
    }));
    XLSX.utils.book_append_sheet(libro, hoja, "Equipos");
    XLSX.writeFile(
        libro,
        `Almacen_${filtroActual}.xlsx`
    );
}
    cargarDatos();