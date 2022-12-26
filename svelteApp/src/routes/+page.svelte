
<div class="mt-20 h-full w-full flex justify-center align-center text-center items-center flex-col">
    <button class="bg-blue-500 w-fit hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" on:click={()=>{counter < 10 ?  counter = counter + 1 : counter = 0}} >Counter {counter}</button>
<div class="mt-20 w-1/4">
    <div class="flex w-full justify-around">
        <button class="bg-blue-500 w-fit hover:bg-blue-700 text-white font-bold py-2 px-4 rounded {startDisabled ? 'opacity-50' : ''}" disabled={startDisabled} on:click={start} >Play</button>
        <button class="bg-blue-500 w-fit hover:bg-blue-700 text-white font-bold py-2 px-4 rounded {stopDisabled ? 'opacity-50' : ''}" disabled={stopDisabled} on:click={stop} >Stop</button>
        <input class="p-[5px] rounded-[5px] border-gray-300 border outline-none {inputDisabled ? 'opacity-50' : ''}"   bind:value={inputMinutes} type="number" disabled={inputDisabled} placeholder="minutes" />
    </div>

    <span class="mt-10">{Math.floor(remainingSeconds / 60)} : {remainingSeconds % 60}</span>
    <div class="mt-[20px]">
      For Svelte and Vue pass data without props looks like i need use stuff like EventBus
    </div>
</div>
</div>
<script>
    import "../app.css";
    let counter = 0;
    let remainingSeconds = null
    let inputMinutes = null
    let counterStop = false
    let startDisabled = false
    let stopDisabled = false
    let inputDisabled = false

    function stop() {
      if (inputMinutes === null || inputMinutes === 0) return;
      inputDisabled = false;
      startDisabled = false;
      stopDisabled = true;
      counterStop = true;
      inputMinutes = null;
      remainingSeconds = null;
    }
    function start() {
      if (inputMinutes === null || inputMinutes === 0) return;
      startDisabled = true;
      stopDisabled = false;
      counterStop = false;
      inputDisabled = true;
      let intetval = null 
      remainingSeconds = inputMinutes * 60;
      if (remainingSeconds === 0) return;
      intetval = setInterval(() => {
        remainingSeconds--;
        if (counterStop || remainingSeconds === 0 ){
          stop()
          clearInterval(intetval);
          intetval = null;
          remainingSeconds = null;
        }
      }, 1000);

    }
</script>
