import swaggerJSDoc from "swagger-jsdoc";

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "My API",
      version: "1.0.0",
      description:
        "Dokumentasi Backend API untuk project UAS mata kuliah pemprogramam berbasis platform",
    },
    servers: [
      {
        url: "http://localhost:3000",
        description: "Local server",
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
  },

  apis: ["./swagger.json"],
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);

export default swaggerSpec;
