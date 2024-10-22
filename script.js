function createSnowflakes() {
    const container = document.getElementById('snowflakes-container');
    const snowflakeCount = 100; // Increase the number of snowflakes

    for (let i = 0; i < snowflakeCount; i++) {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        snowflake.style.left = `${Math.random() * 100}%`;
        snowflake.style.animationDuration = `${Math.random() * 10 + 5}s`; // Vary the speed more
        snowflake.style.animationDelay = `${Math.random() * 5}s`;
        snowflake.style.opacity = Math.random() * 0.7 + 0.3; // Increase opacity range
        snowflake.style.width = `${Math.random() * 8 + 2}px`; // Vary size more
        snowflake.style.height = snowflake.style.width;
        container.appendChild(snowflake);
    }
}

document.addEventListener('DOMContentLoaded', createSnowflakes);
