function startAll() {
    const accel = new jacdac.microbitAccelerometer();
    let buttonA = new jacdac.microbitButton("buttonA", EventBusSource.MICROBIT_ID_BUTTON_A);
    let buttonB = new jacdac.microbitButton("buttonB", EventBusSource.MICROBIT_ID_BUTTON_B);
    accel.start();
    buttonA.start();
    buttonB.start();
}

startAll();