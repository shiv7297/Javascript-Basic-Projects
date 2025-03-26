const form = document.querySelector('form');

// we will not extract the values here ,we will extract after submission
//kyunki agar yhan krenge to script run hote hi extract hoengi adn empty value read hogi

/* form jab bhi submit hota hai get ya post form me submit hota hia to iski vlaues url me ya server ke pass chli jati hain aur hme ise rokna hia to iske liye hme event ke upr hi ek method milta hai */ //e.preventDefault()   <---   this

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please Enter a Valid Value for Height, ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please Enter a Valid Value for Weight, ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    //show the result
    results.innerHTML = `<span>${bmi}</span>`;
  }
});
