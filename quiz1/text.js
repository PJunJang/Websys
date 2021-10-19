DATA_FILE = 'conversion.json'

    const fill_element = (selector,fieldname) => {
        $.ajax({
            type : 'GET',
            dataType : 'json',
            url: DATA_FILE,
            success : function(data) {
                $(selector).html(data[fieldname])
            } 
        })
    }

    function myFunction() {
        var x = document.getElementById("etou");
        if (x.innerHTML === "Place holder USD") {
          x.innerHTML = "Swapped text!";
        } else {
          x.innerHTML = "Hello";
        }
      }

    const host = 'api.frankfurter.app';
        fetch(`https://${host}/latest?amount=1&from=EUR&to=USD`)
        .then(resp => resp.json())
        .then((data) => {
            alert(`1 EURO = ${data.rates.USD} USD`);
    })
    // const host = 'api.frankfurter.app';
    //     fetch(`https://${host}/latest?amount=1&from=EUR&to=AUD`)
    //     .then(resp => resp.json())
    //     .then((data) => {
    //         alert(`1 EURO = ${data.rates.AUD} AUD`);
    // })
    // const host = 'api.frankfurter.app';
    //     fetch(`https://${host}/latest?amount=1&from=EUR&to=KRW`)
    //     .then(resp => resp.json())
    //     .then((data) => {
    //         alert(`1 EURO = ${data.rates.KRW} KRW`);
    // })
    // const host = 'api.frankfurter.app';
    //     fetch(`https://${host}/latest?amount=1&from=EUR&to=HKD`)
    //     .then(resp => resp.json())
    //     .then((data) => {
    //         alert(`1 EURO = ${data.rates.HKD} HKD`);
    // })
    // const host = 'api.frankfurter.app';
    //     fetch(`https://${host}/latest?amount=1&from=EUR&to=CAD`)
    //     .then(resp => resp.json())
    //     .then((data) => {
    //         alert(`1 EURO = ${data.rates.CAD} CAD`);
    // })



$(document).ready(
    // example. filling up center red box
    fill_element('#usd',"data.rates.USD")
)
