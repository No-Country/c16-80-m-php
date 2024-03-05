// Define los tipos de error
export enum ErrorCode {
  NOT_FOUND_PAGE_ERROR = 404,
  MISSING_ARGUMENTS_TO_START_WIDGET = 440,
  AUTHENTICATION_PROCESS_FAILING = 441,
  UNEXPECTED_ERROR = 446,
}

// Define el tipo de función `errorParser`
export type ErrorParser = (statusCode: ErrorCode) => string;

// Exporta la función `errorParser`
export const errorParser: ErrorParser = (statusCode) => {
  switch (statusCode) {
    case ErrorCode.NOT_FOUND_PAGE_ERROR:
      // NOT_FOUND_PAGE_ERROR
      return 'Lo siento, la página que estás intentando acceder no existe. Por favor, verifica la URL e inténtalo de nuevo. Si crees que esto es un error, por favor contáctanos para que podamos solucionar el problema. Gracias por tu comprensión.';
    case ErrorCode.MISSING_ARGUMENTS_TO_START_WIDGET:
      // MISSING_ARGUMENTS_TO_START_WIDGET
      return 'Lo siento, no se puede inicializar el proceso con tus datos en este momento. Por favor, asegúrate de completar todos los campos requeridos antes de enviar tu formulario.';
    case ErrorCode.AUTHENTICATION_PROCESS_FAILING:
      // AUTHENTICATION_PROCESS_FAILING
      return 'Lo siento, no se puede inicializar el servicio de autenticación en este momento. Por favor, inténtalo de nuevo más tarde o ponte en contacto con nuestro equipo de soporte para obtener ayuda adicional.';
    case ErrorCode.UNEXPECTED_ERROR:
      // AUTHENTICATION_PROCESS_FAILING
      return 'Lo siento, no podemos procesar tu solicitud en este momento. Por favor, inténtalo de nuevo más tarde o ponte en contacto con nuestro equipo de soporte para obtener ayuda adicional.';
    default:
      // TODO: Add Error Logger Service - To follow up cases
      return 'Error inesperado';
  }
};
