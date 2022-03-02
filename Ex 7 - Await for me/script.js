const body = document.querySelector('body');

do {
    var number = window.prompt('Digite um número de 1 a 10: ');
} while (number < 1 || number > 10);

async function runFetch() {
    for (let i = 1; i <= number; i++) {
        try {
            const request = await fetch(`https://dog.ceo/api/breeds/image/random`);
            const json = await request.json();
            const section1 = `<section class="section1" style="background-image: url('${json.message}')"></section>`;
            body.insertAdjacentHTML("beforeend", section1);
        } catch (error) {
            console.log('A requisição falhou!', error);
        }
        try {
            const request = await fetch(`https://api.thecatapi.com/v1/images/search`);
            const json = await request.json();
            const section2 = `<section class="section2" style="background-image: url('${json[0].url}')"></section>`;
            body.insertAdjacentHTML("beforeend", section2);
        } catch (error) {
            console.log('A requisição falhou!', error);
        }
    }
}

runFetch();