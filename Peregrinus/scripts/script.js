document.addEventListener("DOMContentLoaded", function() {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particles = [];

    function Particle(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 5 + 1;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
    }

    Particle.prototype.update = function() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.size > 0.2) this.size -= 0.1;
    }

    Particle.prototype.draw = function() {
        ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.8)';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
    }

    function createParticles(e) {
        const xPos = e.x;
        const yPos = e.y;

        for (let i = 0; i < 10; i++) {
            particles.push(new Particle(xPos, yPos));
        }
    }

    function animateParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        for (let i = 0; i < particles.length; i++) {
            particles[i].update();
            particles[i].draw();

            if (particles[i].size <= 0.2) {
                particles.splice(i, 1);
                i--;
            }
        }

        requestAnimationFrame(animateParticles);
    }

    canvas.addEventListener('mousemove', createParticles);
    animateParticles();
});
