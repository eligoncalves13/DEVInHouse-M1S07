const range = document.querySelector('#range'),
    progressbar = document.querySelector('.progress-bar'),
    span = document.querySelector('span')

let progress = 0;

range.addEventListener('input', function() {
    const value = range.value;
    progressbar.style.setProperty('--progress', value);
})

let interval = setInterval(() => {
    range.disabled = true;
    progress++;
    progressbar.style.setProperty('--progress', progress);

    percentageProgress(progress);
    stopProgress(progress);

}, 100)

function stopProgress(progress) {
    if (progress === 100) {
        interval = window.clearInterval(interval);
        window.alert('Concluída');
    }
}

function percentageProgress(progress) {
    let percentage = progress + '%';
    span.innerHTML = percentage;
}