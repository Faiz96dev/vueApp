class Timer {
    constructor(root) {
      root.innerHTML = Timer.getHTML();
  
      this.el = {
        minutes: root.querySelector(".timer__part--minutes"),
        seconds: root.querySelector(".timer__part--seconds"),
        control: root.querySelector(".timer__btn--control"),
        stop: root.querySelector(".stop-timer")
      };
  
      this.interval = null;
      this.remainingSeconds = 0;
  
      this.el.stop.addEventListener("click", () => {
        console.log('stop')
        document.getElementById('minInput').value = null
        this.stop();
        this.updateInterfaceTime()
      });

      this.el.control.addEventListener("click", () => {
        console.log('document.getElementById("minInput").value', parseInt(document.getElementById("minInput").value))
        if (this.interval === null && parseInt(document.getElementById("minInput").value) > 0) {
          this.start();
        } else {
          this.stop();
        }
      });

    }
  
    updateInterfaceTime() {
      const minutes = Math.floor(this.remainingSeconds / 60);
      const seconds = this.remainingSeconds % 60;
  
      this.el.minutes.textContent = minutes.toString().padStart(2, "0");
      this.el.seconds.textContent = seconds.toString().padStart(2, "0");
    }
  
    updateInterfaceControls() {
      if (this.interval === null) {
        this.el.control.innerHTML = `<span class="material-icons">play_arrow</span>`;
        this.el.control.classList.add("timer__btn--start");
        this.el.control.classList.remove("timer__btn--stop");
      } else {
        this.el.control.innerHTML = `<span class="material-icons">pause</span>`;
        this.el.control.classList.add("timer__btn--stop");
        this.el.control.classList.remove("timer__btn--start");
      }
    }
    disableItems(){
        document.getElementById("minInput").disabled = true
        document.getElementById("stopBtn").disabled = false
    }
    enableItems(){
        document.getElementById("minInput").disabled = false
        document.getElementById("stopBtn").disabled = true
    }
    start() {
        this.disableItems()
        console.log('start')
        this.remainingSeconds = document.getElementById("minInput").value * 60;
      if (this.remainingSeconds === 0) return;
  
      this.interval = setInterval(() => {
        this.remainingSeconds--;
        this.updateInterfaceTime();
  
        if (this.remainingSeconds === 0) {
          this.stop();
        }
      }, 1000);
  
      this.updateInterfaceControls();
    }
  
    stop() {
        document.getElementById('minInput').value = null
    this.enableItems()
    this.remainingSeconds = null
    clearInterval(this.interval);
    this.interval = null;
    this.updateInterfaceControls();
    }
  
    static getHTML() {
      return `
            <div style="display:flex; justify-content: center; height: 500px; align-items: center">
          
              <span class="timer__part timer__part--minutes">00</span>
              <span class="timer__part">:</span>
              <span class="timer__part timer__part--seconds">00</span>
              <button   type="button" class="timer__btn timer__btn--control timer__btn--start">
                  <span class="material-icons">play_arrow</span>
              </button>
            
              <button id="stopBtn" type="button" class="timer__btn stop-timer">
                  <span class="material-icons">stop</span>
              </button>
              <input placeholder="minutes"  id="minInput" class="timer-input" type="number">

            </div>
          `;
    }
  }
  
  new Timer(
      document.querySelector(".timer")
  );