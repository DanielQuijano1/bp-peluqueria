const servicios = [
    {
        id: 1,
        img: "./src/assets/pexels-daniel-kondrashin-14615063.jpg",
        nombre: "alisado",
        detalle: "alisado de pelo",
        categoria: "peluqueria"
    },
    {
        id: 2,
        img: "./src/assets/pexels-maria-geller-2799605.jpg",
        nombre: "color",
        detalle: "color de pelo",
        categoria: "peluqueria"
    },
    {
        id: 3,
        img: "./src/assets/pexels-engin-akyurt-3356170.jpg",
        nombre: "corte",
        detalle: "cortes de pelo",
        categoria: "peluqueria"
    },
    {
        id: 4,
        img: "./src/assets/pexels-engin-akyurt-3331486.jpg",
        nombre: "Extensiones y cortinas",
        detalle: "extensiones y cortinas de pelo",
        categoria: "peluqueria"
    },
    {
        id: 5,
        img: "./src/assets/pexels-rdne-stock-project-7755473.jpg",
        nombre: "lavado y tratamientos",
        detalle: "lavado y tratamientos capilares",
        categoria: "peluqueria"
    },
    {
        id: 6,
        img: "./src/assets/pexels-engin-akyurt-3065171.jpg",
        nombre: "peinado",
        detalle: "peinados personalizados",
        categoria: "peluqueria"
    },
    {
        id: 7,
        img: "./src/assets/pexels-engin-akyurt-1435443.jpg",
        nombre: "pestañas",
        detalle: "pestañas esculpidas",
        categoria: "peluqueria"
    }
]


const obtenerServicios = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(servicios);
        }, 1000)
    })
}

const obtenerServicio = (idServicio) => {
    return new Promise((resolve, reject) => {
        let itemRequerido = servicios.find((item) => { return (item.id === Number(idServicio)) })
        setTimeout(() => {
            if (itemRequerido) resolve(itemRequerido)
            else reject("No se encontró item buscado")
        }, 200)
    })
}

const obtenerServicioPorCategoria = ( categoriaURL) => {
    return new Promise((resolve, reject) => {
        let servicioRequerido = servicios.filter(servicio => servicio.categoria === categoriaURL);
        console.log(categoriaURL)
        setTimeout(() => {
            if (servicioRequerido) resolve(servicioRequerido);
            else  reject("No se encontró el producto buscado")
        }, 1000);
    });
}



export { obtenerServicio, obtenerServicios, obtenerServicioPorCategoria  }