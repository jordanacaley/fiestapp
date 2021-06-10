const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });
require("../config/dbConnection");

const Service = require("../models/Service");

const services = [
  {
    name: "Palapa Lupita",
    description: "Salón de eventos con alberca, excelente ubicación dentro de la ciudad sin salir a carretera.",
    category: "Venue",
    images: ["https://images.unsplash.com/photo-1522085677678-e6acb0cb542b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80", "https://images.unsplash.com/photo-1523301343968-6a6ebf63c672?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80", "https://images.unsplash.com/photo-1562336990-3ec142559568?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=632&q=80"],
    durationHrs: 6,
    price: 200,
    cityName: "Villahermosa",
    location: {
      coordinates: [-92.946624, 17.980184],
    }
  },
  {
    name: "Lomas Salón de Eventos",
    description: "En LOMAS|Salón de Eventos contamos con todo lo necesario para hacer de su evento una experiencia inolvidable. Los principales servicios que ofrecemos son: Sillas, Mesas, Mantelería, Banquetes, Loza, Sonido Disco, Pantallas LED, Mobiliario Lounge, Mobiliario Infantil, Maestro de Ceremonia, Capacitacion para Vals",
    category: "Venue",
    images: ["https://scontent-bos3-1.xx.fbcdn.net/v/t1.6435-9/51861082_2813025602056045_3383031583123439616_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=174925&_nc_ohc=Vh5csZzsIrkAX_X-Zdz&_nc_ht=scontent-bos3-1.xx&oh=cd3611e783d674c8da2a7eaaeebf735f&oe=60E67C75", "https://scontent-bos3-1.xx.fbcdn.net/v/t1.6435-9/46785139_2663261773699096_8483391533016416256_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=174925&_nc_ohc=aTTcglNTBJgAX_WjtRk&_nc_ht=scontent-bos3-1.xx&oh=637f9b001b92e69c38714fb19000c398&oe=60E670B2", "https://scontent-bos3-1.xx.fbcdn.net/v/t1.18169-9/31390042_2252760698082541_5260316258983550925_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=174925&_nc_ohc=GDnbI6lqEfQAX-OpmSJ&_nc_ht=scontent-bos3-1.xx&oh=6bbb8b56a07969548deb95a5fb92cd5c&oe=60E72F6D"],
    durationHrs: 8,
    price: 999,
    cityName: "Villahermosa",
    location: {
      coordinates: [-92.932317, 17.973987],
    }
  },
  {
    name: "Jerry tacos y trompos",
    description: "ARMA LA TAQUIZA EN TU FIESTA! TE VA A GUSTAR! TROMPOS DE PASTOR, SIRLOIN Y MIXTOS. VAMOS A LAS MEJORES FIESTAS DE VILLAHERMOSA. Precio para 20 personas.",
    category: "Food & Beverage",
    images: ["https://images.unsplash.com/photo-1565299585323-38d6b0865b47?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=714&q=80", "https://images.unsplash.com/photo-1546853846-53490ede35b4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80", "https://images.unsplash.com/photo-1572932759899-5ad91d0f9dbb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80"],
    durationHrs: 2,
    price: 100,
    cityName: "Cunduacan",
    location: {
      coordinates: [-92.952532, 17.963175],
    }
  },
  {
    name: "Dulzura",
    description: "Repostería y Pastelería Tradicional Tabasqueña",
    category: "Food & Beverage",
    images: ["https://scontent-bos3-1.xx.fbcdn.net/v/t1.6435-9/107663060_3421076741260511_5673932717079025367_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=6uRFYt9HukMAX-chXeD&_nc_ht=scontent-bos3-1.xx&oh=de5be760338aff68730dc50a024798ac&oe=60E86FC1", "https://scontent-bos3-1.xx.fbcdn.net/v/t1.6435-9/83311564_3005535236147999_5310741209126273024_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=730e14&_nc_ohc=9vhsYV_HBE4AX9eOrF2&_nc_ht=scontent-bos3-1.xx&oh=4465b61650cd9dee318b96dc644944a2&oe=60E7242D", "https://scontent-bos3-1.xx.fbcdn.net/v/t1.6435-9/80279700_2919554704746053_8913859217283088384_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=730e14&_nc_ohc=v0RTcOucb-UAX8Irr5L&_nc_ht=scontent-bos3-1.xx&oh=e82985a899202de327b226364bae0558&oe=60E80324"],
    durationHrs: 1,
    price: 35,
    cityName: "Villahermosa",
    location: {
      coordinates: [-92.918273, 17.992436],
    }
  },
  {
    name: "Mariachis Estrella",
    description: "Contrata a tus amigos de Mariachi Estrella y disfruta de la mejor interpretación de la música mexicana de ayer, hoy y siempre con el acompañamiento de uno de los mejores mariachis en Villahermosa, Tabasco. Contamos ya con 22 años de experiencia, consolidados entre los mejores grupos de mariachis en la región gracias tanto a nuestro talento como a la seriedad y puntualidad con que atendemos a tu llamado para amenizar sus fiestas y ocasiones especiales con un amplio repertorio de éxitos para todos los gustos y peticiones.",
    category: "Music",
    images: ["https://images.pexels.com/photos/7772388/pexels-photo-7772388.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", "https://images.pexels.com/photos/7772389/pexels-photo-7772389.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", "https://images.pexels.com/photos/7772347/pexels-photo-7772347.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"],
    durationHrs: 2,
    price: 299,
    cityName: "Villahermosa",
    location: {
      coordinates: [-92.957166, 17.971993],
    }
  },
  {
    name: "Grupo Alcatraz",
    description: "En Grupo Alcatraz somos un grupo musical especialista en amenizar fiestas, eventos y posadas navideñas, conformado por músicos 100% profesionales, brindamos en cada momento de su evento un toque especial y diferente, manejando cada estilo musical con gran profesionalismo. Cada uno de nuestros músicos tiene la trayectoria artística que avala la calidad que ofrecemos y usted se merece. Garantizamos la satisfacción total de su evento cubriendo todas sus necesidades y gustos que requiera para que sea un acontecimiento inolvidable. Cubrimos eventos de diversa índole, temática y tamaño, ya sea familiares, sociales o corporativos, tenemos un amplio catálogo y repertorio a escoger que nos permite amenizar el evento a su mayor gusto y satisfacción.",
    category: "Music",
    images: ["https://images.unsplash.com/photo-1512404871764-1cf03a297841?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80", "https://images.pexels.com/photos/1309240/pexels-photo-1309240.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", "https://images.pexels.com/photos/435840/pexels-photo-435840.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"],
    durationHrs: 3,
    price: 250,
    cityName: "Villahermosa",
    location: {
      coordinates: [-93.005867, 17.967041],
    }
  },
  {
    name: "Clown",
    description: "Seriously funny entertainment for the whole family!",
    category: "Entertainment",
    images: ["https://images.unsplash.com/photo-1518731795907-78624954cdb3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1011&q=80", "https://images.unsplash.com/photo-1587331722574-acf78f587c4e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80", "https://images.unsplash.com/photo-1537627856721-321efceec2a2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"],
    durationHrs: 1,
    price: 60,
    cityName: "Villahermosa",
    location: {
      coordinates: [-92.925110, 17.976122],      
  }
  },
  {
    name: "Brincolines Divertiplay",
    description: "Creamos espacios divertidos y seguros, haciendo un entorno agradable para todos, teniendo en cuenta seguridad y diversión. Somos la opción más confiable y accesible para todo público, sin sacrificar calidad en el servicio. Precios válidos para Villahermosa y periferia (lapso de 7 am a 8 pm). Incluye flete, instalacion, limpieza y desinfección.",
    category: "Entertainment",
    images: ["https://www.divertiplay.tk/img/extremo5.jpg", "https://www.divertiplay.tk/img/acuatico2.jpg", "https://www.divertiplay.tk/img/basico3.jpg"],
    durationHrs: 8,
    price: 120,
    cityName: "Villahermosa",
    location: {
      coordinates: [-92.920479, 17.991221],
    }
  },
  {
    name: "Piñatas candi candi",
    description: "Tienda De Artículos Para Fiestas en Villahermosa",
    category: "Decorations & Favors",
    images: ["https://images.unsplash.com/photo-1596399761617-1a007364e98b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80", "https://images.unsplash.com/photo-1607798422366-99aebc4b3699?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80", "https://images.unsplash.com/photo-1607798421660-7d2c0bcff934?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"],
    durationHrs: 1,
    price: 40,
    cityName: "Villahermosa",
    location: {
      coordinates: [-92.913456, 18.000493],
    }
  },
  {
    name: "Globos Villahermosa",
    description: "GLOBOS VILLAHERMOSA ES UNA EMPRESA DE DISTRIBUCION DE GLOBOS EN LA REGION SURESTE",
    category: "Decorations & Favors",
    images: ["https://images.unsplash.com/photo-1611142288262-3bb8f5fc45d7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=988&q=80", "https://images.unsplash.com/photo-1611142287927-64cede3148da?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80", "https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"],
    durationHrs: 1,
    price: 45,
    cityName: "Villahermosa",
    location: {
      coordinates: [-92.914287, 17.994363],
    }
  },
  {
    name: "Arrendadora Tabasco",
    description: "MESAS TABLON, REDONDAS, IMPERIALES, DE ESPEJO, SILLAS TIFFANY, PHOENIX, CROSSBACK, GHOST, PLEGABLES, LOZA, MANTELERIA, EQUIPO LOUNGE (SALAS Y PERIQUERAS), INFLABLES, TOLDOS, BANQUETES, Y MAS.",
    category: "Furniture",
    images: ["https://images.unsplash.com/photo-1599653221053-8633633ee005?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80", "https://images.unsplash.com/photo-1429087969512-1e85aab2683d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80", "https://images.unsplash.com/photo-1612572860155-f0b661036344?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80"],
    durationHrs: 8,
    price: 199,
    cityName: "Villahermosa",
    location: {
      coordinates: [-92.919646, 17.965513],
    }
  },
  {
    name: "Eventos Chenkay",
    description: "Eventos chenkay les ofrece renta de tablones, mesas redondas, sillas, manteles, además deposito coca cola y cervezas y refrescos para sus eventos.",
    category: "Furniture",
    images: ["https://images.unsplash.com/photo-1520869309377-88c9274a27c2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80", "https://images.unsplash.com/photo-1561539562-70b51b3413cb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80", "https://images.unsplash.com/photo-1596414403549-fdfbc37f7146?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80"],
    durationHrs: 12,
    price: 159,
    cityName: "Villahermosa",
    location: {
      coordinates: [-92.898806, 18.018896],
    }
  },
];

async function seedServices() {
  try {
    await Service.collection
      .drop()
      .catch((error) => console.log("No collection to drop, proceeding..."));

    const createdServices = await Service.create(services);
    console.log(createdServices);
    process.exit();
  } catch (error) {
    console.log(error);
    process.exit();
  }
}

seedServices();