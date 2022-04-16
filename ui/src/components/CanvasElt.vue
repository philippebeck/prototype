<template>
  <div class="canvas align-center">
    <canvas id="canvas"></canvas>

    <ul class="canvas-controls">
      <li>
        <label 
          for="canvas-line" 
          title="Choose Thickness">
          <i class="fas fa-paint-brush fa-lg"></i>
        </label>
        <input 
          id="canvas-line" 
          type="range" 
          name="canvas-line" 
          min="1" 
          max="10" 
          step="1" 
          value="2" 
          title="Choose Thickness">
      </li>
      <li>
        <label 
          for="canvas-color" 
          title="Choose Color">
          <i class="fas fa-palette fa-lg"></i>
        </label>
        <input 
          id="canvas-color" 
          type="color" 
          name="canvas-color" 
          title="Choose Color">
      </li>
      <li>
        <button 
          class="btn-green btn-lg" 
          type="button" 
          id="canvas-cleaner" 
          title="Erase Canvas">
          <i class="fas fa-eraser fa-lg"></i>
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "CanvasElt",

  data() {
    return {
    canvasElt: null,
    lineElt: null,
    colorElt: null,
    cleanerElt: null,
    context: null,
    startState: false,
    endState: false,
    mouseX: 0,
    mouseY: 0,
    touchX: 0,
    touchY: 0
    }
  },

  mounted() {
    this.canvasElt  = document.getElementById("canvas");
    this.lineElt    = document.getElementById("canvas-line");
    this.colorElt   = document.getElementById("canvas-color");
    this.cleanerElt = document.getElementById("canvas-cleaner");
    this.context    = this.canvasElt.getContext("2d");

    this.canvasElt.addEventListener("mousedown", this.startDrawing);
    this.canvasElt.addEventListener("mousemove", this.drawing);
    this.canvasElt.addEventListener("mouseup", this.endDrawing);
    this.canvasElt.addEventListener("mouseleave", this.endDrawing);
    this.canvasElt.addEventListener("touchstart", this.startDrawing);
    this.canvasElt.addEventListener("touchmove", this.drawing);
    this.canvasElt.addEventListener("touchend", this.endDrawing);
    this.canvasElt.addEventListener("touchleave", this.endDrawing);
    this.cleanerElt.addEventListener("click", this.cleanCanvas);
  },

  methods: {
    startDrawing(event) {
      this.startState = true;
      this.mouseX = event.offsetX;
      this.mouseY = event.offsetY;
    },

    drawing(event) {
      if (this.startState) {
        this.context.beginPath();

        this.context.lineWidth    = this.lineElt.value;
        this.context.strokeStyle  = this.colorElt.value;

        this.context.moveTo(this.mouseX, this.mouseY);
        this.context.lineTo(event.offsetX, event.offsetY);
        this.context.stroke();
        this.context.closePath();

        this.mouseX = event.offsetX;
        this.mouseY = event.offsetY;
      }
    },

    endDrawing() {
      this.startState = false;
    },

    cleanCanvas() {
      this.context.clearRect(0, 0, this.canvasElt.width, this.canvasElt.height);
    }
  }
}
</script>

<style lang="scss" scoped>
.canvas {
  --canvas-border: medium dashed var(--secondary);
  --canvas-border-radius: 20px;
  --canvas-cursor: crosshair;
  --canvas-hover-controls-opacity: 1;
  --canvas-hover-controls-transition: opacity 2s;
  --canvas-controls-margin: auto;
  --canvas-controls-border: thin solid var(--primary);
  --canvas-controls-border-radius: 10px;
  --canvas-controls-width: 300px;
  --canvas-controls-background-color: var(--primary-dark);
  --canvas-controls-opacity: 1;
  --canvas-controls-transition: opacity 1s;
  --canvas-controls-list-flex-direction: column;
  --canvas-controls-list-place-items: center;
  --canvas-controls-list-margin: 5px;
  --canvas-controls-label-padding: 5px;
  --canvas-controls-label-color: var(--white);
  
  & > canvas {
    border: var(--canvas-border);
    border-radius: var(--canvas-border-radius);
    cursor: var(--canvas-cursor);
  }

  &:hover > .canvas-controls,
  &:focus > .canvas-controls {
    opacity: var(--canvas-hover-controls-opacity);
    transition: var(--canvas-hover-controls-transition);
  }
}

@media (min-width: $breakpoint-xl) {
  .canvas {
    --canvas-controls-opacity: 0;
  }
}

.canvas-controls {
  margin: var(--canvas-controls-margin);
  border: var(--canvas-controls-border);
  border-radius: var(--canvas-controls-border-radius);
  width: var(--canvas-controls-width);
  background-color: var(--canvas-controls-background-color);
  opacity: var(--canvas-controls-opacity);
  transition: var(--canvas-controls-transition);

  & li {
    display: flex;
    flex-direction: var(--canvas-controls-list-flex-direction);
    place-items: var(--canvas-controls-list-place-items);
    margin: var(--canvas-controls-list-margin);
  }

  & label {
    padding: var(--canvas-controls-label-padding);
    color: var(--canvas-controls-label-color);
  }
}
</style>
