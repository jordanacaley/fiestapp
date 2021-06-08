const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });
require("../config/dbConnection");

const Service = require("../models/Service");

const services = [
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
    name: "Brincolines Divertiplay",
    description: "Creamos espacios divertidos y seguros, haciendo un entorno agradable para todos, teniendo en cuenta seguridad y diversión. Somos la opción más confiable y accesible para todo público, sin sacrificar calidad en el servicio. Precios válidos para Villahermosa y periferia (lapso de 7 am a 8 pm). Incluye flete, instalacion, limpieza y desinfección.",
    category: "Entertainment",
    images: ["https://www.divertiplay.tk/img/extremo5.jpg", "https://www.divertiplay.tk/img/acuatico2.jpg", "https://www.divertiplay.tk/img/basico3.jpg"],
    durationHrs: 8,
    price: 100,
    cityName: "Villahermosa",
    location: {
      coordinates: [-92.920479, 17.991221],
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