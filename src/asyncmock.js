const products = [
    {

    id: 1,
    
    name: "Smartphone Samsung Galaxy A14 4GB/128GB Black",
    
    price: 1000,
    
    category: "celular",
    
    stock: 23,
    
    description: "Smartphone Samsung Galaxy A14 128/4GB Black: Sumérgete en el mundo de la tecnología con el Smartphone Samsung Galaxy A14 en elegante negro. Con 128GB de almacenamiento y 4GB de RAM, este dispositivo ofrece un rendimiento ágil y espacio de sobra para tus aplicaciones y datos. La marca Samsung es sinónimo de calidad y confiabilidad en la industria móvil, y este modelo no es la excepción. Su diseño moderno y su pantalla nítida te envuelven en una experiencia visual excepcional. Además, su cámara te permite capturar momentos memorables con claridad y detalle. El Galaxy A14 es ideal para quienes buscan un smartphone versátil y de alto rendimiento.",
    
    img: "https://stylewatch.vtexassets.com/arquivos/ids/239435/Smartphone_Samsung_SMA145MZKEARO_01.jpg?v=638301191961570000"
    },
    {
    
    id: 2,
    
    name: "Smartphone Motorola Edge 40 256/8GB Jet Black",
    
    price: 1233,
    
    category: "celular",
    
    stock: 20,
    
    description: "Sumérgite en la vanguardia tecnológica con el Smartphone Motorola Edge 40 Jet Black. Este dispositivo redefine la experiencia móvil con su impresionante capacidad de 256GB y 8GB de RAM, asegurando un rendimiento ágil y un amplio espacio para tus necesidades. La pantalla envolvente te sumerge en colores vibrantes y detalles nítidos, llevando la visualización a un nuevo nivel. La calidad de construcción y diseño elegante son sellos distintivos de Motorola. Captura momentos extraordinarios con la potente configuración de cámaras y disfruta de la duración de la batería para todo el día. Motorola Edge 40 representa la excelencia en la tecnología móvil, brindándote una experiencia única que solo Motorola puede ofrecer",
    
    img: "https://stylewatch.vtexassets.com/arquivos/ids/240909/smartphone_motorola_TE0011_01.jpg?v=638321261374030000"
    }, 
    {
    
    id: 3,
    
    name: "Smartphone Xiaomi Redmi Note 11 Graphite Gray",
    
    price: 2000,
    
    category: "celular",
    
    stock: 10,
    
    description: "El nuevo smartphone Xiaomi Redmi Note 11 se distingue por un diseño moderno con un marco plano y un carácter minimalista. Pantalla AMOLED retroiluminada proporciona el más alto brillo, contraste, color y resolución. Carga rápida Pro de 33 W. Pantalla táctil y visualización impecable, disfruta de tus contenidos con una tasa de refresco de 90 Hz fluida y sin interrupciones. Navega sin problemas por tus redes sociales o experimenta un modo de juego potente y con gran capacidad de respuesta. Rendimiento integral, listo para cualquier reto. Velocidades de carga más rápidas con UFS 2.2 y escritura acelerada gracias a Write Booster, que ofrece funciones eficaces de instalación de aplicaciones, iniciación y almacenamiento en caché de archivos a alta velocidad, así como lectura y escritura de archivos de gran tamaño.",
    
    img: "https://stylewatch.vtexassets.com/arquivos/ids/227558/Smartphone_Xiaomi_XIMZB0BX0EU_01.jpg?v=638176965729670000"
    }]

    export function getProductos() {
        return new Promise (resolve =>{
            setTimeout(() =>{
                resolve(products)
            }, 500)
        })
    }

    export function getProductosById(id){
        return new Promise (resolve =>{
            setTimeout(() =>{
                resolve(products.find(product=> Number(id) === product.id))
            }, 500)
    })
}

    export function getProductosByCategoria(categoria){
        return new Promise (resolve =>{
            setTimeout(() => {
                resolve(products.filter(product => categoria === product.category))
            }, 500)
        })
    }