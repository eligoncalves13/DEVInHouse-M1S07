const body = document.querySelector('body');

do {
    var number = window.prompt('Digite um número de 1 a 10: ');
} while (number < 1 || number > 10);

async function runFetch() {
    for (let i = 1; i <= number; i++) {
        try {
            const request = await fetch(`https://dog.ceo/api/breeds/image/random`);
            const json = await request.json();
            const result1 = json.message;
            const section1 = `<section class="section1" style="background-image: url('${result1}')"></section>`;
            body.insertAdjacentHTML("beforeend", section1);
        } catch (error) {
            console.log('A requisição falhou!', error);
        }
        try {
            const request = await fetch(`https://api.thecatapi.com/v1/images/search`);
            const json = await request.json();
            const result2 = json[0].url;
            const section2 = `<section class="section2" style="background-image: url('${result2}')"></section>`;
            body.insertAdjacentHTML("beforeend", section2);
        } catch (error) {
            console.log('A requisição falhou!', error);
        }
    }
}

runFetch();