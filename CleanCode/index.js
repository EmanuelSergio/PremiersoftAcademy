function calcPrice(user) {
  const date = new Date();
  let price;

  if (isPremium(user.type)) {
    price = 100;
    if (isSunday(date.getDay())) {
      // domingo
      price = price * 0.8; // desconto de 20%
    }
  } else {
    price = 150;
    if (isSunday(date.getDay())) {
      // domingo
      price = price * 0.9; // desconto de 10%
    }
  }
  return price;
}

function isPremium(userType) {
  if (userType === "premium") {
    return true;
  }
}

function isSunday(dayOfWeek) {
  if (dayOfWeek === 0) {
    return true;
  }
}
