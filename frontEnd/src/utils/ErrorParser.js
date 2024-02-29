const errorParser = (statusCode) => {
  switch (statusCode) {
    case 404:
      // NOT_FOUND_PAGE_ERROR
      return 'Lo siento, la página que estás intentando acceder no existe. Por favor, verifica la URL e inténtalo de nuevo. Si crees que esto es un error, por favor contáctanos para que podamos solucionar el problema. Gracias por tu comprensión.';
    case 440:
      // MISSING_ARGUMENTS_TO_START_WIDGET
      return 'Lo siento, no se puede inicializar el proceso con tus datos en este momento. Por favor, asegúrate de completar todos los campos requeridos antes de enviar tu formulario.';
    case 441:
      // AUTHENTICATION_PROCESS_FAILING
      return 'Lo siento, no se puede inicializar el servicio de autenticación en este momento. Por favor, inténtalo de nuevo más tarde o ponte en contacto con nuestro equipo de soporte para obtener ayuda adicional.';
    case 446:
      // AUTHENTICATION_PROCESS_FAILING
      return 'Lo siento, no podemos procesar tu solicitud en este momento. Por favor, inténtalo de nuevo más tarde o ponte en contacto con nuestro equipo de soporte para obtener ayuda adicional.';
    default:
      // TODO: Add Error Logger Service - To follow up cases
      return 'Error inesperado';
  }
};

export { errorParser };
