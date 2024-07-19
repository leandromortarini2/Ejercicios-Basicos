export async function getServiseDDBB() {
  try {
    const result = await AppDataSource.getRepository(User).find();

    return result;
  } catch (error) {
    console.log(error, "error al traer todos los usuarios");
  }
}
