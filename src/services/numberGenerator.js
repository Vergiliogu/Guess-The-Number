/**
 * Função usada para realizar a comunicação com a API geradora de números.
 * A ideia é retornar sempre um objeto como resultado, tenha sido ele positivo,
 * negativo ou um erro.
*/

export const getNewRandomNumber = async (min = 1, max = 300) => {
  try {
    const response = await fetch(`${process.env.API_URL}?min=${min}&max=${max}`)
    return {
      success: response.ok,
      statusCode: response.status,
      response: await response.json()
    }
  } catch (error) {
    console.log("Erro:", error)
    return {
      success: false,
      statusCode: 500,
      response: error
    }
  }
}