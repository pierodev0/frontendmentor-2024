const dateNow = new Date();
const calcDate =  new Date();
const years = 0;



function setDateDiff(day,month,year)
{
    const yearCalc = calcDate.setFullYear(calcDate.getFullYear() - year);
    const monthCalc = calcDate.setMonth(calcDate.getMonth() - month)
    const dayCalc = calcDate.setDate(calcDate.getDay() - day)
}

function calculateAge(birthDate, currentDate) {
  let differenceMilli = currentDate.getTime() - birthDate.getTime();

  let ageYears = Math.floor(differenceMilli / (1000 * 60 * 60 * 24 * 365.25));
  let ageMonths = Math.floor((differenceMilli % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24 * 30.44));
  let ageDays = Math.floor(((differenceMilli % (1000 * 60 * 60 * 24 * 365.25)) % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24));

  return { ageYears, ageMonths, ageDays };
}


console.log(new Date("2000-02-21").toISOString())