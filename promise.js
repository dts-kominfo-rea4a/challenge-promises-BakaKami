const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emosi) => {
  try {
    let count = 0;

    const theaterIXXResult = await promiseTheaterIXX();
    const theaterVGCResult = await promiseTheaterVGC();

    theaterIXXResult.forEach((element) => {
      if (element.hasil === emosi) {
        count++;
      }
    });

    theaterVGCResult.forEach((element) => {
      if (element.hasil === emosi) {
        count++;
      }
    });

    return count;
  } catch (error) {
    console.log("Terjadi kesalahan");
  }
};

module.exports = {
  promiseOutput,
};
