import React, {Component} from 'react';

class BackBackground extends Component {
    extend = (out) =>{
        out = out || {};
        for (let i = 1; i < arguments.length; i++) {
            let obj = arguments[i];
            if (!obj) continue;
            for (let key in obj) {
                if (obj.hasOwnProperty(key)) {
                    if (typeof obj[key] === 'object')
                        deepExtend(out[key], obj[key]);
                    else
                        out[key] = obj[key];
                }
            }
        }
        return out;
    };
    Plugin = (element, options) =>{
        let canvasSupport = !!document.createElement('canvas').getContext,
            canvas,ctx,
            particles = [],
            raf,
            mouseX = 0,
            mouseY = 0,
            winW,winH,
            desktop = !navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i),
            orientationSupport = !!window.DeviceOrientationEvent,
            tiltX = 0,
            pointerX,pointerY,tiltY = 0,paused = false,imgs,
            imgArray = ["1.png","2.png","3.png", "4.png","5.png", "6.png","7.png","8.png","9.png", "10.png","11.png", "12.png","13.png","14.png","15.png", "16.png","17.png", "18.png","19.png","20.png","21.png", "22.png","23.png", "24.png","25.png","26.png","27.png", "28.png","29.png", "30.png","31.png"],
            numParticles;

        options = extend({}, window[pluginName].defaults, options);

        init = () =>{
            if (!canvasSupport) { return; }

            //Create canvas
            canvas = document.createElement('canvas');
            canvas.className = 'pg-canvas';
            canvas.style.display = 'block';
            element.insertBefore(canvas, element.firstChild);
            ctx = canvas.getContext('2d');
            styleCanvas();

            // Create particles
            let numParticles = Math.round((canvas.width * canvas.height) / options.density);
            for (let i = 0; i < numParticles; i++) {
                let p = new Particle();
                p.setStackPos(i);
                particles.push(p);
            }

            window.addEventListener('resize', () => {
                resizeHandler();
            }, false);

            document.addEventListener('mousemove', (e) => {
                mouseX = e.pageX;
                mouseY = e.pageY;
            }, false);

            if (orientationSupport && !desktop) {
                window.addEventListener('deviceorientation', () => {
                    // Contrain tilt range to [-30,30]
                    tiltY = Math.min(Math.max(-event.beta, -30), 30);
                    tiltX = Math.min(Math.max(-event.gamma, -30), 30);
                }, true);
            }
            draw();
            hook('onInit');
        };
        styleCanvas = () => {
            canvas.width = element.offsetWidth;
            canvas.height = element.offsetHeight;
            ctx.fillStyle = options.dotColor;
            ctx.strokeStyle = options.lineColor;
        };

        draw = () => {
            if (!canvasSupport) { return; }

            winW = window.innerWidth;
            winH = window.innerHeight;

            // Wipe canvas
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Update particle positions
            for (let i = 0; i < particles.length; i++) {
                particles[i].updatePosition();
            }
            // Draw particles
            for (let i = 0; i < particles.length; i++) {
                particles[i].draw(i);
            }

            // Call this function next time screen is redrawn
            if (!paused) {
                raf = requestAnimationFrame(draw);
            }
        };
        resizeHandler = () => {
            // Resize the canvas
            styleCanvas();

            let elWidth = element.offsetWidth;
            let elHeight = element.offsetHeight;

            // Remove particles that are outside the canvas
            for (let i = particles.length - 1; i >= 0; i--) {
                if (particles[i].position.x > elWidth || particles[i].position.y > elHeight) {
                    particles.splice(i, 1);
                }
            }

            // Adjust particle density
            numParticles = Math.round((canvas.width * canvas.height) / options.density);
            if (numParticles > particles.length) {
                while (numParticles > particles.length) {
                    let p = new Particle();
                    particles.push(p);
                }
            } else if (numParticles < particles.length) {
                particles.splice(numParticles);
            }

            // Re-index particles
            for (let i = particles.length - 1; i >= 0; i--) {
                particles[i].setStackPos(i);
            }
        };
        /**
         * Pause particle system
         */
        pause = () => {
            paused = true;
        };

        /**
         * Start particle system
         */
        start = () => {
            paused = false;
            draw();
        };

        Particle = () => {
            this.stackPos;
            this.active = true;
            this.layer = Math.ceil(Math.random() * 3);
            this.parallaxOffsetX = 0;
            this.parallaxOffsetY = 0;
            // Initial particle position
            this.position = {
                x: Math.ceil(Math.random() * canvas.width),
                y: Math.ceil(Math.random() * canvas.height)
            }
            // Random particle speed, within min and max values
            this.speed = {}
            switch (options.directionX) {
                case 'left':
                    this.speed.x = +(-options.maxSpeedX + (Math.random() * options.maxSpeedX) - options.minSpeedX).toFixed(2);
                    break;
                case 'right':
                    this.speed.x = +((Math.random() * options.maxSpeedX) + options.minSpeedX).toFixed(2);
                    break;
                default:
                    this.speed.x = +((-options.maxSpeedX / 2) + (Math.random() * options.maxSpeedX)).toFixed(2);
                    this.speed.x += this.speed.x > 0 ? options.minSpeedX : -options.minSpeedX;
                    break;
            }
            switch (options.directionY) {
                case 'up':
                    this.speed.y = +(-options.maxSpeedY + (Math.random() * options.maxSpeedY) - options.minSpeedY).toFixed(2);
                    break;
                case 'down':
                    this.speed.y = +((Math.random() * options.maxSpeedY) + options.minSpeedY).toFixed(2);
                    break;
                default:
                    this.speed.y = +((-options.maxSpeedY / 2) + (Math.random() * options.maxSpeedY)).toFixed(2);
                    this.speed.x += this.speed.y > 0 ? options.minSpeedY : -options.minSpeedY;
                    break;
            }
        };
    };
    render() {
        return (
            <div>

            </div>
        );
    }
}

export default BackBackground;