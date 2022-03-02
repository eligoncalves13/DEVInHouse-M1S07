const range = document.querySelector('#range'),
    progressBar = document.querySelector('.progress-bar'),
    span = document.querySelector('span');

let progress = 0;

range.addEventListener('input', () => {
    const value = range.value;
    progressBar.style.setProperty('--progress', value);
})

let interval = setInterval(() => {
    range.disabled = true;
    progress++;
    progressBar.style.setProperty('--progress', progress);

    percentageProgress(progress);
    stopProgress(progress);
}, 100)

const stopProgress = (progress) => {
    if (progress === 100) {
        interval = window.clearInterval(interval);
        window.alert('Concluído!');
    }
}

const percentageProgress = (progress) => {
    let percentage = progress + '%';
    span.innerHTML = percentage;
}