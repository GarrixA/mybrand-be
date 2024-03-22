export default {
    openapi: "3.0.3",
    info: {
      title: "My brand server side",
      description: "My brand digitalized", 
      version: "1.0.0", 
      contact: {
        name: "Aphrodis Uwineza", 
        email: "aphrodisu2019@gmail.com",
        url: "aphrodismedia.netlify.app", 
      },
    },
    components: {
      securitySchemes: {
        Auth: {
          type: "apiKey",
          authFormat: "JWT",
          name: "Authorization",
          in: "header",
        },
      },
    },
  };